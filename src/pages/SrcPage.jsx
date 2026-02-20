

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import AppLayout from "../layouts/AppLayout";
// import axios from "../utils/axios";
// import SrcTable from "../components/srcpage/SrcTable";
// import DASection from "../components/srcpage/DASection";

// export default function SrcPage() {
//   const { userId } = useParams();

//   const [user, setUser] = useState(null);
//   const [srcList, setSrcList] = useState([]);
//   const [srcConfig, setSrcConfig] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [editingRs, setEditingRs] = useState(false);
//   const [rsValue, setRsValue] = useState(0);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const [userRes, srcRes, configRes] = await Promise.all([
//         axios.get(`/users/${userId}`),
//         axios.get(`/src/user/${userId}`),
//         axios.get(`/src-config/${userId}`),
//       ]);

//       setUser(userRes.data);
//       setSrcList(srcRes.data || []);
//       setSrcConfig(configRes.data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (userId) fetchData();
//   }, [userId]);

//   useEffect(() => {
//     if (srcConfig) setRsValue(srcConfig.RsPerKm);
//   }, [srcConfig]);

//   const saveRsPerKm = async () => {
//     await axios.patch(`/src-config/rsperkM/${userId}`, {
//       RsPerKm: Number(rsValue),
//     });
//     setEditingRs(false);
//     fetchData();
//   };

//   if (loading || !srcConfig) {
//     return (
//       <AppLayout title="SRC">
//         <p className="p-6">Loading…</p>
//       </AppLayout>
//     );
//   }

//   return (
//     <AppLayout title="Edit SRC" backTo="/admin">
//       <div className="space-y-8">

//         {/* USER DETAILS */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="font-semibold text-lg mb-4">User Details</h2>
//           <div className="grid grid-cols-3 gap-4">
//             <input value={user.userId} disabled className="input" />
//             <input value={user.username} disabled className="input" />
//             <input value="********" disabled className="input" />
//           </div>
//         </div>

//         {/* RS PER KM */}
//         <div className="bg-white p-6 rounded-xl shadow max-w-md">
//           <h2 className="font-semibold text-lg mb-2">Rs per Km</h2>

//           <input
//             type="number"
//             value={rsValue}
//             disabled={!editingRs}
//             onChange={(e) => setRsValue(e.target.value)}
//             className="input mt-2"
//           />

//           <div className="mt-3">
//             {editingRs ? (
//               <button onClick={saveRsPerKm} className="btn-blue">
//                 Save
//               </button>
//             ) : (
//               <button onClick={() => setEditingRs(true)} className="btn-gray">
//                 Edit
//               </button>
//             )}
//           </div>

//           <p className="text-xs text-gray-400 mt-2">
//             Applies to EX & OS only. HQ always ₹0.
//           </p>
//         </div>

//         {/* DA SECTION */}
//         <DASection userId={userId} srcConfig={srcConfig} onUpdate={fetchData} />

//         {/* SRC TABLE */}
//         <SrcTable srcList={srcList} srcConfig={srcConfig} />

//       </div>
//     </AppLayout>
//   );
// }



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import axios from "../utils/axios";
import SrcTable from "../components/srcpage/SrcTable";
import DASection from "../components/srcpage/DASection";

export default function SrcPage() {
  const { userId } = useParams();

  const [user, setUser] = useState(null);
  const [srcList, setSrcList] = useState([]);
  const [srcConfig, setSrcConfig] = useState(null);
  const [loading, setLoading] = useState(true);

  /* Rs/Km */
  const [editingRs, setEditingRs] = useState(false);
  const [rsValue, setRsValue] = useState(0);

  /* Username reset */
  const [editingUsername, setEditingUsername] = useState(false);
  const [usernameValue, setUsernameValue] = useState("");

  /* Password reset */
  const [editingPassword, setEditingPassword] = useState(false);
  //const [oldPassword, setOldPassword] = useState("");
  //const [newPassword, setNewPassword] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  

  const fetchData = async () => {
    try {
      setLoading(true);
      const [userRes, srcRes, configRes] = await Promise.all([
        axios.get(`/users/${userId}`),
        axios.get(`/src/user/${userId}`),
        axios.get(`/src-config/${userId}`),
      ]);

      setUser(userRes.data);
      setUsernameValue(userRes.data.username);
      setPasswordValue(userRes.data.password || "");
      setSrcList(srcRes.data || []);
      setSrcConfig(configRes.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  

  useEffect(() => {
    if (userId) fetchData();
  }, [userId]);

  useEffect(() => {
    if (srcConfig) setRsValue(srcConfig.RsPerKm);
  }, [srcConfig]);

  /* =====================
     SAVE USERNAME
  ===================== */
  const saveUsername = async () => {
    await axios.patch(`/users/${userId}/reset-username`, {
      username: usernameValue,
    });
    setEditingUsername(false);
    fetchData();
  };

  /* =====================
     RESET PASSWORD
  ===================== */
 const resetPassword = async () => {
  await axios.patch(`/users/${userId}/reset-password`, {
    newPassword: passwordValue,
  });

  setEditingPassword(false);
  fetchData();
};

  /* =====================
     SAVE RS / KM
  ===================== */
  const saveRsPerKm = async () => {
    await axios.patch(`/src-config/rsperkM/${userId}`, {
      RsPerKm: Number(rsValue),
    });
    setEditingRs(false);
    fetchData();
  };

  if (loading || !srcConfig || !user) {
    return (
      <AppLayout title="SRC">
        <p className="p-6">Loading…</p>
      </AppLayout>
    );
  }

  return (
    <AppLayout title="Edit SRC" backTo="/admin">
      <div className="space-y-8">

        {/* ================= USER DETAILS ================= */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold text-lg mb-4">User Details</h2>

          <div className="grid grid-cols-3 gap-6">

            {/* USER ID */}
            <div>
              <label className="text-xs text-gray-500">User ID</label>
              <input value={user.userId} disabled className="input mt-1" />
            </div>

            {/* USERNAME */}
            <div>
              <label className="text-xs text-gray-500">Username</label>
              <input
                value={usernameValue}
                disabled={!editingUsername}
                onChange={(e) => setUsernameValue(e.target.value)}
                className="input mt-1"
              />
              <div className="mt-2">
                {editingUsername ? (
                  <button onClick={saveUsername} className="btn-blue">
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => setEditingUsername(true)}
                    className="btn-gray"
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>

           {/* PASSWORD */}
<div>
  <label className="text-xs text-gray-500">Password</label>
  <input
    value={passwordValue}
    disabled={!editingPassword}
    onChange={(e) => setPasswordValue(e.target.value)}
    className="input mt-1"
  />

  <div className="mt-2">
    {editingPassword ? (
      <button onClick={resetPassword} className="btn-blue">
        Save
      </button>
    ) : (
      <button
        onClick={() => setEditingPassword(true)}
        className="btn-gray"
      >
        Edit
      </button>
    )}
  </div>
</div>
          </div>

          
            
        </div>

        {/* ============tf===== RS PER KM ================= */}
        <div className="bg-white p-6 rounded-xl shadow max-w-md">
          <h2 className="font-semibold text-lg mb-2">Rs per Km</h2>

          <input
            type="number"
            value={rsValue}
            disabled={!editingRs}
            onChange={(e) => setRsValue(e.target.value)}
            className="input mt-2"
          />

          <div className="mt-3">
            {editingRs ? (
              <button onClick={saveRsPerKm} className="btn-blue">
                Save
              </button>
            ) : (
              <button onClick={() => setEditingRs(true)} className="btn-gray">
                Edit
              </button>
            )}
          </div>

          <p className="text-xs text-gray-400 mt-2">
            Applies to EX & OS only. HQ always ₹0.
          </p>
        </div>

        {/* ================= DA ================= */}
        <DASection userId={userId} srcConfig={srcConfig} onUpdate={fetchData} />

        {/* ================= SRC TABLE ================= */}
        <SrcTable srcList={srcList} srcConfig={srcConfig} />

      </div>
    </AppLayout>
  );
}

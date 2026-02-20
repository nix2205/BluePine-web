// // import { useEffect, useState } from "react";
// // import AppLayout from "../layouts/AppLayout";
// // import axios from "../utils/axios";
// // import { useAuth } from "../context/AuthContext";

// // export default function MySRCPage() {
// //   const { user } = useAuth();

// //   const [srcList, setSrcList] = useState([]);
// //   const [config, setConfig] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   const [editingPassword, setEditingPassword] = useState(false);
// //   const [oldPassword, setOldPassword] = useState("");
// //   const [newPassword, setNewPassword] = useState("");

// //   const fetchData = async () => {
// //     try {
// //       setLoading(true);

// //       const [srcRes, configRes] = await Promise.all([
// //         axios.get("/src/my"),
// //         axios.get("/src-config/my"),
// //       ]);

// //       setSrcList(srcRes.data || []);
// //       setConfig(configRes.data);
// //     } catch (err) {
// //       console.error(err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const resetPassword = async () => {
// //     try {
// //       await axios.patch("/users/me/reset-password", {
// //         oldPassword,
// //         newPassword,
// //       });

// //       alert("Password updated successfully");

// //       setEditingPassword(false);
// //       setOldPassword("");
// //       setNewPassword("");
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Error resetting password");
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <AppLayout title="SRC" backTo="/executive-dashboard">
// //         <div className="p-10 text-center text-gray-500">
// //           Loading...
// //         </div>
// //       </AppLayout>
// //     );
// //   }

// //   return (
// //     <AppLayout title="SRC" backTo="/executive-dashboard">
// //       <div className="max-w-6xl mx-auto space-y-10 py-8">

// //         {/* ================= PROFILE CARD ================= */}
// //         <div className="bg-white rounded-2xl shadow-md p-8">
// //           <h2 className="text-xl font-semibold mb-6">
// //             Profile
// //           </h2>

// //           <div className="grid md:grid-cols-3 gap-8">

// //             <div>
// //               <label className="text-sm text-gray-500">
// //                 User ID
// //               </label>
// //               <div className="mt-2 font-medium text-lg">
// //                 {user?.userId}
// //               </div>
// //             </div>

// //             <div>
// //               <label className="text-sm text-gray-500">
// //                 Username
// //               </label>
// //               <div className="mt-2 font-medium text-lg">
// //                 {user?.username}
// //               </div>
// //             </div>

// //             <div>
// //               <label className="text-sm text-gray-500">
// //                 Password
// //               </label>
// //               <div className="mt-2">********</div>

// //               <button
// //                 onClick={() => setEditingPassword(!editingPassword)}
// //                 className="mt-3 text-sm text-blue-600 hover:underline"
// //               >
// //                 Reset Password
// //               </button>
// //             </div>
// //           </div>

// //           {editingPassword && (
// //             <div className="mt-6 grid md:grid-cols-2 gap-4 max-w-lg">
// //               <input
// //                 type="password"
// //                 placeholder="Old Password"
// //                 value={oldPassword}
// //                 onChange={(e) => setOldPassword(e.target.value)}
// //                 className="border rounded-lg px-3 py-2"
// //               />
// //               <input
// //                 type="password"
// //                 placeholder="New Password"
// //                 value={newPassword}
// //                 onChange={(e) => setNewPassword(e.target.value)}
// //                 className="border rounded-lg px-3 py-2"
// //               />
// //               <button
// //                 onClick={resetPassword}
// //                 className="col-span-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
// //               >
// //                 Save New Password
// //               </button>
// //             </div>
// //           )}
// //         </div>

// //         {/* ================= CONFIG CARD ================= */}
// //         <div className="bg-white rounded-2xl shadow-md p-8">
         

// //           <div className="grid md:grid-cols-4 gap-6 text-center">
// //             <div className="p-4 bg-gray-50 rounded-xl">
// //               <p className="text-sm text-gray-500">Rs Per Km</p>
// //               <p className="text-xl font-semibold">
// //                 ₹ {config?.RsPerKm}
// //               </p>
// //             </div>

// //             <div className="p-4 bg-gray-50 rounded-xl">
// //               <p className="text-sm text-gray-500">HQ DA</p>
// //               <p className="text-xl font-semibold">
// //                 ₹ {config?.DAperStation?.HQ}
// //               </p>
// //             </div>

// //             <div className="p-4 bg-gray-50 rounded-xl">
// //               <p className="text-sm text-gray-500">EX DA</p>
// //               <p className="text-xl font-semibold">
// //                 ₹ {config?.DAperStation?.EX}
// //               </p>
// //             </div>

// //             <div className="p-4 bg-gray-50 rounded-xl">
// //               <p className="text-sm text-gray-500">OS DA</p>
// //               <p className="text-xl font-semibold">
// //                 ₹ {config?.DAperStation?.OS}
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* ================= SRC TABLE ================= */}
// //         <div className="bg-white rounded-2xl shadow-md p-8">
// //           <h2 className="text-xl font-semibold mb-6">
// //             My SRC Locations
// //           </h2>

// //           <div className="overflow-x-auto">
// //             <table className="w-full text-sm border-collapse">
// //               <thead>
// //                 <tr className="bg-gray-100 text-left">
// //                   <th className="p-3">Place</th>
// //                   <th className="p-3">Station</th>
// //                   <th className="p-3">Radius</th>
// //                   <th className="p-3">KMs</th>
// //                   <th className="p-3">MOT</th>
// //                   <th className="p-3">TA</th>
// //                   <th className="p-3">DA</th>
// //                 </tr>
// //               </thead>

// //               <tbody>
// //                 {srcList.map((src) => {
// //                   const rsPerKm =
// //                     src.RsPerKmOverride ?? config?.RsPerKm ?? 0;

// //                   const da =
// //                     src.DAOverride ??
// //                     config?.DAperStation?.[src.station] ??
// //                     0;

// //                   const ta =
// //                     src.station === "HQ"
// //                       ? 0
// //                       : rsPerKm * src.kms;

// //                   return (
// //                     <tr
// //                       key={src._id}
// //                       className="border-t hover:bg-gray-50"
// //                     >
// //                       <td className="p-3">{src.placeOfWork}</td>
// //                       <td className="p-3">{src.station}</td>
// //                       <td className="p-3">{src.radius} km</td>
// //                       <td className="p-3">{src.kms}</td>
// //                       <td className="p-3">{src.MOT}</td>
// //                       <td className="p-3 font-semibold">
// //                         ₹ {ta}
// //                       </td>
// //                       <td className="p-3 font-semibold">
// //                         ₹ {da}
// //                       </td>
// //                     </tr>
// //                   );
// //                 })}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>

// //       </div>
// //     </AppLayout>
// //   );
// // }


// import { useEffect, useState } from "react";
// import AppLayout from "../layouts/AppLayout";
// import axios from "../utils/axios";
// import { useAuth } from "../context/AuthContext";

// export default function MySRCPage() {
//   const { user } = useAuth();

//   const [srcList, setSrcList] = useState([]);
//   const [config, setConfig] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [editingPassword, setEditingPassword] = useState(false);
//   const [oldPassword, setOldPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   const fetchData = async () => {
//     try {
//       setLoading(true);

//       const [srcRes, configRes] = await Promise.all([
//         axios.get("/src/my"),
//         axios.get("/src-config/my"),
//       ]);

//       setSrcList(srcRes.data || []);
//       setConfig(configRes.data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const resetPassword = async () => {
//     try {
//       await axios.patch("/users/me/reset-password", {
//         oldPassword,
//         newPassword,
//       });

//       alert("Password updated successfully");

//       setEditingPassword(false);
//       setOldPassword("");
//       setNewPassword("");
//     } catch (err) {
//       alert(err.response?.data?.message || "Error resetting password");
//     }
//   };

//   if (loading) {
//     return (
//       <AppLayout title="SRC" backTo="/executive-dashboard">
//         <div className="p-10 text-center text-gray-500">
//           Loading...
//         </div>
//       </AppLayout>
//     );
//   }

//   return (
//     <AppLayout title="SRC" backTo="/executive-dashboard">
//       <div className="max-w-6xl mx-auto space-y-10 py-8">

//         {/* ================= PROFILE CARD ================= */}
//         <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
//           <h2 className="text-xl font-semibold mb-6 text-blue-900 border-b border-gray-200 pb-3">
//             Profile Details
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">

//             <div>
//               <label className="text-sm text-gray-500">
//                 User ID
//               </label>
//               <div className="mt-2 font-medium text-lg text-gray-800">
//                 {user?.userId}
//               </div>
//             </div>

//             <div>
//               <label className="text-sm text-gray-500">
//                 Username
//               </label>
//               <div className="mt-2 font-medium text-lg text-gray-800">
//                 {user?.username}
//               </div>
//             </div>

//             <div>
//               <label className="text-sm text-gray-500">
//                 Password
//               </label>
//               <div className="mt-2 text-gray-800">********</div>

//               <button
//                 onClick={() => setEditingPassword(!editingPassword)}
//                 className="mt-3 text-sm text-blue-700 hover:text-blue-900 hover:underline"
//               >
//                 Reset Password
//               </button>
//             </div>
//           </div>

//           {editingPassword && (
//             <div className="mt-6 grid md:grid-cols-2 gap-4 max-w-lg">
//               <input
//                 type="password"
//                 placeholder="Old Password"
//                 value={oldPassword}
//                 onChange={(e) => setOldPassword(e.target.value)}
//                 className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
//               />
//               <input
//                 type="password"
//                 placeholder="New Password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
//               />
//               <button
//                 onClick={resetPassword}
//                 className="col-span-2 bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition"
//               >
//                 Save New Password
//               </button>
//             </div>
//           )}
//         </div>

//         {/* ================= CONFIG CARD ================= */}
//         <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
//           <h2 className="text-xl font-semibold mb-6 text-blue-900 border-b border-gray-200 pb-3">
//             Compensation Configuration
//           </h2>

//           <div className="grid md:grid-cols-4 gap-6 text-center">
//             <div className="p-4 bg-blue-50 rounded-xl">
//               <p className="text-sm text-blue-800">Rs Per Km</p>
//               <p className="text-xl font-semibold text-blue-900">
//                 ₹ {config?.RsPerKm}
//               </p>
//             </div>

//             <div className="p-4 bg-blue-50 rounded-xl">
//               <p className="text-sm text-blue-800">HQ DA</p>
//               <p className="text-xl font-semibold text-blue-900">
//                 ₹ {config?.DAperStation?.HQ}
//               </p>
//             </div>

//             <div className="p-4 bg-blue-50 rounded-xl">
//               <p className="text-sm text-blue-800">EX DA</p>
//               <p className="text-xl font-semibold text-blue-900">
//                 ₹ {config?.DAperStation?.EX}
//               </p>
//             </div>

//             <div className="p-4 bg-blue-50 rounded-xl">
//               <p className="text-sm text-blue-800">OS DA</p>
//               <p className="text-xl font-semibold text-blue-900">
//                 ₹ {config?.DAperStation?.OS}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* ================= SRC TABLE ================= */}
//         <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
//           <h2 className="text-xl font-semibold mb-6 text-blue-900 border-b border-gray-200 pb-3">
//             My SRC Locations
//           </h2>

//           <div className="overflow-x-auto rounded-xl border border-gray-200">
//             <table className="w-full text-sm border-collapse">
//               <thead>
//                 <tr className="bg-blue-900 text-white text-left">
//                   <th className="p-3">Place</th>
//                   <th className="p-3">Station</th>
//                   <th className="p-3">Radius</th>
//                   <th className="p-3">KMs</th>
//                   <th className="p-3">MOT</th>
//                   <th className="p-3">TA</th>
//                   <th className="p-3">DA</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {srcList.map((src) => {
//                   const rsPerKm =
//                     src.RsPerKmOverride ?? config?.RsPerKm ?? 0;

//                   const da =
//                     src.DAOverride ??
//                     config?.DAperStation?.[src.station] ??
//                     0;

//                   const ta =
//                     src.station === "HQ"
//                       ? 0
//                       : rsPerKm * src.kms;

//                   return (
//                     <tr
//                       key={src._id}
//                       className="border-t hover:bg-blue-50 transition"
//                     >
//                       <td className="p-3">{src.placeOfWork}</td>
//                       <td className="p-3">{src.station}</td>
//                       <td className="p-3">{src.radius} km</td>
//                       <td className="p-3">{src.kms}</td>
//                       <td className="p-3">{src.MOT}</td>
//                       <td className="p-3 font-semibold text-blue-900">
//                         ₹ {ta}
//                       </td>
//                       <td className="p-3 font-semibold text-blue-900">
//                         ₹ {da}
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>

//       </div>
//     </AppLayout>
//   );
// }






import { useEffect, useState } from "react";
import AppLayout from "../layouts/AppLayout";
import axios from "../utils/axios";
import { useAuth } from "../context/AuthContext";

export default function MySRCPage() {
  const { user } = useAuth();

  const [srcList, setSrcList] = useState([]);
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);

  const [editingPassword, setEditingPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);

      const [srcRes, configRes] = await Promise.all([
        axios.get("/src/my"),
        axios.get("/src-config/my"),
      ]);

      setSrcList(srcRes.data || []);
      setConfig(configRes.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const resetPassword = async () => {
    try {
      await axios.patch("/users/me/reset-password", {
        oldPassword,
        newPassword,
      });

      alert("Password updated successfully");
      setEditingPassword(false);
      setOldPassword("");
      setNewPassword("");
    } catch (err) {
      alert(err.response?.data?.message || "Error resetting password");
    }
  };

  if (loading) {
    return (
      <AppLayout title="SRC" backTo="/executive-dashboard">
        <div className="p-10 text-center text-gray-500">
          Loading...
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout title="SRC" backTo="/executive-dashboard">
      <div className="max-w-6xl mx-auto space-y-10 py-8">

        {/* ================= PROFILE CARD ================= */}
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
          <h2 className="text-xl font-semibold mb-6 text-[#1E3A5F] border-b border-gray-200 pb-3">
            Profile Details
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <label className="text-sm text-gray-500 font-medium">
                User ID
              </label>
              <div className="mt-2 font-medium text-lg text-gray-800">
                {user?.userId}
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500 font-medium">
                Username
              </label>
              <div className="mt-2 font-medium text-lg text-gray-800">
                {user?.username}
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500 font-medium">
                Password
              </label>
              <div className="mt-2 text-gray-800">********</div>

              <button
                onClick={() => setEditingPassword(!editingPassword)}
                className="mt-3 text-sm text-[#1E3A5F] hover:underline"
              >
                Reset Password
              </button>
            </div>
          </div>

          {editingPassword && (
            <div className="mt-6 grid md:grid-cols-2 gap-4 max-w-lg">
              <input
                type="password"
                placeholder="Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
              />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
              />
              <button
                onClick={resetPassword}
                className="col-span-2 bg-[#1E3A5F] text-white py-2 rounded-lg hover:bg-[#16324E] transition"
              >
                Save New Password
              </button>
            </div>
          )}
        </div>

        {/* ================= CONFIG CARD (NO HEADING) ================= */}
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-500 font-medium">Rs Per Km</p>
              <p className="text-xl font-semibold text-gray-800">
                ₹ {config?.RsPerKm}
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-500 font-medium">HQ DA</p>
              <p className="text-xl font-semibold text-gray-800">
                ₹ {config?.DAperStation?.HQ}
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-500 font-medium">EX DA</p>
              <p className="text-xl font-semibold text-gray-800">
                ₹ {config?.DAperStation?.EX}
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-500 font-medium">OS DA</p>
              <p className="text-xl font-semibold text-gray-800">
                ₹ {config?.DAperStation?.OS}
              </p>
            </div>
          </div>
        </div>

        {/* ================= SRC TABLE ================= */}
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
          <h2 className="text-xl font-semibold mb-6 text-[#1E3A5F] border-b border-gray-200 pb-3">
            My SRC Locations
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1E3A5F] text-white text-left">
                  <th className="p-3">Place</th>
                  <th className="p-3">Station</th>
                  <th className="p-3">Radius</th>
                  <th className="p-3">KMs</th>
                  <th className="p-3">MOT</th>
                  <th className="p-3">TA</th>
                  <th className="p-3">DA</th>
                </tr>
              </thead>

              <tbody>
                {srcList.map((src) => {
                  const rsPerKm =
                    src.RsPerKmOverride ?? config?.RsPerKm ?? 0;

                  const da =
                    src.DAOverride ??
                    config?.DAperStation?.[src.station] ??
                    0;

                  const ta =
                    src.station === "HQ"
                      ? 0
                      : rsPerKm * src.kms;

                  return (
                    <tr
                      key={src._id}
                      className="border-t hover:bg-gray-50 transition"
                    >
                      <td className="p-3">{src.placeOfWork}</td>
                      <td className="p-3">{src.station}</td>
                      <td className="p-3">{src.radius} km</td>
                      <td className="p-3">{src.kms}</td>
                      <td className="p-3">{src.MOT}</td>
                      <td className="p-3 font-semibold text-gray-800">
                        ₹ {ta}
                      </td>
                      <td className="p-3 font-semibold text-gray-800">
                        ₹ {da}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </AppLayout>
  );
}

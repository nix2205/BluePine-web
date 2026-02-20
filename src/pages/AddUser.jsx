// // // import { useState } from "react";
// // // import AppLayout from "../layouts/AppLayout";
// // // import axios from "../utils/axios";

// // // export default function AddUser() {
// // //   const [form, setForm] = useState({
// // //     userId: "",
// // //     username: "",
// // //     password: "",
// // //     role: "executive",
// // //   });

// // //   const submit = async () => {
// // //     try {
// // //       await axios.post("/users/create", form);
// // //       alert("User created ✨");

// // //       // optional: reset form
// // //       setForm({
// // //         userId: "",
// // //         username: "",
// // //         password: "",
// // //         role: "executive",
// // //       });
// // //     } catch (err) {
// // //       console.error(err);
// // //       alert(err.response?.data?.message || "Something went wrong");
// // //     }
// // //   };

// // //   return (
// // //     <AppLayout title="Add New User" backTo="/dashboard">
// // //       <div className="p-6 flex justify-center">
// // //         <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">

// // //           <h2 className="text-xl font-semibold mb-4">
// // //             Create User Credentials
// // //           </h2>

// // //           <input
// // //             className="w-full border p-2 rounded mb-3"
// // //             placeholder="User ID"
// // //             value={form.userId}
// // //             onChange={(e) =>
// // //               setForm({ ...form, userId: e.target.value })
// // //             }
// // //           />

// // //           <input
// // //             className="w-full border p-2 rounded mb-3"
// // //             placeholder="Username"
// // //             value={form.username}
// // //             onChange={(e) =>
// // //               setForm({ ...form, username: e.target.value })
// // //             }
// // //           />

// // //           <input
// // //             type="password"
// // //             className="w-full border p-2 rounded mb-4"
// // //             placeholder="Password"
// // //             value={form.password}
// // //             onChange={(e) =>
// // //               setForm({ ...form, password: e.target.value })
// // //             }
// // //           />

// // //           {/* Role Toggle */}
// // //           <div className="flex gap-3 mb-6">
// // //             {["manager", "executive"].map((r) => (
// // //               <button
// // //                 key={r}
// // //                 type="button"
// // //                 className={`px-4 py-2 rounded-lg border ${
// // //                   form.role === r
// // //                     ? "bg-[#1f3a5f] text-white"
// // //                     : "bg-white"
// // //                 }`}
// // //                 onClick={() =>
// // //                   setForm({ ...form, role: r })
// // //                 }
// // //               >
// // //                 {r}
// // //               </button>
// // //             ))}
// // //           </div>

// // //           <button
// // //             onClick={submit}
// // //             className="w-full bg-[#1f3a5f] text-white py-2 rounded-lg"
// // //           >
// // //             Add User
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </AppLayout>
// // //   );
// // // }





// // import { useState } from "react";
// // import AppLayout from "../layouts/AppLayout";
// // import axios from "../utils/axios";
// // import ReassignSuperior from "../components/hierarchy/ReassignSuperior";
// // import HierarchyTree from "../components/hierarchy/HierarchyTree";

// // export default function AddUser() {
// //   const [form, setForm] = useState({
// //     userId: "",
// //     username: "",
// //     password: "",
// //     role: "executive",
// //   });

// //   const submit = async () => {
// //     try {
// //       await axios.post("/users/create", form);
// //       alert("User created ✨");

// //       setForm({
// //         userId: "",
// //         username: "",
// //         password: "",
// //         role: "executive",
// //       });
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Something went wrong");
// //     }
// //   };

// //   return (
// //     <AppLayout title="User Management" backTo="/dashboard">
// //       <div className="p-6 space-y-10">

// //         {/* Top Cards */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// //           {/* Add User Card */}
// //           <div className="bg-white rounded-xl shadow-md p-6">
// //             <h2 className="text-xl font-semibold mb-4">
// //               Create User Credentials
// //             </h2>

// //             <input
// //               className="w-full border p-2 rounded mb-3"
// //               placeholder="User ID"
// //               value={form.userId}
// //               onChange={(e) =>
// //                 setForm({ ...form, userId: e.target.value })
// //               }
// //             />

// //             <input
// //               className="w-full border p-2 rounded mb-3"
// //               placeholder="Username"
// //               value={form.username}
// //               onChange={(e) =>
// //                 setForm({ ...form, username: e.target.value })
// //               }
// //             />

// //             <input
// //               type="password"
// //               className="w-full border p-2 rounded mb-4"
// //               placeholder="Password"
// //               value={form.password}
// //               onChange={(e) =>
// //                 setForm({ ...form, password: e.target.value })
// //               }
// //             />

// //             <div className="flex gap-3 mb-6">
// //               {[
// //   { value: "manager", label: "Manager" },
// //   { value: "executive", label: "Executive" }
// // ].map((r) => (
// //                 <button
// //   key={r.value}
// //   type="button"
// //   className={`px-4 py-2 rounded-lg border ${
// //     form.role === r.value
// //       ? "bg-[#1f3a5f] text-white"
// //       : "bg-white"
// //   }`}
// //   onClick={() =>
// //     setForm({ ...form, role: r.value })
// //   }
// // >
// //   {r.label}
// // </button>
// //               ))}
// //             </div>

// //             <button
// //               onClick={submit}
// //               className="w-full bg-[#1f3a5f] text-white py-2 rounded-lg"
// //             >
// //               Add User
// //             </button>
// //           </div>

// //           {/* Reassign Superior Card */}
// //           <div className="bg-white rounded-xl shadow-md p-6">
// //             <ReassignSuperior />
// //           </div>
// //         </div>

// //         {/* Hierarchy Tree Section */}
// //         <div className="bg-white rounded-xl shadow-md p-6">
// //           <HierarchyTree />
// //         </div>

// //       </div>
// //     </AppLayout>
// //   );
// // }















// import { useState } from "react";
// import AppLayout from "../layouts/AppLayout";
// import axios from "../utils/axios";
// import ReassignSuperior from "../components/hierarchy/ReassignSuperior";
// import HierarchyTree from "../components/hierarchy/HierarchyTree";

// export default function AddUser() {
//   const [form, setForm] = useState({
//     userId: "",
//     username: "",
//     password: "",
//     role: "executive",
//   });

//   // 🔥 NEW: refresh key
//   const [refreshKey, setRefreshKey] = useState(0);

//   const submit = async () => {
//     try {
//       await axios.post("/users/create", form);
//       alert("User created ✨");

//       // 🔥 force hierarchy refresh
//       setRefreshKey((prev) => prev + 1);

//       setForm({
//         userId: "",
//         username: "",
//         password: "",
//         role: "executive",
//       });
//     } catch (err) {
//       alert(err.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <AppLayout title="User Management" backTo="/dashboard">
//       <div className="p-6 space-y-10">

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//           <div className="bg-white rounded-xl shadow-md p-6">
//             <h2 className="text-xl font-semibold mb-4">
//               Create User Credentials
//             </h2>

//             <input
//               className="w-full border p-2 rounded mb-3"
//               placeholder="User ID"
//               value={form.userId}
//               onChange={(e) =>
//                 setForm({ ...form, userId: e.target.value })
//               }
//             />

//             <input
//               className="w-full border p-2 rounded mb-3"
//               placeholder="Username"
//               value={form.username}
//               onChange={(e) =>
//                 setForm({ ...form, username: e.target.value })
//               }
//             />

//             <input
//               type="password"
//               className="w-full border p-2 rounded mb-4"
//               placeholder="Password"
//               value={form.password}
//               onChange={(e) =>
//                 setForm({ ...form, password: e.target.value })
//               }
//             />

//             <div className="flex gap-3 mb-6">
//               {[
//                 { value: "manager", label: "Manager" },
//                 { value: "executive", label: "Executive" }
//               ].map((r) => (
//                 <button
//                   key={r.value}
//                   type="button"
//                   className={`px-4 py-2 rounded-lg border ${
//                     form.role === r.value
//                       ? "bg-[#1f3a5f] text-white"
//                       : "bg-white"
//                   }`}
//                   onClick={() =>
//                     setForm({ ...form, role: r.value })
//                   }
//                 >
//                   {r.label}
//                 </button>
//               ))}
//             </div>

//             <button
//               onClick={submit}
//               className="w-full bg-[#1f3a5f] text-white py-2 rounded-lg"
//             >
//               Add User
//             </button>
//           </div>

//           <div className="bg-white rounded-xl shadow-md p-6">
//             <ReassignSuperior />
//           </div>
//         </div>

//         {/* 🔥 KEY ADDED HERE */}
//         <div className="bg-white rounded-xl shadow-md p-6">
//           <HierarchyTree key={refreshKey} />
//         </div>

//       </div>
//     </AppLayout>
//   );
// }











import { useState } from "react";
import AppLayout from "../layouts/AppLayout";
import axios from "../utils/axios";
import ReassignSuperior from "../components/hierarchy/ReassignSuperior";
import HierarchyTree from "../components/hierarchy/HierarchyTree";

export default function AddUser() {
  const [form, setForm] = useState({
    userId: "",
    username: "",
    password: "",
    role: "executive",
  });

  const [refreshKey, setRefreshKey] = useState(0);

  const triggerRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  const submit = async () => {
    try {
      await axios.post("/users/create", form);
      alert("User created ✨");

      triggerRefresh(); // 🔥 refresh after add

      setForm({
        userId: "",
        username: "",
        password: "",
        role: "executive",
      });
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <AppLayout title="User Management" backTo="/dashboard">
      <div className="p-6 space-y-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              Create User Credentials
            </h2>

            <input
              className="w-full border p-2 rounded mb-3"
              placeholder="User ID"
              value={form.userId}
              onChange={(e) =>
                setForm({ ...form, userId: e.target.value })
              }
            />

            <input
              className="w-full border p-2 rounded mb-3"
              placeholder="Username"
              value={form.username}
              onChange={(e) =>
                setForm({ ...form, username: e.target.value })
              }
            />

            <input
              type="password"
              className="w-full border p-2 rounded mb-4"
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <div className="flex gap-3 mb-6">
              {[
                { value: "manager", label: "Manager" },
                { value: "executive", label: "Executive" }
              ].map((r) => (
                <button
                  key={r.value}
                  type="button"
                  className={`px-4 py-2 rounded-lg border ${
                    form.role === r.value
                      ? "bg-[#1f3a5f] text-white"
                      : "bg-white"
                  }`}
                  onClick={() =>
                    setForm({ ...form, role: r.value })
                  }
                >
                  {r.label}
                </button>
              ))}
            </div>

            <button
              onClick={submit}
              className="w-full bg-[#1f3a5f] text-white py-2 rounded-lg"
            >
              Add User
            </button>
          </div>

          {/* 🔥 pass refresh trigger */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <ReassignSuperior onSuccess={triggerRefresh} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <HierarchyTree key={refreshKey} />
        </div>

      </div>
    </AppLayout>
  );
}
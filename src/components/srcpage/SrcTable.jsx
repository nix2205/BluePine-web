
// // // import { useState, useEffect } from "react";
// // // import axios from "../../utils/axios";
// // // import AddNewSRC from "../srcpage/AddNewSrc";

// // // export default function SrcTable({ srcList, srcConfig }) {
// // //   const [rows, setRows] = useState([]);
// // //   const [editingId, setEditingId] = useState(null);
// // //   const [editForm, setEditForm] = useState({});

// // //   useEffect(() => {
// // //     setRows(srcList);
// // //   }, [srcList]);

// // //   if (!srcConfig) {
// // //     return <p className="p-4">Loading config…</p>;
// // //   }

// // //   /* ───────────── EDIT HANDLERS ───────────── */
// // //   const startEdit = (src) => {
// // //     setEditingId(src._id);
// // //     setEditForm({
// // //       placeOfWork: src.placeOfWork,
// // //       station: src.station,
// // //       MOT: src.MOT,
// // //       kms: src.kms,
// // //       RsPerKm: src.RsPerKmOverride ?? "",
// // //       DA: src.DAOverride ?? "",
// // //     });
// // //   };

// // //   const cancelEdit = () => {
// // //     setEditingId(null);
// // //     setEditForm({});
// // //   };

// // //   const saveEdit = async () => {
// // //     try {
// // //       const payload = {
// // //         placeOfWork: editForm.placeOfWork,
// // //         station: editForm.station,
// // //         MOT: editForm.MOT,
// // //         kms: Number(editForm.kms),
// // //       };

// // //       if (editForm.RsPerKm !== "") {
// // //         payload.RsPerKm = Number(editForm.RsPerKm);
// // //       }

// // //       if (editForm.DA !== "") {
// // //         payload.DA = Number(editForm.DA);
// // //       }

// // //       const res = await axios.put(`/src/${editingId}`, payload);

// // //       setRows((prev) =>
// // //         prev.map((r) => (r._id === editingId ? res.data : r))
// // //       );

// // //       cancelEdit();
// // //     } catch (err) {
// // //       alert(err.response?.data?.message || "Update failed");
// // //     }
// // //   };

// // //   const deleteRow = async (id) => {
// // //     if (!window.confirm("Delete this place?")) return;
// // //     await axios.delete(`/src/${id}`);
// // //     setRows((prev) => prev.filter((r) => r._id !== id));
// // //   };

// // //   /* ───────────── CALCULATIONS ───────────── */
// // //   const getRsPerKm = (src) =>
// // //     src.RsPerKmOverride ?? srcConfig.RsPerKm;

// // //   const getDA = (src) =>
// // //     src.DAOverride ?? srcConfig.DAperStation[src.station];

// // //   const calcTA = (src) =>
// // //     src.station === "HQ" ? 0 : src.kms * getRsPerKm(src);

// // //   /* ───────────── UI ───────────── */
// // //   return (
// // //     <div className="bg-white rounded-xl shadow-md overflow-hidden">
// // //       <div className="p-5 border-b">
// // //         <h2 className="font-semibold text-lg">SRC Details</h2>
// // //       </div>

// // //       <table className="w-full text-sm">
// // //         <thead className="bg-blue-900 text-white">
// // //           <tr>
// // //             <th className="px-4 py-3 text-left">Place</th>
// // //             <th className="px-4 py-3 text-left">HQ / EX / OS</th>
// // //             <th className="px-4 py-3 text-left">MOT</th>
// // //             <th className="px-4 py-3 text-left">KM</th>
// // //             <th className="px-4 py-3 text-left">TA</th>
// // //             <th className="px-4 py-3 text-left">DA</th>
// // //             <th className="px-4 py-3 text-left">Actions</th>
// // //           </tr>
// // //         </thead>

// // //         <tbody className="divide-y">
// // //           {rows.map((src) => {
// // //             const isEditing = editingId === src._id;

// // //             return (
// // //               <tr key={src._id} className="hover:bg-gray-50 transition">
// // //                 {/* PLACE */}
// // //                 <td className="px-4 py-3">
// // //                   {isEditing ? (
// // //                     <input
// // //                       className="input"
// // //                       value={editForm.placeOfWork}
// // //                       onChange={(e) =>
// // //                         setEditForm({ ...editForm, placeOfWork: e.target.value })
// // //                       }
// // //                     />
// // //                   ) : (
// // //                     src.placeOfWork
// // //                   )}
// // //                 </td>

// // //                 {/* STATION */}
// // //                 <td className="px-4 py-3">
// // //                   {isEditing ? (
// // //                     <select
// // //                       className="input"
// // //                       value={editForm.station}
// // //                       onChange={(e) =>
// // //                         setEditForm({ ...editForm, station: e.target.value })
// // //                       }
// // //                     >
// // //                       <option>HQ</option>
// // //                       <option>EX</option>
// // //                       <option>OS</option>
// // //                     </select>
// // //                   ) : (
// // //                     src.station
// // //                   )}
// // //                 </td>

// // //                 {/* MOT */}
// // //                 <td className="px-4 py-3">
// // //                   {isEditing ? (
// // //                     <select
// // //                       className="input"
// // //                       value={editForm.MOT}
// // //                       onChange={(e) =>
// // //                         setEditForm({ ...editForm, MOT: e.target.value })
// // //                       }
// // //                     >
// // //                       <option>LOCAL</option>
// // //                       <option>BIKE</option>
// // //                       <option>BUS</option>
// // //                       <option>TRAIN</option>
// // //                     </select>
// // //                   ) : (
// // //                     src.MOT
// // //                   )}
// // //                 </td>

// // //                 {/* KM */}
// // //                 <td className="px-4 py-3">
// // //                   {isEditing ? (
// // //                     <input
// // //                       type="number"
// // //                       className="input"
// // //                       value={editForm.kms}
// // //                       onChange={(e) =>
// // //                         setEditForm({ ...editForm, kms: e.target.value })
// // //                       }
// // //                     />
// // //                   ) : (
// // //                     src.kms
// // //                   )}
// // //                 </td>

// // //                 {/* TA */}
// // //                 <td className="px-4 py-3">
// // //                   ₹{calcTA(src)}
// // //                 </td>

// // //                 {/* DA */}
// // //                 <td className="px-4 py-3">
// // //                   {isEditing ? (
// // //                     <input
// // //                       type="number"
// // //                       className="input"
// // //                       placeholder={getDA(src)}
// // //                       value={editForm.DA}
// // //                       onChange={(e) =>
// // //                         setEditForm({ ...editForm, DA: e.target.value })
// // //                       }
// // //                     />
// // //                   ) : (
// // //                     `₹${getDA(src)}`
// // //                   )}
// // //                 </td>

// // //                 {/* ACTIONS */}
// // //                 <td className="px-4 py-3 text-left">
// // //                   {isEditing ? (
// // //                     <div className="flex gap-2 justify-left">
// // //                       <button onClick={saveEdit} className="btn-submit">
// // //                         Save
// // //                       </button>
// // //                       <button onClick={cancelEdit} className="btn-gray">
// // //                         Cancel
// // //                       </button>
// // //                     </div>
// // //                   ) : (
// // //                     <div className="flex gap-2 justify-left">
// // //                       <button
// // //                         onClick={() => startEdit(src)}
// // //                         className="btn-edit"
// // //                       >
// // //                         Edit
// // //                       </button>
// // //                       <button
// // //                         onClick={() => deleteRow(src._id)}
// // //                         className="btn-delete"
// // //                       >
// // //                         Delete
// // //                       </button>
// // //                     </div>
// // //                   )}
// // //                 </td>
// // //               </tr>
// // //             );
// // //           })}
// // //         </tbody>
// // //       </table>

// // //       {/* ADD NEW SRC */}
// // //       <div className="p-6 border-t">
// // //         <AddNewSRC setRows={setRows} />
// // //       </div>
// // //     </div>
// // //   );
// // // }







// // import { useState, useEffect } from "react";
// // import axios from "../../utils/axios";
// // import AddNewSRC from "../srcpage/AddNewSrc";

// // export default function SrcTable({ srcList, srcConfig }) {
// //   const [rows, setRows] = useState([]);
// //   const [editingId, setEditingId] = useState(null);
// //   const [editForm, setEditForm] = useState({});

// //   useEffect(() => {
// //     setRows(srcList);
// //   }, [srcList]);

// //   if (!srcConfig) {
// //     return <p className="p-4">Loading config…</p>;
// //   }

// //   /* ───────────── EDIT HANDLERS ───────────── */
// //   const startEdit = (src) => {
// //     setEditingId(src._id);
// //     setEditForm({
// //       placeOfWork: src.placeOfWork,
// //       station: src.station,
// //       radius: src.radius, // ✅ ADDED
// //       MOT: src.MOT,
// //       kms: src.kms,
// //       RsPerKm: src.RsPerKmOverride ?? "",
// //       DA: src.DAOverride ?? "",
// //     });
// //   };

// //   const cancelEdit = () => {
// //     setEditingId(null);
// //     setEditForm({});
// //   };

// //   const saveEdit = async () => {
// //     try {
// //       const payload = {
// //         placeOfWork: editForm.placeOfWork.trim(),
// //         station: editForm.station,
// //         radius: Number(editForm.radius), // ✅ ADDED
// //         MOT: editForm.station === "HQ" ? "Local" : editForm.MOT,
// //         kms: editForm.station === "HQ" ? 0 : Number(editForm.kms),
// //       };

// //       if (editForm.RsPerKm !== "") {
// //         payload.RsPerKm = Number(editForm.RsPerKm);
// //       }

// //       if (editForm.DA !== "") {
// //         payload.DA = Number(editForm.DA);
// //       }

// //       const res = await axios.put(`/src/${editingId}`, payload);

// //       setRows((prev) =>
// //         prev.map((r) => (r._id === editingId ? res.data : r))
// //       );

// //       cancelEdit();
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Update failed");
// //     }
// //   };

// //   const deleteRow = async (id) => {
// //     if (!window.confirm("Delete this place?")) return;
// //     await axios.delete(`/src/${id}`);
// //     setRows((prev) => prev.filter((r) => r._id !== id));
// //   };

// //   /* ───────────── CALCULATIONS ───────────── */
// //   const getRsPerKm = (src) =>
// //     src.RsPerKmOverride ?? srcConfig.RsPerKm;

// //   const getDA = (src) =>
// //     src.DAOverride ?? srcConfig.DAperStation[src.station];

// //   const calcTA = (src) =>
// //     src.station === "HQ" ? 0 : src.kms * getRsPerKm(src);

// //   /* ───────────── UI ───────────── */
// //   return (
// //     <div className="bg-white rounded-xl shadow-md overflow-hidden">
// //       <div className="p-5 border-b">
// //         <h2 className="font-semibold text-lg">SRC Details</h2>
// //       </div>

// //       <table className="w-full text-sm">
// //         <thead className="bg-blue-900 text-white">
// //           <tr>
// //             <th className="px-4 py-3 text-left">Place</th>
// //             <th className="px-4 py-3 text-left">HQ / EX / OS</th>
// //             <th className="px-4 py-3 text-left">Radius</th> {/* ✅ ADDED */}
// //             <th className="px-4 py-3 text-left">MOT</th>
// //             <th className="px-4 py-3 text-left">KM</th>
// //             <th className="px-4 py-3 text-left">Rs / Km</th>
// //             <th className="px-4 py-3 text-left">TA</th>
// //             <th className="px-4 py-3 text-left">DA</th>
// //             <th className="px-4 py-3 text-left">Actions</th>
// //           </tr>
// //         </thead>

// //         <tbody className="divide-y">
// //           {rows.map((src) => {
// //             const isEditing = editingId === src._id;

// //             return (
// //               <tr key={src._id} className="hover:bg-gray-50 transition">

// //                 {/* PLACE */}
// //                 <td className="px-4 py-3">
// //                   {isEditing ? (
// //                     <input
// //                       className="input"
// //                       value={editForm.placeOfWork}
// //                       onChange={(e) =>
// //                         setEditForm({ ...editForm, placeOfWork: e.target.value })
// //                       }
// //                     />
// //                   ) : (
// //                     src.placeOfWork
// //                   )}
// //                 </td>

// //                 {/* STATION */}
// //                 <td className="px-4 py-3">
// //                   {isEditing ? (
// //                     <select
// //                       className="input"
// //                       value={editForm.station}
// //                       onChange={(e) =>
// //                         setEditForm({ ...editForm, station: e.target.value })
// //                       }
// //                     >
// //                       <option value="HQ">HQ</option>
// //                       <option value="EX">EX</option>
// //                       <option value="OS">OS</option>
// //                     </select>
// //                   ) : (
// //                     src.station
// //                   )}
// //                 </td>

// //                 {/* RADIUS */}
// //                 <td className="px-4 py-3">
// //                   {isEditing ? (
// //                     <input
// //                       type="number"
// //                       className="input"
// //                       value={editForm.radius}
// //                       onChange={(e) =>
// //                         setEditForm({ ...editForm, radius: e.target.value })
// //                       }
// //                     />
// //                   ) : (
// //                     src.radius
// //                   )}
// //                 </td>

// //                 {/* MOT */}
// //                 <td className="px-4 py-3">
// //                   {isEditing ? (
// //                     <select
// //                       className="input"
// //                       value={editForm.MOT}
// //                       onChange={(e) =>
// //                         setEditForm({ ...editForm, MOT: e.target.value })
// //                       }
// //                       disabled={editForm.station === "HQ"}
// //                     >
// //                       <option value="Local">Local</option>
// //                       <option value="Bike">Bike</option>
// //                       <option value="Bus">Bus</option>
// //                       <option value="Train">Train</option>
// //                     </select>
// //                   ) : (
// //                     src.MOT
// //                   )}
// //                 </td>

// //                 {/* KM */}
// //                 <td className="px-4 py-3">
// //                   {isEditing ? (
// //                     <input
// //                       type="number"
// //                       className="input"
// //                       value={editForm.kms}
// //                       onChange={(e) =>
// //                         setEditForm({ ...editForm, kms: e.target.value })
// //                       }
// //                       disabled={editForm.station === "HQ"}
// //                     />
// //                   ) : (
// //                     src.kms
// //                   )}
// //                 </td>

// //                 {/* Rs / Km */}
// //                 <td className="px-4 py-3">
// //                   ₹{getRsPerKm(src)}
// //                 </td>

// //                 {/* TA */}
// //                 <td className="px-4 py-3">
// //                   ₹{calcTA(src)}
// //                 </td>

// //                 {/* DA */}
// //                 <td className="px-4 py-3">
// //                   {isEditing ? (
// //                     <input
// //                       type="number"
// //                       className="input"
// //                       placeholder={getDA(src)}
// //                       value={editForm.DA}
// //                       onChange={(e) =>
// //                         setEditForm({ ...editForm, DA: e.target.value })
// //                       }
// //                     />
// //                   ) : (
// //                     `₹${getDA(src)}`
// //                   )}
// //                 </td>

// //                 {/* ACTIONS */}
// //                 <td className="px-4 py-3 text-left">
// //                   {isEditing ? (
// //                     <div className="flex gap-2 justify-left">
// //                       <button onClick={saveEdit} className="btn-submit">
// //                         Save
// //                       </button>
// //                       <button onClick={cancelEdit} className="btn-gray">
// //                         Cancel
// //                       </button>
// //                     </div>
// //                   ) : (
// //                     <div className="flex gap-2 justify-left">
// //                       <button
// //                         onClick={() => startEdit(src)}
// //                         className="btn-edit"
// //                       >
// //                         Edit
// //                       </button>
// //                       <button
// //                         onClick={() => deleteRow(src._id)}
// //                         className="btn-delete"
// //                       >
// //                         Delete
// //                       </button>
// //                     </div>
// //                   )}
// //                 </td>

// //               </tr>
// //             );
// //           })}
// //         </tbody>
// //       </table>

// //       <div className="p-6 border-t">
// //         <AddNewSRC setRows={setRows} />
// //       </div>
// //     </div>
// //   );
// // }







// import { useState, useEffect } from "react";
// import axios from "../../utils/axios";
// import AddNewSRC from "../srcpage/AddNewSrc";

// export default function SrcTable({ srcList, srcConfig }) {
//   const [rows, setRows] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [editForm, setEditForm] = useState({});

//   // useEffect(() => {
//   //   setRows(srcList);
//   // }, [srcList]);


//   const sorted = [...srcList].sort((a, b) => {

//   if (a.station === "HQ") return -1;
//   if (b.station === "HQ") return 1;

//   if (a.station === "-" && b.station !== "-") return -1;
//   if (a.station !== "-" && b.station === "-") return 1;

//   return a.placeOfWork.localeCompare(b.placeOfWork);
// });


//   useEffect(() => {
//   // const sorted = [...srcList].sort((a, b) => {

//   //   // 1️⃣ HQ always first
//   //   if (a.station === "HQ" && b.station !== "HQ") return -1;
//   //   if (a.station !== "HQ" && b.station === "HQ") return 1;

//   //   // 2️⃣ For non-HQ → alphabetical by placeOfWork
//   //   return a.placeOfWork.localeCompare(b.placeOfWork);

//   // });

//   setRows(sorted);
// }, [srcList]);

//   if (!srcConfig) {
//     return <p className="p-4">Loading config…</p>;
//   }

//   /* ───────────── EDIT HANDLERS ───────────── */
// const startEdit = (src) => {
//   setEditingId(src._id);
//   setEditForm({
//     placeOfWork: src.placeOfWork,
//     station: src.station,
//     radius: src.radius,
//     MOT: src.MOT,
//     kms: src.kms,
//     RsPerKm: src.RsPerKmOverride ?? "",
//     DA: src.DAOverride ?? "",
//     TA: src.TAOverride ?? "",   // ✅ ADD THIS
//   });
// };

//   const cancelEdit = () => {
//     setEditingId(null);
//     setEditForm({});
//   };


//   const saveEdit = async () => {
//   try {
//     const payload = {
//       station: editForm.station,
//       radius: Number(editForm.radius) || 0,
//       MOT:
//         editForm.station === "HQ"
//           ? "Local"
//           : editForm.MOT || null,
//       kms:
//         editForm.station === "HQ"
//           ? 0
//           : editForm.kms
//           ? Number(editForm.kms)
//           : null,
//     };

//     if (editForm.RsPerKm !== "")
//       payload.RsPerKm = Number(editForm.RsPerKm);

//     if (editForm.DA !== "")
//       payload.DA = Number(editForm.DA);

//     if (editForm.TA !== "")
//       payload.TA = Number(editForm.TA);

//     const res = await axios.put(`/src/${editingId}`, payload);

//     setRows((prev) =>
//       prev.map((r) => (r._id === editingId ? res.data : r))
//     );

//     cancelEdit();
//   } catch (err) {
//     alert(err.response?.data?.message || "Update failed");
//   }
// };

// //   const saveEdit = async () => {
// //     try {
// //       const payload = {
// //         placeOfWork: editForm.placeOfWork.trim(),
// //         station: editForm.station,
// //         radius: Number(editForm.radius),
// //         MOT: editForm.station === "HQ" ? "Local" : editForm.MOT,
// //         kms: editForm.station === "HQ" ? 0 : Number(editForm.kms),
// //       };

// //       if (editForm.RsPerKm !== "") {
// //         payload.RsPerKm = Number(editForm.RsPerKm);
// //       }

// //       if (editForm.DA !== "") {
// //         payload.DA = Number(editForm.DA);
// //       }

// //       if (editForm.TA !== "") {
// //   payload.TA = Number(editForm.TA);   // ✅ ADD THIS
// // }

// //       const res = await axios.put(`/src/${editingId}`, payload);

// //       setRows((prev) =>
// //         prev.map((r) => (r._id === editingId ? res.data : r))
// //       );

// //       cancelEdit();
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Update failed");
// //     }
// //   };

//   const deleteRow = async (id) => {
//     if (!window.confirm("Delete this place?")) return;
//     await axios.delete(`/src/${id}`);
//     setRows((prev) => prev.filter((r) => r._id !== id));
//   };

//   /* ───────────── CALCULATIONS ───────────── */
//   const getRsPerKm = (src) =>
//     src.RsPerKmOverride ?? srcConfig.RsPerKm;

//   const getDA = (src) =>
//     src.DAOverride ?? srcConfig.DAperStation[src.station];


//   const getTA = (src) =>
//   src.TAOverride ??
//   (src.station === "HQ"
//     ? 0
//     : (src.kms || 0) * getRsPerKm(src));



//   // const getTA = (src) =>
//   // src.TAOverride ??
//   // (src.station === "HQ" ? 0 : src.kms * getRsPerKm(src));

//   const calcTA = (src) =>
//     src.station === "HQ" ? 0 : src.kms * getRsPerKm(src);

//   /* ───────────── UI ───────────── */
//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden">
//       <div className="p-5 border-b">
//         <h2 className="font-semibold text-lg">SRC Details</h2>
//       </div>

//       <table className="w-full text-sm table-fixed">
//         <thead className="bg-blue-900 text-white">
//           <tr>
//             <th className="px-4 py-3 text-left">Place</th>
//             <th className="px-4 py-3 text-left">HQ / EX / OS</th>
//             <th className="px-4 py-3 text-left">Radius</th>
//             <th className="px-4 py-3 text-left">MOT</th>
//             <th className="px-4 py-3 text-left">To&FroKMs</th>
//             <th className="px-4 py-3 text-left">Rs / Km</th>
//             <th className="px-4 py-3 text-left">TA</th>
//             <th className="px-4 py-3 text-left">DA</th>
//             <th className="px-4 py-3 text-left">Actions</th>
//           </tr>
//         </thead>

//         <tbody className="divide-y">
//           {rows.map((src) => {
//             const isEditing = editingId === src._id;

//             return (
//               <tr key={src._id} className="hover:bg-gray-50 transition">

//                 {/* PLACE */}
//                 <td className="px-4 py-3">
//                   {isEditing ? (
//                     <input
//                       className="input"
//                       value={editForm.placeOfWork}
//                       onChange={(e) =>
//                         setEditForm({ ...editForm, placeOfWork: e.target.value })
//                       }
//                     />
//                   ) : (
//                     src.placeOfWork
//                   )}
//                 </td>

//                 {/* STATION */}
//                 <td className="px-4 py-3">
//                   {isEditing ? (
//                     <select
//                       className="input"
//                       value={editForm.station || "-"}
//                       onChange={(e) =>
//                         setEditForm({ ...editForm, station: e.target.value })
//                       }
//                     >
//                         <option value="-">-</option>
//                       <option value="HQ">HQ</option>
//                       <option value="EX">EX</option>
//                       <option value="OS">OS</option>
//                     </select>
//                   ) : (
//                     src.station
//                   )}
//                 </td>

//                 {/* RADIUS */}
//                 <td className="px-4 py-3">
//                   {isEditing ? (
//                     <input
//                       type="number"
//                       className="input"
//                       value={editForm.radius}
//                       onChange={(e) =>
//                         setEditForm({ ...editForm, radius: e.target.value })
//                       }
//                     />
//                   ) : (
//                     src.radius
//                   )}
//                 </td>

//                 {/* MOT */}
//                 <td className="px-4 py-3">
//                   {isEditing ? (
//                     <select
//                       className="input"
//                       value={editForm.MOT || ""}
//                       onChange={(e) =>
//                         setEditForm({ ...editForm, MOT: e.target.value })
//                       }
//                       disabled={editForm.station === "HQ"}
//                     >
//                         <option value="-">-</option>

//                       <option value="Local">Local</option>
//                       <option value="Bike">Bike</option>
//                       <option value="Bus">Bus</option>
//                       <option value="Train">Train</option>
//                     </select>
//                   ) : (
//                     src.MOT
//                   )}
//                 </td>

//                 {/* KM */}
//                 <td className="px-4 py-3">
//                   {isEditing ? (
//                     <input
//                       type="number"
//                       className="input"
//                       value={editForm.kms ?? ""}
//                       onChange={(e) =>
//                         setEditForm({ ...editForm, kms: e.target.value })
//                       }
//                       disabled={editForm.station === "HQ"}
//                     />
//                   ) : (
//                     src.kms
//                   )}
//                 </td>

//                 {/* Rs / Km (NOW EDITABLE) */}
//                 <td className="px-4 py-3">
//                   {isEditing ? (
//                     <input
//                       type="number"
//                       className="input"
//                       placeholder={getRsPerKm(src)}
//                       value={editForm.RsPerKm}
//                       onChange={(e) =>
//                         setEditForm({ ...editForm, RsPerKm: e.target.value })
//                       }
//                       disabled={editForm.station === "HQ"}
//                     />
//                   ) : (
//                     `₹${getRsPerKm(src)}`
//                   )}
//                 </td>

// <td className="px-4 py-3">
//   {isEditing ? (
//     <input
//       type="number"
//       className="input"
//       placeholder={getTA(src)}
//       value={editForm.TA}
//       onChange={(e) =>
//         setEditForm({ ...editForm, TA: e.target.value })
//       }
//       disabled={editForm.station === "HQ"}
//     />
//   ) : (
//     `₹${getTA(src)}`
//   )}
// </td>

//                 {/* DA */}
//                 <td className="px-4 py-3">
//                   {isEditing ? (
//                     <input
//                       type="number"
//                       className="input"
//                       placeholder={getDA(src)}
//                       value={editForm.DA}
//                       onChange={(e) =>
//                         setEditForm({ ...editForm, DA: e.target.value })
//                       }
//                     />
//                   ) : (
//                     `₹${getDA(src)}`
//                   )}
//                 </td>

//                 {/* ACTIONS */}
//                 <td className="px-4 py-3 text-left">
//                   {isEditing ? (
//                     <div className="flex gap-2 justify-left">
//                       <button onClick={saveEdit} className="btn-submit">
//                         Save
//                       </button>
//                       <button onClick={cancelEdit} className="btn-gray">
//                         Cancel
//                       </button>
//                     </div>
//                   ) : (
//                     <div className="flex gap-2 justify-left">
//                       <button
//                         onClick={() => startEdit(src)}
//                         className="btn-edit"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => deleteRow(src._id)}
//                         className="btn-delete"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   )}
//                 </td>

//               </tr>
//             );
//           })}
//         </tbody>
//       </table>

//       <div className="p-6 border-t">
//         <AddNewSRC setRows={setRows} />
//       </div>
//     </div>
//   );
// }




import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import AddNewSRC from "../srcpage/AddNewSrc";

export default function SrcTable({ srcList, srcConfig, viewedUserRole }) {
  const [rows, setRows] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const sorted = [...srcList].sort((a, b) => {
    if (a.station === "HQ") return -1;
    if (b.station === "HQ") return 1;
    if (a.station === "-" && b.station !== "-") return -1;
    if (a.station !== "-" && b.station === "-") return 1;
    return a.placeOfWork.localeCompare(b.placeOfWork);
  });

  useEffect(() => {
    setRows(sorted);
  }, [srcList]);

  if (!srcConfig) {
    return <p className="p-4">Loading config…</p>;
  }

  /* ───────────── EDIT HANDLERS ───────────── */
  const startEdit = (src) => {
    setEditingId(src._id);
    setEditForm({
      placeOfWork: src.placeOfWork,
      station: src.station,
      radius: src.radius,
      MOT: src.MOT,
      kms: src.kms,
      RsPerKm: src.RsPerKmOverride ?? "",
      DA: src.DAOverride ?? "",
      TA: src.TAOverride ?? "",
    });
  };

  const showUserColumn =
  viewedUserRole === "admin" || viewedUserRole === "manager";

  const showUserId =
  viewedUserRole === "admin" || viewedUserRole === "manager";

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  const saveEdit = async () => {
    try {
      const payload = {
        station: editForm.station,
        radius: Number(editForm.radius) || 0,
        MOT:
          editForm.station === "HQ"
            ? "Local"
            : editForm.MOT || null,
        kms:
          editForm.station === "HQ"
            ? 0
            : editForm.kms
            ? Number(editForm.kms)
            : null,
      };

      if (editForm.RsPerKm !== "")
        payload.RsPerKm = Number(editForm.RsPerKm);

      if (editForm.DA !== "")
        payload.DA = Number(editForm.DA);

      if (editForm.TA !== "")
        payload.TA = Number(editForm.TA);

      const res = await axios.put(`/src/${editingId}`, payload);

      setRows((prev) =>
        prev.map((r) => (r._id === editingId ? res.data : r))
      );

      cancelEdit();
    } catch (err) {
      alert(err.response?.data?.message || "Update failed");
    }
  };

  const deleteRow = async (id) => {
    if (!window.confirm("Delete this place?")) return;
    await axios.delete(`/src/${id}`);
    setRows((prev) => prev.filter((r) => r._id !== id));
  };

  /* ───────────── CALCULATIONS ───────────── */
  const getRsPerKm = (src) =>
    src.RsPerKmOverride ?? srcConfig.RsPerKm;

  const getDA = (src) =>
    src.DAOverride ?? srcConfig.DAperStation[src.station];

  const getTA = (src) =>
    src.TAOverride ??
    (src.station === "HQ"
      ? 0
      : (src.kms || 0) * getRsPerKm(src));

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-5 border-b">
        <h2 className="font-semibold text-lg">SRC Details</h2>
      </div>

      {/* ✅ table-fixed added */}
      <table className="w-full text-sm table-fixed">
        <thead className="bg-blue-900 text-white">
          {/* <tr>
            <th className="px-4 py-3 text-left w-64">Place</th>
            <th className="px-4 py-3 text-left w-24">HQ/EX/OS</th>
            <th className="px-4 py-3 text-left w-24">Radius</th>
            <th className="px-4 py-3 text-left w-24">MOT</th>
            <th className="px-4 py-3 text-left w-24">To&FroKMs</th>
            <th className="px-4 py-3 text-left w-24">Rs/Km</th>
            <th className="px-4 py-3 text-left w-28">TA</th>
            <th className="px-4 py-3 text-left w-28">DA</th>
            <th className="px-4 py-3 text-left w-40">Actions</th>
          </tr> */}

          <tr>
  <th className="px-4 py-3 text-left w-56">Place</th>
  <th className="px-4 py-3 text-left w-20">HQ/EX/OS</th>
  <th className="px-4 py-3 text-left w-20">Radius</th>
  <th className="px-4 py-3 text-left w-24">MOT</th>
  <th className="px-4 py-3 text-left w-24">To&FroKMs</th>
  <th className="px-4 py-3 text-left w-24">Rs/Km</th>
  <th className="px-4 py-3 text-left w-24">TA</th>
  <th className="px-4 py-3 text-left w-24">DA</th>
  <th className="px-4 py-3 text-left w-32">Actions</th>
</tr>

        </thead>

        <tbody className="divide-y">
          {rows.map((src) => {
            const isEditing = editingId === src._id;

            return (
              <tr
                key={src._id}
                className={`transition ${
                  isEditing
                    ? "bg-gray-100"
                    : "hover:bg-gray-50"
                }`}
              >
                {/* PLACE */}
                {/* <td className="px-4 py-3">
                  {isEditing ? (
                    <input
                      className="input w-full"
                      value={editForm.placeOfWork}
                      onChange={(e) =>
                        setEditForm({ ...editForm, placeOfWork: e.target.value })
                      }
                    />
                  ) : (
                    src.placeOfWork
                  )}
                </td> */}


                {/* PLACE */}
{/* <td className="px-4 py-3">
  {isEditing ? (
    <input
      className="input w-full"
      value={editForm.placeOfWork}
      onChange={(e) =>
        setEditForm({ ...editForm, placeOfWork: e.target.value })
      }
    />
  ) : (
    <span>
      {src.placeOfWork}
      {showUserId && src.originUser?.userId && (
        <span className="text-gray-600 text-s ml-1">
          ({src.originUser.userId})
        </span>
      )}
    </span>
  )}
</td> */}

<td className="px-4 py-3">
  {isEditing ? (
    <input
      className="input w-full"
      value={editForm.placeOfWork}
      onChange={(e) =>
        setEditForm({ ...editForm, placeOfWork: e.target.value })
      }
    />
  ) : (
    <span className="block truncate">
      {src.placeOfWork}
      {showUserId && src.originUser?.userId && (
        <span className="text-gray-500 text-xs ml-1">
          ({src.originUser.userId})
        </span>
      )}
    </span>
  )}
</td>

                {/* STATION */}
                <td className="px-4 py-3">
                  {isEditing ? (
                    <select
                      className="input w-full"
                      value={editForm.station || "-"}
                      onChange={(e) =>
                        setEditForm({ ...editForm, station: e.target.value })
                      }
                    >
                      <option value="-">-</option>
                      <option value="HQ">HQ</option>
                      <option value="EX">EX</option>
                      <option value="OS">OS</option>
                    </select>
                  ) : (
                    src.station
                  )}
                </td>

                {/* RADIUS */}
                <td className="px-4 py-3">
                  {isEditing ? (
                    <input
                      type="number"
                      className="input w-full"
                      value={editForm.radius}
                      onChange={(e) =>
                        setEditForm({ ...editForm, radius: e.target.value })
                      }
                    />
                  ) : (
                    src.radius
                  )}
                </td>

                {/* MOT */}
                <td className="px-4 py-3">
                  {isEditing ? (
                    <select
                      className="input w-full"
                      value={editForm.MOT || ""}
                      onChange={(e) =>
                        setEditForm({ ...editForm, MOT: e.target.value })
                      }
                      disabled={editForm.station === "HQ"}
                    >
                      <option value="-">-</option>
                      <option value="Local">Local</option>
                      <option value="Bike">Bike</option>
                      <option value="Bus">Bus</option>
                      <option value="Train">Train</option>
                    </select>
                  ) : (
                    src.MOT
                  )}
                </td>

                {/* KM */}
                <td className="px-4 py-3">
                  {isEditing ? (
                    <input
                      type="number"
                      className="input w-full"
                      value={editForm.kms ?? ""}
                      onChange={(e) =>
                        setEditForm({ ...editForm, kms: e.target.value })
                      }
                      disabled={editForm.station === "HQ"}
                    />
                  ) : (
                    src.kms
                  )}
                </td>

                {/* Rs / Km */}
                <td className="px-4 py-3">
                  {isEditing ? (
                    <input
                      type="number"
                      className="input w-full"
                      placeholder={getRsPerKm(src)}
                      value={editForm.RsPerKm}
                      onChange={(e) =>
                        setEditForm({ ...editForm, RsPerKm: e.target.value })
                      }
                      disabled={editForm.station === "HQ"}
                    />
                  ) : (
                    `₹${getRsPerKm(src)}`
                  )}
                </td>

                {/* TA */}
                <td className="px-4 py-3">
                  {isEditing ? (
                    <input
                      type="number"
                      className="input w-full"
                      placeholder={getTA(src)}
                      value={editForm.TA}
                      onChange={(e) =>
                        setEditForm({ ...editForm, TA: e.target.value })
                      }
                      disabled={editForm.station === "HQ"}
                    />
                  ) : (
                    `₹${getTA(src)}`
                  )}
                </td>

                {/* DA */}
                <td className="px-4 py-3">
                  {isEditing ? (
                    <input
                      type="number"
                      className="input w-full"
                      placeholder={getDA(src)}
                      value={editForm.DA}
                      onChange={(e) =>
                        setEditForm({ ...editForm, DA: e.target.value })
                      }
                    />
                  ) : (
                    `₹${getDA(src)}`
                  )}
                </td>

                {/* {showUserColumn && (
  <td className="px-4 py-3">
    {src.originUser?.userId || "-"}
  </td>
)} */}

                {/* ACTIONS */}
                <td className="px-4 py-3 text-left">
                  {isEditing ? (
                    <div className="flex gap-2 justify-left">
                      <button onClick={saveEdit} className="btn-submit">
                        Save
                      </button>
                      <button onClick={cancelEdit} className="btn-gray">
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-2 justify-left">
                      <button
                        onClick={() => startEdit(src)}
                        className="btn-edit"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteRow(src._id)}
                        className="btn-delete"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="p-6 border-t">
        <AddNewSRC setRows={setRows} />
      </div>
    </div>
  );
}












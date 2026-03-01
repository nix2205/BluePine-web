// // // // // export default function Dashboard() {
// // // // //   const company = JSON.parse(localStorage.getItem("company"));
// // // // //   const user = JSON.parse(localStorage.getItem("user"));

// // // // //   return (
// // // // //     <div className="p-6">
// // // // //       <img src={company.logoUrl} className="h-16 mb-4" />
// // // // //       <h1 className="text-2xl font-bold">
// // // // //         Welcome to {company.name}
// // // // //         logo url {company.logoUrl}
// // // // //       </h1>
// // // // //       <p className="text-slate-600">
// // // // //         Logged in as {user.username}
// // // // //       </p>
// // // // //     </div>
// // // // //   );
// // // // // }






// // // // // export default function Dashboard() {
// // // // //   const company = JSON.parse(localStorage.getItem("company"));
// // // // //   const user = JSON.parse(localStorage.getItem("user"));

// // // // //   const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// // // // //   const logoUrl = company?.logoUrl
// // // // //     ? `${SERVER_URL}/${company.logoUrl}`
// // // // //     : null;

// // // // //   return (
// // // // //     <div className="p-6">
// // // // //       {logoUrl && (
// // // // //         <img src={logoUrl} alt="Company Logo" className="h-16 mb-4" />
// // // // //       )}

// // // // //       <h1 className="text-2xl font-bold">
// // // // //         Welcome to {company.name}
// // // // //         Logourl {logoUrl}
// // // // //       </h1>

// // // // //       <p className="text-slate-600">
// // // // //         Logged in as {user.username}
// // // // //       </p>
// // // // //     </div>
// // // // //   );
// // // // // }





// // // // import AppLayout from "../layouts/AppLayout";

// // // // export default function Dashboard() {
// // // //   const company = JSON.parse(localStorage.getItem("company"));
// // // //   const user = JSON.parse(localStorage.getItem("user"));

// // // //   const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// // // //   const logoUrl = company?.logoUrl
// // // //     ? `${SERVER_URL}/${company.logoUrl}`
// // // //     : null;

// // // //   return (
// // // //     <AppLayout title="Dashboard" backTo="/login">
// // // //       <div className="p-6">
// // // //         {logoUrl && (
// // // //           <img
// // // //             src={logoUrl}
// // // //             alt="Company Logo"
// // // //             className="h-16 mb-4"
// // // //           />
// // // //         )}

// // // //         <h1 className="text-2xl font-bold">
// // // //           Welcome to {company?.name}
// // // //         </h1>

// // // //         <p className="text-slate-600">
// // // //           Logged in as {user?.username}
// // // //         </p>
// // // //       </div>
// // // //     </AppLayout>
// // // //   );
// // // // }



// // // import { useNavigate } from "react-router-dom";
// // // import { useEffect, useState } from "react";
// // // import AppLayout from "../layouts/AppLayout";
// // // import axios from "../utils/axios";

// // // export default function Dashboard() {
// // //   const navigate = useNavigate();
// // //   const [users, setUsers] = useState([]);

// // //   const company = JSON.parse(localStorage.getItem("company"));
// // //   const user = JSON.parse(localStorage.getItem("user"));

// // //   const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// // //   const logoUrl = company?.logoUrl
// // //     ? `${SERVER_URL}/${company.logoUrl}`
// // //     : null;

// // //   useEffect(() => {
// // //     fetchUsers();
// // //   }, []);

// // //   const fetchUsers = async () => {
// // //     try {
// // //       const { data } = await axios.get("/users");
// // //       setUsers(data);
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   };

// // //   return (
// // //     <AppLayout title="Dashboard" backTo="/login">
// // //       <div className="p-6">

// // //         {logoUrl && (
// // //           <img src={logoUrl} alt="Company Logo" className="h-16 mb-4" />
// // //         )}

// // //         <h1 className="text-2xl font-bold">
// // //           Welcome to {company?.name}
// // //         </h1>

// // //         <p className="text-slate-600 mb-6">
// // //           Logged in as {user?.username}
// // //         </p>

// // //         <button
// // //           onClick={() => navigate("/add-user")}
// // //           className="bg-[#1f3a5f] text-white px-6 py-2 rounded-lg mb-6"
// // //         >
// // //           ➕ Add User
// // //         </button>

// // //         {/* USER LIST */}
// // //         <div className="bg-white rounded shadow p-4">
// // //           <h2 className="font-semibold mb-3">Users</h2>

// // //           <table className="w-full text-sm">
// // //             <thead className="bg-slate-100">
// // //               <tr>
// // //                 <th>User ID</th>
// // //                 <th>Username</th>
// // //                 <th>Role</th>
// // //                 <th>Action</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {users.map((u) => (
// // //                 <tr key={u._id} className="border-t">
// // //                   <td>{u.userId}</td>
// // //                   <td>{u.username}</td>
// // //                   <td>{u.role}</td>
// // //                   <td className="space-x-4">
// // //   <button
// // //     onClick={() => navigate(`/src/${u._id}`)}
// // //     className="text-blue-600 font-medium"
// // //   >
// // //     Edit SRC →
// // //   </button>

// // //   <button
// // //   onClick={() => navigate(`/admin/expenses/${u._id}`)}   // ✅ FIXED
// // //   className="text-green-600 font-medium"
// // // >
// // //   Show Exp →
// // // </button>

// // // </td>

// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>

// // //         </div>
// // //       </div>
// // //     </AppLayout>
// // //   );
// // // }




// // // import { useNavigate } from "react-router-dom";
// // // import { useEffect, useState } from "react";
// // // import AppLayout from "../layouts/AppLayout";
// // // import axios from "../utils/axios";

// // // export default function Dashboard() {
// // //   const navigate = useNavigate();
// // //   const [users, setUsers] = useState([]);

// // //   const company = JSON.parse(localStorage.getItem("company"));
// // //   const user = JSON.parse(localStorage.getItem("user"));

// // //   const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// // //   useEffect(() => {
// // //     fetchDashboard();
// // //   }, []);

// // //   const fetchDashboard = async () => {
// // //     try {
// // //       const { data } = await axios.get("/admin-dashboard/dashboard");
// // //       setUsers(data);
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   };

// // //   const handleDeleteUser = async (id) => {
// // //     const confirm = window.confirm("Delete this user?");
// // //     if (!confirm) return;

// // //     try {
// // //       await axios.delete(`/users/${id}`);
// // //       fetchDashboard();
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   };

// // //   const handlePDF = () => {
// // //     window.open(`${SERVER_URL}/api/admin/export/pdf`, "_blank");
// // //   };

// // //   const handleExcel = () => {
// // //     window.open(`${SERVER_URL}/api/admin/export/excel`, "_blank");
// // //   };

// // //   return (
// // //     <AppLayout title="Admin Home Page" backTo="/login">
// // //       <div className="p-6">

// // //         {/* TOP BAR */}
// // //         <div className="flex justify-between items-center mb-6">
// // //           <h1 className="text-2xl font-bold">
// // //             Welcome to {company?.name}
// // //           </h1>

// // //           <div className="flex gap-4">
// // //             <button
// // //               onClick={handlePDF}
// // //               className="bg-green-600 text-white px-5 py-2 rounded-lg shadow"
// // //             >
// // //               📄 PDF
// // //             </button>

// // //             <button
// // //               onClick={handleExcel}
// // //               className="bg-yellow-500 text-white px-5 py-2 rounded-lg shadow"
// // //             >
// // //               📊 Excel
// // //             </button>

// // //             <button
// // //               onClick={() => navigate("/add-user")}
// // //               className="bg-[#1f3a5f] text-white px-6 py-2 rounded-lg shadow"
// // //             >
// // //               ➕ Add User
// // //             </button>
// // //           </div>
// // //         </div>

// // //         <p className="text-slate-600 mb-6">
// // //           Logged in as {user?.username}
// // //         </p>

// // //         {/* USER LIST */}
// // //         <div className="space-y-4">
// // //           {users.map((u, index) => (
// // //             <div
// // //               key={u._id}
// // //               className="bg-white rounded-xl shadow p-5 flex justify-between items-center"
// // //             >
// // //               {/* LEFT SECTION */}
// // //               <div className="flex gap-6 items-start">

// // //                 <div className="font-bold text-lg">
// // //                   {index + 1}.
// // //                 </div>

// // //                 <div>
// // //                   <div className="text-lg font-semibold">
// // //                     {u.username} ({u.userId})
// // //                   </div>

// // //                   <div className="text-slate-600 text-sm">
// // //                     {u.hq}
// // //                   </div>

// // //                   <div className="text-sm text-slate-500 mt-1">
// // //                     Last Reported: {u.lastReported}
// // //                   </div>

// // //                   <div className="text-sm text-slate-500">
// // //                     NW Days: {u.NWdays}
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* RIGHT SECTION */}
// // //               <div className="flex items-center gap-8">

// // //                 {/* MONTH TOTAL + APPROVAL STATUS */}
// // //                 <div className="text-right">
// // //                   <div className="font-semibold text-blue-900">
// // //                     {u.month}: ₹{u.total}
// // //                   </div>

// // //                   <div className="flex justify-end gap-3 mt-1 text-lg">
// // //                     {/* approvedByUser */}
// // //                     {u.approvedByUser ? (
// // //                       <span className="text-green-600">✔</span>
// // //                     ) : (
// // //                       <span className="text-red-500">✖</span>
// // //                     )}

// // //                     {/* approvedBySuperior */}
// // //                     {u.approvedBySuperior ? (
// // //                       <span className="text-green-600">✔</span>
// // //                     ) : (
// // //                       <span className="text-red-500">✖</span>
// // //                     )}
// // //                   </div>
// // //                 </div>

// // //                 {/* ACTION BUTTONS */}
// // //                 <div className="flex gap-3">

// // //                   <button
// // //                     onClick={() =>
// // //                       navigate(`/admin/expenses/${u._id}`)
// // //                     }
// // //                     className="bg-slate-700 text-white px-4 py-1 rounded-md text-sm"
// // //                   >
// // //                     Show Exp
// // //                   </button>

// // //                   <button
// // //                     onClick={() =>
// // //                       navigate(`/src/${u._id}`)
// // //                     }
// // //                     className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm"
// // //                   >
// // //                     Edit SRC
// // //                   </button>

// // //                   <button
// // //                     onClick={() => handleDeleteUser(u._id)}
// // //                     className="bg-red-600 text-white px-4 py-1 rounded-md text-sm"
// // //                   >
// // //                     Delete
// // //                   </button>

// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //       </div>
// // //     </AppLayout>
// // //   );
// // // }









// // import { useNavigate } from "react-router-dom";
// // import { useEffect, useState } from "react";
// // import AppLayout from "../layouts/AppLayout";
// // import axios from "../utils/axios";
// // import html2canvas from "html2canvas";
// // import jsPDF from "jspdf";
// // import * as XLSX from "xlsx";
// // import { saveAs } from "file-saver";
// // import { useRef } from "react";


// // export default function Dashboard() {
// //   const navigate = useNavigate();
// //   const [users, setUsers] = useState([]);

// //   const SERVER_URL = process.env.REACT_APP_SERVER_URL;
// //   const contentRef = useRef();


// //   useEffect(() => {
// //     fetchDashboard();
// //   }, []);

// //   const fetchDashboard = async () => {
// //     try {
// //       const { data } = await axios.get("/admin-dashboard/dashboard");
// //       setUsers(data);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const handleDeleteUser = async (id) => {
// //     const confirm = window.confirm("Delete this user?");
// //     if (!confirm) return;

// //     try {
// //       await axios.delete(`/users/${id}`);
// //       fetchDashboard();
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const handlePDF = async () => {
// //   const element = contentRef.current;

// //   const canvas = await html2canvas(element, {
// //     scale: 1.5,
// //     useCORS: true,
// //   });

// //   const imgData = canvas.toDataURL("image/jpeg", 0.7);

// //   const pdf = new jsPDF("p", "mm", "a4");

// //   const imgWidth = 210;
// //   const pageHeight = 295;
// //   const imgHeight = (canvas.height * imgWidth) / canvas.width;

// //   let heightLeft = imgHeight;
// //   let position = 0;

// //   pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
// //   heightLeft -= pageHeight;

// //   while (heightLeft > 0) {
// //     position = heightLeft - imgHeight;
// //     pdf.addPage();
// //     pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
// //     heightLeft -= pageHeight;
// //   }

// //   pdf.save("UserList.pdf");
// // };


// // const handleExcel = () => {
// //   const excelData = users.map((u) => ({
// //     Username: u.username,
// //     UserID: u.userId,
// //     HQ: u.hq,
// //     PrevMonth: u.prevMonth?.month,
// //     PrevTotal: u.prevMonth?.total || 0,
// //     CurrentMonth: u.currentMonth?.month,
// //     CurrentTotal: u.currentMonth?.total || 0,
// //     NWdays: u.NWdays,
// //     LastReported: u.lastReported,
// //   }));

// //   const worksheet = XLSX.utils.json_to_sheet(excelData);
// //   const workbook = XLSX.utils.book_new();
// //   XLSX.utils.book_append_sheet(workbook, worksheet, "UserList");

// //   const excelBuffer = XLSX.write(workbook, {
// //     bookType: "xlsx",
// //     type: "array",
// //   });

// //   const data = new Blob([excelBuffer], {
// //     type:
// //       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
// //   });

// //   saveAs(data, "UserList.xlsx");
// // };

// //   return (
// //     <AppLayout title="User List" backTo="/login">
// //       <div ref={contentRef}>

// //       <div className="p-6">

// //         {/* TOP BAR */}
// //         <div className="flex justify-between items-center mb-6">
// //           <h1 className="text-2xl font-bold">User List</h1>

// //           <div className="flex gap-4">
// //             <button
// //               onClick={handlePDF}
// //               className="bg-green-600 text-white px-5 py-2 rounded-lg shadow"
// //             >
// //               📄 PDF
// //             </button>

// //             <button
// //               onClick={handleExcel}
// //               className="bg-yellow-500 text-white px-5 py-2 rounded-lg shadow"
// //             >
// //               📊 Excel
// //             </button>

// //             <button
// //               onClick={() => navigate("/add-user")}
// //               className="bg-[#1f3a5f] text-white px-6 py-2 rounded-lg shadow"
// //             >
// //               ➕ Add User
// //             </button>
// //           </div>
// //         </div>

// //         {/* USER LIST */}
// //         <div className="space-y-4">
// //           {users.map((u, index) => (
// //             <div
// //               key={u._id}
// //               className="bg-white rounded-xl shadow p-5 flex justify-between items-center"
// //             >
// //               {/* LEFT SECTION */}
// //               <div className="flex gap-6 items-start">
// //                 <div className="font-bold text-lg">
// //                   {index + 1}.
// //                 </div>

// //                 <div>
// //                   <div className="text-lg font-semibold">
// //                     {u.username} ({u.userId})
// //                   </div>

// //                   <div className="text-slate-600 text-sm">
// //                     {u.hq}
// //                   </div>

// //                   <div className="text-sm text-slate-500 mt-1">
// //                     Last Reported: {u.lastReported}
// //                   </div>

// //                   <div className="text-sm text-slate-500">
// //                     NW Days: {u.NWdays}
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* RIGHT SECTION */}
// //               <div className="flex items-center gap-10">

// //                 {/* PREVIOUS MONTH */}
// //                 <div className="text-right">
// //                   <div className="font-semibold text-gray-700">
// //                     {u.prevMonth?.month}: ₹{u.prevMonth?.total || 0}
// //                   </div>
// //                   <div className="flex justify-end gap-2 mt-1 text-sm">
// //                     {u.prevMonth?.approvedByUser ? (
// //                       <span className="text-green-600">✔</span>
// //                     ) : (
// //                       <span className="text-red-500">✖</span>
// //                     )}

// //                     {u.prevMonth?.approvedBySuperior ? (
// //                       <span className="text-green-600">✔</span>
// //                     ) : (
// //                       <span className="text-red-500">✖</span>
// //                     )}
// //                   </div>
// //                 </div>

// //                 {/* CURRENT MONTH */}
// //                 <div className="text-right">
// //                   <div className="font-semibold text-blue-900">
// //                     {u.currentMonth?.month}: ₹{u.currentMonth?.total || 0}
// //                   </div>
// //                   <div className="flex justify-end gap-2 mt-1 text-sm">
// //                     {u.currentMonth?.approvedByUser ? (
// //                       <span className="text-green-600">✔</span>
// //                     ) : (
// //                       <span className="text-red-500">✖</span>
// //                     )}

// //                     {u.currentMonth?.approvedBySuperior ? (
// //                       <span className="text-green-600">✔</span>
// //                     ) : (
// //                       <span className="text-red-500">✖</span>
// //                     )}
// //                   </div>
// //                 </div>

// //                 {/* ACTION BUTTONS */}
// //                 <div className="flex gap-3">
// //                   <button
// //                     onClick={() =>
// //                       navigate(`/admin/expenses/${u._id}`)
// //                     }
// //                     className="bg-slate-700 text-white px-4 py-1 rounded-md text-sm"
// //                   >
// //                     Show Exp
// //                   </button>

// //                   <button
// //                     onClick={() =>
// //                       navigate(`/src/${u._id}`)
// //                     }
// //                     className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm"
// //                   >
// //                     Edit SRC
// //                   </button>

// //                   <button
// //                     onClick={() => handleDeleteUser(u._id)}
// //                     className="bg-red-600 text-white px-4 py-1 rounded-md text-sm"
// //                   >
// //                     Delete
// //                   </button>
// //                 </div>

// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //       </div>
// //       </div>

// //     </AppLayout>
// //   );
// // }







// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import AppLayout from "../layouts/AppLayout";
// import axios from "../utils/axios";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";
// import { useRef } from "react";

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const [users, setUsers] = useState([]);

//   const [pageLoading, setPageLoading] = useState(true);

//   const [announcementModal, setAnnouncementModal] = useState(false);
//   const [announcementText, setAnnouncementText] = useState("");
//   const [announcementLoading, setAnnouncementLoading] = useState(false);

//   const contentRef = useRef();

//   useEffect(() => {
//     fetchDashboard();
//   }, []);

//   const fetchDashboard = async () => {
//     try {
//       setPageLoading(true);
//       const { data } = await axios.get("/admin-dashboard/dashboard");
//       setUsers(data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setPageLoading(false);
//     }
//   };

//   const handleAnnouncementSave = async () => {
//     if (!announcementText.trim()) return;

//     try {
//       setAnnouncementLoading(true);

//       await axios.post("/announcement/upsert", {
//         message: announcementText,
//       });

//       setAnnouncementModal(false);
//       setAnnouncementText("");
//       alert("Announcement updated successfully");
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setAnnouncementLoading(false);
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     const confirm = window.confirm("Delete this user?");
//     if (!confirm) return;

//     try {
//       await axios.delete(`/users/${id}`);
//       fetchDashboard();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handlePDF = async () => {
//     const element = contentRef.current;

//     const canvas = await html2canvas(element, {
//       scale: 1.5,
//       useCORS: true,
//     });

//     const imgData = canvas.toDataURL("image/jpeg", 0.7);
//     const pdf = new jsPDF("p", "mm", "a4");

//     const imgWidth = 210;
//     const pageHeight = 295;
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;

//     let heightLeft = imgHeight;
//     let position = 0;

//     pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
//     heightLeft -= pageHeight;

//     while (heightLeft > 0) {
//       position = heightLeft - imgHeight;
//       pdf.addPage();
//       pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
//       heightLeft -= pageHeight;
//     }

//     pdf.save("UserList.pdf");
//   };

//   const handleExcel = () => {
//     const excelData = users.map((u) => ({
//       Username: u.username,
//       UserID: u.userId,
//       HQ: u.hq,
//       PrevMonth: u.prevMonth?.month,
//       PrevTotal: u.prevMonth?.total || 0,
//       CurrentMonth: u.currentMonth?.month,
//       CurrentTotal: u.currentMonth?.total || 0,
//       NWdays: u.NWdays,
//       LastReported: u.lastReported,
//     }));

//     const worksheet = XLSX.utils.json_to_sheet(excelData);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "UserList");

//     const excelBuffer = XLSX.write(workbook, {
//       bookType: "xlsx",
//       type: "array",
//     });

//     const data = new Blob([excelBuffer], {
//       type:
//         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
//     });

//     saveAs(data, "UserList.xlsx");
//   };

//   if (pageLoading) {
//     return (
//       <AppLayout title="User List" backTo="/login">
//         <div className="flex justify-center items-center h-[70vh] text-xl font-semibold">
//           Loading dashboard...
//         </div>
//       </AppLayout>
//     );
//   }

//   return (
//     <AppLayout title="User List" backTo="/login">
//       <div ref={contentRef}>
//         <div className="p-6">

//           {/* TOP BAR */}
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-2xl font-bold">User List</h1>

//             <div className="flex gap-4">
//               <button
//                 onClick={() => setAnnouncementModal(true)}
//                 className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow"
//               >
//                 📢
//               </button>

//               <button
//                 onClick={handlePDF}
//                 className="bg-green-600 text-white px-5 py-2 rounded-lg shadow"
//               >
//                 📄 PDF
//               </button>

//               <button
//                 onClick={handleExcel}
//                 className="bg-yellow-500 text-white px-5 py-2 rounded-lg shadow"
//               >
//                 📊 Excel
//               </button>

//               <button
//                 onClick={() => navigate("/add-user")}
//                 className="bg-[#1f3a5f] text-white px-6 py-2 rounded-lg shadow"
//               >
//                 ➕ Add User
//               </button>
//               <button
//   onClick={() => navigate("/executive-dashboard")}
//   className="bg-[#2C3E65] text-white px-5 py-2 rounded-lg shadow"
// >
//   👤 My Dashboard
// </button>
//             </div>
//           </div>

//           {/* USER LIST */}
//           <div className="space-y-4">
//             {users.map((u, index) => (
//               <div
//                 key={u._id}
//                 className="bg-white rounded-xl shadow p-5 flex justify-between items-center"
//               >
//                 <div className="flex gap-6 items-start">
//                   <div className="font-bold text-lg">{index + 1}.</div>

//                   <div>
//                     <div className="text-lg font-semibold">
//                       {u.username} ({u.userId})
//                     </div>

//                     <div className="text-slate-600 text-sm">{u.hq}</div>

//                     <div className="text-sm text-slate-500 mt-1">
//                       Last Reported: {u.lastReported}
//                     </div>

//                     <div className="text-sm text-slate-500">
//                       NW Days: {u.NWdays}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-10">
//                   <div className="text-right">
//                     <div className="font-semibold text-gray-700">
//                       {u.prevMonth?.month}: ₹{u.prevMonth?.total || 0}
//                     </div>
//                   </div>

//                   <div className="text-right">
//                     <div className="font-semibold text-blue-900">
//                       {u.currentMonth?.month}: ₹{u.currentMonth?.total || 0}
//                     </div>
//                   </div>

//                   <div className="flex gap-3">
//                     <button
//                       onClick={() =>
//                         navigate(`/admin/expenses/${u._id}`)
//                       }
//                       className="bg-slate-700 text-white px-4 py-1 rounded-md text-sm"
//                     >
//                       Show Exp
//                     </button>

//                     <button
//                       onClick={() => navigate(`/src/${u._id}`)}
//                       className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm"
//                     >
//                       Edit SRC
//                     </button>

//                     <button
//                       onClick={() => handleDeleteUser(u._id)}
//                       className="bg-red-600 text-white px-4 py-1 rounded-md text-sm"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>

//       {/* Announcement Modal */}
//       {announcementModal && (
//         <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-xl shadow-lg w-[400px]">
//             <h2 className="text-lg font-semibold mb-4">
//               Create Announcement
//             </h2>

//             <textarea
//               value={announcementText}
//               onChange={(e) => setAnnouncementText(e.target.value)}
//               className="w-full border rounded-lg p-3 mb-4"
//               rows={4}
//               placeholder="Enter announcement..."
//             />

//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => setAnnouncementModal(false)}
//                 className="px-4 py-2 bg-gray-200 rounded-md"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleAnnouncementSave}
//                 disabled={announcementLoading}
//                 className="px-4 py-2 bg-purple-600 text-white rounded-md"
//               >
//                 {announcementLoading ? "Saving..." : "Save"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </AppLayout>
//   );
// }





import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AppLayout from "../layouts/AppLayout";
import axios from "../utils/axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useRef } from "react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [announcementModal, setAnnouncementModal] = useState(false);
  const [announcementText, setAnnouncementText] = useState("");
  const [announcementLoading, setAnnouncementLoading] = useState(false);
  const loggedUser = JSON.parse(localStorage.getItem("user"));

  const contentRef = useRef();

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      setPageLoading(true);
      const { data } = await axios.get("/admin-dashboard/dashboard");
      setUsers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setPageLoading(false);
    }
  };

  const handleAnnouncementSave = async () => {
    if (!announcementText.trim()) return;

    try {
      setAnnouncementLoading(true);

      await axios.post("/announcement/upsert", {
        message: announcementText,
      });

      setAnnouncementModal(false);
      setAnnouncementText("");
      alert("Announcement updated successfully");
    } catch (err) {
      console.error(err);
    } finally {
      setAnnouncementLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    const confirm = window.confirm("Delete this user?");
    if (!confirm) return;

    try {
      await axios.delete(`/users/${id}`);
      fetchDashboard();
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("company");
  navigate("/login");
};




  const handlePDF = async () => {
    const element = contentRef.current;

    const canvas = await html2canvas(element, {
      scale: 1.5,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.7);
    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("UserList.pdf");
  };

  const handleExcel = () => {
    const excelData = users.map((u) => ({
      Username: u.username,
      UserID: u.userId,
      HQ: u.hq,
      PrevMonth: u.prevMonth?.month,
      PrevTotal: u.prevMonth?.total || 0,
      PrevNWdays: u.prevMonth?.NWdays || 0,
      PrevUserApproved: u.prevMonth?.approvedByUser,
      PrevSuperiorApproved: u.prevMonth?.approvedBySuperior,
      CurrentMonth: u.currentMonth?.month,
      CurrentTotal: u.currentMonth?.total || 0,
      CurrentNWdays: u.currentMonth?.NWdays || 0,
      CurrentUserApproved: u.currentMonth?.approvedByUser,
      CurrentSuperiorApproved: u.currentMonth?.approvedBySuperior,
      LastReported: u.lastReported,
    }));

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "UserList");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    

    const data = new Blob([excelBuffer], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });

    saveAs(data, "UserList.xlsx");
  };

  if (pageLoading) {
    return (
      <AppLayout title="User List" backTo="/login">
        <div className="flex justify-center items-center h-[70vh] text-xl font-semibold">
          Loading dashboard...
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout title="User List">
      <div ref={contentRef}>
        <div className="p-6">

<div className="flex justify-between items-center mb-6">
  <div>
    <h1 className="text-2xl font-bold">User List</h1>
    <div className="text-sm text-slate-600 mt-1">
      Logged in as: <span className="font-semibold">
        {loggedUser?.username} ({loggedUser?.userId})
      </span>
    </div>
  </div>

  <div className="flex gap-4">
    <button
      onClick={() => setAnnouncementModal(true)}
      className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow"
    >
      📢
    </button>

    <button
      onClick={handlePDF}
      className="bg-green-600 text-white px-5 py-2 rounded-lg shadow"
    >
      📄 PDF
    </button>

    <button
      onClick={handleExcel}
      className="bg-yellow-500 text-white px-5 py-2 rounded-lg shadow"
    >
      📊 Excel
    </button>

    <button
      onClick={() => navigate("/add-user")}
      className="bg-[#1f3a5f] text-white px-6 py-2 rounded-lg shadow"
    >
      ➕ Add User
    </button>

    <button
      onClick={() => navigate("/executive-dashboard")}
      className="bg-[#2C3E65] text-white px-5 py-2 rounded-lg shadow"
    >
      👤 My Dashboard
    </button>

    {/* NEW LOGOUT BUTTON */}
    <button
      onClick={handleLogout}
      className="bg-red-700 text-white px-5 py-2 rounded-lg shadow"
    >
      Logout
    </button>
  </div>
</div>

          <div className="space-y-4">
            {users.map((u, index) => (
              <div
                key={u._id}
                className="bg-white rounded-xl shadow p-5 flex justify-between items-center"
              >
                <div className="flex gap-6 items-start">
                  <div className="font-bold text-lg">{index + 1}.</div>

                  <div>
                    <div className="text-lg font-semibold">
                      {u.username} ({u.userId})
                    </div>

                    <div className="text-slate-600 text-sm">{u.hq}</div>

                    <div className="text-sm text-slate-500 mt-1">
                      Last Reported: {u.lastReported}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-10">

                  {/* PREVIOUS MONTH */}
                  <div className="text-right">
                    <div className="font-semibold text-gray-700">
                      {u.prevMonth?.month}: ₹{u.prevMonth?.total || 0}
                    </div>

                    <div className="flex justify-end gap-2 mt-1 text-sm">
                      <span>{u.prevMonth?.approvedByUser ? "✅" : "❌"}</span>
                      <span>{u.prevMonth?.approvedBySuperior ? "✅" : "❌"}</span>
                    </div>

                    <div className="text-xs text-slate-500 mt-1 space-y-1">
                        <div>NW Days: {u.prevMonth?.NWdays || 0}</div>
                        <div>TR Days: {u.prevMonth?.TRdays || 0}</div>
                    </div>
                  </div>

                  {/* CURRENT MONTH */}
                  <div className="text-right">
                    <div className="font-semibold text-blue-900">
                      {u.currentMonth?.month}: ₹{u.currentMonth?.total || 0}
                    </div>

                    <div className="flex justify-end gap-2 mt-1 text-sm">
                      <span>{u.currentMonth?.approvedByUser ? "✅" : "❌"}</span>
                      <span>{u.currentMonth?.approvedBySuperior ? "✅" : "❌"}</span>
                    </div>

                    <div className="text-xs text-slate-500 mt-1 space-y-1">
  <div>NW Days: {u.currentMonth?.NWdays || 0}</div>
  <div>TR Days: {u.currentMonth?.TRdays || 0}</div>
</div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        navigate(`/admin/expenses/${u._id}`)
                      }
                      className="bg-slate-700 text-white px-4 py-1 rounded-md text-sm"
                    >
                      Show Exp
                    </button>

                    <button
                      onClick={() => navigate(`/src/${u._id}`)}
                      className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm"
                    >
                      Edit SRC
                    </button>

                    <button
  onClick={() => navigate(`/admin/mappings/${u._id}`)}
  className="bg-indigo-600 text-white px-4 py-1 rounded-md text-sm"
>
  View Map
</button>

                    <button
                      onClick={() => handleDeleteUser(u._id)}
                      className="bg-red-600 text-white px-4 py-1 rounded-md text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {announcementModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[400px]">
            <h2 className="text-lg font-semibold mb-4">
              Create Announcement
            </h2>

            <textarea
              value={announcementText}
              onChange={(e) => setAnnouncementText(e.target.value)}
              className="w-full border rounded-lg p-3 mb-4"
              rows={4}
              placeholder="Enter announcement..."
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setAnnouncementModal(false)}
                className="px-4 py-2 bg-gray-200 rounded-md"
              >
                Cancel
              </button>

              <button
                onClick={handleAnnouncementSave}
                disabled={announcementLoading}
                className="px-4 py-2 bg-purple-600 text-white rounded-md"
              >
                {announcementLoading ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
}
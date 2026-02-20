// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "../utils/axios";
// // import dayjs from "dayjs";
// // import NormalExpenseTable from "../components/expense/NormalExpenseTable";
// // import OtherExpenseTable from "../components/expense/OtherExpenseTable";
// // import AppLayout from "../layouts/AppLayout";
// // import { useRef } from "react";
// // import html2canvas from "html2canvas";
// // import jsPDF from "jspdf";
// // import * as XLSX from "xlsx";
// // import { saveAs } from "file-saver";


// // export default function AdminExpenseViewerPage() {
// //   const { userId } = useParams();

// //   const current = dayjs();

// //   const [selectedMonth, setSelectedMonth] = useState({
// //     month: current.month() + 1,
// //     year: current.year(),
// //   });
// //   const contentRef = useRef();


// //   const [normalExpenses, setNormalExpenses] = useState([]);
// //   const [otherExpenses, setOtherExpenses] = useState([]);

// //   const [selectedNormalId, setSelectedNormalId] = useState(null);
// //   const [selectedOtherId, setSelectedOtherId] = useState(null);

// //   const [userInfo, setUserInfo] = useState(null);
// //   const [hq, setHq] = useState("-");

// //   const monthOptions = [
// //     current,
// //     current.subtract(1, "month"),
// //     current.subtract(2, "month"),
// //   ].map((d) => ({
// //     label: d.format("MMMM YYYY"),
// //     value: { month: d.month() + 1, year: d.year() },
// //   }));

// //   useEffect(() => {
// //     if (!userId) return;

// //     const fetchExpenses = async () => {
// //       try {
// //         const { month, year } = selectedMonth;

// //         const startDate = dayjs(`${year}-${month}-01`)
// //           .startOf("month")
// //           .format("YYYY-MM-DD");

// //         const endDate = dayjs(`${year}-${month}-01`)
// //           .endOf("month")
// //           .format("YYYY-MM-DD");

// //         const { data } = await axios.get(
// //           `/expense?userId=${userId}&startDate=${startDate}&endDate=${endDate}`
// //         );

// //         setNormalExpenses(data.normalExpenses || []);
// //         setOtherExpenses(data.otherExpenses || []);
// //       } catch (err) {
// //         console.error("Error fetching expenses:", err);
// //       }
// //     };

// //     const handleDownloadPDF = async () => {
// //   const element = contentRef.current;

// //   const canvas = await html2canvas(element, {
// //     scale: 1.5, // lower scale = smaller file
// //     useCORS: true,
// //   });

// //   const imgData = canvas.toDataURL("image/jpeg", 0.7); // 0.7 compression

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

// //   pdf.save("ExpenseStatement.pdf");
// // };


// // const handleDownloadExcel = () => {
// //   const combinedData = [
// //     ...normalExpenses.map((e) => ({
// //       Type: "Normal",
// //       Date: dayjs(e.date).format("DD/MM/YYYY"),
// //       WorkType: e.workType,
// //       Place: e.placeOfWork,
// //       Station: e.station,
// //       KMs: e.kms,
// //       MOT: e.MOT,
// //       TA: e.TA,
// //       ExtraTA: e.ExtraTA,
// //       DA: e.DA,
// //       ExtraDA: e.ExtraDA,
// //       Total: e.total,
// //     })),
// //     ...otherExpenses.map((e) => ({
// //       Type: "Other",
// //       Date: dayjs(e.date).format("DD/MM/YYYY"),
// //       Description: e.description,
// //       Amount: e.amount,
// //       ExtraAmount: e.extraAmount,
// //       Total: e.total,
// //     })),
// //   ];

// //   const worksheet = XLSX.utils.json_to_sheet(combinedData);
// //   const workbook = XLSX.utils.book_new();
// //   XLSX.utils.book_append_sheet(workbook, worksheet, "Expenses");

// //   const excelBuffer = XLSX.write(workbook, {
// //     bookType: "xlsx",
// //     type: "array",
// //   });

// //   const data = new Blob([excelBuffer], {
// //     type:
// //       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
// //   });

// //   saveAs(data, "ExpenseStatement.xlsx");
// // };

// //     const fetchUserInfo = async () => {
// //       try {
// //         const { data } = await axios.get(`/users/${userId}`);
// //         setUserInfo(data);

// //         // Fetch HQ from SRC collection
// //         const hqRes = await axios.get(`/src/hq/${userId}`);
// //         setHq(hqRes.data?.placeOfWork || "-");
// //       } catch (err) {
// //         console.error("Error fetching user info:", err);
// //       }
// //     };

// //     fetchExpenses();
// //     fetchUserInfo();
// //   }, [selectedMonth, userId]);

// //   const handleDelete = async () => {
// //     try {
// //       if (!selectedNormalId && !selectedOtherId) {
// //         return alert("Select an expense to delete");
// //       }

// //       if (!window.confirm("Are you sure?")) return;

// //       const token = localStorage.getItem("token");

// //       const config = {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       };

// //       if (selectedNormalId) {
// //         await axios.delete(`/expense/normal/${selectedNormalId}`, config);

// //         setNormalExpenses((prev) =>
// //           prev.filter((e) => e._id !== selectedNormalId)
// //         );
// //         setSelectedNormalId(null);
// //       }

// //       if (selectedOtherId) {
// //         await axios.delete(`/expense/other/${selectedOtherId}`, config);

// //         setOtherExpenses((prev) =>
// //           prev.filter((e) => e._id !== selectedOtherId)
// //         );
// //         setSelectedOtherId(null);
// //       }
// //     } catch (err) {
// //       console.error("Delete failed:", err.response?.data || err.message);
// //     }
// //   };

// //   const subtotalNormal = normalExpenses.reduce(
// //     (sum, e) => sum + (e.total || 0),
// //     0
// //   );

// //   const subtotalOther = otherExpenses.reduce(
// //     (sum, e) => sum + (e.total || 0),
// //     0
// //   );

// //   const grandTotal = subtotalNormal + subtotalOther;

// //   return (
// //     <AppLayout title="Expense Statement" backTo="/dashboard">
// //         <div ref={contentRef}>

// //       <div className="bg-white p-6 rounded-lg shadow mb-6 flex justify-between items-center">
// //         <div>
// //           <h2 className="text-xl font-bold text-blue-900">
// //             {userInfo?.username || "Loading..."}
// //           </h2>

// //           <div className="mt-2 text-sm text-gray-700 space-y-1">
// //             <div>
// //               <span className="font-semibold">User ID:</span>{" "}
// //               {userInfo?.userId || "-"}
// //             </div>
// //             <div>
// //               <span className="font-semibold">HQ:</span> {hq}
// //             </div>
// //           </div>

// //           <div className="mt-3">
// //             <label className="mr-2 font-medium">Month:</label>
// //             <select
// //               value={`${selectedMonth.month}-${selectedMonth.year}`}
// //               onChange={(e) => {
// //                 const [m, y] = e.target.value.split("-").map(Number);
// //                 setSelectedMonth({ month: m, year: y });
// //               }}
// //               className="border px-2 py-1 rounded"
// //             >
// //               {monthOptions.map((opt) => (
// //                 <option
// //                   key={`${opt.value.month}-${opt.value.year}`}
// //                   value={`${opt.value.month}-${opt.value.year}`}
// //                 >
// //                   {opt.label}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>
// //         </div>

// //         <button
// //           onClick={handleDelete}
// //           className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-semibold"
// //         >
// //           Delete
// //         </button>
// //       </div>

// //       <div className="bg-white p-4 rounded-lg shadow mb-6">
// //         <h3 className="font-bold text-lg mb-3 text-blue-900">
// //           Normal Expenses
// //         </h3>

// //         <NormalExpenseTable
// //           expenses={normalExpenses}
// //           selectedId={selectedNormalId}
// //           onSelect={setSelectedNormalId}
// //           setExpenses={setNormalExpenses}
// //         />

// //         <div className="text-right mt-3 font-semibold">
// //           Subtotal 1: ₹ {subtotalNormal.toLocaleString("en-IN")}
// //         </div>
// //       </div>

// //       <div className="bg-white p-4 rounded-lg shadow">
// //         <h3 className="font-bold text-lg mb-3 text-blue-900">
// //           Other Expenses
// //         </h3>

// //         <OtherExpenseTable
// //           expenses={otherExpenses}
// //           selectedId={selectedOtherId}
// //           onSelect={setSelectedOtherId}
// //           setExpenses={setOtherExpenses}
// //         />

// //         <div className="text-right mt-3 font-semibold">
// //           Subtotal 2: ₹ {subtotalOther.toLocaleString("en-IN")}
// //         </div>
// //       </div>

// //       <div className="mt-6 text-center space-y-4">
// //         <h2 className="text-xl font-bold text-green-600">
// //           Grand Total: ₹ {grandTotal.toLocaleString("en-IN")}
// //         </h2>

// //         <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold">
// //           Approve
// //         </button>
// //       </div>
// //         </div>

// //     </AppLayout>
// //   );
// // }





// import React, { useEffect, useState, useRef } from "react";
// import { useParams } from "react-router-dom";
// import axios from "../utils/axios";
// import dayjs from "dayjs";
// import NormalExpenseTable from "../components/expense/NormalExpenseTable";
// import OtherExpenseTable from "../components/expense/OtherExpenseTable";
// import AppLayout from "../layouts/AppLayout";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";


// export default function AdminExpenseViewerPage() {
//   const { userId } = useParams();

//   const current = dayjs();

//   const [selectedMonth, setSelectedMonth] = useState({
//     month: current.month() + 1,
//     year: current.year(),
//   });



//   const contentRef = useRef();

//   const [normalExpenses, setNormalExpenses] = useState([]);
//   const [otherExpenses, setOtherExpenses] = useState([]);

//   const [selectedNormalId, setSelectedNormalId] = useState(null);
//   const [selectedOtherId, setSelectedOtherId] = useState(null);

//   const [userInfo, setUserInfo] = useState(null);
//   const [hq, setHq] = useState("-");
//   const [approvalStatus, setApprovalStatus] = useState(null);
// const [loadingApproval, setLoadingApproval] = useState(false);

//   const MONTHS = [
//   "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
//   "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
// ];


//   const monthOptions = [
//     current,
//     current.subtract(1, "month"),
//     current.subtract(2, "month"),
//   ].map((d) => ({
//     label: d.format("MMMM YYYY"),
//     value: { month: d.month() + 1, year: d.year() },
//   }));

//   // ✅ PDF DOWNLOAD
//   const handleDownloadPDF = async () => {
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

//     pdf.save("ExpenseStatement.pdf");
//   };

//   // ✅ EXCEL DOWNLOAD
//   const handleDownloadExcel = () => {
//     const combinedData = [
//       ...normalExpenses.map((e) => ({
//         Type: "Normal",
//         Date: dayjs(e.date).format("DD/MM/YYYY"),
//         WorkType: e.workType,
//         Place: e.placeOfWork,
//         Station: e.station,
//         KMs: e.kms,
//         MOT: e.MOT,
//         TA: e.TA,
//         ExtraTA: e.ExtraTA,
//         DA: e.DA,
//         ExtraDA: e.ExtraDA,
//         Total: e.total,
//       })),
//       ...otherExpenses.map((e) => ({
//         Type: "Other",
//         Date: dayjs(e.date).format("DD/MM/YYYY"),
//         Description: e.description,
//         Amount: e.amount,
//         ExtraAmount: e.extraAmount,
//         Total: e.total,
//       })),
//     ];

//     const worksheet = XLSX.utils.json_to_sheet(combinedData);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Expenses");

//     const excelBuffer = XLSX.write(workbook, {
//       bookType: "xlsx",
//       type: "array",
//     });

//     const data = new Blob([excelBuffer], {
//       type:
//         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
//     });

//     saveAs(data, "ExpenseStatement.xlsx");
//   };

//   useEffect(() => {
//     if (!userId) return;

//     const fetchExpenses = async () => {
//       try {
//         const { month, year } = selectedMonth;

//         const startDate = dayjs(`${year}-${month}-01`)
//           .startOf("month")
//           .format("YYYY-MM-DD");

//         const endDate = dayjs(`${year}-${month}-01`)
//           .endOf("month")
//           .format("YYYY-MM-DD");

//         const { data } = await axios.get(
//           `/expense?userId=${userId}&startDate=${startDate}&endDate=${endDate}`
//         );

//         setNormalExpenses(data.normalExpenses || []);
//         setOtherExpenses(data.otherExpenses || []);
//       } catch (err) {
//         console.error("Error fetching expenses:", err);
//       }
//     };

//     const fetchUserInfo = async () => {
//       try {
//         const { data } = await axios.get(`/users/${userId}`);
//         setUserInfo(data);

//         const hqRes = await axios.get(`/src/hq/${userId}`);
//         setHq(hqRes.data?.placeOfWork || "-");
//       } catch (err) {
//         console.error("Error fetching user info:", err);
//       }
//     };

//     const fetchApproval = async () => {
//   try {
//     const res = await axios.get(`/approvals/${userId}`);

//     const monthCode = MONTHS[selectedMonth.month - 1];

//     const thisMonth = res.data.find(
//       (a) => a.month === monthCode
//     );

//     setApprovalStatus(thisMonth || null);

//   } catch (err) {
//     console.error("Error fetching approval:", err);
//   }
// };



//     fetchExpenses();
//     fetchUserInfo();
//     fetchApproval();

//   }, [selectedMonth, userId]);

//   const handleDelete = async () => {
//     try {
//       if (!selectedNormalId && !selectedOtherId) {
//         return alert("Select an expense to delete");
//       }

//       if (!window.confirm("Are you sure?")) return;

//       const token = localStorage.getItem("token");

//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       if (selectedNormalId) {
//         await axios.delete(`/expense/normal/${selectedNormalId}`, config);

//         setNormalExpenses((prev) =>
//           prev.filter((e) => e._id !== selectedNormalId)
//         );
//         setSelectedNormalId(null);
//       }

//       if (selectedOtherId) {
//         await axios.delete(`/expense/other/${selectedOtherId}`, config);

//         setOtherExpenses((prev) =>
//           prev.filter((e) => e._id !== selectedOtherId)
//         );
//         setSelectedOtherId(null);
//       }
//     } catch (err) {
//       console.error("Delete failed:", err.response?.data || err.message);
//     }
//   };

//   const subtotalNormal = normalExpenses.reduce(
//     (sum, e) => sum + (e.total || 0),
//     0
//   );

//   const subtotalOther = otherExpenses.reduce(
//     (sum, e) => sum + (e.total || 0),
//     0
//   );

//   const grandTotal = subtotalNormal + subtotalOther;

//   const handleApprove = async () => {
//   try {
//     setLoadingApproval(true);

//     const monthCode = MONTHS[selectedMonth.month - 1];

//     await axios.post("/approvals/approve-superior", {
//       userId,
//       month: monthCode,
//     });

//     setApprovalStatus((prev) => ({
//       ...prev,
//       approvedBySuperior: true,
//     }));

//     alert("Approved successfully");

//   } catch (err) {
//     alert(err.response?.data?.message || "Approval failed");
//   } finally {
//     setLoadingApproval(false);
//   }
// };


//   return (
//     <AppLayout title="Expense Statement" backTo="/dashboard">
//       <div ref={contentRef}>
//         <div className="bg-white p-6 rounded-lg shadow mb-6 flex justify-between items-center">
//           <div>
//             <h2 className="text-xl font-bold text-blue-900">
//               {userInfo?.username || "Loading..."}
//             </h2>

//             <div className="mt-2 text-sm text-gray-700 space-y-1">
//               <div>
//                 <span className="font-semibold">User ID:</span>{" "}
//                 {userInfo?.userId || "-"}
//               </div>
//               <div>
//                 <span className="font-semibold">HQ:</span> {hq}
//               </div>
//               <div>
//   <span className="font-semibold">NW Days:</span>{" "}
//   {approvalStatus?.NWdays ?? 0}
// </div>

//             </div>

//             <div className="mt-3">
//               <label className="mr-2 font-medium">Month:</label>
//               <select
//                 value={`${selectedMonth.month}-${selectedMonth.year}`}
//                 onChange={(e) => {
//                   const [m, y] = e.target.value.split("-").map(Number);
//                   setSelectedMonth({ month: m, year: y });
//                 }}
//                 className="border px-2 py-1 rounded"
//               >
//                 {monthOptions.map((opt) => (
//                   <option
//                     key={`${opt.value.month}-${opt.value.year}`}
//                     value={`${opt.value.month}-${opt.value.year}`}
//                   >
//                     {opt.label}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="flex gap-3">
//             <button
//               onClick={handleDownloadPDF}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
//             >
//               PDF
//             </button>

//             <button
//               onClick={handleDownloadExcel}
//               className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold"
//             >
//               Excel
//             </button>

//             <button
//               onClick={handleDelete}
//               className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-semibold"
//             >
//               Delete
//             </button>
//           </div>
//         </div>

//         <div className="bg-white p-4 rounded-lg shadow mb-6">
//           <h3 className="font-bold text-lg mb-3 text-blue-900">
//             Normal Expenses
//           </h3>

//           <NormalExpenseTable
//             expenses={normalExpenses}
//             selectedId={selectedNormalId}
//             onSelect={setSelectedNormalId}
//             setExpenses={setNormalExpenses}
//           />

//           <div className="text-right mt-3 font-semibold">
//             Subtotal 1: ₹ {subtotalNormal.toLocaleString("en-IN")}
//           </div>
//         </div>

//         <div className="bg-white p-4 rounded-lg shadow">
//           <h3 className="font-bold text-lg mb-3 text-blue-900">
//             Other Expenses
//           </h3>

//           <OtherExpenseTable
//             expenses={otherExpenses}
//             selectedId={selectedOtherId}
//             onSelect={setSelectedOtherId}
//             setExpenses={setOtherExpenses}
//           />

//           <div className="text-right mt-3 font-semibold">
//             Subtotal 2: ₹ {subtotalOther.toLocaleString("en-IN")}
//           </div>
//         </div>

//         <div className="mt-6 text-center space-y-4">
//           <h2 className="text-xl font-bold text-green-600">
//             Grand Total: ₹ {grandTotal.toLocaleString("en-IN")}
//           </h2>

//           <button
//   onClick={handleApprove}
//   disabled={
//     loadingApproval ||
//     !approvalStatus?.approvedByUser ||
//     approvalStatus?.approvedBySuperior
//   }
//   className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold disabled:opacity-50"
// >
//   {approvalStatus?.approvedBySuperior
//     ? "Approved"
//     : loadingApproval
//     ? "Approving..."
//     : "Approve"}
// </button>


//         </div>
//       </div>
//     </AppLayout>
//   );
// }






import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import LoginLayout from "../layouts/LoginLayout";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
        { userId, password }
      );

      const user = res.data.user;

      login(user);
      localStorage.setItem("token", res.data.token);

      if (user.role === "executive") {
        navigate("/executive-dashboard");
      } else if (user.role === "admin" || user.role === "manager") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }

    } catch (err) {
      console.error(err);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginLayout>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          placeholder="UserId"
          className="w-full border p-2 rounded"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          disabled={loading}
          className="w-full bg-[#1f3a5f] text-white p-2 rounded disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </LoginLayout>
  );
}
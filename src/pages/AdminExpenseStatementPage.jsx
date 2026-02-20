// import { useState } from "react";
// import AppLayout from "../layouts/AppLayout";
// import NormalExpensesTable from "../components/expense/NormalExpensesTable";
// import OtherExpensesTable from "../components/expense/OtherExpensesTable";

// export default function AdminExpenseStatementPage() {
//   const [month, setMonth] = useState("February 2026");

//   const normalExpenses = [
//     {
//       date: "01/02/2026",
//       time: "08:21:37",
//       place: "Sunday",
//       station: "-",
//       kms: 0,
//       mot: "-",
//       ta: 0,
//       da: 0,
//     },
//     {
//       date: "02/02/2026",
//       time: "10:47 AM",
//       place: "Guntur",
//       station: "Unknown",
//       kms: 0,
//       mot: "Local",
//       ta: 0,
//       da: 150,
//     },
//     {
//       date: "03/02/2026",
//       time: "12:13 PM",
//       place: "Narasaraopet",
//       station: "EX",
//       kms: 100,
//       mot: "Bike",
//       ta: 250,
//       da: 200,
//     },
//   ];

//   const otherExpenses = [
//     {
//       date: "02/02/2026",
//       billNo: "89",
//       desc: "KIT KAT CHOCOLATES",
//       amount: 160,
//     },
//     {
//       date: "02/02/2026",
//       billNo: "65292",
//       desc: "KARIMNAGAR TO GUNTUR PARCEL",
//       amount: 170,
//     },
//     {
//       date: "05/02/2026",
//       billNo: "40119",
//       desc: "ROASTED PISTA 250GM",
//       amount: 300,
//     },
//   ];

//   const normalTotal = normalExpenses.reduce(
//     (sum, e) => sum + e.ta + e.da,
//     0
//   );
//   const otherTotal = otherExpenses.reduce((s, e) => s + e.amount, 0);

//   return (
//     <AppLayout>
//       <div className="bg-white p-6 rounded-xl shadow">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <p className="text-lg font-semibold">
//               Username: <span className="font-normal">Nagaraju Gnt</span>
//             </p>
//             <p className="text-sm">HQ: <b>PONNUR</b></p>
//             <select
//               className="mt-2 border px-3 py-1 rounded"
//               value={month}
//               onChange={(e) => setMonth(e.target.value)}
//             >
//               <option>February 2026</option>
//               <option>January 2026</option>
//             </select>
//           </div>

//           <div className="flex gap-3">
//             <button className="btn-primary">PDF</button>
//             <button className="btn-success">Excel</button>
//             <button className="btn-danger">Delete</button>
//           </div>
//         </div>

//         {/* Tables */}
//         <NormalExpensesTable data={normalExpenses} />
//         <OtherExpensesTable data={otherExpenses} />

//         {/* Footer */}
//         <div className="text-center mt-6">
//           <p className="text-lg font-semibold text-green-600">
//             Grand Total: ₹ {normalTotal + otherTotal}
//           </p>
//           <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg">
//             ✔ Approve Expense
//           </button>
//         </div>
//       </div>
//     </AppLayout>
//   );
// }







// import React, { useEffect, useState, useCallback, useRef } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import dayjs from "dayjs";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import * as XLSX from "xlsx";

// import LogTable from "../components/expense/NormalExpensesTable";
// import OtherExpensesTable from "../components/expense/OtherExpensesTable";
// import AppLayout from "../layouts/AppLayout";
// import { Trash2, Download, FileSpreadsheet } from "lucide-react";

// const API = process.env.REACT_APP_BACKEND_URL;

// const AdminExpenseStatement = () => {
//   const { username } = useParams();

//   const [hq, setHQ] = useState("");
//   const [expenses, setExpenses] = useState([]);
//   const [otherExpenses, setOtherExpenses] = useState([]);
//   const [selectedExpenseId, setSelectedExpenseId] = useState(null);
//   const [selectedOtherExpenseId, setSelectedOtherExpenseId] = useState(null);

//   const [isDownloadingPDF, setIsDownloadingPDF] = useState(false);
//   const [isDownloadingExcel, setIsDownloadingExcel] = useState(false);

//   const pdfContentRef = useRef();

//   const current = dayjs();
//   const [selectedMonth, setSelectedMonth] = useState({
//     month: current.month() + 1,
//     year: current.year(),
//   });

//   const monthOptions = [
//     current,
//     current.subtract(1, "month"),
//     current.subtract(2, "month"),
//   ].map((d) => ({
//     label: d.format("MMMM YYYY"),
//     value: { month: d.month() + 1, year: d.year() },
//   }));

//   /* ================= FETCH & NORMALIZE ================= */

//   const fetchData = useCallback(async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const headers = { Authorization: `Bearer ${token}` };
//       const { month, year } = selectedMonth;

//       // user info
//       const resUser = await axios.get(
//         `${API}/api/admin/user/${username}`,
//         { headers }
//       );
//       setHQ(resUser.data.hq || "");

//       // normal expenses
//       const resNormal = await axios.get(
//         `${API}/api/admin/normal-expenses/${username}?month=${month}&year=${year}`,
//         { headers }
//       );

//       const normalizedNormal = (resNormal.data || []).map((exp) => ({
//         _id: exp._id,
//         date: dayjs(exp.date).format("DD/MM/YYYY"),
//         time: exp.time,

//         location: exp.placeOfWork,
//         zone: exp.station,
//         km: exp.kms,
//         transport: exp.MOT,

//         fare: exp.TA ?? 0,
//         da: exp.DA ?? 0,
//         extraTA: exp.ExtraTA ?? 0,
//         extraDA: exp.ExtraDA ?? 0,

//         taDesc: exp.taDesc || "",
//         daDesc: exp.daDesc || "",

//         total: exp.total || 0,
//         isNW: exp.workType === "NW",
//       }));

//       setExpenses(normalizedNormal);

//       // other expenses
//       const resOther = await axios.get(
//         `${API}/api/admin/other-expenses/${username}?month=${month}&year=${year}`,
//         { headers }
//       );

//       const normalizedOther = (resOther.data || []).map((exp) => ({
//         _id: exp._id,
//         date: dayjs(exp.date).format("DD/MM/YYYY"),
//         billNo: exp.billNo,
//         description: exp.description,

//         amount: exp.amount,
//         extraamount: exp.extraAmount ?? 0,
//         extradescription: exp.extraDescription ?? "",

//         total: exp.total || 0,
//       }));

//       setOtherExpenses(normalizedOther);
//     } catch (err) {
//       console.error("Error fetching admin expense statement:", err);
//     }
//   }, [username, selectedMonth]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   /* ================= SELECT ================= */

//   const handleSelectExpense = (id) => {
//     setSelectedExpenseId(id);
//     setSelectedOtherExpenseId(null);
//   };

//   const handleSelectOtherExpense = (id) => {
//     setSelectedOtherExpenseId(id);
//     setSelectedExpenseId(null);
//   };

//   /* ================= DELETE ================= */

//   const handleDeleteExpense = async () => {
//     const isNormal = selectedExpenseId !== null;
//     const isOther = selectedOtherExpenseId !== null;

//     if (!isNormal && !isOther)
//       return alert("Please select an expense to delete.");

//     if (!window.confirm("Are you sure you want to delete this expense?"))
//       return;

//     try {
//       const token = localStorage.getItem("token");
//       const headers = { headers: { Authorization: `Bearer ${token}` } };

//       if (isNormal) {
//         await axios.delete(
//           `${API}/api/admin/expense/${username}/${selectedExpenseId}`,
//           headers
//         );
//         setExpenses((p) => p.filter((e) => e._id !== selectedExpenseId));
//         setSelectedExpenseId(null);
//       }

//       if (isOther) {
//         await axios.delete(
//           `${API}/api/admin/other-expense/${selectedOtherExpenseId}`,
//           headers
//         );
//         setOtherExpenses((p) => p.filter((e) => e._id !== selectedOtherExpenseId));
//         setSelectedOtherExpenseId(null);
//       }

//       alert("Expense deleted successfully.");
//     } catch (err) {
//       console.error("Delete failed:", err);
//       alert("Failed to delete expense.");
//     }
//   };

//   /* ================= SAVE EDITS ================= */

//   const doSaveTA = async (id, value) => {
//     const exp = expenses.find((e) => e._id === id);
//     if (!exp) return;

//     const newTotal =
//       (exp.fare || 0) +
//       (exp.da || 0) +
//       (exp.extraDA || 0) +
//       value;

//     const token = localStorage.getItem("token");
//     await axios.put(
//       `${API}/api/admin/expense/${username}/${id}`,
//       { extraTA: value, total: newTotal },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     setExpenses((p) =>
//       p.map((e) => (e._id === id ? { ...e, extraTA: value, total: newTotal } : e))
//     );
//   };

//   const doSaveDA = async (id, value) => {
//     const exp = expenses.find((e) => e._id === id);
//     if (!exp) return;

//     const newTotal =
//       (exp.fare || 0) +
//       (exp.da || 0) +
//       (exp.extraTA || 0) +
//       value;

//     const token = localStorage.getItem("token");
//     await axios.put(
//       `${API}/api/admin/expense/${username}/${id}`,
//       { extraDA: value, total: newTotal },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     setExpenses((p) =>
//       p.map((e) => (e._id === id ? { ...e, extraDA: value, total: newTotal } : e))
//     );
//   };

//   const doSaveTADesc = async (id, desc) => {
//     const token = localStorage.getItem("token");
//     await axios.put(
//       `${API}/api/admin/expense/${username}/${id}`,
//       { taDesc: desc },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     setExpenses((p) =>
//       p.map((e) => (e._id === id ? { ...e, taDesc: desc } : e))
//     );
//   };

//   const doSaveDADesc = async (id, desc) => {
//     const token = localStorage.getItem("token");
//     await axios.put(
//       `${API}/api/admin/expense/${username}/${id}`,
//       { daDesc: desc },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     setExpenses((p) =>
//       p.map((e) => (e._id === id ? { ...e, daDesc: desc } : e))
//     );
//   };

//   const doSaveOtherExpenseExtraAmount = async (id, value) => {
//     const exp = otherExpenses.find((e) => e._id === id);
//     if (!exp) return;

//     const newTotal = (exp.amount || 0) + value;

//     const token = localStorage.getItem("token");
//     const { data } = await axios.put(
//       `${API}/api/admin/other-expense/${id}`,
//       { extraAmount: value, total: newTotal },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     setOtherExpenses((p) =>
//       p.map((e) => (e._id === id ? data.expense : e))
//     );
//   };

//   const doSaveOtherExpenseExtraDescription = async (id, desc) => {
//     const token = localStorage.getItem("token");
//     const { data } = await axios.put(
//       `${API}/api/admin/other-expense/${id}`,
//       { extraDescription: desc },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     setOtherExpenses((p) =>
//       p.map((e) => (e._id === id ? data.expense : e))
//     );
//   };

//   /* ================= TOTALS ================= */

//   const subtotal1 = expenses.reduce((s, e) => s + (e.total || 0), 0);
//   const subtotal2 = otherExpenses.reduce((s, e) => s + (e.total || 0), 0);
//   const grandTotal = subtotal1 + subtotal2;

//   const isDeleteDisabled = !selectedExpenseId && !selectedOtherExpenseId;

//   /* ================= UI ================= */

//   return (
//     <AppLayout title={`Expense Statement - ${username}`} backTo="/admin/dashboard">
//       <div ref={pdfContentRef} className="p-4 sm:p-6 bg-gray-50 space-y-6">
//         {/* Header */}
//         <div className="bg-white p-6 rounded-lg shadow flex justify-between">
//           <div>
//             <p className="text-xl font-bold text-[#1f3b64]">
//               Username: <span className="font-normal">{username}</span>
//             </p>
//             <p className="text-lg">
//               HQ: <span className="font-semibold">{hq}</span>
//             </p>

//             <select
//               value={`${selectedMonth.month}-${selectedMonth.year}`}
//               onChange={(e) => {
//                 const [m, y] = e.target.value.split("-").map(Number);
//                 setSelectedMonth({ month: m, year: y });
//               }}
//               className="mt-2 border rounded px-2 py-1"
//             >
//               {monthOptions.map((o) => (
//                 <option
//                   key={`${o.value.month}-${o.value.year}`}
//                   value={`${o.value.month}-${o.value.year}`}
//                 >
//                   {o.label}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="flex gap-2 hide-on-pdf">
//             <button className="btn-blue" disabled={isDownloadingPDF}>
//               <Download size={16} /> PDF
//             </button>
//             <button className="btn-green" disabled={isDownloadingExcel}>
//               <FileSpreadsheet size={16} /> Excel
//             </button>
//             <button
//               onClick={handleDeleteExpense}
//               disabled={isDeleteDisabled}
//               className="btn-red"
//             >
//               <Trash2 size={16} /> Delete
//             </button>
//           </div>
//         </div>

//         {/* Tables */}
//         <LogTable
//           expenses={expenses}
//           onSaveTA={doSaveTA}
//           onSaveDA={doSaveDA}
//           onEditTADesc={doSaveTADesc}
//           onEditDADesc={doSaveDADesc}
//           selectedRowId={selectedExpenseId}
//           onSelectRow={handleSelectExpense}
//         />

//         <OtherExpensesTable
//           otherExpenses={otherExpenses}
//           onSaveExtraAmount={doSaveOtherExpenseExtraAmount}
//           onSaveExtraDescription={doSaveOtherExpenseExtraDescription}
//           selectedRowId={selectedOtherExpenseId}
//           onSelectRow={handleSelectOtherExpense}
//         />

//         <div className="text-center font-bold text-xl text-green-600">
//           Grand Total: ₹ {grandTotal.toLocaleString("en-IN")}
//         </div>
//       </div>
//     </AppLayout>
//   );
// };

// export default AdminExpenseStatement;





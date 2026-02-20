// // export default function NormalExpensesTable({ data }) {
// //   return (
// //     <div className="mt-6">
// //       <h3 className="text-lg font-semibold mb-3">Normal Expenses</h3>

// //       <table className="w-full border text-sm">
// //         <thead className="bg-blue-50">
// //           <tr>
// //             <th>SL.NO</th>
// //             <th>DATE</th>
// //             <th>TIME</th>
// //             <th>PLACE</th>
// //             <th>HQ/EX/OS</th>
// //             <th>KM'S</th>
// //             <th>M.O.T</th>
// //             <th>T.A</th>
// //             <th>D.A</th>
// //             <th>TOTAL</th>
// //             <th>SELECT</th>
// //           </tr>
// //         </thead>

// //         <tbody>
// //           {data.map((row, i) => (
// //             <tr key={i} className="text-center border-t">
// //               <td>{i + 1}</td>
// //               <td>{row.date}</td>
// //               <td>{row.time}</td>
// //               <td>{row.place}</td>
// //               <td>{row.station}</td>
// //               <td>{row.kms}</td>
// //               <td>{row.mot}</td>
// //               <td>{row.ta}</td>
// //               <td>{row.da}</td>
// //               <td className="font-semibold">
// //                 {row.ta + row.da}
// //               </td>
// //               <td>
// //                 <input type="radio" />
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }





// // src/components/LogTable.jsx
// import React, { useState } from "react";
// import { Pencil } from "lucide-react";

// const LogTable = ({
//   expenses = [],
//   onSaveTA,
//   onSaveDA,
//   onEditTADesc,
//   onEditDADesc,
//   selectedRowId,
//   onSelectRow,
// }) => {
//   const [expandedDates, setExpandedDates] = useState({});
//   const [editing, setEditing] = useState({ id: null, type: null });
//   const [tempValue, setTempValue] = useState("");
//   const [tempDesc, setTempDesc] = useState("");

//   const grouped = expenses.reduce((acc, exp) => {
//     const dateKey = new Date(exp.date).toLocaleDateString("en-GB");
//     if (!acc[dateKey]) acc[dateKey] = [];
//     acc[dateKey].push(exp);
//     return acc;
//   }, {});

//   const toggleExpand = (date) =>
//     setExpandedDates((p) => ({ ...p, [date]: !p[date] }));

//   let slNo = 1;

//   const renderTAcell = (log) => {
//     const isEditing = editing.id === log._id && editing.type === "TA";
//     const isDescEditing = editing.id === log._id && editing.type === "TA_DESC";

//     return (
//       <>
//         {log.TA ?? 0}
//         {isEditing ? (
//           <input
//             type="number"
//             value={tempValue}
//             autoFocus
//             onChange={(e) => setTempValue(e.target.value)}
//             onBlur={() => {
//               onSaveTA(log._id, Number(tempValue));
//               setEditing({ id: null, type: null });
//             }}
//             className="ml-2 border rounded px-2 w-16 text-xs hide-on-pdf"
//           />
//         ) : (
//           <>
//             {log.ExtraTA > 0 && ` +(${log.ExtraTA})`}
//             <button
//               className="ml-2 p-1 bg-blue-600 text-white rounded hide-on-pdf"
//               onClick={() => {
//                 setEditing({ id: log._id, type: "TA" });
//                 setTempValue(log.ExtraTA || 0);
//               }}
//             >
//               <Pencil size={12} />
//             </button>
//           </>
//         )}

//         {isDescEditing ? (
//           <input
//             type="text"
//             value={tempDesc}
//             autoFocus
//             onChange={(e) => setTempDesc(e.target.value)}
//             onBlur={() => {
//               onEditTADesc(log._id, tempDesc);
//               setEditing({ id: null, type: null });
//             }}
//             className="ml-2 border rounded px-2 w-32 text-xs hide-on-pdf"
//           />
//         ) : (
//           <button
//             className={`ml-2 px-2 py-1 text-xs rounded hide-on-pdf ${
//               log.taDesc
//                 ? "bg-orange-500 text-white"
//                 : "bg-blue-100 text-blue-600"
//             }`}
//             onClick={() => {
//               setEditing({ id: log._id, type: "TA_DESC" });
//               setTempDesc(log.taDesc || "");
//             }}
//           >
//             D
//           </button>
//         )}
//       </>
//     );
//   };

//   const renderDAcell = (log) => {
//     const isEditing = editing.id === log._id && editing.type === "DA";
//     const isDescEditing = editing.id === log._id && editing.type === "DA_DESC";

//     return (
//       <>
//         {log.DA ?? 0}
//         {isEditing ? (
//           <input
//             type="number"
//             value={tempValue}
//             autoFocus
//             onChange={(e) => setTempValue(e.target.value)}
//             onBlur={() => {
//               onSaveDA(log._id, Number(tempValue));
//               setEditing({ id: null, type: null });
//             }}
//             className="ml-2 border rounded px-2 w-16 text-xs hide-on-pdf"
//           />
//         ) : (
//           <>
//             {log.ExtraDA > 0 && ` +(${log.ExtraDA})`}
//             <button
//               className="ml-2 p-1 bg-blue-600 text-white rounded hide-on-pdf"
//               onClick={() => {
//                 setEditing({ id: log._id, type: "DA" });
//                 setTempValue(log.ExtraDA || 0);
//               }}
//             >
//               <Pencil size={12} />
//             </button>
//           </>
//         )}

//         {isDescEditing ? (
//           <input
//             type="text"
//             value={tempDesc}
//             autoFocus
//             onChange={(e) => setTempDesc(e.target.value)}
//             onBlur={() => {
//               onEditDADesc(log._id, tempDesc);
//               setEditing({ id: null, type: null });
//             }}
//             className="ml-2 border rounded px-2 w-32 text-xs hide-on-pdf"
//           />
//         ) : (
//           <button
//             className={`ml-2 px-2 py-1 text-xs rounded hide-on-pdf ${
//               log.daDesc
//                 ? "bg-orange-500 text-white"
//                 : "bg-blue-100 text-blue-600"
//             }`}
//             onClick={() => {
//               setEditing({ id: log._id, type: "DA_DESC" });
//               setTempDesc(log.daDesc || "");
//             }}
//           >
//             D
//           </button>
//         )}
//       </>
//     );
//   };

//   return (
//     <div className="overflow-x-auto rounded-lg shadow border">
//       <table className="w-full border-collapse bg-white">
//         <thead className="bg-blue-50 font-semibold">
//           <tr>
//             <th>Sl</th>
//             <th>Date</th>
//             <th>Time</th>
//             <th>Place</th>
//             <th>Station</th>
//             <th>KMs</th>
//             <th>MOT</th>
//             <th>TA</th>
//             <th>DA</th>
//             <th>Total</th>
//             <th className="hide-on-pdf">Select</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Object.entries(grouped).map(([date, logs]) => {
//             const total = logs.reduce((s, l) => s + (l.total || 0), 0);
//             const multi = logs.length > 1;

//             return (
//               <React.Fragment key={date}>
//                 <tr className="bg-gray-100">
//                   <td>{slNo++}</td>
//                   <td>{date}</td>
//                   <td>{multi ? "-" : logs[0].time}</td>
//                   <td>{multi ? "MULTIPLE" : logs[0].placeOfWork}</td>
//                   <td>{multi ? "-" : logs[0].station}</td>
//                   <td>{multi ? "-" : logs[0].kms}</td>
//                   <td>{multi ? "-" : logs[0].MOT}</td>
//                   <td>{multi ? "-" : renderTAcell(logs[0])}</td>
//                   <td>{multi ? "-" : renderDAcell(logs[0])}</td>
//                   <td className="font-bold">{total}</td>
//                   <td className="hide-on-pdf">
//                     {!multi && (
//                       <input
//                         type="radio"
//                         checked={selectedRowId === logs[0]._id}
//                         onChange={() => onSelectRow(logs[0]._id)}
//                       />
//                     )}
//                   </td>
//                 </tr>

//                 {expandedDates[date] &&
//                   logs.map((log) => (
//                     <tr key={log._id}>
//                       <td />
//                       <td>{date}</td>
//                       <td>{log.time}</td>
//                       <td>{log.placeOfWork}</td>
//                       <td>{log.station}</td>
//                       <td>{log.kms}</td>
//                       <td>{log.MOT}</td>
//                       <td>{renderTAcell(log)}</td>
//                       <td>{renderDAcell(log)}</td>
//                       <td className="font-bold">{log.total}</td>
//                       <td className="hide-on-pdf">
//                         <input
//                           type="radio"
//                           checked={selectedRowId === log._id}
//                           onChange={() => onSelectRow(log._id)}
//                         />
//                       </td>
//                     </tr>
//                   ))}
//               </React.Fragment>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default LogTable;





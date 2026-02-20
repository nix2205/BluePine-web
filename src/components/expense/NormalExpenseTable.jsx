// // import React, { useState } from "react";
// // import axios from "../../utils/axios";
// // import dayjs from "dayjs";
// // import { Pencil } from "lucide-react";

// // export default function NormalExpenseTable({
// //   expenses = [],
// //   selectedId,
// //   onSelect,
// //   setExpenses,
// // }) {
// //   const [editing, setEditing] = useState({ id: null, type: null });
// //   const [tempValue, setTempValue] = useState("");

// //   // Sort by date ascending
// //   const sortedExpenses = [...expenses].sort(
// //     (a, b) => new Date(a.date) - new Date(b.date)
// //   );

// //   const handleSave = async (expense, field) => {
// //     try {
// //       const updatedValue = Number(tempValue) || 0;

// //       const updatedExpense = {
// //         ...expense,
// //         [field]: updatedValue,
// //       };

// //       const newTotal =
// //         (expense.TA || 0) +
// //         (expense.DA || 0) +
// //         (field === "ExtraTA" ? updatedValue : expense.ExtraTA || 0) +
// //         (field === "ExtraDA" ? updatedValue : expense.ExtraDA || 0);

// //       updatedExpense.total = newTotal;

// //       await axios.put(`/expense/normal/${expense._id}`, {
// //         [field]: updatedValue,
// //         total: newTotal,
// //       });

// //       setExpenses((prev) =>
// //         prev.map((e) =>
// //           e._id === expense._id ? { ...updatedExpense } : e
// //         )
// //       );

// //       setEditing({ id: null, type: null });
// //     } catch (err) {
// //       console.error("Update failed:", err);
// //     }
// //   };

// //   let serialNumber = 1;

// //   return (
// //     <div className="overflow-x-auto border rounded-lg">
// //       <table className="w-full text-sm border-collapse bg-white">
// //         <thead className="bg-blue-100 text-blue-900 uppercase">
// //           <tr>
// //             <th className="border p-3">SL.NO</th>
// //             <th className="border p-3">DATE</th>
// //             <th className="border p-3">TIME</th>
// //             <th className="border p-3">PLACE OF WORK</th>
// //             <th className="border p-3">HQ/EX/OS</th>
// //             <th className="border p-3">KM'S</th>
// //             <th className="border p-3">M.O.T</th>
// //             <th className="border p-3">T.A</th>
// //             <th className="border p-3">D.A</th>
// //             <th className="border p-3">TOTAL</th>
// //             <th className="border p-3">SELECT</th>
// //           </tr>
// //         </thead>

// //         <tbody>
// //           {sortedExpenses.map((expense) => {
// //             const formattedDate = dayjs(expense.date).format("DD/MM/YYYY");

// //             return (
// //               <tr
// //                 key={expense._id}
// //                 className="hover:bg-gray-50 text-center"
// //               >
// //                 <td className="border p-2">{serialNumber++}</td>
// //                 <td className="border p-2">{formattedDate}</td>
// //                 <td className="border p-2">{expense.time}</td>
// //                 <td className="border p-2">{expense.placeOfWork}</td>
// //                 <td className="border p-2">{expense.station}</td>
// //                 <td className="border p-2">{expense.kms}</td>
// //                 <td className="border p-2">{expense.MOT}</td>

// //                 {/* TA Column */}
// //                 <td className="border p-2">
// //                   {expense.TA}

// //                   {editing.id === expense._id &&
// //                   editing.type === "ExtraTA" ? (
// //                     <input
// //                       type="number"
// //                       autoFocus
// //                       value={tempValue}
// //                       onChange={(e) => setTempValue(e.target.value)}
// //                       onKeyDown={(e) => {
// //                         if (e.key === "Enter")
// //                           handleSave(expense, "ExtraTA");
// //                       }}
// //                       onBlur={() =>
// //                         handleSave(expense, "ExtraTA")
// //                       }
// //                       className="ml-2 border rounded px-2 py-1 w-16 text-center"
// //                     />
// //                   ) : (
// //                     <>
// //                       {expense.ExtraTA > 0 && (
// //                         <span className="ml-1 text-blue-600 font-semibold">
// //                           +({expense.ExtraTA})
// //                         </span>
// //                       )}
// //                       <button
// //                         onClick={() => {
// //                           setEditing({
// //                             id: expense._id,
// //                             type: "ExtraTA",
// //                           });
// //                           setTempValue(expense.ExtraTA || 0);
// //                         }}
// //                         className="ml-2 bg-blue-600 text-white p-1 rounded"
// //                       >
// //                         <Pencil size={12} />
// //                       </button>
// //                     </>
// //                   )}
// //                 </td>

// //                 {/* DA Column */}
// //                 <td className="border p-2">
// //                   {expense.DA}

// //                   {editing.id === expense._id &&
// //                   editing.type === "ExtraDA" ? (
// //                     <input
// //                       type="number"
// //                       autoFocus
// //                       value={tempValue}
// //                       onChange={(e) => setTempValue(e.target.value)}
// //                       onKeyDown={(e) => {
// //                         if (e.key === "Enter")
// //                           handleSave(expense, "ExtraDA");
// //                       }}
// //                       onBlur={() =>
// //                         handleSave(expense, "ExtraDA")
// //                       }
// //                       className="ml-2 border rounded px-2 py-1 w-16 text-center"
// //                     />
// //                   ) : (
// //                     <>
// //                       {expense.ExtraDA > 0 && (
// //                         <span className="ml-1 text-blue-600 font-semibold">
// //                           +({expense.ExtraDA})
// //                         </span>
// //                       )}
// //                       <button
// //                         onClick={() => {
// //                           setEditing({
// //                             id: expense._id,
// //                             type: "ExtraDA",
// //                           });
// //                           setTempValue(expense.ExtraDA || 0);
// //                         }}
// //                         className="ml-2 bg-blue-600 text-white p-1 rounded"
// //                       >
// //                         <Pencil size={12} />
// //                       </button>
// //                     </>
// //                   )}
// //                 </td>

// //                 <td className="border p-2 font-bold">
// //                   {expense.total}
// //                 </td>

// //                 {/* Radio Select */}
// //                 <td className="border p-2">
// //                   <input
// //                     type="radio"
// //                     name="normal_expense_select"
// //                     checked={selectedId === expense._id}
// //                     onChange={() => onSelect(expense._id)}
// //                   />
// //                 </td>
// //               </tr>
// //             );
// //           })}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }



// import React, { useState } from "react";
// import axios from "../../utils/axios";
// import dayjs from "dayjs";
// import { Pencil } from "lucide-react";

// export default function NormalExpenseTable({
//   expenses = [],
//   selectedId,
//   onSelect,
//   setExpenses,
// }) {
//   const [editing, setEditing] = useState({ id: null, type: null });
//   const [tempValue, setTempValue] = useState("");

//   // Sort by date ascending
//   const sortedExpenses = [...expenses].sort(
//     (a, b) => new Date(a.date) - new Date(b.date)
//   );

//   const handleSave = async (expense, field) => {
//     try {
//       const updatedValue = Number(tempValue) || 0;

//       const updatedExpense = {
//         ...expense,
//         [field]: updatedValue,
//       };

//       const newTotal =
//         (expense.TA || 0) +
//         (expense.DA || 0) +
//         (field === "ExtraTA" ? updatedValue : expense.ExtraTA || 0) +
//         (field === "ExtraDA" ? updatedValue : expense.ExtraDA || 0);

//       updatedExpense.total = newTotal;

//       await axios.put(`/expense/normal/${expense._id}`, {
//         [field]: updatedValue,
//         total: newTotal,
//       });

//       setExpenses((prev) =>
//         prev.map((e) =>
//           e._id === expense._id ? { ...updatedExpense } : e
//         )
//       );

//       setEditing({ id: null, type: null });
//     } catch (err) {
//       console.error("Update failed:", err);
//     }
//   };

//   let serialNumber = 1;

//   return (
//     <div className="overflow-x-auto border rounded-lg shadow-sm">
//       <table className="w-full text-sm border-collapse bg-white">
//         <thead className="bg-blue-100 text-blue-900 uppercase">
//           <tr>
//             <th className="border p-3">SL.NO</th>
//             <th className="border p-3">DATE</th>
//             <th className="border p-3">TIME</th>
//             <th className="border p-3">PLACE OF WORK</th>
//             <th className="border p-3">HQ/EX/OS</th>
//             <th className="border p-3">KM'S</th>
//             <th className="border p-3">M.O.T</th>
//             <th className="border p-3">T.A</th>
//             <th className="border p-3">D.A</th>
//             <th className="border p-3">TOTAL</th>
//             <th className="border p-3">SELECT</th>
//           </tr>
//         </thead>

//         <tbody>
//           {sortedExpenses.map((expense) => {
//             const formattedDate = dayjs(expense.date).format("DD/MM/YYYY");

//             // 🔥 WorkType based styling
//             const rowStyle =
//               expense.workType === "NFW"
//                 ? "bg-green-100 text-green-900"
//                 : expense.workType === "NW"
//                 ? "bg-red-100 text-red-900"
//                 : "bg-white";

//             return (
//               <tr
//   key={expense._id}
//   className={`text-center transition ${
//     expense.workType === "NFW"
//       ? "bg-green-100 text-green-900"
//       : expense.workType === "NW"
//       ? "bg-red-100 text-red-900"
//       : "hover:bg-gray-50"
//   }`}
// >

//                 <td className="border p-2">{serialNumber++}</td>
//                 <td className="border p-2">{formattedDate}</td>
//                 <td className="border p-2">{expense.time}</td>
//                 <td className="border p-2">
//                   {expense.placeOfWork}
//                 </td>
//                 <td className="border p-2">{expense.station}</td>
//                 <td className="border p-2">{expense.kms}</td>
//                 <td className="border p-2">{expense.MOT}</td>

//                 {/* TA Column */}
//                 <td className="border p-2">
//                   {expense.TA}

//                   {editing.id === expense._id &&
//                   editing.type === "ExtraTA" ? (
//                     <input
//                       type="number"
//                       autoFocus
//                       value={tempValue}
//                       onChange={(e) => setTempValue(e.target.value)}
//                       onKeyDown={(e) => {
//                         if (e.key === "Enter")
//                           handleSave(expense, "ExtraTA");
//                       }}
//                       onBlur={() =>
//                         handleSave(expense, "ExtraTA")
//                       }
//                       className="ml-2 border rounded px-2 py-1 w-16 text-center"
//                     />
//                   ) : (
//                     <>
//                       {expense.ExtraTA > 0 && (
//                         <span className="ml-1 text-blue-600 font-semibold">
//                           +({expense.ExtraTA})
//                         </span>
//                       )}
//                       <button
//                         onClick={() => {
//                           setEditing({
//                             id: expense._id,
//                             type: "ExtraTA",
//                           });
//                           setTempValue(expense.ExtraTA || 0);
//                         }}
//                         className="ml-2 bg-blue-600 text-white p-1 rounded hover:bg-blue-700"
//                       >
//                         <Pencil size={12} />
//                       </button>
//                       {/* TA Description Button (Styled like OtherExpenseTable) */}
// {editing.id === expense._id &&
// editing.type === "TADesc" ? (
//   <input
//     type="text"
//     autoFocus
//     value={tempValue}
//     onChange={(e) => setTempValue(e.target.value)}
//     onKeyDown={(e) => {
//       if (e.key === "Enter")
//         handleSave(expense, "TADesc");
//     }}
//     onBlur={() => handleSave(expense, "TADesc")}
//     className="ml-2 border rounded px-2 py-1 w-28 text-sm"
//   />
// ) : (
//   <button
//     onClick={() => {
//       setEditing({
//         id: expense._id,
//         type: "TADesc",
//       });
//       setTempValue(expense.TADesc || "");
//     }}
//     className={`ml-2 px-2 py-1 text-xs rounded ${
//       expense.TADesc
//         ? "bg-orange-500 text-white"
//         : "bg-gray-200"
//     }`}
//   >
//     D
//   </button>
// )}

//                     </>
//                   )}
//                 </td>

//                 {/* DA Column */}
//                 <td className="border p-2">
//                   {expense.DA}

//                   {editing.id === expense._id &&
//                   editing.type === "ExtraDA" ? (
//                     <input
//                       type="number"
//                       autoFocus
//                       value={tempValue}
//                       onChange={(e) => setTempValue(e.target.value)}
//                       onKeyDown={(e) => {
//                         if (e.key === "Enter")
//                           handleSave(expense, "ExtraDA");
//                       }}
//                       onBlur={() =>
//                         handleSave(expense, "ExtraDA")
//                       }
//                       className="ml-2 border rounded px-2 py-1 w-16 text-center"
//                     />
//                   ) : (
//                     <>
//                       {expense.ExtraDA > 0 && (
//                         <span className="ml-1 text-blue-600 font-semibold">
//                           +({expense.ExtraDA})
//                         </span>
//                       )}
//                       <button
//                         onClick={() => {
//                           setEditing({
//                             id: expense._id,
//                             type: "ExtraDA",
//                           });
//                           setTempValue(expense.ExtraDA || 0);
//                         }}
//                         className="ml-2 bg-blue-600 text-white p-1 rounded hover:bg-blue-700"
//                       >
//                         <Pencil size={12} />
//                       </button>
//                       {/* DA Description Button (Styled like OtherExpenseTable) */}
// {editing.id === expense._id &&
// editing.type === "daDesc" ? (
//   <input
//     type="text"
//     autoFocus
//     value={tempValue}
//     onChange={(e) => setTempValue(e.target.value)}
//     onKeyDown={(e) => {
//       if (e.key === "Enter")
//         handleSave(expense, "daDesc");
//     }}
//     onBlur={() => handleSave(expense, "daDesc")}
//     className="ml-2 border rounded px-2 py-1 w-28 text-sm"
//   />
// ) : (
//   <button
//     onClick={() => {
//       setEditing({
//         id: expense._id,
//         type: "daDesc",
//       });
//       setTempValue(expense.daDesc || "");
//     }}
//     className={`ml-2 px-2 py-1 text-xs rounded ${
//       expense.daDesc
//         ? "bg-orange-500 text-white"
//         : "bg-gray-200"
//     }`}
//   >
//     D
//   </button>
// )}

//                     </>
//                   )}
//                 </td>

//                 <td className="border p-2 font-bold">
//                   {expense.total}
//                 </td>

//                 {/* Radio Select */}
//                 <td className="border p-2">
//                   <input
//                     type="radio"
//                     name="normal_expense_select"
//                     checked={selectedId === expense._id}
//                     onChange={() => onSelect(expense._id)}
//                   />
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }




import React, { useState } from "react";
import axios from "../../utils/axios";
import dayjs from "dayjs";
import { Pencil } from "lucide-react";

export default function NormalExpenseTable({
  expenses = [],
  selectedId,
  onSelect,
  setExpenses,
}) {
  const [editing, setEditing] = useState({ id: null, type: null });
  const [tempValue, setTempValue] = useState("");

  // Sort by date ascending
  const sortedExpenses = [...expenses].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const handleSave = async (expense, field) => {
    try {
      let updatedExpense = { ...expense };

      // 🔹 Description fields
      if (field === "taDesc" || field === "daDesc") {
        updatedExpense[field] = tempValue;

        await axios.put(`/expense/normal/${expense._id}`, {
          [field]: tempValue,
        });
      } else {
        // 🔹 Numeric fields
        const updatedValue = Number(tempValue) || 0;
        updatedExpense[field] = updatedValue;

        const newTotal =
          (expense.TA || 0) +
          (expense.DA || 0) +
          (field === "ExtraTA" ? updatedValue : expense.ExtraTA || 0) +
          (field === "ExtraDA" ? updatedValue : expense.ExtraDA || 0);

        updatedExpense.total = newTotal;

        await axios.put(`/expense/normal/${expense._id}`, {
          [field]: updatedValue,
          total: newTotal,
        });
      }

      setExpenses((prev) =>
        prev.map((e) =>
          e._id === expense._id ? updatedExpense : e
        )
      );

      setEditing({ id: null, type: null });
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  let serialNumber = 1;

  return (
    <div className="overflow-x-auto border rounded-lg shadow-sm">
      <table className="w-full text-sm border-collapse bg-white">
        <thead className="bg-blue-100 text-blue-900 uppercase">
          <tr>
            <th className="border p-3">SL.NO</th>
            <th className="border p-3">DATE</th>
            <th className="border p-3">TIME</th>
            <th className="border p-3">PLACE OF WORK</th>
            <th className="border p-3">HQ/EX/OS</th>
            <th className="border p-3">KM'S</th>
            <th className="border p-3">M.O.T</th>
            <th className="border p-3">T.A</th>
            <th className="border p-3">D.A</th>
            <th className="border p-3">TOTAL</th>
            <th className="border p-3">SELECT</th>
          </tr>
        </thead>

        <tbody>
          {sortedExpenses.map((expense) => {
            const formattedDate = dayjs(expense.date).format("DD/MM/YYYY");

            return (
              <tr
                key={expense._id}
                className={`text-center transition ${
                  expense.workType === "NFW"
                    ? "bg-green-100 text-green-900"
                    : expense.workType === "NW"
                    ? "bg-red-100 text-red-900"
                    : "hover:bg-gray-50"
                }`}
              >
                <td className="border p-2">{serialNumber++}</td>
                <td className="border p-2">{formattedDate}</td>
                <td className="border p-2">{expense.time}</td>
                <td className="border p-2">{expense.placeOfWork}</td>
                <td className="border p-2">{expense.station}</td>
                <td className="border p-2">{expense.kms}</td>
                <td className="border p-2">{expense.MOT}</td>

                {/* TA Column */}
                <td className="border p-2">
                  {expense.TA}

                  {/* ExtraTA */}
                  {editing.id === expense._id &&
                  editing.type === "ExtraTA" ? (
                    <input
                      type="number"
                      autoFocus
                      value={tempValue}
                      onChange={(e) => setTempValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter")
                          handleSave(expense, "ExtraTA");
                      }}
                      onBlur={() =>
                        handleSave(expense, "ExtraTA")
                      }
                      className="ml-2 border rounded px-2 py-1 w-16 text-center"
                    />
                  ) : (
                    <>
                      {expense.ExtraTA > 0 && (
                        <span className="ml-1 text-blue-600 font-semibold">
                          +({expense.ExtraTA})
                        </span>
                      )}
                      <button
                        onClick={() => {
                          setEditing({
                            id: expense._id,
                            type: "ExtraTA",
                          });
                          setTempValue(expense.ExtraTA || 0);
                        }}
                        className="ml-2 bg-blue-600 text-white p-1 rounded hover:bg-blue-700"
                      >
                        <Pencil size={12} />
                      </button>
                    </>
                  )}

                  {/* taDesc */}
                  {editing.id === expense._id &&
                  editing.type === "taDesc" ? (
                    <input
                      type="text"
                      autoFocus
                      value={tempValue}
                      onChange={(e) => setTempValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter")
                          handleSave(expense, "taDesc");
                      }}
                      onBlur={() =>
                        handleSave(expense, "taDesc")
                      }
                      className="ml-2 border rounded px-2 py-1 w-28 text-sm"
                    />
                  ) : (
                    <button
                      onClick={() => {
                        setEditing({
                          id: expense._id,
                          type: "taDesc",
                        });
                        setTempValue(expense.taDesc || "");
                      }}
                      className={`ml-2 px-2 py-1 text-xs rounded ${
                        expense.taDesc
                          ? "bg-orange-500 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      D
                    </button>
                  )}
                </td>

                {/* DA Column */}
                <td className="border p-2">
                  {expense.DA}

                  {/* ExtraDA */}
                  {editing.id === expense._id &&
                  editing.type === "ExtraDA" ? (
                    <input
                      type="number"
                      autoFocus
                      value={tempValue}
                      onChange={(e) => setTempValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter")
                          handleSave(expense, "ExtraDA");
                      }}
                      onBlur={() =>
                        handleSave(expense, "ExtraDA")
                      }
                      className="ml-2 border rounded px-2 py-1 w-16 text-center"
                    />
                  ) : (
                    <>
                      {expense.ExtraDA > 0 && (
                        <span className="ml-1 text-blue-600 font-semibold">
                          +({expense.ExtraDA})
                        </span>
                      )}
                      <button
                        onClick={() => {
                          setEditing({
                            id: expense._id,
                            type: "ExtraDA",
                          });
                          setTempValue(expense.ExtraDA || 0);
                        }}
                        className="ml-2 bg-blue-600 text-white p-1 rounded hover:bg-blue-700"
                      >
                        <Pencil size={12} />
                      </button>
                    </>
                  )}

                  {/* daDesc */}
                  {editing.id === expense._id &&
                  editing.type === "daDesc" ? (
                    <input
                      type="text"
                      autoFocus
                      value={tempValue}
                      onChange={(e) => setTempValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter")
                          handleSave(expense, "daDesc");
                      }}
                      onBlur={() =>
                        handleSave(expense, "daDesc")
                      }
                      className="ml-2 border rounded px-2 py-1 w-28 text-sm"
                    />
                  ) : (
                    <button
                      onClick={() => {
                        setEditing({
                          id: expense._id,
                          type: "daDesc",
                        });
                        setTempValue(expense.daDesc || "");
                      }}
                      className={`ml-2 px-2 py-1 text-xs rounded ${
                        expense.daDesc
                          ? "bg-orange-500 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      D
                    </button>
                  )}
                </td>

                <td className="border p-2 font-bold">
                  {expense.total}
                </td>

                <td className="border p-2">
                  <input
                    type="radio"
                    name="normal_expense_select"
                    checked={selectedId === expense._id}
                    onChange={() => onSelect(expense._id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}








// // import React, { useState, useEffect } from "react";
// // import axios from "../../utils/axios";
// // import dayjs from "dayjs";
// // import { Pencil } from "lucide-react";

// // export default function OtherExpenseTable({
// //   expenses = [],
// //   selectedId,
// //   onSelect,
// //   setExpenses,
// // }) {
// //   const [editing, setEditing] = useState({ id: null, type: null });
// //   const [tempValue, setTempValue] = useState("");
// //   const [highlighted, setHighlighted] = useState({});

// //   // Sort by date ascending
// //   const sortedExpenses = [...expenses].sort(
// //     (a, b) => new Date(a.date) - new Date(b.date)
// //   );

// //   // Group by date
// //   const grouped = sortedExpenses.reduce((acc, item) => {
// //     const formattedDate = dayjs(item.date).format("DD/MM/YYYY");
// //     if (!acc[formattedDate]) acc[formattedDate] = [];
// //     acc[formattedDate].push(item);
// //     return acc;
// //   }, {});

// //   const handleSaveExtraAmount = async (expense) => {
// //     try {
// //       const updatedValue = Number(tempValue) || 0;
// //       const newTotal = (expense.amount || 0) + updatedValue;

// //       await axios.put(`/expense/other/${expense._id}`, {
// //         extraAmount: updatedValue,
// //         total: newTotal,
// //       });

// //       setExpenses((prev) =>
// //         prev.map((e) =>
// //           e._id === expense._id
// //             ? { ...e, extraAmount: updatedValue, total: newTotal }
// //             : e
// //         )
// //       );

// //       setEditing({ id: null, type: null });
// //     } catch (err) {
// //       console.error("Update failed:", err);
// //     }
// //   };

// //   const handleSaveExtraDesc = async (expense) => {
// //     try {
// //       await axios.put(`/expense/other/${expense._id}`, {
// //         extraDescription: tempValue,
// //       });

// //       setExpenses((prev) =>
// //         prev.map((e) =>
// //           e._id === expense._id
// //             ? { ...e, extraDescription: tempValue }
// //             : e
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
// //             <th className="border p-3 w-12">S.NO</th>
// //             <th className="border p-3 w-32">DATE</th>
// //             <th className="border p-3 w-28">BILL NO</th>
// //             <th className="border p-3 w-20">CHECKED</th>
// //             <th className="border p-3 text-left">DESCRIPTION</th>
// //             <th className="border p-3 w-56">AMOUNT</th>
// //             <th className="border p-3 w-20">SELECT</th>
// //           </tr>
// //         </thead>

// //         <tbody>
// //           {Object.entries(grouped).map(([date, entries]) =>
// //             entries.map((expense, index) => {
// //               const isHighlighted = highlighted[expense._id];

// //               return (
// //                 <tr
// //                   key={expense._id}
// //                   className={`hover:bg-gray-50 ${
// //                     isHighlighted ? "bg-yellow-50" : ""
// //                   }`}
// //                 >
// //                   {/* SL NO */}
// //                   <td className="border p-2 text-center">
// //                     {serialNumber++}
// //                   </td>

// //                   {/* DATE with rowspan */}
// //                   {index === 0 && (
// //                     <td
// //                       rowSpan={entries.length}
// //                       className="border p-2 text-center font-semibold align-middle"
// //                     >
// //                       {date}
// //                     </td>
// //                   )}

// //                   {/* BILL NO clickable */}
// //                   <td
// //                     className="border p-2 text-center cursor-pointer"
// //                     onClick={() =>
// //                       setHighlighted((prev) => ({
// //                         ...prev,
// //                         [expense._id]: !prev[expense._id],
// //                       }))
// //                     }
// //                   >
// //                     {expense.billNo || "-"}
// //                   </td>

// //                   {/* CHECKBOX */}
// //                   <td className="border p-2 text-center">
// //                     <input
// //                       type="checkbox"
// //                       checked={isHighlighted || false}
// //                       onChange={() =>
// //                         setHighlighted((prev) => ({
// //                           ...prev,
// //                           [expense._id]: !prev[expense._id],
// //                         }))
// //                       }
// //                     />
// //                   </td>

// //                   {/* DESCRIPTION */}
// //                   <td className="border p-2">
// //                     {expense.description}
// //                   </td>

// //                   {/* AMOUNT COLUMN */}
// //                   <td className="border p-2 text-right">
// //                     {expense.amount}

// //                     {editing.id === expense._id &&
// //                     editing.type === "extraAmount" ? (
// //                       <input
// //                         type="number"
// //                         autoFocus
// //                         value={tempValue}
// //                         onChange={(e) =>
// //                           setTempValue(e.target.value)
// //                         }
// //                         onKeyDown={(e) => {
// //                           if (e.key === "Enter")
// //                             handleSaveExtraAmount(expense);
// //                         }}
// //                         onBlur={() =>
// //                           handleSaveExtraAmount(expense)
// //                         }
// //                         className="ml-2 border rounded px-2 py-1 w-20 text-right"
// //                       />
// //                     ) : (
// //                       <>
// //                         {expense.extraAmount > 0 && (
// //                           <span className="ml-1 text-blue-600 font-semibold">
// //                             +({expense.extraAmount})
// //                           </span>
// //                         )}
// //                         <button
// //                           onClick={() => {
// //                             setEditing({
// //                               id: expense._id,
// //                               type: "extraAmount",
// //                             });
// //                             setTempValue(
// //                               expense.extraAmount || 0
// //                             );
// //                           }}
// //                           className="ml-2 bg-blue-600 text-white p-1 rounded"
// //                         >
// //                           <Pencil size={12} />
// //                         </button>
// //                       </>
// //                     )}

// //                     {/* Extra Description Button */}
// //                     {editing.id === expense._id &&
// //                     editing.type === "extraDesc" ? (
// //                       <input
// //                         type="text"
// //                         autoFocus
// //                         value={tempValue}
// //                         onChange={(e) =>
// //                           setTempValue(e.target.value)
// //                         }
// //                         onKeyDown={(e) => {
// //                           if (e.key === "Enter")
// //                             handleSaveExtraDesc(expense);
// //                         }}
// //                         onBlur={() =>
// //                           handleSaveExtraDesc(expense)
// //                         }
// //                         className="ml-2 border rounded px-2 py-1 w-32"
// //                       />
// //                     ) : (
// //                       <button
// //                         onClick={() => {
// //                           setEditing({
// //                             id: expense._id,
// //                             type: "extraDesc",
// //                           });
// //                           setTempValue(
// //                             expense.extraDescription || ""
// //                           );
// //                         }}
// //                         className={`ml-2 px-2 py-1 text-xs rounded ${
// //                           expense.extraDescription
// //                             ? "bg-orange-500 text-white"
// //                             : "bg-gray-200"
// //                         }`}
// //                       >
// //                         D
// //                       </button>
// //                     )}
// //                   </td>

// //                   {/* RADIO SELECT */}
// //                   <td className="border p-2 text-center">
// //                     <input
// //                       type="radio"
// //                       name="other_expense_select"
// //                       checked={selectedId === expense._id}
// //                       onChange={() => onSelect(expense._id)}
// //                     />
// //                   </td>
// //                 </tr>
// //               );
// //             })
// //           )}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }












// import React, { useState, useEffect } from "react";
// import axios from "../../utils/axios";
// import dayjs from "dayjs";
// import { Pencil } from "lucide-react";

// export default function OtherExpenseTable({
//   expenses = [],
//   selectedId,
//   onSelect,
//   setExpenses,
// }) {
//   const [editing, setEditing] = useState({ id: null, type: null });
//   const [tempValue, setTempValue] = useState("");
//   const [highlighted, setHighlighted] = useState({});

//   // Sort by date ascending
//   const sortedExpenses = [...expenses].sort(
//     (a, b) => new Date(a.date) - new Date(b.date)
//   );

//   // Group by date (preserving sorted order)
//   const grouped = sortedExpenses.reduce((acc, item) => {
//     const formattedDate = dayjs(item.date).format("DD/MM/YYYY");
//     if (!acc[formattedDate]) acc[formattedDate] = [];
//     acc[formattedDate].push(item);
//     return acc;
//   }, {});

//   const handleSaveExtraAmount = async (expense) => {
//     try {
//       const updatedValue = Number(tempValue) || 0;
//       const newTotal = (expense.amount || 0) + updatedValue;

//       await axios.put(`/expense/other/${expense._id}`, {
//         extraAmount: updatedValue,
//         total: newTotal,
//       });

//       setExpenses((prev) =>
//         prev.map((e) =>
//           e._id === expense._id
//             ? { ...e, extraAmount: updatedValue, total: newTotal }
//             : e
//         )
//       );

//       setEditing({ id: null, type: null });
//     } catch (err) {
//       console.error("Update failed:", err);
//     }
//   };

//   const handleSaveExtraDesc = async (expense) => {
//     try {
//       await axios.put(`/expense/other/${expense._id}`, {
//         extraDescription: tempValue,
//       });

//       setExpenses((prev) =>
//         prev.map((e) =>
//           e._id === expense._id
//             ? { ...e, extraDescription: tempValue }
//             : e
//         )
//       );

//       setEditing({ id: null, type: null });
//     } catch (err) {
//       console.error("Update failed:", err);
//     }
//   };

//   let serialNumber = 1;

//   return (
//     <div className="overflow-x-auto border rounded-lg">
//       <table className="w-full text-sm border-collapse bg-white">
//         <thead className="bg-blue-100 text-blue-900 uppercase">
//           <tr>
//             <th className="border p-3 w-12">S.NO</th>
//             <th className="border p-3 w-32">DATE</th>
//             <th className="border p-3 w-28">BILL NO</th>
//             <th className="border p-3 w-20">CHECKED</th>
//             <th className="border p-3 text-left">DESCRIPTION</th>
//             <th className="border p-3 w-56">AMOUNT</th>
//             <th className="border p-3 w-20">SELECT</th>
//           </tr>
//         </thead>

//         <tbody>
//           {Object.keys(grouped).map((date) =>
//             grouped[date].map((expense, index) => {
//               const isHighlighted = highlighted[expense._id];

//               return (
//                 <tr
//                   key={expense._id}
//                   className={`hover:bg-gray-50 ${
//                     isHighlighted ? "bg-yellow-50" : ""
//                   }`}
//                 >
//                   {/* SL NO */}
//                   <td className="border p-2 text-center">
//                     {serialNumber++}
//                   </td>

//                   {/* DATE with rowspan */}
//                   {index === 0 && (
//                     <td
//                       rowSpan={grouped[date].length}
//                       className="border p-2 text-center font-semibold align-middle"
//                     >
//                       {date}
//                     </td>
//                   )}

//                   {/* BILL NO clickable */}
//                   <td
//                     className="border p-2 text-center cursor-pointer"
//                     onClick={() =>
//                       setHighlighted((prev) => ({
//                         ...prev,
//                         [expense._id]: !prev[expense._id],
//                       }))
//                     }
//                   >
//                     {expense.billNo || "-"}
//                   </td>

//                   {/* CHECKBOX */}
//                   <td className="border p-2 text-center">
//                     <input
//                       type="checkbox"
//                       checked={isHighlighted || false}
//                       onChange={() =>
//                         setHighlighted((prev) => ({
//                           ...prev,
//                           [expense._id]: !prev[expense._id],
//                         }))
//                       }
//                     />
//                   </td>

//                   {/* DESCRIPTION */}
//                   <td className="border p-2">
//                     {expense.description}
//                   </td>

//                   {/* AMOUNT COLUMN */}
//                   <td className="border p-2 text-right">
//                     {expense.amount}

//                     {editing.id === expense._id &&
//                     editing.type === "extraAmount" ? (
//                       <input
//                         type="number"
//                         autoFocus
//                         value={tempValue}
//                         onChange={(e) =>
//                           setTempValue(e.target.value)
//                         }
//                         onKeyDown={(e) => {
//                           if (e.key === "Enter")
//                             handleSaveExtraAmount(expense);
//                         }}
//                         onBlur={() =>
//                           handleSaveExtraAmount(expense)
//                         }
//                         className="ml-2 border rounded px-2 py-1 w-20 text-right"
//                       />
//                     ) : (
//                       <>
//                         {expense.extraAmount > 0 && (
//                           <span className="ml-1 text-blue-600 font-semibold">
//                             +({expense.extraAmount})
//                           </span>
//                         )}
//                         <button
//                           onClick={() => {
//                             setEditing({
//                               id: expense._id,
//                               type: "extraAmount",
//                             });
//                             setTempValue(
//                               expense.extraAmount || 0
//                             );
//                           }}
//                           className="ml-2 bg-blue-600 text-white p-1 rounded"
//                         >
//                           <Pencil size={12} />
//                         </button>
//                       </>
//                     )}

//                     {editing.id === expense._id &&
//                     editing.type === "extraDesc" ? (
//                       <input
//                         type="text"
//                         autoFocus
//                         value={tempValue}
//                         onChange={(e) =>
//                           setTempValue(e.target.value)
//                         }
//                         onKeyDown={(e) => {
//                           if (e.key === "Enter")
//                             handleSaveExtraDesc(expense);
//                         }}
//                         onBlur={() =>
//                           handleSaveExtraDesc(expense)
//                         }
//                         className="ml-2 border rounded px-2 py-1 w-32"
//                       />
//                     ) : (
//                       <button
//                         onClick={() => {
//                           setEditing({
//                             id: expense._id,
//                             type: "extraDesc",
//                           });
//                           setTempValue(
//                             expense.extraDescription || ""
//                           );
//                         }}
//                         className={`ml-2 px-2 py-1 text-xs rounded ${
//                           expense.extraDescription
//                             ? "bg-orange-500 text-white"
//                             : "bg-gray-200"
//                         }`}
//                       >
//                         D
//                       </button>
//                     )}
//                   </td>

//                   {/* RADIO SELECT */}
//                   <td className="border p-2 text-center">
//                     <input
//                       type="radio"
//                       name="other_expense_select"
//                       checked={selectedId === expense._id}
//                       onChange={() => onSelect(expense._id)}
//                     />
//                   </td>
//                 </tr>
//               );
//             })
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }











import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import dayjs from "dayjs";
import { Pencil } from "lucide-react";

export default function OtherExpenseTable({
  expenses = [],
  selectedId,
  onSelect,
  setExpenses,
}) {
  const [editing, setEditing] = useState({ id: null, type: null });
  const [tempValue, setTempValue] = useState("");
  const [highlighted, setHighlighted] = useState({});

  const sortedExpenses = [...expenses].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const grouped = sortedExpenses.reduce((acc, item) => {
    const formattedDate = dayjs(item.date).format("DD/MM/YYYY");
    if (!acc[formattedDate]) acc[formattedDate] = [];
    acc[formattedDate].push(item);
    return acc;
  }, {});

  const handleSaveExtraAmount = async (expense) => {
    try {
      const updatedValue = Number(tempValue) || 0;
      const newTotal = (expense.amount || 0) + updatedValue;

      await axios.put(`/expense/other/${expense._id}`, {
        extraAmount: updatedValue,
        total: newTotal,
      });

      setExpenses((prev) =>
        prev.map((e) =>
          e._id === expense._id
            ? { ...e, extraAmount: updatedValue, total: newTotal }
            : e
        )
      );

      setEditing({ id: null, type: null });
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  const handleSaveExtraDesc = async (expense) => {
    try {
      await axios.put(`/expense/other/${expense._id}`, {
        extraDescription: tempValue,
      });

      setExpenses((prev) =>
        prev.map((e) =>
          e._id === expense._id
            ? { ...e, extraDescription: tempValue }
            : e
        )
      );

      setEditing({ id: null, type: null });
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  let serialNumber = 1;

  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="w-full text-sm border-collapse bg-white">
        <thead className="bg-blue-100 text-blue-900 uppercase">
          <tr>
            <th className="border p-3 w-12">S.NO</th>
            <th className="border p-3 w-32">DATE</th>
            <th className="border p-3 w-28">BILL NO</th>
            <th className="border p-3 text-left">DESCRIPTION</th>
            <th className="border p-3 w-56">AMOUNT</th>
            <th className="border p-3 w-20">CHECKED</th>
            <th className="border p-3 w-20">SELECT</th>
          </tr>
        </thead>

        <tbody>
          {Object.keys(grouped).map((date) =>
            grouped[date].map((expense, index) => {
              const isHighlighted = highlighted[expense._id];

              return (
                <tr
                  key={expense._id}
                  className={`hover:bg-gray-50 ${
                    isHighlighted ? "bg-yellow-50" : ""
                  }`}
                >
                  <td className="border p-2 text-center">
                    {serialNumber++}
                  </td>

                  {index === 0 && (
                    <td
                      rowSpan={grouped[date].length}
                      className="border p-2 text-center font-semibold align-middle"
                    >
                      {date}
                    </td>
                  )}

                  <td
                    className="border p-2 text-center cursor-pointer"
                    onClick={() =>
                      setHighlighted((prev) => ({
                        ...prev,
                        [expense._id]: !prev[expense._id],
                      }))
                    }
                  >
                    {expense.billNo || "-"}
                  </td>

                  <td className="border p-2">
                    {expense.description}
                  </td>

                  <td className="border p-2 text-right">
                    {expense.amount}

                    {editing.id === expense._id &&
                    editing.type === "extraAmount" ? (
                      <input
                        type="number"
                        autoFocus
                        value={tempValue}
                        onChange={(e) =>
                          setTempValue(e.target.value)
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter")
                            handleSaveExtraAmount(expense);
                        }}
                        onBlur={() =>
                          handleSaveExtraAmount(expense)
                        }
                        className="ml-2 border rounded px-2 py-1 w-20 text-right"
                      />
                    ) : (
                      <>
                        {expense.extraAmount > 0 && (
                          <span className="ml-1 text-blue-600 font-semibold">
                            +({expense.extraAmount})
                          </span>
                        )}
                        <button
                          onClick={() => {
                            setEditing({
                              id: expense._id,
                              type: "extraAmount",
                            });
                            setTempValue(
                              expense.extraAmount || 0
                            );
                          }}
                          className="ml-2 bg-blue-600 text-white p-1 rounded"
                        >
                          <Pencil size={12} />
                        </button>
                      </>
                    )}

                    {editing.id === expense._id &&
                    editing.type === "extraDesc" ? (
                      <input
                        type="text"
                        autoFocus
                        value={tempValue}
                        onChange={(e) =>
                          setTempValue(e.target.value)
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter")
                            handleSaveExtraDesc(expense);
                        }}
                        onBlur={() =>
                          handleSaveExtraDesc(expense)
                        }
                        className="ml-2 border rounded px-2 py-1 w-32"
                      />
                    ) : (
                      <button
                        onClick={() => {
                          setEditing({
                            id: expense._id,
                            type: "extraDesc",
                          });
                          setTempValue(
                            expense.extraDescription || ""
                          );
                        }}
                        className={`ml-2 px-2 py-1 text-xs rounded ${
                          expense.extraDescription
                            ? "bg-orange-500 text-white"
                            : "bg-gray-200"
                        }`}
                      >
                        D
                      </button>
                    )}
                  </td>

                  <td className="border p-2 text-center">
                    <input
                      type="checkbox"
                      checked={isHighlighted || false}
                      onChange={() =>
                        setHighlighted((prev) => ({
                          ...prev,
                          [expense._id]: !prev[expense._id],
                        }))
                      }
                    />
                  </td>

                  <td className="border p-2 text-center">
                    <input
                      type="radio"
                      name="other_expense_select"
                      checked={selectedId === expense._id}
                      onChange={() => onSelect(expense._id)}
                    />
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
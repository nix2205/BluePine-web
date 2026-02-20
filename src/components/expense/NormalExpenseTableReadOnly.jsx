// // import dayjs from "dayjs";

// // export default function NormalExpenseTableReadOnly({ expenses = [] }) {
// //   const sortedExpenses = [...expenses].sort(
// //     (a, b) => new Date(a.date) - new Date(b.date)
// //   );

// //   let serialNumber = 1;

// //   return (
// //     <div className="overflow-x-auto border rounded-lg">
// //       <table className="w-full text-sm border-collapse bg-white">
// //         <thead className="bg-blue-100 text-blue-900 uppercase">
// //           <tr>
// //             <th className="border p-3">SL.NO</th>
// //             <th className="border p-3">DATE</th>
// //             <th className="border p-3">TIME</th>
// //             <th className="border p-3">PLACE</th>
// //             <th className="border p-3">HQ/EX/OS</th>
// //             <th className="border p-3">KM'S</th>
// //             <th className="border p-3">M.O.T</th>
// //             <th className="border p-3">T.A</th>
// //             <th className="border p-3">D.A</th>
// //             <th className="border p-3">TOTAL</th>
// //           </tr>
// //         </thead>

// //         <tbody>
// //           {sortedExpenses.map((expense) => (
// //             <tr key={expense._id} className="text-center hover:bg-gray-50">
// //               <td className="border p-2">{serialNumber++}</td>
// //               <td className="border p-2">
// //                 {dayjs(expense.date).format("DD/MM/YYYY")}
// //               </td>
// //               <td className="border p-2">{expense.time}</td>
// //               <td className="border p-2">{expense.placeOfWork}</td>
// //               <td className="border p-2">{expense.station}</td>
// //               <td className="border p-2">{expense.kms}</td>
// //               <td className="border p-2">{expense.MOT}</td>
// //               <td className="border p-2">
// //                 {expense.TA} {expense.ExtraTA > 0 && `+(${expense.ExtraTA})`}
// //               </td>
// //               <td className="border p-2">
// //                 {expense.DA} {expense.ExtraDA > 0 && `+(${expense.ExtraDA})`}
// //               </td>
// //               <td className="border p-2 font-bold">{expense.total}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }





// import { useState } from "react";
// import dayjs from "dayjs";

// export default function NormalExpenseTableReadOnly({ expenses = [] }) {
//   const [expanded, setExpanded] = useState({
//     id: null,
//     type: null,
//   });

//   const sortedExpenses = [...expenses].sort(
//     (a, b) => new Date(a.date) - new Date(b.date)
//   );

//   let serialNumber = 1;

//   const toggleExpand = (expenseId, type) => {
//     setExpanded((prev) =>
//       prev.id === expenseId && prev.type === type
//         ? { id: null, type: null } // 🔥 close if same clicked again
//         : { id: expenseId, type }
//     );
//   };

//   return (
//     <div className="overflow-x-auto border rounded-lg shadow-sm">
//       <table className="w-full text-sm border-collapse bg-white">
//         <thead className="bg-blue-100 text-blue-900 uppercase">
//           <tr>
//             <th className="border p-3">SL.NO</th>
//             <th className="border p-3">DATE</th>
//             <th className="border p-3">TIME</th>
//             <th className="border p-3">PLACE</th>
//             <th className="border p-3">HQ/EX/OS</th>
//             <th className="border p-3">KM'S</th>
//             <th className="border p-3">M.O.T</th>
//             <th className="border p-3">T.A</th>
//             <th className="border p-3">D.A</th>
//             <th className="border p-3">TOTAL</th>
//           </tr>
//         </thead>

//         <tbody>
//           {sortedExpenses.map((expense) => {
//             const formattedDate = dayjs(expense.date).format("DD/MM/YYYY");

//             // 🎨 WorkType coloring
//             const rowStyle =
//               expense.workType === "NFW"
//                 ? "bg-green-100 text-green-900"
//                 : expense.workType === "NW"
//                 ? "bg-red-100 text-red-900"
//                 : "hover:bg-gray-50";

//             return (
//               <>
//                 <tr
//                   key={expense._id}
//                   className={`text-center transition ${rowStyle}`}
//                 >
//                   <td className="border p-2">{serialNumber++}</td>
//                   <td className="border p-2">{formattedDate}</td>
//                   <td className="border p-2">{expense.time}</td>
//                   <td className="border p-2">{expense.placeOfWork}</td>
//                   <td className="border p-2">{expense.station}</td>
//                   <td className="border p-2">{expense.kms}</td>
//                   <td className="border p-2">{expense.MOT}</td>

//                   {/* TA */}
//                   <td className="border p-2">
//                     {expense.TA}
//                     {expense.ExtraTA > 0 && (
//                       <span className="ml-1 font-semibold">
//                         +({expense.ExtraTA})
//                       </span>
//                     )}

//                     {expense.taDesc && (
//                       <button
//                         onClick={() =>
//                           toggleExpand(expense._id, "taDesc")
//                         }
//                         className="ml-2 px-2 py-1 text-xs rounded bg-orange-500 text-white hover:bg-orange-600"
//                       >
//                         D
//                       </button>
//                     )}
//                   </td>

//                   {/* DA */}
//                   <td className="border p-2">
//                     {expense.DA}
//                     {expense.ExtraDA > 0 && (
//                       <span className="ml-1 font-semibold">
//                         +({expense.ExtraDA})
//                       </span>
//                     )}

//                     {expense.daDesc && (
//                       <button
//                         onClick={() =>
//                           toggleExpand(expense._id, "daDesc")
//                         }
//                         className="ml-2 px-2 py-1 text-xs rounded bg-orange-500 text-white hover:bg-orange-600"
//                       >
//                         D
//                       </button>
//                     )}
//                   </td>

//                   <td className="border p-2 font-bold">
//                     {expense.total}
//                   </td>
//                 </tr>

//                 {/* ✨ Centered Italic Description Row */}
//                 {expanded.id === expense._id && (
//                   <tr className="bg-yellow-50">
//                     <td
//                       colSpan="10"
//                       className="border p-4 text-center italic text-gray-700"
//                     >
//                       {expense[expanded.type]}
//                     </td>
//                   </tr>
//                 )}
//               </>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }








import React, { useState } from "react";
import dayjs from "dayjs";

export default function NormalExpenseTableReadOnly({ expenses = [] }) {
  const [expanded, setExpanded] = useState({
    id: null,
    type: null,
  });

  const sortedExpenses = [...expenses].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  let serialNumber = 1;

  const toggleExpand = (expenseId, type) => {
    setExpanded((prev) =>
      prev.id === expenseId && prev.type === type
        ? { id: null, type: null }
        : { id: expenseId, type }
    );
  };

  return (
    <div className="overflow-x-auto border rounded-lg shadow-sm">
      <table className="w-full text-sm border-collapse bg-white">
        <thead className="bg-blue-100 text-blue-900 uppercase">
          <tr>
            <th className="border p-3">SL.NO</th>
            <th className="border p-3">DATE</th>
            <th className="border p-3">TIME</th>
            <th className="border p-3">PLACE</th>
            <th className="border p-3">HQ/EX/OS</th>
            <th className="border p-3">KM'S</th>
            <th className="border p-3">M.O.T</th>
            <th className="border p-3">T.A</th>
            <th className="border p-3">D.A</th>
            <th className="border p-3">TOTAL</th>
          </tr>
        </thead>

        <tbody>
          {sortedExpenses.map((expense) => {
            const formattedDate = dayjs(expense.date).format("DD/MM/YYYY");

            const rowStyle =
              expense.workType === "NFW"
                ? "bg-green-100 text-green-900"
                : expense.workType === "NW"
                ? "bg-red-100 text-red-900"
                : "hover:bg-gray-50";

            return (
              <React.Fragment key={expense._id}>
                <tr className={`text-center transition ${rowStyle}`}>
                  <td className="border p-2">{serialNumber++}</td>
                  <td className="border p-2">{formattedDate}</td>
                  <td className="border p-2">{expense.time}</td>
                  <td className="border p-2">{expense.placeOfWork}</td>
                  <td className="border p-2">{expense.station}</td>
                  <td className="border p-2">{expense.kms}</td>
                  <td className="border p-2">{expense.MOT}</td>

                  <td className="border p-2">
                    {expense.TA}
                    {expense.ExtraTA > 0 && (
                      <span className="ml-1 font-semibold">
                        +({expense.ExtraTA})
                      </span>
                    )}

                    {expense.taDesc && (
                      <button
                        onClick={() =>
                          toggleExpand(expense._id, "taDesc")
                        }
                        className="ml-2 px-2 py-1 text-xs rounded bg-orange-500 text-white hover:bg-orange-600"
                      >
                        D
                      </button>
                    )}
                  </td>

                  <td className="border p-2">
                    {expense.DA}
                    {expense.ExtraDA > 0 && (
                      <span className="ml-1 font-semibold">
                        +({expense.ExtraDA})
                      </span>
                    )}

                    {expense.daDesc && (
                      <button
                        onClick={() =>
                          toggleExpand(expense._id, "daDesc")
                        }
                        className="ml-2 px-2 py-1 text-xs rounded bg-orange-500 text-white hover:bg-orange-600"
                      >
                        D
                      </button>
                    )}
                  </td>

                  <td className="border p-2 font-bold">
                    {expense.total}
                  </td>
                </tr>

                {expanded.id === expense._id && (
                  <tr className="bg-yellow-50">
                    <td
                      colSpan="10"
                      className="border p-4 text-center italic text-gray-700"
                    >
                      {expense[expanded.type]}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

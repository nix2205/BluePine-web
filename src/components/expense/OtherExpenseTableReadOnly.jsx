// import dayjs from "dayjs";

// export default function OtherExpenseTableReadOnly({ expenses = [] }) {
//   const sortedExpenses = [...expenses].sort(
//     (a, b) => new Date(a.date) - new Date(b.date)
//   );

//   let serialNumber = 1;

//   return (
//     <div className="overflow-x-auto border rounded-lg">
//       <table className="w-full text-sm border-collapse bg-white">
//         <thead className="bg-blue-100 text-blue-900 uppercase">
//           <tr>
//             <th className="border p-3">SL.NO</th>
//             <th className="border p-3">DATE</th>
//             <th className="border p-3">BILL NO</th>
//             <th className="border p-3">DESCRIPTION</th>
//             <th className="border p-3">AMOUNT</th>
//             <th className="border p-3">TOTAL</th>
//           </tr>
//         </thead>

//         <tbody>
//           {sortedExpenses.map((expense) => (
//             <tr key={expense._id} className="text-center hover:bg-gray-50">
//               <td className="border p-2">{serialNumber++}</td>
//               <td className="border p-2">
//                 {dayjs(expense.date).format("DD/MM/YYYY")}
//               </td>
//               <td className="border p-2">{expense.billNo}</td>
//               <td className="border p-2">{expense.description}</td>
//               <td className="border p-2">
//                 {expense.amount}{" "}
//                 {expense.extraAmount > 0 &&
//                   `+(${expense.extraAmount})`}
//               </td>
//               <td className="border p-2 font-bold">{expense.total}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }










import React, { useState } from "react";
import dayjs from "dayjs";

export default function OtherExpenseTableReadOnly({ expenses = [] }) {
  const [expandedId, setExpandedId] = useState(null);

  const sortedExpenses = [...expenses].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  let serialNumber = 1;

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="overflow-x-auto border rounded-lg shadow-sm">
      <table className="w-full text-sm border-collapse bg-white">
        <thead className="bg-blue-100 text-blue-900 uppercase">
          <tr>
            <th className="border p-3">SL.NO</th>
            <th className="border p-3">DATE</th>
            <th className="border p-3">BILL NO</th>
            <th className="border p-3">DESCRIPTION</th>
            <th className="border p-3">AMOUNT</th>
            <th className="border p-3">TOTAL</th>
          </tr>
        </thead>

        <tbody>
          {sortedExpenses.map((expense) => (
            <React.Fragment key={expense._id}>
              <tr className="text-center hover:bg-gray-50">
                <td className="border p-2">{serialNumber++}</td>
                <td className="border p-2">
                  {dayjs(expense.date).format("DD/MM/YYYY")}
                </td>
                <td className="border p-2">{expense.billNo}</td>
                <td className="border p-2">
                  {expense.description}
                </td>

                {/* AMOUNT */}
                <td className="border p-2">
                  {expense.amount}
                  {expense.extraAmount > 0 && (
                    <span className="ml-1 font-semibold">
                      +({expense.extraAmount})
                    </span>
                  )}

                  {expense.extraDescription && (
                    <button
                      onClick={() =>
                        toggleExpand(expense._id)
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

              {/* ✨ Expanded Extra Description Row */}
              {expandedId === expense._id && (
                <tr className="bg-yellow-50">
                  <td
                    colSpan="6"
                    className="border p-4 text-center italic text-gray-700"
                  >
                    {expense.extraDescription}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

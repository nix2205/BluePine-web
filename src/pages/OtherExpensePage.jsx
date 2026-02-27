// import { useState, useEffect } from "react";
// import axios from "../utils/axios";
// import AppLayout from "../layouts/AppLayout";

// export default function OtherExpensePage() {
//   const [date, setDate] = useState("");
//   const [rows, setRows] = useState([
//     { billNo: "", description: "", amount: "" },
//   ]);
//   const [total, setTotal] = useState(0);
//   const [loading, setLoading] = useState(false);

//   // ===== Date Restrictions =====
//   const today = new Date();
//   const startOfPreviousMonth = new Date(
//     today.getFullYear(),
//     today.getMonth() - 1,
//     1
//   );

//   const formatDate = (d) => d.toISOString().split("T")[0];

//   const minDate = formatDate(startOfPreviousMonth);
//   const maxDate = formatDate(today);

//   // ===== Auto Total Calculation =====
//   useEffect(() => {
//     const sum = rows.reduce(
//       (acc, row) => acc + (Number(row.amount) || 0),
//       0
//     );
//     setTotal(sum);
//   }, [rows]);

//   // ===== Handle Row Change =====
//   const handleChange = (index, field, value) => {
//     const updated = [...rows];
//     updated[index][field] = value;
//     setRows(updated);
//   };

//   // ===== Add New Row =====
//   const addRow = () => {
//     setRows([...rows, { billNo: "", description: "", amount: "" }]);
//   };

//   // ===== Submit =====
//   const handleSubmit = async () => {
//     if (!date) {
//       alert("Please select a date");
//       return;
//     }

//     for (let row of rows) {
//       if (!row.description || !row.amount) {
//         alert("Please fill all required fields");
//         return;
//       }
//     }

//     try {
//       setLoading(true);

//       // Create one expense per row
//       for (let row of rows) {
//         await axios.post("/user-expense/other", {
//           date,
//           billNo: row.billNo,
//           description: row.description,
//           amount: row.amount,
//         });
//       }

//       alert("Expenses added successfully");

//       // Reset
//       setRows([{ billNo: "", description: "", amount: "" }]);
//       setDate("");

//     } catch (err) {
//       alert(err.response?.data?.message || "Error submitting");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AppLayout title="Add Other Expenses" backTo="/executive-dashboard">
//       <div style={styles.card}>
//         <h2>Add Other Expenses</h2>

//         {/* Date */}
//         <label style={styles.label}>Select Date:</label>
//         <input
//           type="date"
//           value={date}
//           min={minDate}
//           max={maxDate}
//           onChange={(e) => setDate(e.target.value)}
//           style={styles.input}
//         />

//         {/* Dynamic Rows */}
//         {rows.map((row, index) => (
//           <div key={index} style={styles.rowBox}>
//             <label>Bill No:</label>
//             <input
//               type="text"
//               placeholder="Enter last four digits of bill number"
//               value={row.billNo}
//               onChange={(e) =>
//                 handleChange(index, "billNo", e.target.value)
//               }
//               style={styles.input}
//             />

//             <label>Description:</label>
//             <input
//               type="text"
//               placeholder="Enter description"
//               value={row.description}
//               onChange={(e) =>
//                 handleChange(index, "description", e.target.value)
//               }
//               style={styles.input}
//             />

//             <label>Amount:</label>
//             <input
//               type="number"
//               placeholder="Enter amount"
//               value={row.amount}
//               onChange={(e) =>
//                 handleChange(index, "amount", e.target.value)
//               }
//               style={styles.input}
//             />
//           </div>
//         ))}

//         {/* Buttons Row */}
//         <div style={styles.buttonRow}>
//           <button
//             onClick={handleSubmit}
//             style={styles.submitButton}
//             disabled={loading}
//           >
//             {loading ? "Submitting..." : "Submit"}
//           </button>

//           <button onClick={addRow} style={styles.plusButton}>
//             +
//           </button>
//         </div>

//         <div style={styles.total}>Total: ₹{total}</div>
//       </div>
//     </AppLayout>
//   );
// }

// const styles = {
//   card: {
//     maxWidth: "600px",
//     margin: "40px auto",
//     padding: "30px",
//     borderRadius: "14px",
//     backgroundColor: "#f5f6f8",
//     boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
//   },
//   label: {
//     display: "block",
//     marginTop: "15px",
//     marginBottom: "6px",
//     fontWeight: "500",
//   },
//   rowBox: {
//     marginTop: "20px",
//     padding: "20px",
//     borderRadius: "12px",
//     backgroundColor: "#eaecef",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     marginTop: "5px",
//     marginBottom: "10px",
//     borderRadius: "8px",
//     border: "1px solid #ccc",
//   },
//   buttonRow: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: "20px",
//   },
//   submitButton: {
//     padding: "10px 25px",
//     backgroundColor: "#1e9c47",
//     border: "none",
//     borderRadius: "8px",
//     color: "white",
//     fontSize: "16px",
//     cursor: "pointer",
//   },
//   plusButton: {
//     width: "45px",
//     height: "45px",
//     backgroundColor: "#3b7ddd",
//     border: "none",
//     borderRadius: "10px",
//     color: "white",
//     fontSize: "22px",
//     cursor: "pointer",
//   },
//   total: {
//     marginTop: "20px",
//     fontWeight: "600",
//     fontSize: "18px",
//   },
// };








import { useState, useEffect } from "react";
import axios from "../utils/axios";
import AppLayout from "../layouts/AppLayout";

export default function OtherExpensePage() {
  const [date, setDate] = useState("");
  const [rows, setRows] = useState([
    { billNo: "", description: "", amount: "" },
  ]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  // ===== Date Restrictions =====
  const today = new Date();
  const startOfPreviousMonth = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
    1
  );

  const formatDate = (d) => d.toISOString().split("T")[0];

  const minDate = formatDate(startOfPreviousMonth);
  const maxDate = formatDate(today);

  // ===== Auto Total Calculation =====
  useEffect(() => {
    const sum = rows.reduce(
      (acc, row) => acc + (Number(row.amount) || 0),
      0
    );
    setTotal(sum);
  }, [rows]);

  // ===== Handle Row Change =====
  const handleChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  // ===== Add New Row =====
  const addRow = () => {
    setRows([...rows, { billNo: "", description: "", amount: "" }]);
  };

  // ===== Submit =====
  const handleSubmit = async () => {
    if (loading) return; // ✅ Prevent double click

    if (!date) {
      alert("Please select a date");
      return;
    }

    for (let row of rows) {
      if (!row.description || !row.amount) {
        alert("Please fill all required fields");
        return;
      }
    }

    try {
      setLoading(true);

      // Create one expense per row
      for (let row of rows) {
        await axios.post("/user-expense/other", {
          date,
          billNo: row.billNo,
          description: row.description,
          amount: row.amount,
        });
      }

      alert("Expenses added successfully");

      // Reset
      setRows([{ billNo: "", description: "", amount: "" }]);
      setDate("");

    } catch (err) {
      alert(err.response?.data?.message || "Error submitting");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout title="Other Expenses" backTo="/executive-dashboard">
      <div style={styles.card}>

        {/* Date */}
        <label style={styles.label}>Select Date:</label>
        <input
          type="date"
          value={date}
          min={minDate}
          max={maxDate}
          onChange={(e) => setDate(e.target.value)}
          style={styles.input}
        />

        {/* Dynamic Rows */}
        {rows.map((row, index) => (
          <div key={index} style={styles.rowBox}>
            <label>Bill No:</label>
            <input
              type="text"
              placeholder="Enter last four digits of bill number"
              value={row.billNo}
              onChange={(e) =>
                handleChange(index, "billNo", e.target.value)
              }
              style={styles.input}
            />

            <label>Description:</label>
            <input
              type="text"
              placeholder="Enter description"
              value={row.description}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
              style={styles.input}
            />

            <label>Amount:</label>
            <input
              type="number"
              placeholder="Enter amount"
              value={row.amount}
              onChange={(e) =>
                handleChange(index, "amount", e.target.value)
              }
              style={styles.input}
            />
          </div>
        ))}

        {/* Buttons Row */}
        <div style={styles.buttonRow}>
          <button
            onClick={handleSubmit}
            style={styles.submitButton}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          <button onClick={addRow} style={styles.plusButton}>
            +
          </button>
        </div>

        <div style={styles.total}>Total: ₹{total}</div>
      </div>
    </AppLayout>
  );
}

const styles = {
  card: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "30px",
    borderRadius: "14px",
    backgroundColor: "#f5f6f8",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  label: {
    display: "block",
    marginTop: "15px",
    marginBottom: "6px",
    fontWeight: "500",
  },
  rowBox: {
    marginTop: "20px",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#eaecef",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
  },
  submitButton: {
    padding: "10px 25px",
    backgroundColor: "#1e9c47",
    border: "none",
    borderRadius: "8px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
  plusButton: {
    width: "45px",
    height: "45px",
    backgroundColor: "#3b7ddd",
    border: "none",
    borderRadius: "10px",
    color: "white",
    fontSize: "22px",
    cursor: "pointer",
  },
  total: {
    marginTop: "20px",
    fontWeight: "600",
    fontSize: "18px",
  },
};
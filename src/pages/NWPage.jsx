// import { useState, useEffect } from "react";
// import axios from "../utils/axios";
// import AppLayout from "../layouts/AppLayout";

// export default function NWPage() {
//   const [date, setDate] = useState("");
//   const [reason, setReason] = useState("");
//   const [otherReason, setOtherReason] = useState("");

//   const today = new Date();

//   // ===== Date Restrictions =====
//   const startOfPreviousMonth = new Date(
//     today.getFullYear(),
//     today.getMonth() - 1,
//     1
//   );

//   const endOfCurrentMonth = new Date(
//     today.getFullYear(),
//     today.getMonth() + 1,
//     0
//   );

//   const formatDate = (d) => d.toISOString().split("T")[0];

//   const minDate = formatDate(startOfPreviousMonth);
//   const maxDate = formatDate(today); // prevent future dates

//   // ===== Submit Handler =====
//   const handleSubmit = async () => {
//     if (!date) {
//       alert("Please select a date");
//       return;
//     }

//     if (!reason) {
//       alert("Please select a reason");
//       return;
//     }

//     const finalReason =
//       reason === "Others" ? otherReason.trim() : reason;

//     if (!finalReason) {
//       alert("Please enter reason");
//       return;
//     }

//     try {
//       await axios.post("/user-expense/nw", {
//         date,
//         placeOfWork: finalReason,
//       });

//       alert("NW entry submitted successfully");
//       setDate("");
//       setReason("");
//       setOtherReason("");
//     } catch (err) {
//       alert(err.response?.data?.message || "Error submitting");
//     }
//   };

//   return (
//     <AppLayout title="Mark Non-Working Day" backTo="/executive-dashboard">
//       <div style={styles.card}>

//         {/* Date */}
//         <label style={styles.label}>Select date:</label>
//         <input
//           type="date"
//           value={date}
//           min={minDate}
//           max={maxDate}
//           onChange={(e) => setDate(e.target.value)}
//           style={styles.input}
//         />

//         {/* Reason */}
//         <label style={styles.label}>Select reason:</label>
//         <select
//           value={reason}
//           onChange={(e) => setReason(e.target.value)}
//           style={styles.input}
//         >
//           <option value="">-- Choose --</option>
//           <option value="Sunday">Sunday</option>
//           <option value="Weekoff">Weekoff</option>
//           <option value="Leave">Leave</option>
//           <option value="Others">Others</option>
//         </select>

//         {/* Other Input */}
//         {reason === "Others" && (
//           <input
//             type="text"
//             placeholder="Enter reason"
//             value={otherReason}
//             onChange={(e) => setOtherReason(e.target.value)}
//             style={styles.input}
//           />
//         )}

//         <button onClick={handleSubmit} style={styles.button}>
//           Submit
//         </button>
//       </div>
//     </AppLayout>
//   );
// }

// const styles = {
//   card: {
//     maxWidth: "450px",
//     margin: "40px auto",
//     padding: "30px",
//     borderRadius: "12px",
//     backgroundColor: "#f5f6f8",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
//   },
//   heading: {
//     textAlign: "center",
//     marginBottom: "25px",
//   },
//   label: {
//     display: "block",
//     marginBottom: "6px",
//     marginTop: "15px",
//     fontWeight: "500",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     borderRadius: "8px",
//     border: "1px solid #ccc",
//     fontSize: "14px",
//   },
//   button: {
//     marginTop: "25px",
//     width: "100%",
//     padding: "12px",
//     borderRadius: "8px",
//     border: "none",
//     backgroundColor: "#2c3e70",
//     color: "#fff",
//     fontSize: "16px",
//     cursor: "pointer",
//   },
// };




import { useState, useEffect } from "react";
import axios from "../utils/axios";
import AppLayout from "../layouts/AppLayout";

export default function NWPage() {
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const [otherReason, setOtherReason] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Added loading state

  const today = new Date();

  // ===== Date Restrictions =====
  const startOfPreviousMonth = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
    1
  );

  const endOfCurrentMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  );

  const formatDate = (d) => d.toISOString().split("T")[0];

  const minDate = formatDate(startOfPreviousMonth);
  const maxDate = formatDate(today); // prevent future dates

  // ===== Submit Handler =====
  const handleSubmit = async () => {
    if (loading) return; // ✅ Prevent double click

    if (!date) {
      alert("Please select a date");
      return;
    }

    if (!reason) {
      alert("Please select a reason");
      return;
    }

    const finalReason =
      reason === "Others" ? otherReason.trim() : reason;

    if (!finalReason) {
      alert("Please enter reason");
      return;
    }

    try {
      setLoading(true); // ✅ Start loading

      await axios.post("/user-expense/nw", {
        date,
        placeOfWork: finalReason,
      });

      alert("NW entry submitted successfully");
      setDate("");
      setReason("");
      setOtherReason("");
    } catch (err) {
      alert(err.response?.data?.message || "Error submitting");
    } finally {
      setLoading(false); // ✅ Stop loading
    }
  };

  return (
    <AppLayout title="Mark Non-Working Day" backTo="/executive-dashboard">
      <div style={styles.card}>

        {/* Date */}
        <label style={styles.label}>Select date:</label>
        <input
          type="date"
          value={date}
          min={minDate}
          max={maxDate}
          onChange={(e) => setDate(e.target.value)}
          style={styles.input}
        />

        {/* Reason */}
        <label style={styles.label}>Select reason:</label>
        <select
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          style={styles.input}
        >
          <option value="">-- Choose --</option>
          <option value="Sunday">Sunday</option>
          <option value="Weekoff">Weekoff</option>
          <option value="Leave">Leave</option>
          <option value="Others">Others</option>
        </select>

        {/* Other Input */}
        {reason === "Others" && (
          <input
            type="text"
            placeholder="Enter reason"
            value={otherReason}
            onChange={(e) => setOtherReason(e.target.value)}
            style={styles.input}
          />
        )}

        <button
          onClick={handleSubmit}
          style={styles.button}
          disabled={loading} // ✅ Disable while loading
        >
          {loading ? "Submitting..." : "Submit"} {/* ✅ Button text change */}
        </button>
      </div>
    </AppLayout>
  );
}

const styles = {
  card: {
    maxWidth: "450px",
    margin: "40px auto",
    padding: "30px",
    borderRadius: "12px",
    backgroundColor: "#f5f6f8",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "25px",
  },
  label: {
    display: "block",
    marginBottom: "6px",
    marginTop: "15px",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    marginTop: "25px",
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#2c3e70",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
};
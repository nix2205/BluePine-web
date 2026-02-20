// // import { useState, useEffect } from "react";
// // import axios from "../utils/axios";
// // import AppLayout from "../layouts/AppLayout";

// // export default function NFWPage() {
// //   const [activity, setActivity] = useState("");
// //   const [otherActivity, setOtherActivity] = useState("");
// //   const [station, setStation] = useState("HQ");
// //   const [kms, setKms] = useState("");
// //   const [MOT, setMOT] = useState("");
// //   const [TA, setTA] = useState("");
// //   const [DA, setDA] = useState("");
// //   const [total, setTotal] = useState(0);
// //   const [loading, setLoading] = useState(false);

// //   // Auto calculate total
// //   useEffect(() => {
// //     const taNum = Number(TA) || 0;
// //     const daNum = Number(DA) || 0;
// //     setTotal(taNum + daNum);
// //   }, [TA, DA]);

// //   const handleSubmit = async () => {
// //     const finalActivity =
// //       activity === "Others" ? otherActivity.trim() : activity;

// //     if (
// //       !finalActivity ||
// //       !station ||
// //       kms === "" ||
// //       !MOT ||
// //       TA === "" ||
// //       DA === ""
// //     ) {
// //       alert("Please fill all fields");
// //       return;
// //     }

// //     try {
// //       setLoading(true);

// //       await axios.post("/user-expense/nfw", {
// //         placeOfWork: finalActivity,
// //         station,
// //         kms,
// //         MOT,
// //         TA,
// //         DA,
// //       });

// //       alert("Expense submitted successfully");

// //       // reset form
// //       setActivity("");
// //       setOtherActivity("");
// //       setStation("HQ");
// //       setKms("");
// //       setMOT("");
// //       setTA("");
// //       setDA("");

// //     } catch (err) {
// //       alert(err.response?.data?.message || "Error submitting expense");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <AppLayout title="Mark Working Day" backTo="/executive-dashboard">
// //       <div style={styles.card}>
// //         {/* Activity */}
// //         <label style={styles.label}>Select Activity</label>
// //         <select
// //           value={activity}
// //           onChange={(e) => setActivity(e.target.value)}
// //           style={styles.input}
// //         >
// //           <option value="">-- Choose --</option>
// //           <option value="Meeting">Meeting</option>
// //           <option value="Transit">Transit</option>
// //           <option value="Training">Training</option>
// //           <option value="Depot Work">Depot Work</option>
// //           <option value="Others">Others</option>
// //         </select>

// //         {activity === "Others" && (
// //           <input
// //             type="text"
// //             placeholder="Enter activity"
// //             value={otherActivity}
// //             onChange={(e) => setOtherActivity(e.target.value)}
// //             style={styles.input}
// //           />
// //         )}

// //         {/* Station */}
// //         <label style={styles.label}>HQ/EX/OS</label>
// //         <select
// //           value={station}
// //           onChange={(e) => setStation(e.target.value)}
// //           style={styles.input}
// //         >
// //           <option value="HQ">HQ</option>
// //           <option value="EX">EX</option>
// //           <option value="OS">OS</option>
// //         </select>

// //         {/* KMs */}
// //         <label style={styles.label}>KM's</label>
// //         <input
// //           type="number"
// //           value={kms}
// //           onChange={(e) => setKms(e.target.value)}
// //           style={styles.input}
// //         />

// //         {/* MOT */}
// //         <label style={styles.label}>MOT</label>
// //         <select
// //           value={MOT}
// //           onChange={(e) => setMOT(e.target.value)}
// //           style={styles.input}
// //         >
// //           <option value="">-- Choose --</option>
// //           <option value="Local">Local</option>
// //           <option value="Bike">Bike</option>
// //           <option value="Bus">Bus</option>
// //           <option value="Train">Train</option>
// //         </select>

// //         {/* TA */}
// //         <label style={styles.label}>TA</label>
// //         <input
// //           type="number"
// //           value={TA}
// //           onChange={(e) => setTA(e.target.value)}
// //           style={styles.input}
// //         />

// //         {/* DA */}
// //         <label style={styles.label}>DA</label>
// //         <input
// //           type="number"
// //           value={DA}
// //           onChange={(e) => setDA(e.target.value)}
// //           style={styles.input}
// //         />

// //         {/* Total */}
// //         <div style={styles.total}>
// //           Total: ₹{total}
// //         </div>

// //         <button
// //           onClick={handleSubmit}
// //           style={styles.button}
// //           disabled={loading}
// //         >
// //           {loading ? "Submitting..." : "Submit"}
// //         </button>
// //       </div>
// //     </AppLayout>
// //   );
// // }

// // const styles = {
// //   card: {
// //     maxWidth: "500px",
// //     margin: "40px auto",
// //     padding: "30px",
// //     borderRadius: "12px",
// //     backgroundColor: "#f5f6f8",
// //     boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
// //   },
// //   label: {
// //     display: "block",
// //     marginTop: "18px",
// //     marginBottom: "6px",
// //     fontWeight: "500",
// //   },
// //   input: {
// //     width: "100%",
// //     padding: "10px",
// //     borderRadius: "8px",
// //     border: "1px solid #ccc",
// //     fontSize: "14px",
// //   },
// //   total: {
// //     marginTop: "20px",
// //     textAlign: "right",
// //     fontWeight: "600",
// //     fontSize: "16px",
// //   },
// //   button: {
// //     marginTop: "25px",
// //     width: "100%",
// //     padding: "14px",
// //     borderRadius: "10px",
// //     border: "none",
// //     backgroundColor: "#2c3e70",
// //     color: "#fff",
// //     fontSize: "16px",
// //     cursor: "pointer",
// //   },
// // };





// import { useState, useEffect } from "react";
// import axios from "../utils/axios";
// import AppLayout from "../layouts/AppLayout";

// export default function NFWPage() {
//   const [placeOfWork, setPlaceOfWork] = useState("");
//   const [activity, setActivity] = useState("");
//   const [otherActivity, setOtherActivity] = useState("");
//   const [station, setStation] = useState("HQ");
//   const [kms, setKms] = useState("");
//   const [MOT, setMOT] = useState("");
//   const [TA, setTA] = useState("");
//   const [DA, setDA] = useState("");
//   const [total, setTotal] = useState(0);
//   const [loading, setLoading] = useState(false);

//   // Auto calculate total
//   useEffect(() => {
//     const taNum = Number(TA) || 0;
//     const daNum = Number(DA) || 0;
//     setTotal(taNum + daNum);
//   }, [TA, DA]);

//   const selectedPlaceOfWork = (finalActivity) => {
//   return `${placeOfWork.trim()} (${finalActivity})`;
// };

//   const handleSubmit = async () => {
//     const finalActivity =
//       activity === "Others" ? otherActivity.trim() : activity;

//     if (
//       !placeOfWork.trim() ||
//       !finalActivity ||
//       !station ||
//       kms === "" ||
//       !MOT ||
//       TA === "" ||
//       DA === ""
//     ) {
//       alert("Please fill all fields");
//       return;
//     }

//     try {
//       setLoading(true);

//       await axios.post("/user-expense/nfw", {
//         placeOfWork: selectedPlaceOfWork(finalActivity),
//         station,
//         kms,
//         MOT,
//         TA,
//         DA,
//       });

//       alert("Expense submitted successfully");

//       // reset form
//       setPlaceOfWork("");
//       setActivity("");
//       setOtherActivity("");
//       setStation("HQ");
//       setKms("");
//       setMOT("");
//       setTA("");
//       setDA("");

//     } catch (err) {
//       alert(err.response?.data?.message || "Error submitting expense");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AppLayout title="Mark Working Day" backTo="/executive-dashboard">
//       <div style={styles.card}>

//         {/* Place of Work */}
//         <label style={styles.label}>Place of Work</label>
//         <input
//           type="text"
//           placeholder="Enter city name"
//           value={placeOfWork}
//           onChange={(e) => setPlaceOfWork(e.target.value)}
//           style={styles.input}
//         />

//         {/* Activity */}
//         <label style={styles.label}>Activity</label>
//         <select
//           value={activity}
//           onChange={(e) => setActivity(e.target.value)}
//           style={styles.input}
//         >
//           <option value="">-- Choose --</option>
//           <option value="Meeting">Meeting</option>
//           <option value="Transit">Transit</option>
//           <option value="Training">Training</option>
//           <option value="Depot Work">Depot Work</option>
//           <option value="Camp">Camp</option>
//           <option value="Others">Others</option>
//         </select>

//         {activity === "Others" && (
//           <input
//             type="text"
//             placeholder="Enter activity"
//             value={otherActivity}
//             onChange={(e) => setOtherActivity(e.target.value)}
//             style={styles.input}
//           />
//         )}

//         {/* Station */}
//         <label style={styles.label}>Station</label>
//         <select
//           value={station}
//           onChange={(e) => setStation(e.target.value)}
//           style={styles.input}
//         >
//           <option value="HQ">HQ</option>
//           <option value="EX">EX</option>
//           <option value="OS">OS</option>
//         </select>

//         {/* KMs */}
//         <label style={styles.label}>KM's</label>
//         <input
//           type="number"
//           value={kms}
//           onChange={(e) => setKms(e.target.value)}
//           style={styles.input}
//         />

//         {/* MOT */}
//         <label style={styles.label}>MOT</label>
//         <select
//           value={MOT}
//           onChange={(e) => setMOT(e.target.value)}
//           style={styles.input}
//         >
//           <option value="">-- Choose --</option>
//           <option value="Local">Local</option>
//           <option value="Bike">Bike</option>
//           <option value="Bus">Bus</option>
//           <option value="Train">Train</option>
//         </select>

//         {/* TA */}
//         <label style={styles.label}>TA</label>
//         <input
//           type="number"
//           value={TA}
//           onChange={(e) => setTA(e.target.value)}
//           style={styles.input}
//         />

//         {/* DA */}
//         <label style={styles.label}>DA</label>
//         <input
//           type="number"
//           value={DA}
//           onChange={(e) => setDA(e.target.value)}
//           style={styles.input}
//         />

//         {/* Total */}
//         <div style={styles.total}>
//           Total: ₹{total}
//         </div>

//         <button
//           onClick={handleSubmit}
//           style={styles.button}
//           disabled={loading}
//         >
//           {loading ? "Submitting..." : "Submit"}
//         </button>
//       </div>
//     </AppLayout>
//   );
// }

// const styles = {
//   card: {
//     maxWidth: "500px",
//     margin: "40px auto",
//     padding: "30px",
//     borderRadius: "12px",
//     backgroundColor: "#f5f6f8",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
//   },
//   label: {
//     display: "block",
//     marginTop: "18px",
//     marginBottom: "6px",
//     fontWeight: "500",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     borderRadius: "8px",
//     border: "1px solid #ccc",
//     fontSize: "14px",
//   },
//   total: {
//     marginTop: "20px",
//     textAlign: "right",
//     fontWeight: "600",
//     fontSize: "16px",
//   },
//   button: {
//     marginTop: "25px",
//     width: "100%",
//     padding: "14px",
//     borderRadius: "10px",
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

export default function NFWPage() {
  const [placeOfWork, setPlaceOfWork] = useState("");
  const [activity, setActivity] = useState("");
  const [otherActivity, setOtherActivity] = useState("");
  const [station, setStation] = useState("HQ");
  const [kms, setKms] = useState("");
  const [MOT, setMOT] = useState("");
  const [TA, setTA] = useState("");
  const [DA, setDA] = useState("");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  // Auto calculate total
  useEffect(() => {
    const taNum = Number(TA) || 0;
    const daNum = Number(DA) || 0;
    setTotal(taNum + daNum);
  }, [TA, DA]);

  const selectedPlaceOfWork = (finalActivity) => {
    return `${placeOfWork.trim()} (${finalActivity})`;
  };

  const handleSubmit = async () => {
    if (loading) return; // ✅ Prevent double click

    const finalActivity =
      activity === "Others" ? otherActivity.trim() : activity;

    if (
      !placeOfWork.trim() ||
      !finalActivity ||
      !station ||
      kms === "" ||
      !MOT ||
      TA === "" ||
      DA === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await axios.post("/user-expense/nfw", {
        placeOfWork: selectedPlaceOfWork(finalActivity),
        station,
        kms,
        MOT,
        TA,
        DA,
      });

      alert("Expense submitted successfully");

      // reset form
      setPlaceOfWork("");
      setActivity("");
      setOtherActivity("");
      setStation("HQ");
      setKms("");
      setMOT("");
      setTA("");
      setDA("");

    } catch (err) {
      alert(err.response?.data?.message || "Error submitting expense");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout title="Mark Working Day" backTo="/executive-dashboard">
      <div style={styles.card}>

        {/* Place of Work */}
        <label style={styles.label}>Place of Work</label>
        <input
          type="text"
          placeholder="Enter city name"
          value={placeOfWork}
          onChange={(e) => setPlaceOfWork(e.target.value)}
          style={styles.input}
        />

        {/* Activity */}
        <label style={styles.label}>Activity</label>
        <select
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          style={styles.input}
        >
          <option value="">-- Choose --</option>
          <option value="Meeting">Meeting</option>
          <option value="Transit">Transit</option>
          <option value="Training">Training</option>
          <option value="Depot Work">Depot Work</option>
          <option value="Camp">Camp</option>
          <option value="Others">Others</option>
        </select>

        {activity === "Others" && (
          <input
            type="text"
            placeholder="Enter activity"
            value={otherActivity}
            onChange={(e) => setOtherActivity(e.target.value)}
            style={styles.input}
          />
        )}

        {/* Station */}
        <label style={styles.label}>Station</label>
        <select
          value={station}
          onChange={(e) => setStation(e.target.value)}
          style={styles.input}
        >
          <option value="HQ">HQ</option>
          <option value="EX">EX</option>
          <option value="OS">OS</option>
        </select>

        {/* KMs */}
        <label style={styles.label}>KM's</label>
        <input
          type="number"
          value={kms}
          onChange={(e) => setKms(e.target.value)}
          style={styles.input}
        />

        {/* MOT */}
        <label style={styles.label}>MOT</label>
        <select
          value={MOT}
          onChange={(e) => setMOT(e.target.value)}
          style={styles.input}
        >
          <option value="">-- Choose --</option>
          <option value="Local">Local</option>
          <option value="Bike">Bike</option>
          <option value="Bus">Bus</option>
          <option value="Train">Train</option>
        </select>

        {/* TA */}
        <label style={styles.label}>TA</label>
        <input
          type="number"
          value={TA}
          onChange={(e) => setTA(e.target.value)}
          style={styles.input}
        />

        {/* DA */}
        <label style={styles.label}>DA</label>
        <input
          type="number"
          value={DA}
          onChange={(e) => setDA(e.target.value)}
          style={styles.input}
        />

        {/* Total */}
        <div style={styles.total}>
          Total: ₹{total}
        </div>

        <button
          onClick={handleSubmit}
          style={styles.button}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </AppLayout>
  );
}

const styles = {
  card: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "30px",
    borderRadius: "12px",
    backgroundColor: "#f5f6f8",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
  label: {
    display: "block",
    marginTop: "18px",
    marginBottom: "6px",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  total: {
    marginTop: "20px",
    textAlign: "right",
    fontWeight: "600",
    fontSize: "16px",
  },
  button: {
    marginTop: "25px",
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#2c3e70",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
};
// // import { useState } from "react";
// // import axios from "../utils/axios";
// // import AppLayout from "../layouts/AppLayout";

// // export default function FWPage() {
// //   const [locationData, setLocationData] = useState(null);
// //   const [selectedMOT, setSelectedMOT] = useState("");
// //   const [previewData, setPreviewData] = useState(null);

// //   const [recordLoading, setRecordLoading] = useState(false);
// //   const [confirmLoading, setConfirmLoading] = useState(false);
// //   const [submitLoading, setSubmitLoading] = useState(false);

// //   /* =========================
// //      📍 RECORD LOCATION
// //   ========================= */
// //   const handleRecord = () => {
// //     if (!navigator.geolocation) {
// //       alert("Geolocation not supported");
// //       return;
// //     }

// //     setRecordLoading(true);

// //     navigator.geolocation.getCurrentPosition(async (position) => {
// //       try {
// //         const { latitude, longitude } = position.coords;

// //         const res = await axios.post(
// //           "/user-expense/fw/record-location",
// //           {
// //             lat: latitude,
// //             lon: longitude,
// //           }
// //         );

// //         if (!res.data.matched) {
// //           alert(res.data.message);
// //           return;
// //         }

// //         setLocationData(res.data);

// //         // If HQ → auto set Local
// //         if (res.data.autoMOT) {
// //           setSelectedMOT(res.data.autoMOT);
// //         }

// //       } catch (err) {
// //         alert("Error recording location");
// //       } finally {
// //         setRecordLoading(false);
// //       }
// //     });
// //   };

// //   /* =========================
// //      🚗 CONFIRM MOT (Preview)
// //   ========================= */
// //   const handleConfirmMOT = async () => {
// //     if (!selectedMOT) {
// //       alert("Select MOT");
// //       return;
// //     }

// //     setConfirmLoading(true);

// //     try {
// //       const res = await axios.post(
// //         "/user-expense/fw/preview",
// //         {
// //           placeOfWork: locationData.city,
// //           MOT: selectedMOT,
// //         }
// //       );

// //       setPreviewData(res.data);

// //     } catch (err) {
// //       alert(err.response?.data?.message || "Preview failed");
// //     } finally {
// //       setConfirmLoading(false);
// //     }
// //   };

// //   /* =========================
// //      💾 SUBMIT
// //   ========================= */
// //   const handleSubmit = async () => {
// //     setSubmitLoading(true);

// //     try {
// //       const res = await axios.post(
// //         "/user-expense/fw/create",
// //         {
// //           placeOfWork: locationData.city,
// //           MOT: selectedMOT,
// //         }
// //       );

// //       alert(res.data.message);

// //       // Reset everything
// //       setLocationData(null);
// //       setSelectedMOT("");
// //       setPreviewData(null);

// //     } catch (err) {
// //       alert(err.response?.data?.message || "Submission failed");
// //     } finally {
// //       setSubmitLoading(false);
// //     }
// //   };

// //   return (
// //     <AppLayout title="FW Entry">
// //       <div style={{ padding: "20px" }}>

// //         {/* 📍 RECORD BUTTON */}
// //         <button onClick={handleRecord} disabled={recordLoading}>
// //           {recordLoading ? "Recording..." : "Record"}
// //         </button>

// //         {/* 🚗 MOT SECTION */}
// //         {locationData && (
// //           <div style={{ marginTop: "20px" }}>

// //             <p><strong>Place:</strong> {locationData.city}</p>

// //             <select
// //               value={selectedMOT}
// //               disabled={locationData.autoMOT || confirmLoading}
// //               onChange={(e) => setSelectedMOT(e.target.value)}
// //             >
// //               <option value="">Select MOT</option>
// //               <option value="Bike">Bike</option>
// //               <option value="Bus">Bus</option>
// //               <option value="Train">Train</option>
// //             </select>

// //             <button
// //               onClick={handleConfirmMOT}
// //               disabled={
// //                 confirmLoading ||
// //                 (!selectedMOT && !locationData.autoMOT)
// //               }
// //               style={{ marginLeft: "10px" }}
// //             >
// //               {confirmLoading ? "Confirming..." : "Confirm MOT"}
// //             </button>

// //           </div>
// //         )}

// //         {/* 📊 PREVIEW TABLE */}
// //         {previewData && (
// //           <div style={{ marginTop: "30px" }}>
// //             <table border="1" cellPadding="10">
// //               <thead>
// //                 <tr>
// //                   <th>Date</th>
// //                   <th>Time</th>
// //                   <th>Place</th>
// //                   <th>Station</th>
// //                   <th>KMs</th>
// //                   <th>MOT</th>
// //                                     <th>TA</th>
// //                   <th>DA</th>

// //                   <th>Total</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 <tr>
// //                   <td>{previewData.date}</td>
// //                   <td>{previewData.time}</td>
// //                   <td>{previewData.placeOfWork}</td>
// //                   <td>{previewData.station}</td>
// //                   <td>{previewData.kms}</td>
// //                   <td>{previewData.MOT}</td>
// //                   <td>{previewData.TA}</td>
// //                   <td>{previewData.DA}</td>

// //                   <td>{previewData.total}</td>
// //                 </tr>
// //               </tbody>
// //             </table>

// //             {/* 💾 SUBMIT */}
// //             <button
// //               onClick={handleSubmit}
// //               disabled={submitLoading}
// //               style={{ marginTop: "20px" }}
// //             >
// //               {submitLoading ? "Submitting..." : "Submit"}
// //             </button>
// //           </div>
// //         )}

// //       </div>
// //     </AppLayout>
// //   );
// // }





// import { useState } from "react";
// import axios from "../utils/axios";
// import AppLayout from "../layouts/AppLayout";

// export default function FWPage() {
//   const [locationData, setLocationData] = useState(null);
//   const [selectedMOT, setSelectedMOT] = useState("");
//   const [previewData, setPreviewData] = useState(null);

//   const [recordLoading, setRecordLoading] = useState(false);
//   const [confirmLoading, setConfirmLoading] = useState(false);
//   const [submitLoading, setSubmitLoading] = useState(false);

//   /* =========================
//      📍 RECORD LOCATION
//   ========================= */
//   // const handleRecord = () => {
//   //   if (!navigator.geolocation) {
//   //     alert("Geolocation not supported");
//   //     return;
//   //   }

//   //   setRecordLoading(true);

//   //   navigator.geolocation.getCurrentPosition(async (position) => {
//   //     try {
//   //       const { latitude, longitude } = position.coords;

//   //       const res = await axios.post("/user-expense/fw/record-location", {
//   //         lat: latitude,
//   //         lon: longitude,
//   //       });

//   //       if (!res.data.matched) {
//   //         alert(res.data.message);
//   //         return;
//   //       }

//   //       setLocationData(res.data);

//   //       if (res.data.autoMOT) {
//   //         setSelectedMOT(res.data.autoMOT);
//   //       }
//   //     } catch (err) {
//   //       alert("Error recording location");
//   //     } finally {
//   //       setRecordLoading(false);
//   //     }
//   //   });
//   // };


// // const handleRecord = () => {
// //   if (!navigator.geolocation) {
// //     alert("Geolocation not supported");
// //     return;
// //   }

// //   setRecordLoading(true);

// //   navigator.geolocation.getCurrentPosition(async (position) => {
// //     try {
// //       const { latitude, longitude } = position.coords;

// //       const res = await axios.post("/user-expense/fw/record-location", {
// //         lat: latitude,
// //         lon: longitude,
// //       });

// //       if (!res.data.matched) {
// //         alert(res.data.message);
// //         return;
// //       }

// //       const data = res.data;
// //       setLocationData(data);

// //       // 🔥 If HQ → skip MOT confirmation step
// //       if (data.station === "HQ") {
// //         const mot = "Local";
// //         setSelectedMOT(mot);

// //         const previewRes = await axios.post("/user-expense/fw/preview", {
// //           placeOfWork: data.city,
// //           MOT: mot,
// //         });

// //         setPreviewData(previewRes.data);
// //       } else {
// //         // For EX / OS → reset preview
// //         setSelectedMOT("");
// //         setPreviewData(null);
// //       }

// //     } catch (err) {
// //       alert("Error recording location");
// //     } finally {
// //       setRecordLoading(false);
// //     }
// //   });
// // };

// // const handleRecord = () => {
// //   if (!navigator.geolocation) {
// //     alert("Geolocation not supported");
// //     return;
// //   }

// //   setRecordLoading(true);

// //   navigator.geolocation.getCurrentPosition(async (position) => {
// //     try {
// //       const { latitude, longitude } = position.coords;

// //       const res = await axios.post("/user-expense/fw/record-location", {
// //         lat: latitude,
// //         lon: longitude,
// //       });

// //       if (!res.data.matched) {
// //         alert(res.data.message);
// //         return;
// //       }

// //       const data = res.data;
// //       setLocationData(data);

// //       // 🔥 If HQ → skip travel section completely
// //       if (data.station === "HQ") {
// //         const previewRes = await axios.post("/user-expense/fw/preview", {
// //           placeOfWork: data.city,
// //           MOT: "Local",
// //         });

// //         setSelectedMOT("Local");
// //         setPreviewData(previewRes.data);
// //       } else {
// //         // For EX / OS
// //         setSelectedMOT("");
// //         setPreviewData(null);
// //       }
// //       console.log("Record response:", res.data);

// //     } catch (err) {
// //       alert("Error recording location");
// //     } finally {
// //       setRecordLoading(false);
// //     }
// //   });
// // };


// // const handleRecord = () => {
// //   if (!navigator.geolocation) {
// //     alert("Geolocation not supported");
// //     return;
// //   }

// //   setRecordLoading(true);

// //   navigator.geolocation.getCurrentPosition(async (position) => {
// //     try {
// //       const { latitude, longitude } = position.coords;

// //       const res = await axios.post("/user-expense/fw/record-location", {
// //         lat: latitude,
// //         lon: longitude,
// //       });

// //       if (!res.data.matched) {
// //         alert(res.data.message);
// //         return;
// //       }

// //       const data = res.data;
// //       console.log("Record response:", data);

// //       setLocationData(data);

// //       // 🔥 If autoMOT exists (HQ case)
// //       if (data.autoMOT === "Local") {
// //         const previewRes = await axios.post("/user-expense/fw/preview", {
// //           placeOfWork: data.city,
// //           MOT: "Local",
// //         });

// //         setSelectedMOT("Local");
// //         setPreviewData(previewRes.data);
// //       } else {
// //         setSelectedMOT("");
// //         setPreviewData(null);
// //       }

// //     } catch (err) {
// //       alert("Error recording location");
// //     } finally {
// //       setRecordLoading(false);
// //     }
// //   });
// // };


// const handleRecord = () => {
//   if (!navigator.geolocation) {
//     alert("Geolocation not supported");
//     return;
//   }

//   setRecordLoading(true);

//   navigator.geolocation.getCurrentPosition(async (position) => {
//     try {
//       const { latitude, longitude } = position.coords;

//       const res = await axios.post("/user-expense/fw/record-location", {
//         lat: latitude,
//         lon: longitude,
//       });

//       if (!res.data.matched) {
//         alert(res.data.message);
//         return;
//       }

//       const data = res.data;

//       // Always reset preview first
//       setPreviewData(null);
//       setSelectedMOT("");

//       setLocationData(data);

//       // 🔥 Direct Preview Only If autoMOT is Local
//       if (data.autoMOT === "Local") {
//         const previewRes = await axios.post("/user-expense/fw/preview", {
//           placeOfWork: data.city,
//           MOT: "Local",
//         });

//         setSelectedMOT("Local");
//         setPreviewData(previewRes.data);
//       }

//     } catch (err) {
//       alert("Error recording location");
//     } finally {
//       setRecordLoading(false);
//     }
//   });
// };

//   /* =========================
//      🚗 CONFIRM MOT
//   ========================= */
//   const handleConfirmMOT = async () => {
//     if (!selectedMOT) {
//       alert("Select MOT");
//       return;
//     }

//     setConfirmLoading(true);

//     try {
//       const res = await axios.post("/user-expense/fw/preview", {
//         placeOfWork: locationData.city,
//         MOT: selectedMOT,
//       });

//       setPreviewData(res.data);
//     } catch (err) {
//       alert(err.response?.data?.message || "Preview failed");
//     } finally {
//       setConfirmLoading(false);
//     }
//   };

//   /* =========================
//      💾 SUBMIT
//   ========================= */
//   const handleSubmit = async () => {
//     setSubmitLoading(true);

//     try {
//       const res = await axios.post("/user-expense/fw/create", {
//         placeOfWork: locationData.city,
//         MOT: selectedMOT,
//       });

//       alert(res.data.message);

//       setLocationData(null);
//       setSelectedMOT("");
//       setPreviewData(null);
//     } catch (err) {
//       alert(err.response?.data?.message || "Submission failed");
//     } finally {
//       setSubmitLoading(false);
//     }
//   };

//   const isAutoLocal = locationData?.autoMOT === "Local";

//   return (
//     <AppLayout title="Field Work" backTo="/executive-dashboard">
//       <div className="p-6 max-w-5xl mx-auto">

//         {/* ================= RECORD CARD ================= */}
//         <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
//           <h2 className="text-xl font-semibold mb-4 text-gray-700">
//             Record Location
//           </h2>

//           <button
//             onClick={handleRecord}
//             disabled={recordLoading}
//             className="px-6 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition disabled:opacity-50"
//           >
//             {recordLoading ? "Recording..." : "Record"}
//           </button>
//         </div>

//         {/* ================= MOT SECTION ================= */}
// {locationData && !isAutoLocal && (
//             <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 mt-6">
//             <h2 className="text-lg font-semibold mb-4 text-gray-700">
//               Travel Details
//             </h2>

//             <p className="mb-4 text-gray-600">
//               <span className="font-semibold text-gray-800">Place:</span>{" "}
//               {locationData.city}
//             </p>

//             <div className="flex flex-wrap gap-4 items-center">
//               <select
//                 value={selectedMOT}
// disabled={confirmLoading || !selectedMOT}                onChange={(e) => setSelectedMOT(e.target.value)}
//                 className="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">Select MOT</option>
//                 <option value="Bike">Bike</option>
//                 <option value="Bus">Bus</option>
//                 <option value="Train">Train</option>
//               </select>

//               <button
//                 onClick={handleConfirmMOT}
//                 // disabled={
//                 //   confirmLoading ||
//                 //   (!selectedMOT && !locationData.autoMOT)
//                 // }
//                 disabled={confirmLoading || !selectedMOT}
//                 className="px-6 py-2 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition disabled:opacity-50"
//               >
//                 {confirmLoading ? "Confirming..." : "Confirm MOT"}
//               </button>
//             </div>
//           </div>
//         )}

//         {/* ================= PREVIEW TABLE ================= */}
//         {previewData && (
//           <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 mt-6">
//             <h2 className="text-lg font-semibold mb-4 text-gray-700">
//               Expense Preview
//             </h2>

//             <div className="overflow-x-auto">
//               <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
//                 <thead className="bg-gray-100 text-gray-700 text-sm">
//                   <tr>
//                     <th className="px-4 py-3 text-left">Date</th>
//                     <th className="px-4 py-3 text-left">Time</th>
//                     <th className="px-4 py-3 text-left">Place</th>
//                     <th className="px-4 py-3 text-left">Station</th>
//                     <th className="px-4 py-3 text-left">KMs</th>
//                     <th className="px-4 py-3 text-left">MOT</th>
//                     <th className="px-4 py-3 text-left">TA</th>
//                     <th className="px-4 py-3 text-left">DA</th>
//                     <th className="px-4 py-3 text-left">Total</th>
//                   </tr>
//                 </thead>
//                 <tbody className="text-sm text-gray-700">
//                   <tr className="border-t">
//                     <td className="px-4 py-3">{previewData.date}</td>
//                     <td className="px-4 py-3">{previewData.time}</td>
//                     <td className="px-4 py-3">{previewData.placeOfWork}</td>
//                     <td className="px-4 py-3">{previewData.station}</td>
//                     <td className="px-4 py-3">{previewData.kms}</td>
//                     <td className="px-4 py-3">{previewData.MOT}</td>
//                     <td className="px-4 py-3">{previewData.TA}</td>
//                     <td className="px-4 py-3">{previewData.DA}</td>
//                     <td className="px-4 py-3 font-semibold text-blue-600">
//                       {previewData.total}
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             <button
//               onClick={handleSubmit}
//               disabled={submitLoading}
//               className="mt-6 px-6 py-2 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition disabled:opacity-50"
//             >
//               {submitLoading ? "Submitting..." : "Submit"}
//             </button>
//           </div>
//         )}
//       </div>
//     </AppLayout>
//   );
// }










import { useState } from "react";
import axios from "../utils/axios";
import AppLayout from "../layouts/AppLayout";

export default function FWPage() {
  const [locationData, setLocationData] = useState(null);
  const [selectedMOT, setSelectedMOT] = useState("");
  const [previewData, setPreviewData] = useState(null);

  const [recordLoading, setRecordLoading] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  /* =========================
     📍 RECORD LOCATION
  ========================= */
  const handleRecord = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    setRecordLoading(true);

    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const { latitude, longitude } = position.coords;

        const res = await axios.post("/user-expense/fw/record-location", {
          lat: latitude,
          lon: longitude,
        });

        if (!res.data.matched) {
          alert(res.data.message);
          return;
        }

        const data = res.data;

        // Reset preview every time new record happens
        setPreviewData(null);
        setSelectedMOT("");
        setLocationData(data);

        // ✅ If autoMOT is Local → Direct preview
        if (data.autoMOT === "Local") {
          const previewRes = await axios.post("/user-expense/fw/preview", {
            placeOfWork: data.city,
            MOT: "Local",
          });

          setSelectedMOT("Local");
          setPreviewData(previewRes.data);
        }

      } catch (err) {
        alert(err.response?.data?.message || "Error recording location");
      } finally {
        setRecordLoading(false);
      }
    });
  };

  /* =========================
     🚗 CONFIRM MOT
  ========================= */
  const handleConfirmMOT = async () => {
    if (!selectedMOT) {
      alert("Select MOT");
      return;
    }

    setConfirmLoading(true);

    try {
      const res = await axios.post("/user-expense/fw/preview", {
        placeOfWork: locationData.city,
        MOT: selectedMOT,
      });

      setPreviewData(res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Preview failed");
    } finally {
      setConfirmLoading(false);
    }
  };

  /* =========================
     💾 SUBMIT
  ========================= */
  const handleSubmit = async () => {
    setSubmitLoading(true);

    try {
      const res = await axios.post("/user-expense/fw/create", {
        placeOfWork: locationData.city,
        MOT: selectedMOT,
      });

      alert(res.data.message);

      setLocationData(null);
      setSelectedMOT("");
      setPreviewData(null);
    } catch (err) {
      alert(err.response?.data?.message || "Submission failed");
    } finally {
      setSubmitLoading(false);
    }
  };

  const isAutoLocal = locationData?.autoMOT === "Local";

  return (
    <AppLayout title="FIELD WORK REPORT" backTo="/executive-dashboard">
      <div className="p-6 max-w-5xl mx-auto">

        {/* ================= RECORD CARD ================= */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Record Location
          </h2>

          <button
            onClick={handleRecord}
            disabled={recordLoading}
            className="px-6 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition disabled:opacity-50"
          >
            {recordLoading ? "Recording..." : "Record"}
          </button>
        </div>

        {/* ================= MOT SECTION ================= */}
        {locationData && !isAutoLocal && (
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 mt-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Travel Details
            </h2>

            <p className="mb-4 text-gray-600">
              <span className="font-semibold text-gray-800">Place:</span>{" "}
              {locationData.city}
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <select
                value={selectedMOT}
                disabled={confirmLoading}   
                onChange={(e) => setSelectedMOT(e.target.value)}
                className="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select MOT</option>
                <option value="Bike">Bike</option>
                <option value="Bus">Bus</option>
                <option value="Train">Train</option>
              </select>

              <button
                onClick={handleConfirmMOT}
                disabled={confirmLoading || !selectedMOT}
                className="px-6 py-2 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition disabled:opacity-50"
              >
                {confirmLoading ? "Confirming..." : "Confirm MOT"}
              </button>
            </div>
          </div>
        )}

        {/* ================= PREVIEW TABLE ================= */}
        {previewData && (
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 mt-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Expense Preview
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-gray-100 text-gray-700 text-sm">
                  <tr>
                    <th className="px-4 py-3 text-left">Date</th>
                    <th className="px-4 py-3 text-left">Time</th>
                    <th className="px-4 py-3 text-left">Place</th>
                    <th className="px-4 py-3 text-left">Station</th>
                    <th className="px-4 py-3 text-left">KMs</th>
                    <th className="px-4 py-3 text-left">MOT</th>
                    <th className="px-4 py-3 text-left">TA</th>
                    <th className="px-4 py-3 text-left">DA</th>
                    <th className="px-4 py-3 text-left">Total</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-700">
                  <tr className="border-t">
                    <td className="px-4 py-3">{previewData.date}</td>
                    <td className="px-4 py-3">{previewData.time}</td>
                    <td className="px-4 py-3">{previewData.placeOfWork}</td>
                    <td className="px-4 py-3">{previewData.station}</td>
                    <td className="px-4 py-3">{previewData.kms}</td>
                    <td className="px-4 py-3">{previewData.MOT}</td>
                    <td className="px-4 py-3">{previewData.TA}</td>
                    <td className="px-4 py-3">{previewData.DA}</td>
                    <td className="px-4 py-3 font-semibold text-blue-600">
                      {previewData.total}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button
              onClick={handleSubmit}
              disabled={submitLoading}
              className="mt-6 px-6 py-2 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition disabled:opacity-50"
            >
              {submitLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        )}
      </div>
    </AppLayout>
  );
}

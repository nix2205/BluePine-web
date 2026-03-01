

// // import { useState } from "react";
// // import axios from "../../utils/axios";
// // import { useParams } from "react-router-dom";

// // export default function AddNewSRC({ setRows }) {
// //   const { userId } = useParams();

// //   const [form, setForm] = useState({
// //     placeOfWork: "",
// //     station: "EX",
// //     MOT: "BIKE",
// //     kms: "",
// //     RsPerKm: "",
// //     DA: "",
// //   });

// //   const submit = async () => {
// //     try {
// //       const payload = {
// //         user: userId,
// //         radius: 0,
// //         placeOfWork: form.placeOfWork,
// //         station: form.station,
// //         MOT: form.station === "HQ" ? "LOCAL" : form.MOT,
// //         kms: form.station === "HQ" ? 0 : Number(form.kms),
// //       };

// //       // 👉 send overrides ONLY if entered
// //       if (form.RsPerKm !== "") {
// //         payload.RsPerKm = Number(form.RsPerKm);
// //       }

// //       if (form.DA !== "") {
// //         payload.DA = Number(form.DA);
// //       }

// //       const res = await axios.post("/src", payload);

// //       setRows((prev) => [...prev, res.data]);

// //       // reset form
// //       setForm({
// //         placeOfWork: "",
// //         station: "EX",
// //         MOT: "BIKE",
// //         kms: "",
// //         RsPerKm: "",
// //         DA: "",
// //       });
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Create failed");
// //     }
// //   };

// //   return (
// //     <div className="mt-6 border-t pt-6">
// //       <h3 className="font-semibold text-lg mb-4">Add New Place</h3>

// //       <div className="grid grid-cols-6 gap-4">
// //         {/* PLACE */}
// //         <input
// //           placeholder="Place of Work"
// //           value={form.placeOfWork}
// //           onChange={(e) =>
// //             setForm({ ...form, placeOfWork: e.target.value })
// //           }
// //           className="input"
// //         />

// //         {/* STATION */}
// //         <select
// //           value={form.station}
// //           onChange={(e) =>
// //             setForm({ ...form, station: e.target.value })
// //           }
// //           className="input"
// //         >
// //           <option value="HQ">HQ</option>
// //           <option value="EX">EX</option>
// //           <option value="OS">OS</option>
// //         </select>

// //         {/* MOT */}
// //         <select
// //           value={form.MOT}
// //           onChange={(e) =>
// //             setForm({ ...form, MOT: e.target.value })
// //           }
// //           className="input"
// //           disabled={form.station === "HQ"}
// //         >
// //           <option value="LOCAL">LOCAL</option>
// //           <option value="BIKE">BIKE</option>
// //           <option value="BUS">BUS</option>
// //           <option value="TRAIN">TRAIN</option>
// //         </select>

// //         {/* KM */}
// //         <input
// //           type="number"
// //           min="0"
// //           placeholder="KM"
// //           value={form.kms}
// //           onChange={(e) =>
// //             setForm({ ...form, kms: e.target.value })
// //           }
// //           className="input"
// //           disabled={form.station === "HQ"}
// //         />

// //         {/* Rs / Km Override */}
// //         <input
// //           type="number"
// //           min="0"
// //           placeholder="Rs / Km (optional)"
// //           value={form.RsPerKm}
// //           onChange={(e) =>
// //             setForm({ ...form, RsPerKm: e.target.value })
// //           }
// //           className="input"
// //           disabled={form.station === "HQ"}
// //         />

// //         {/* DA Override */}
// //         <input
// //           type="number"
// //           min="0"
// //           placeholder="DA (optional)"
// //           value={form.DA}
// //           onChange={(e) =>
// //             setForm({ ...form, DA: e.target.value })
// //           }
// //           className="input"
// //         />
// //       </div>

// //       <div className="mt-5">
// //         <button onClick={submit} className="btn-submit">
// //           Submit
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }







// import { useState } from "react";
// import axios from "../../utils/axios";
// import { useParams } from "react-router-dom";

// export default function AddNewSRC({ setRows }) {
//   const { userId } = useParams();

//   const [form, setForm] = useState({
//     placeOfWork: "",
//     station: "EX",
//     MOT: "Bike",
//     kms: "",
//     RsPerKm: "",
//     DA: "",
//   });

//   const submit = async () => {
//     try {
//       const payload = {
//         user: userId,
//         radius: 0,
//         placeOfWork: form.placeOfWork.trim(),
//         station: form.station,
//         MOT: form.station === "HQ" ? "Local" : form.MOT,
//         kms: form.station === "HQ" ? 0 : Number(form.kms),
//       };

//       // Send overrides only if entered
//       if (form.RsPerKm !== "") {
//         payload.RsPerKm = Number(form.RsPerKm);
//       }

//       if (form.DA !== "") {
//         payload.DA = Number(form.DA);
//       }

//       const res = await axios.post("/src", payload);

//       setRows((prev) => [...prev, res.data]);

//       // Reset form
//       setForm({
//         placeOfWork: "",
//         station: "EX",
//         MOT: "Bike",
//         kms: "",
//         RsPerKm: "",
//         DA: "",
//       });

//     } catch (err) {
//       alert(err.response?.data?.message || "Create failed");
//     }
//   };

//   return (
//     <div className="mt-6 border-t pt-6">
//       <h3 className="font-semibold text-lg mb-4">Add New Place</h3>

//       <div className="grid grid-cols-6 gap-4">
//         {/* PLACE */}
//         <input
//           placeholder="Place of Work"
//           value={form.placeOfWork}
//           onChange={(e) =>
//             setForm({ ...form, placeOfWork: e.target.value })
//           }
//           className="input"
//         />

//         {/* STATION */}
//         <select
//           value={form.station}
//           onChange={(e) =>
//             setForm({ ...form, station: e.target.value })
//           }
//           className="input"
//         >
//           <option value="HQ">HQ</option>
//           <option value="EX">EX</option>
//           <option value="OS">OS</option>
//         </select>

//         {/* MOT */}
//         <select
//           value={form.MOT}
//           onChange={(e) =>
//             setForm({ ...form, MOT: e.target.value })
//           }
//           className="input"
//           disabled={form.station === "HQ"}
//         >
//           <option value="Local">Local</option>
//           <option value="Bike">Bike</option>
//           <option value="Bus">Bus</option>
//           <option value="Train">Train</option>
//         </select>

//         {/* KM */}
//         <input
//           type="number"
//           min="0"
//           placeholder="KM"
//           value={form.kms}
//           onChange={(e) =>
//             setForm({ ...form, kms: e.target.value })
//           }
//           className="input"
//           disabled={form.station === "HQ"}
//         />

//         {/* Rs / Km Override */}
//         <input
//           type="number"
//           min="0"
//           placeholder="Rs / Km (optional)"
//           value={form.RsPerKm}
//           onChange={(e) =>
//             setForm({ ...form, RsPerKm: e.target.value })
//           }
//           className="input"
//           disabled={form.station === "HQ"}
//         />

//         {/* DA Override */}
//         <input
//           type="number"
//           min="0"
//           placeholder="DA (optional)"
//           value={form.DA}
//           onChange={(e) =>
//             setForm({ ...form, DA: e.target.value })
//           }
//           className="input"
//         />
//       </div>

//       <div className="mt-5">
//         <button onClick={submit} className="btn-submit">
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// }








import { useState } from "react";
import axios from "../../utils/axios";
import { useParams } from "react-router-dom";

export default function AddNewSRC({ setRows }) {
  const { userId } = useParams();

  const [form, setForm] = useState({
    placeOfWork: "",
    station: "EX",
    MOT: "Bike",
    radius: "",
    kms: "",
    RsPerKm: "",
    DA: "",
    TA: "",
  });

  const submit = async () => {
    try {
      const payload = {
        user: userId,
        radius: Number(form.radius),
        placeOfWork: form.placeOfWork.trim(),
        station: form.station,
        MOT: form.station === "HQ" ? "Local" : form.MOT,
        kms: form.station === "HQ" ? 0 : Number(form.kms),
      };

      if (form.RsPerKm !== "") {
        payload.RsPerKm = Number(form.RsPerKm);
      }

      if (form.TA !== "") {
  payload.TA = Number(form.TA);
}

      if (form.DA !== "") {
        payload.DA = Number(form.DA);
      }

      const res = await axios.post("/src", payload);

      setRows((prev) => [...prev, res.data]);

      // Reset form
      setForm({
        placeOfWork: "",
        station: "EX",
        MOT: "Bike",
        radius: "",
        kms: "",
        RsPerKm: "",
        DA: "",
        TA: "",
      });

    } catch (err) {
      alert(err.response?.data?.message || "Create failed");
    }
  };

  return (
    <div className="mt-6 border-t pt-6">
      <h3 className="font-semibold text-lg mb-4">Add New Place</h3>

      <div className="grid grid-cols-8 gap-4">

        {/* PLACE */}
        <input
          placeholder="Place of Work"
          value={form.placeOfWork}
          onChange={(e) =>
            setForm({ ...form, placeOfWork: e.target.value })
          }
          className="input"
        />

        {/* STATION */}
        <select
          value={form.station}
          onChange={(e) =>
            setForm({ ...form, station: e.target.value })
          }
          className="input"
        >
          <option value="HQ">HQ</option>
          <option value="EX">EX</option>
          <option value="OS">OS</option>
        </select>

        {/* RADIUS */}
        <input
          type="number"
          min="0"
          placeholder="Radius"
          value={form.radius}
          onChange={(e) =>
            setForm({ ...form, radius: e.target.value })
          }
          className="input"
        />

        {/* MOT */}
        <select
          value={form.MOT}
          onChange={(e) =>
            setForm({ ...form, MOT: e.target.value })
          }
          className="input"
          disabled={form.station === "HQ"}
        >
          <option value="Local">Local</option>
          <option value="Bike">Bike</option>
          <option value="Bus">Bus</option>
          <option value="Train">Train</option>
        </select>

        {/* KM */}
        <input
          type="number"
          min="0"
          placeholder="To&FroKMs"
          value={form.kms}
          onChange={(e) =>
            setForm({ ...form, kms: e.target.value })
          }
          className="input"
          disabled={form.station === "HQ"}
        />

        {/* Rs / Km Override */}
        <input
          type="number"
          min="0"
          placeholder="Rs / Km (optional)"
          value={form.RsPerKm}
          onChange={(e) =>
            setForm({ ...form, RsPerKm: e.target.value })
          }
          className="input"
          disabled={form.station === "HQ"}
        />

        {/* TA Override */}
<input
  type="number"
  min="0"
  placeholder="TA (optional)"
  value={form.TA}
  onChange={(e) =>
    setForm({ ...form, TA: e.target.value })
  }
  className="input"
  disabled={form.station === "HQ"}  // optional, keeps logic consistent
/>

        {/* DA Override */}
        <input
          type="number"
          min="0"
          placeholder="DA (optional)"
          value={form.DA}
          onChange={(e) =>
            setForm({ ...form, DA: e.target.value })
          }
          className="input"
        />
      </div>

      <div className="mt-5">
        <button onClick={submit} className="btn-submit">
          Submit
        </button>
      </div>
    </div>
  );
}



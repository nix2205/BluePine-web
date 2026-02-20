// import { useEffect, useState } from "react";
// import axios from "../utils/axios";
// import AppLayout from "../layouts/AppLayout";
// import { useAuth } from "../context/AuthContext";

// export default function MappingPage() {
//   const { user } = useAuth(); // 👈 get logged-in user

//   const [coords, setCoords] = useState(null);
//   const [srcCities, setSrcCities] = useState([]);
//   const [selectedCity, setSelectedCity] = useState("");
//   const [previewData, setPreviewData] = useState(null);
//   const [mappedCities, setMappedCities] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const fetchSRC = async () => {
//       try {
//         const res = await axios.get("/src/my-src");
//         setSrcCities(res.data);
//       } catch (err) {
//         console.error("Failed to fetch SRC:", err);
//       }
//     };

//     fetchSRC();
//     fetchMappedCities();
//   }, []);

//   const fetchMappedCities = async () => {
//     try {
//       const res = await axios.get("/mapping");
//       setMappedCities(res.data);
//     } catch (err) {
//       console.error("Failed to fetch mapped cities:", err);
//     }
//   };

//   const handleRecordLocation = () => {
//     setMessage("");

//     if (!navigator.geolocation) {
//       alert("Geolocation not supported");
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setCoords({
//           lat: position.coords.latitude,
//           lon: position.coords.longitude,
//         });
//       },
//       () => alert("Unable to fetch location")
//     );
//   };

//   const handleCityChange = (cityName) => {
//     setSelectedCity(cityName);

//     const cityData = srcCities.find(
//       (c) => c.placeOfWork === cityName
//     );

//     if (cityData) {
//       setPreviewData({
//         radius: cityData.radius,
//         station: cityData.station,
//       });
//     }
//   };

//   const handleSubmit = async () => {
//     if (!coords || !selectedCity) {
//       alert("Please record location and select city");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await axios.post("/mapping/record", {
//         lat: coords.lat,
//         lon: coords.lon,
//         selectedCity,
//       });

//       setMessage(res.data.message);
//       fetchMappedCities();

//       setSelectedCity("");
//       setCoords(null);
//       setPreviewData(null);

//     } catch (err) {
//       setMessage(
//         err.response?.data?.message || "Failed to record mapping"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/mapping/${id}`);
//       fetchMappedCities();
//     } catch {
//       alert("Failed to delete");
//     }
//   };

//   const isAdmin = user?.role === "admin";

//   return (
//     <AppLayout title="City Mapping" backTo="/executive-dashboard">
//       <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6">

//         {/* ===== RECORD SECTION ===== */}
//         <button
//           onClick={handleRecordLocation}
//           className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//         >
//           📍 Record Current Location
//         </button>

//         {coords && (
//           <div className="text-sm text-gray-600">
//             Latitude: {coords.lat} <br />
//             Longitude: {coords.lon}
//           </div>
//         )}

//         {coords && (
//           <div>
//             <label className="block mb-2 font-semibold">
//               Select City from SRC
//             </label>

//             <select
//               value={selectedCity}
//               onChange={(e) => handleCityChange(e.target.value)}
//               className="w-full border rounded-md p-2"
//             >
//               <option value="">-- Select City --</option>
//               {srcCities.map((city) => (
//                 <option key={city._id} value={city.placeOfWork}>
//                   {city.placeOfWork}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}

//         {previewData && (
//           <div className="bg-gray-100 p-4 rounded-md">
//             <p><strong>Station Type:</strong> {previewData.station}</p>
//             <p><strong>Radius:</strong> {previewData.radius} km</p>
//           </div>
//         )}

//         {previewData && (
//           <button
//             onClick={handleSubmit}
//             disabled={loading}
//             className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
//           >
//             {loading ? "Saving..." : "Save Mapping"}
//           </button>
//         )}

//         {message && (
//           <div className="text-center font-medium text-blue-600">
//             {message}
//           </div>
//         )}

//         {/* ===== SAVED CITIES ===== */}
//         <div className="pt-6 border-t">
//           <h2 className="text-lg font-semibold mb-4">
//             📌 Previously Mapped Cities
//           </h2>

//           {mappedCities.length === 0 ? (
//             <p className="text-gray-500">No mappings yet.</p>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="w-full border text-sm">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="p-2 border">City</th>
//                     <th className="p-2 border">Station</th>
//                     <th className="p-2 border">Radius (km)</th>
//                     <th className="p-2 border">Coordinates</th>
//                     <th className="p-2 border">Address</th>
//                     <th className="p-2 border">Date</th>
//                     <th className="p-2 border">Time</th>
//                     {isAdmin && (
//                       <th className="p-2 border">Action</th>
//                     )}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {mappedCities.map((city) => (
//                     <tr key={city._id} className="text-center">
//                       <td className="p-2 border font-medium">
//                         {city.city}
//                       </td>

//                       <td className="p-2 border">
//                         {city.stationType}
//                       </td>

//                       <td className="p-2 border">
//                         {city.radiusKm}
//                       </td>

//                       <td className="p-2 border text-xs">
//                         {city.location.lat.toFixed(5)},{" "}
//                         {city.location.lon.toFixed(5)}
//                       </td>

//                       <td className="p-2 border text-xs">
//                         {city.address}
//                       </td>

//                       <td className="p-2 border">
//                         {new Date(city.date).toLocaleDateString()}
//                       </td>

//                       <td className="p-2 border">
//                         {city.time}
//                       </td>

//                       {isAdmin && (
//                         <td className="p-2 border">
//                           <button
//                             onClick={() => handleDelete(city._id)}
//                             className="text-red-600 hover:underline"
//                           >
//                             Delete
//                           </button>
//                         </td>
//                       )}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>

//       </div>
//     </AppLayout>
//   );
// }










import { useEffect, useState } from "react";
import axios from "../utils/axios";
import AppLayout from "../layouts/AppLayout";
import { useAuth } from "../context/AuthContext";

export default function MappingPage() {
  const { user } = useAuth();

  const [coords, setCoords] = useState(null);
  const [srcCities, setSrcCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [previewData, setPreviewData] = useState(null);
  const [mappedCities, setMappedCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchSRC = async () => {
      try {
        const res = await axios.get("/src/my");
        setSrcCities(res.data);
      } catch (err) {
        console.error("Failed to fetch SRC:", err);
      }
    };

    fetchSRC();
    fetchMappedCities();
  }, []);

  const fetchMappedCities = async () => {
    try {
      const res = await axios.get("/mapping");
      setMappedCities(res.data);
    } catch (err) {
      console.error("Failed to fetch mapped cities:", err);
    }
  };

  const handleRecordLocation = () => {
    setMessage("");

    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      () => alert("Unable to fetch location")
    );
  };

  const handleCityChange = (cityName) => {
    setSelectedCity(cityName);

    const cityData = srcCities.find(
      (c) => c.placeOfWork === cityName
    );

    if (cityData) {
      setPreviewData({
        radius: cityData.radius,
        station: cityData.station,
      });
    }
  };

  const handleSubmit = async () => {
    if (loading) return;

    if (!coords || !selectedCity) {
      alert("Please record location and select city");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post("/mapping/record", {
        lat: coords.lat,
        lon: coords.lon,
        selectedCity,
      });

      setMessage(res.data.message);
      fetchMappedCities();

      setSelectedCity("");
      setCoords(null);
      setPreviewData(null);

    } catch (err) {
      setMessage(
        err.response?.data?.message || "Failed to record mapping"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (deleteLoading) return;

    try {
      setDeleteLoading(id);
      await axios.delete(`/mapping/${id}`);
      fetchMappedCities();
    } catch {
      alert("Failed to delete");
    } finally {
      setDeleteLoading(null);
    }
  };

  const isAdmin = user?.role === "admin";

  return (
    <AppLayout title="City Mapping" backTo="/executive-dashboard">
      <div style={styles.card}>

        {/* ===== RECORD SECTION ===== */}
        <button
          onClick={handleRecordLocation}
          style={styles.primaryButton}
        >
          📍 Record Current Location
        </button>

        {coords && (
          <div style={styles.coordsBox}>
            Latitude: {coords.lat} <br />
            Longitude: {coords.lon}
          </div>
        )}

        {coords && (
          <div>
            <label style={styles.label}>
              Select City from SRC
            </label>

            <select
              value={selectedCity}
              onChange={(e) => handleCityChange(e.target.value)}
              style={styles.input}
            >
              <option value="">-- Select City --</option>
              {srcCities.map((city) => (
                <option key={city._id} value={city.placeOfWork}>
                  {city.placeOfWork}
                </option>
              ))}
            </select>
          </div>
        )}

        {previewData && (
          <div style={styles.previewBox}>
            <p><strong>Station Type:</strong> {previewData.station}</p>
            <p><strong>Radius:</strong> {previewData.radius} km</p>
          </div>
        )}

        {previewData && (
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={styles.saveButton}
          >
            {loading ? "Saving..." : "Save Mapping"}
          </button>
        )}

        {message && (
          <div style={styles.message}>
            {message}
          </div>
        )}

        {/* ===== SAVED CITIES ===== */}
        <div style={styles.tableSection}>
          <h2 style={styles.tableHeading}>
            Previously Mapped Cities
          </h2>

          {mappedCities.length === 0 ? (
            <p style={{ color: "#666" }}>No mappings yet.</p>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={styles.table}>
                <thead style={styles.tableHead}>
                  <tr>
                    <th style={styles.th}>City</th>
                    <th style={styles.th}>Station</th>
                    <th style={styles.th}>Radius</th>
                    <th style={styles.th}>Coordinates</th>
                    <th style={styles.th}>Address</th>
                    <th style={styles.th}>Date</th>
                    <th style={styles.th}>Time</th>
                    {isAdmin && (
                      <th style={styles.th}>Action</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {mappedCities.map((city) => (
                    <tr key={city._id} style={styles.tr}>
                      <td style={styles.tdBold}>{city.city}</td>
                      <td style={styles.td}>{city.stationType}</td>
                      <td style={styles.td}>{city.radiusKm} km</td>
                      <td style={styles.tdSmall}>
                        {city.location.lat.toFixed(5)},{" "}
                        {city.location.lon.toFixed(5)}
                      </td>
                      <td style={styles.tdSmall}>{city.address}</td>
                      <td style={styles.td}>
                        {new Date(city.date).toLocaleDateString()}
                      </td>
                      <td style={styles.td}>{city.time}</td>

                      {isAdmin && (
                        <td style={styles.td}>
                          <button
                            onClick={() => handleDelete(city._id)}
                            disabled={deleteLoading === city._id}
                            style={styles.deleteButton}
                          >
                            {deleteLoading === city._id
                              ? "Deleting..."
                              : "Delete"}
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </AppLayout>
  );
}

const styles = {
  card: {
    maxWidth: "1000px",
    margin: "40px auto",
    padding: "30px",
    borderRadius: "14px",
    backgroundColor: "#f5f6f8",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },
  label: {
    display: "block",
    marginTop: "20px",
    marginBottom: "8px",
    fontWeight: "600",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  primaryButton: {
    padding: "10px 20px",
    backgroundColor: "#2c3e70",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  saveButton: {
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "#1e9c47",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  coordsBox: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#444",
  },
  previewBox: {
    marginTop: "15px",
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: "#e8f0ff",
  },
  message: {
    marginTop: "15px",
    fontWeight: "600",
    color: "#2c3e70",
  },
  tableSection: {
    marginTop: "40px",
    borderTop: "1px solid #ddd",
    paddingTop: "25px",
  },
  tableHeading: {
    marginBottom: "15px",
    fontSize: "18px",
    fontWeight: "600",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "white",
  },
  tableHead: {
    backgroundColor: "#2c3e70",
    color: "white",
  },
  th: {
    padding: "10px",
    border: "1px solid #ddd",
    fontWeight: "600",
  },
  td: {
    padding: "10px",
    border: "1px solid #eee",
    textAlign: "center",
  },
  tdBold: {
    padding: "10px",
    border: "1px solid #eee",
    fontWeight: "600",
    textAlign: "center",
  },
  tdSmall: {
    padding: "10px",
    border: "1px solid #eee",
    fontSize: "12px",
    textAlign: "center",
  },
  tr: {
    backgroundColor: "#ffffff",
  },
  deleteButton: {
    padding: "6px 12px",
    backgroundColor: "#e74c3c",
    border: "none",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
  },
};
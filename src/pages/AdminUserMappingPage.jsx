import { useEffect, useState } from "react";
import axios from "../utils/axios";
import AppLayout from "../layouts/AppLayout";
import { useParams } from "react-router-dom";

export default function AdminUserMappingPage() {
  const [mappings, setMappings] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const { userId } = useParams();

  useEffect(() => {
    fetchMappings();
  }, []);

  const fetchMappings = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/mapping/user/${userId}`);
      setMappings(res.data);
    } catch (err) {
      console.error("Failed to fetch mappings", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedId) {
      alert("Please select a row to delete");
      return;
    }

    try {
      setDeleteLoading(true);
      await axios.delete(`/mapping/${selectedId}`);
      setSelectedId(null);
      fetchMappings();
    } catch (err) {
      console.error("Delete failed", err);
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <AppLayout title="User City Mappings" backTo="/dashboard" >
      <div style={styles.container}>

       <div style={styles.topBar}>
  <h2 style={styles.title}>Mapped Cities</h2>

  <button
    onClick={handleDelete}
    disabled={!selectedId || deleteLoading}
    style={{
      ...styles.deleteButton,
      opacity: !selectedId ? 0.5 : 1,
      cursor: !selectedId ? "not-allowed" : "pointer",
    }}
  >
    {deleteLoading ? "Deleting..." : "Delete Selected"}
  </button>
</div>
        {loading ? (
          <p>Loading...</p>
        ) : mappings.length === 0 ? (
          <p>No mappings found.</p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}></th>
                  <th style={styles.th}>City</th>
                  <th style={styles.th}>Station</th>
                  <th style={styles.th}>Radius (km)</th>
                  <th style={styles.th}>Coordinates</th>
                  <th style={styles.th}>Address</th>
                  <th style={styles.th}>Date</th>
                  <th style={styles.th}>Time</th>
                </tr>
              </thead>
              <tbody>
                {mappings.map((map) => (
                  <tr
                    key={map._id}
                    style={
                      selectedId === map._id
                        ? styles.selectedRow
                        : styles.row
                    }
                  >
                    <td style={styles.tdCenter}>
                      <input
                        type="radio"
                        name="selectedMapping"
                        value={map._id}
                        checked={selectedId === map._id}
                        onChange={() => setSelectedId(map._id)}
                      />
                    </td>

                    <td style={styles.td}>{map.city}</td>
                    <td style={styles.td}>{map.stationType}</td>
                    <td style={styles.td}>{map.radiusKm}</td>
                    <td style={styles.tdSmall}>
                      {map.location.lat.toFixed(4)},{" "}
                      {map.location.lon.toFixed(4)}
                    </td>
                    <td style={styles.tdSmall}>{map.address}</td>
                    <td style={styles.td}>
                      {new Date(map.date).toLocaleDateString()}
                    </td>
                    <td style={styles.td}>{map.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AppLayout>
  );
}





const styles = {
  container: {
    maxWidth: "1100px",
    margin: "40px auto",
    background: "#f9fafc",
    padding: "25px",
    borderRadius: "14px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  },
  actions: {
    marginBottom: "15px",
    display: "flex",
    justifyContent: "flex-end",
  },
  deleteButton: {
    padding: "8px 16px",
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "white",
  },
  th: {
    padding: "10px",
    border: "1px solid #ddd",
    backgroundColor: "#2c3e70",
    color: "white",
    fontWeight: "600",
  },
  td: {
    padding: "10px",
    border: "1px solid #eee",
    textAlign: "center",
  },
  tdSmall: {
    padding: "10px",
    border: "1px solid #eee",
    fontSize: "12px",
    textAlign: "center",
  },
  tdCenter: {
    padding: "10px",
    border: "1px solid #eee",
    textAlign: "center",
  },
  row: {
    backgroundColor: "#ffffff",
  },
  selectedRow: {
    backgroundColor: "#e8f0ff",
  },

topBar: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "25px",
  paddingBottom: "12px",
  borderBottom: "1px solid #e5e7eb",
},

title: {
  fontSize: "22px",
  fontWeight: "700",
  color: "#1f3a5f",
  margin: 0,
},

deleteButton: {
  padding: "10px 20px",
  backgroundColor: "#e74c3c",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontWeight: "600",
  minWidth: "150px",
  transition: "all 0.2s ease",
},
};
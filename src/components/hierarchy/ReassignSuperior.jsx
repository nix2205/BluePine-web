import { useEffect, useState } from "react";
import axios from "../../utils/axios";

export default function ReassignSuperior() {
  const [users, setUsers] = useState([]);
  const [employeeUserId, setEmployeeUserId] = useState("");
  const [newSuperiorUserId, setNewSuperiorUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const res = await axios.get("/users/search?q=");
        setUsers(res.data);
      } catch (err) {
        setError("Failed to load users");
      }
    };

    loadUsers();
  }, []);

  const submit = async () => {
    setError("");

    if (!employeeUserId || !newSuperiorUserId) {
      setError("Please select both employee and new superior");
      return;
    }

    if (employeeUserId === newSuperiorUserId) {
      setError("Employee and superior cannot be the same");
      return;
    }

    try {
      setLoading(true);
      await axios.put("/users/reassign-superior", {
        employeeUserId,
        newSuperiorUserId,
      });

      alert("Superior reassigned successfully ✨");

      // reset
      setEmployeeUserId("");
      setNewSuperiorUserId("");

      // simplest refresh for now
      window.location.reload();
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to reassign superior"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">
        Reassign Superior
      </h3>

      {/* Selects */}
      <div className="space-y-4">
        <select
          className="w-full border rounded-lg p-2"
          value={employeeUserId}
          onChange={(e) => setEmployeeUserId(e.target.value)}
        >
          <option value="">Select Employee</option>
          {users.map((u) => (
            <option key={u._id} value={u.userId}>
              {u.username} ({u.userId})
            </option>
          ))}
        </select>

        <select
          className="w-full border rounded-lg p-2"
          value={newSuperiorUserId}
          onChange={(e) =>
            setNewSuperiorUserId(e.target.value)
          }
        >
          <option value="">Select New Superior</option>
          {users.map((u) => (
            <option key={u._id} value={u.userId}>
              {u.username} ({u.userId})
            </option>
          ))}
        </select>
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-red-500 mt-3">
          {error}
        </p>
      )}

      {/* Action */}
      <button
        onClick={submit}
        disabled={loading}
        className="mt-4 bg-[#1f3a5f] text-white px-5 py-2 rounded-lg disabled:opacity-50"
      >
        {loading ? "Reassigning…" : "Reassign Superior"}
      </button>
    </div>
  );
}

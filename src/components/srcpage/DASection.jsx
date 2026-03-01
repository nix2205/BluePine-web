


import { useState, useEffect } from "react";
import axios from "../../utils/axios";

const STATIONS = ["HQ", "EX", "OS"];

export default function DASection({ userId, srcConfig, onUpdate }) {
  const [editing, setEditing] = useState({
    HQ: false,
    EX: false,
    OS: false,
  });

  const [daValues, setDaValues] = useState({
    HQ: 0,
    EX: 0,
    OS: 0,
  });

  useEffect(() => {
    if (srcConfig) {
      setDaValues(srcConfig.DAperStation);
    }
  }, [srcConfig]);

  // const saveDA = async (station) => {
  //   try {
  //     await axios.patch(`/src-config/da/${userId}/${station}`, {
  //       DA: Number(daValues[station]),
  //     });

  //     setEditing((prev) => ({ ...prev, [station]: false }));
  //     onUpdate();
  //   } catch (err) {
  //     alert(err.response?.data?.message || "DA update failed");
  //   }
  // };

  const saveDA = async (station) => {
  try {
    const confirmChange = window.confirm(
      "If you change configs, all SRCs will be changed. Continue?"
    );

    if (!confirmChange) return;

    await axios.patch(`/src-config/da/${userId}/${station}`, {
      DA: Number(daValues[station]),
    });

    // 🔥 Apply config globally
    await axios.put(`/src-config/apply/${userId}`);

    setEditing((prev) => ({ ...prev, [station]: false }));
    onUpdate();
  } catch (err) {
    alert(err.response?.data?.message || "DA update failed");
  }
};
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold text-lg mb-4">DA per Station</h2>

      <div className="grid grid-cols-3 gap-6">
        {STATIONS.map((station) => (
          <div key={station} className="border p-3 rounded">
            <h3 className="font-semibold mb-2">{station}</h3>

            <input
              type="number"
              min="0"
              value={daValues[station]}
              disabled={!editing[station]}
              onChange={(e) =>
                setDaValues({ ...daValues, [station]: e.target.value })
              }
              className="input mb-2"
            />

            {editing[station] ? (
              <button
                onClick={() => saveDA(station)}
                className="btn-blue w-full"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() =>
                  setEditing({ ...editing, [station]: true })
                }
                className="btn-gray w-full"
              >
                Edit
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

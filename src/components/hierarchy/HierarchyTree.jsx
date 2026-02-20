import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import TreeNode from "./TreeNode";

export default function HierarchyTree() {
  const [tree, setTree] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadHierarchy = async () => {
      try {
        const res = await axios.get("/users/hierarchy");
        setTree(res.data);
      } catch (err) {
        setError("Failed to load hierarchy");
      } finally {
        setLoading(false);
      }
    };

    loadHierarchy();
  }, []);

  if (loading) {
    return (
      <p className="text-gray-500">
        Loading hierarchy…
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-red-500 text-sm">
        {error}
      </p>
    );
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">
        Hierarchy Tree
      </h3>

      {tree.length === 0 ? (
        <p className="text-sm text-gray-500">
          No hierarchy data available
        </p>
      ) : (
        <div className="space-y-1">
          {tree.map((root) => (
            <TreeNode key={root._id} user={root} />
          ))}
        </div>
      )}
    </div>
  );
}

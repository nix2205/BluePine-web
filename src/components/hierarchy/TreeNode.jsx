import { useState } from "react";

export default function TreeNode({ user, level = 0 }) {
  const [open, setOpen] = useState(true);
  const hasChildren = user.subordinates?.length > 0;

  return (
    <div className="ml-4">
      {/* Node */}
      <div
        className="flex items-center gap-2 py-1 cursor-pointer"
        style={{ marginLeft: level * 12 }}
        onClick={() => hasChildren && setOpen(!open)}
      >
        {/* Expand / collapse arrow */}
        {hasChildren && (
          <span className="text-gray-400 text-sm w-4">
            {open ? "▼" : "▶"}
          </span>
        )}

        {!hasChildren && <span className="w-4" />}

        {/* Username */}
        <span className="font-medium">
          {user.username} ({user.userId})
        </span>

        {/* Role badge */}
        <span
          className={`text-xs px-2 py-0.5 rounded-full ${
            user.role === "manager"
              ? "bg-blue-100 text-blue-700"
              : user.role === "executive"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {user.role}
        </span>
      </div>

      {/* Children */}
      {open &&
        user.subordinates?.map((sub) => (
          <TreeNode
            key={sub._id}
            user={sub}
            level={level + 1}
          />
        ))}
    </div>
  );
}

import React from "react";

const StatusBadge = ({ status }) => {
  const statusColors = {
    active: "bg-green-600",
    retired: "bg-gray-600",
    unknown: "bg-yellow-600",
    destroyed: "bg-red-600",
  };

  const colorClass = statusColors[status] || "bg-gray-300";
  return (
    <span
      className={`text-white px-2 font-extrabold text-xs py-1 rounded ${colorClass}`}
      aria-label={`Status: ${status}`}
    >
      {status.toUpperCase()}
    </span>
  );
};

export default StatusBadge;

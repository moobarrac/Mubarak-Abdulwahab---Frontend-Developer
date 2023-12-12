import React, { useEffect, useRef } from "react";
import StatusBadge from "../utils/StatusBadge";
import { convertDateFormat } from "../utils/dateFormatter";

const Popup = ({ isOpen, close, capsule }) => {
  const popupRef = useRef(); // Ref for the popup content

  // Close popup if clicked outside
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      close();
    }
  };

  // Close popup on Escape key press
  const handleEscape = (event) => {
    if (event.key === "Escape") {
      close();
    }
  };

  useEffect(() => {
    // Add event listeners
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    // Remove event listeners on cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  if (!isOpen || !capsule) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-80 z-50 flex justify-center items-center p-4">
      <div
        ref={popupRef}
        className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-2xl w-full"
      >
        <div className="bg-gray-900 p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-white">
              {capsule.capsule_serial}
            </h2>
            <button
              onClick={close}
              className="text-white focus:outline-none"
              data-testid="close-button"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="mb-4 flex flex-col gap-2">
            <p className="text-gray-700  text-xl uppercase font-extrabold">
              Type: <span className="text-gray-900">{capsule.type}</span>
            </p>
            <p className="text-gray-700 font-medium">
              Status: <StatusBadge status={capsule.status} />
            </p>
            <p className="text-gray-700 font-medium">
              Original Launch:{" "}
              <span className="text-gray-900">
                {convertDateFormat(capsule.original_launch)}
              </span>
            </p>
            <p className="text-gray-700 font-medium">
              Details: <span className="text-gray-900">{capsule.details}</span>
            </p>
            <p className="text-gray-700 font-medium">
              Reuse Count:{" "}
              <span className="text-gray-900">{capsule.reuse_count}</span>
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">Missions</h3>
          <ul className="list-disc list-inside pl-4 mb-4 text-gray-700">
            {capsule.missions.map((mission, index) => (
              <li key={index} className="mb-1">
                {mission.name} (Flight: {mission.flight})
              </li>
            ))}
          </ul>

          <div className="flex justify-end mt-4">
            <button
              onClick={close}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

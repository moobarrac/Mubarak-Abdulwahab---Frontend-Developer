import React from "react";

const Error = ({ onButtonClick, error }) => {
  return (
    <div className="text-center my-24" data-testid="error-message">
      <p className="text-red-600 text-lg font-bold">Error Loading Data</p>
      <p className="text-white">{error}</p>
      <button
        onClick={() => onButtonClick()}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-300"
      >
        Retry
      </button>
    </div>
  );
};

export default Error;

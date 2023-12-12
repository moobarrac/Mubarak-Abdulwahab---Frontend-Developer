import React from "react";

const Loading = () => {
  return (
    <div
      data-testid="loading-indicator"
      className="flex justify-center items-center h-64"
    >
      <p className="text-white text-lg ml-4">Loading...</p>
    </div>
  );
};

export default Loading;

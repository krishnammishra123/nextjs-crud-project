import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
        <p className="mt-4 font-bold text-gray-900">Loading</p>
      </div>
    </div>
  );
};

export default Loading;

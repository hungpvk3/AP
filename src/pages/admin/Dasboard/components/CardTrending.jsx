import React from "react";

const CardTrending = ({ name, _total }) => {
  return (
    <div className="relative w-96 shadow-lg rounded-r-lg border-l-4 border-blue-500 active">
      <div className="p-5 px-8">
        <p className="text-lg font-bold">{name}</p>
        <div className="mt-5 flex items-center justify-between">
          <p className="text-md font-bold">Total Student: {_total}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CardTrending;

import React, { useState } from "react";

const Plus = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="plus-main relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer bg-blue-300 shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`text-white transition duration-300 ease-in-out ${
            isOpen ? "transform rotate-45 w-7 h-7" : "active-plus"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M12 4v16m8-8H4"
          />
        </svg>

        <div
          className={`absolute z-10 right-0 top-12 w-72 backdrop-filter backdrop-blur-lg rounded-xl border border-t-white shadow-lg ${
            isOpen ? "show" : "opacity-0 -mt-6 hidden"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Plus;

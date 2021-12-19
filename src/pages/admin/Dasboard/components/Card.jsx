import React from "react";

const Card = ({ name, total, icon }) => {
  return (
    <div className="w-96 rounded-r-lg border-l-4 border-green-500 bg-green-300 card__ds text-white">
      <div className="flex justify-between py-5 px-8">
        <div>
          <p className="text-lg font-bold">{name}</p>
          <p className="text-xl font-black mt-2">{total}</p>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {icon}
        </svg>
      </div>
    </div>
  );
};

export default Card;

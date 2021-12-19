import React from "react";

const CardRole = ({ name, description, nameBtn, img, handleClick }) => {
  return (
    <div className="relative h-80 rounded-xl shadow-lg bg-gray-500 text-white">
      <div className="flex items-center justify-between pt-6 mx-3 lg:mx-6">
        <div>
          <p className="text-xl font-black pb-3">{name}</p>

          <p className="font-semibold">{description}</p>
        </div>
        <img src={img} alt="infomation" className="w-32 ml-5" />
      </div>

      <button
        className="absolute bottom-0 w-full py-2 text-lg font-bold rounded-b-lg bg-blue-300 focus:outline-none hover:bg-blue-400"
        onClick={handleClick}
      >
        {nameBtn}
      </button>
    </div>
  );
};

export default CardRole;

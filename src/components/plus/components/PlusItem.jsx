import React from "react";
import Icon from "../../icon";

const PlusItem = ({ name, path, handleOpen }) => {
  return (
    <div className="w-full my-3 font-bold" onClick={handleOpen}>
      <div className="flex items-center px-2 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-800">
        <div className="mx-3">
          <Icon>
            <path d={path} />
          </Icon>
        </div>

        <p className="">{name}</p>
      </div>
    </div>
  );
};

export default PlusItem;

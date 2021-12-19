import React from "react";

const Button = ({ children, css, handleFuc }) => {
  return (
    <button
      className={`py-2 px-4 rounded-xl text-white bg-black focus:outline-none ${css}`}
      onClick={handleFuc}
    >
      {children}
    </button>
  );
};

export default Button;

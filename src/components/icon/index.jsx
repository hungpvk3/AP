import React from "react";

const Icon = ({ children, ...rest }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 ${rest.css}`}
        {...rest}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        {children}
      </svg>
    </div>
  );
};

export default Icon;

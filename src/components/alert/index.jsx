import React, { useEffect, memo } from "react";
import { useStore, actionsAlert } from "../../context";

const Alert = () => {
  const { alertState, dispatchAlert } = useStore();
  const { success, variant, text } = alertState;

  let css;
  if (variant === "success") {
    css = "bg-green-100 border-green-500 text-green-700";
  } else if (variant === "error") {
    css = "bg-red-100 border-red-500 text-red-700";
  } else if (variant === "warning") {
    css = "bg-orange-100 border-orange-500 text-orange-700";
  }

  useEffect(() => {
    let timeSubscrice;
    if (success) {
      timeSubscrice = setTimeout(() => {
        console.log("timmer");
        dispatchAlert(actionsAlert.alertActions.hidden());
      }, 3000);
    }
    console.log("un-subscrice");

    return () => timeSubscrice;
  }, [success, dispatchAlert]);

  const handleClose = () => {
    dispatchAlert(actionsAlert.alertActions.hidden());
  };

  return (
    <div
      className={`${
        success ? "-translate-x-6" : "translate-x-96"
      } z-50 min-w-96 fixed top-10 right-0 transition-all duration-300 ease-in-out rounded-r-xl bg-white w-96 transform`}
    >
      <div className={`border-l-4 p-4 ${css}`}>
        <p className="font-bold">Thông báo</p>
        <p className="mr-10">{text}</p>
      </div>
      <svg
        onClick={handleClose}
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-red-600 absolute right-0 top-0 m-2 rounded-full hover:bg-gray-100"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default memo(Alert);

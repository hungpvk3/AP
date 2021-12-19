import React from "react";

const ModalConfim = ({ isOpen, text, onClose, onDelete }) => {
  return (
    <div>
      <div
        className={`${isOpen ? "modal-sub" : "hidden"}`}
        onClick={onClose}
      ></div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute flex flex-col items-center z-10 left-1/2 top-1/2 w-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 shadow text-center shadow-xl rounded-xl`}
      >
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-yellow-500 mt-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <div className="text-gray-600">
            <p className="text-2xl font-semibold">Are you sure?</p>
            <p className="text-lg font-thin w-72 my-5">
              If you delete it, you won't be able to recover it!
            </p>
          </div>
        </div>

        <div className="form-group my-6 text-white">
          <button
            className="px-5 py-2 bg-blue-400 font-bold hover:bg-blue-500 rounded-xl focus:outline-none"
            onClick={() => onDelete()}
          >
            Confirm
          </button>
          <button
            className="px-5 py-2 mx-3 bg-red-400 font-bold hover:bg-red-500 rounded-xl focus:outline-none"
            onClick={onClose}
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfim;

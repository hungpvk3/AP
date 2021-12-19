import React, { useState, memo } from "react";
import Icon from "../icon";

const AccordingCourse = ({
  id,
  openAll,
  nameContent,
  desc,
  dataItem,
  onSelectClass,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleIsOpen = (e) => {
    setIsOpen(e.target.checked);
  };

  const handleIsActive = (e, classCode) => {
    let elm = document.querySelector(".isActive");

    if (elm) {
      elm.classList.remove("isActive");
    }
    // document.querySelectorAll(".item-isActive").forEach((elm) => {
    //   elm.classList.remove("isActive");
    // })
    e.target.classList.add("isActive");
    onSelectClass(classCode);
  };

  return (
    <div>
      <div className="mb-3 shadow-lg">
        <input
          type="checkbox"
          onChange={handleIsOpen}
          id={`${id}`}
          className="hidden"
          checked={isOpen}
        />
        <label htmlFor={`${id}`}>
          <div className="flex items-center py-3 bg-gray-100 rounded-md cursor-pointer">
            {isOpen || openAll ? (
              <>
                <Icon className="h-4 w-4 mx-4 text-red-500">
                  <path
                    fillRule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </Icon>
              </>
            ) : (
              <>
                <Icon className="h-4 w-4 mx-4 text-red-500">
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </Icon>
              </>
            )}

            <p className="font-bold">
              {desc}. {nameContent}
            </p>
          </div>
        </label>

        <div className="my-2 cursor-pointer rounded-md">
          {isOpen || openAll ? (
            <>
              {dataItem
                ? dataItem.map((item, i) =>
                    item.courseId === id ? (
                      <div
                        key={i}
                        className={`flex items-center pl-14 py-2 border-b border-gray-100 item-isActive`}
                        onClick={(e) => {
                          handleIsActive(e, item._id);
                        }}
                      >
                        <Icon className="w-5 h-5 text-red-500 mr-3">
                          <path
                            fillRule="evenodd"
                            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                            clipRule="evenodd"
                          />
                        </Icon>
                        {item.classCode}
                      </div>
                    ) : (
                      ""
                    )
                  )
                : ""}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(AccordingCourse);

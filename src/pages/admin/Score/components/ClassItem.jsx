import React from "react";

const ClassItem = ({ name }) => {
    return (
        <div>
            <div className="t-body text-sm text-gray-700 font-semibold col-span-3 mt-6">
                <div className="hover:bg-gray-100 rounded-lg border border-gray-200">
                    <ul className="grid grid-cols-7 gap-4 transform translate-y-1 pt-2 px-1 cursor-pointer">
                        <li className="col-span-5">{name}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ClassItem;

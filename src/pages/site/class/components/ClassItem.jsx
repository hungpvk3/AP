import React from "react";
import { Link } from "react-router-dom";

import { PATH } from "../../../../contants/PATH";
import Icon from "../../../../components/icon";
import { useStore, actionsAlert } from "../../../../context";

const ClassItem = ({ id, name, teacher, iconLock }) => {
    const { dispatchAlert } = useStore();

    const handleScessClass = () => {
        if (!iconLock.acess) {
            dispatchAlert(
                actionsAlert.alertActions.display({
                    variant: "error",
                    text: "Không thể truy cập",
                })
            );
        }
    };

    return (
        <div>
            {iconLock.acess ? (
                <Link to={`${PATH.SCORE}/${id}`}>
                    <div className="flex items-center justify-between pt-2 px-5 bg-white rounded-xl w-full border border-hray-200">
                        <div className="flex items-center">
                            <Icon css="mt-2">{iconLock.path}</Icon>
                            <p className="text-lg font-bold ml-5 pt-2 capitalize">
                                {name}
                            </p>
                        </div>

                        <p className="text-sm font-semibold">{teacher}</p>
                    </div>
                </Link>
            ) : (
                <div className="cursor-pointer" onClick={handleScessClass}>
                    <div className="flex items-center justify-between pt-2 px-5 bg-white rounded-xl w-full border border-hray-200 hover:bg-gray-100">
                        <div className="flex">
                            <Icon css="mt-2">{iconLock.path}</Icon>
                            <p className="text-lg font-bold ml-5 pt-2 capitalize">
                                {name}
                            </p>
                        </div>

                        <p className="text-sm font-semibold">{teacher}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClassItem;

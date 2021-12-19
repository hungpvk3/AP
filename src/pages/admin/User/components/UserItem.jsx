import React, { memo } from "react";

import TooltipUpdate from "../../../../components/tooltip/Update";
import TooltipDelete from "../../../../components/tooltip/Delete";

const UserItem = ({
    user,
    onFindUser,
    onOpenUpdate,
    onOpenDetailScore,
    onOpenDelete,
}) => {
    console.log("re-render");
    return (
        <div className="t-body text-sm text-gray-700 font-semibold col-span-3 mt-6">
            <div className="hover:bg-gray-100 rounded-lg border border-gray-200 shadow-sm mb-3">
                <ul className="grid grid-cols-7 gap-4 transform translate-y-1 pt-2 px-2">
                    <li
                        className="col-span-5 cursor-pointer"
                        onClick={() => onFindUser(user?.userCode)}
                    >
                        {user?.email ? user.email : ""}
                    </li>

                    <li>
                        <svg
                            onClick={() => onOpenDetailScore(user?._id)}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 ml-3 cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </li>
                    <li className="flex items-center justify-between">
                        <TooltipUpdate title="CẬp nhật" placement="top-end">
                            <svg
                                onClick={() => onOpenUpdate(user?.userCode)}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 ml-6 cursor-pointer"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                />
                            </svg>
                        </TooltipUpdate>
                        <TooltipDelete title="Xoá" placement="top-end">
                            <svg
                                onClick={() => onOpenDelete(user?._id)}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 cursor-pointer"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                            </svg>
                        </TooltipDelete>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default memo(UserItem);

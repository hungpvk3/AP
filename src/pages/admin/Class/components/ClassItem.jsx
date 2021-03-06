import React, { memo } from "react";
import { Link } from "react-router-dom";
import ModalConfim from "../../../../components/modal";

import TooltipUpdate from "../../../../components/tooltip/Update";
import TooltipDelete from "../../../../components/tooltip/Delete";
import Class from "../../../../apis/class";

const ClassItem = ({ items, onOpenUpdate, onOpenAddStudent, onRefesh }) => {
    console.log("re-render");
    return (
        <div className="t-body text-sm text-gray-700 font-semibold col-span-3 mt-6">
            <div className="hover:bg-gray-100 rounded-lg border border-gray-200">
                <ul className="grid grid-cols-7 gap-4 transform translate-y-1 pt-2 px-1">
                    <Link
                        to={`/admin/class/${items._id}`}
                        className="col-span-5"
                    >
                        <li className=" cursor-pointer capitalize">
                            Lớp {items?.name}
                        </li>
                    </Link>

                    <li>
                        <TooltipUpdate
                            title="Thêm sinh viên"
                            placement="top-end"
                        >
                            <svg
                                onClick={() => onOpenAddStudent(items._id)}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 ml-10 cursor-pointer"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
                                />
                            </svg>
                        </TooltipUpdate>
                    </li>
                    <li className="flex items-center justify-between">
                        <TooltipUpdate title="Cập nhật" placement="top-end">
                            <svg
                                onClick={() => onOpenUpdate(items?._id)}
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
                        <ModalConfim
                            placement="topRight"
                            onDelete={() => {
                                Class.deleteClass(items?._id);
                            }}
                            name={items?.name}
                            onRefesh={onRefesh}
                        >
                            <TooltipDelete title="Xoá" placement="top-end">
                                <svg
                                    //   onClick={() => onOpenDelete(user?._id)}
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
                        </ModalConfim>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default memo(ClassItem);

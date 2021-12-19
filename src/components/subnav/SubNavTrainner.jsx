import React from "react";
import { Link, useLocation } from "react-router-dom";

import { PATH } from "../../contants/PATH";
import Icon from "../icon";

const SubNavSite = () => {
    const location = useLocation();
    let result;
    if (location.pathname) {
        result = location.pathname.split("/")[2];
    }
    return (
        <div className="px-1.5 fixed z-20">
            <div className="w-20 text-sm font-semibold flex flex-col items-center my-4">
                <ul>
                    <Link to={PATH.TRAINNER}>
                        <li
                            className={`text-gray-700 ${
                                result === undefined ||
                                result === "class-trainner" ||
                                result === "schedule"
                                    ? "active"
                                    : "hover:bg-white hover:text-black rounded-xl"
                            }
                            flex flex-col items-center justify-center w-16 h-16 cursor-pointer rounded-xl`}
                        >
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="home"
                                className="svg-inline--fa fa-home fa-w-6 w-5 h-5 mt-3"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                                ></path>
                            </svg>
                            <p className="text-xs mt-1">Home</p>
                        </li>
                    </Link>

                    <Link to={PATH.TRAINNER_PROFILE}>
                        <li
                            className={`text-gray-700 ${
                                result === "profile"
                                    ? "active"
                                    : "hover:bg-white hover:text-black rounded-xl"
                            }
                            flex flex-col items-center justify-center w-16 h-16 mt-1.5 cursor-pointer rounded-xl`}
                        >
                            <Icon className="w-5 h-5 mt-3">
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                    clipRule="evenodd"
                                />
                            </Icon>
                            <p className="text-xs mt-1">Profile</p>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default SubNavSite;

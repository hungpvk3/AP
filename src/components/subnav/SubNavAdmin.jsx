import React from "react";
import { PATH } from "../../contants/PATH";
import { Link, useLocation } from "react-router-dom";
import Icon from "../icon";

const SubNavAdmin = () => {
    const location = useLocation();
    let twoEleResult;
    if (location.pathname) {
        twoEleResult = location.pathname.split("/")[2];
    }
    console.log(twoEleResult);
    return (
        <div className="px-1.5 fixed z-20 rounded-r-2xl">
            <div className="w-20 text-sm font-semibold flex flex-col items-center">
                <Link to={PATH.ADMIN}>
                    <li
                        className={`text-gray-700 ${
                            twoEleResult === undefined
                                ? "active"
                                : "hover:text-black hover:bg-white rounded-xl"
                        }
                    flex flex-col items-center justify-center w-16 h-16 mt-1.5 cursor-pointer rounded-xl`}
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
                        <p className="text-xs mt-1">Dasboard</p>
                    </li>
                </Link>

                <Link to={PATH.MANAGER_CATEGORY}>
                    <li
                        className={`text-gray-700 ${
                            twoEleResult === "category"
                                ? "active"
                                : "hover:text-black hover:bg-white rounded-xl"
                        }
                    flex flex-col items-center justify-center w-16 h-16 cursor-pointer rounded-xl mt-1.5`}
                    >
                        <Icon className="w-5 h-5 mt-3">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </Icon>
                        <p className="text-xs mt-1">Category</p>
                    </li>
                </Link>

                <Link to={PATH.MANAGERCOURSE}>
                    <li
                        className={`text-gray-700 ${
                            twoEleResult === "course"
                                ? "active"
                                : "hover:text-black hover:bg-white rounded-xl"
                        } flex flex-col items-center justify-center w-16 h-16 mt-1.5 cursor-pointer rounded-xl`}
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="lightbulb"
                            className="svg-inline--fa fa-lightbulb fa-w-11 w-5 h-5 mt-3"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 352 512"
                        >
                            <path
                                fill="currentColor"
                                d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"
                            ></path>
                        </svg>
                        <p className="text-xs mt-1">Course</p>
                    </li>
                </Link>

                <Link to={PATH.MANAGERUSER}>
                    <li
                        className={`text-gray-700 ${
                            twoEleResult === "user"
                                ? "active"
                                : "hover:text-black hover:bg-white rounded-xl"
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
                        <p className="text-xs mt-1">User</p>
                    </li>
                </Link>

                <Link to={PATH.ADMIN_CLASS}>
                    <li
                        className={`text-gray-700 ${
                            twoEleResult === "class"
                                ? "active"
                                : "hover:text-black hover:bg-white rounded-xl"
                        }
          } flex flex-col items-center justify-center w-16 h-16 mt-1.5 cursor-pointer rounded-xl`}
                    >
                        <Icon className="w-5 h-5 mt-3">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                            />
                        </Icon>

                        <p className="text-xs mt-1">Class</p>
                    </li>
                </Link>

                <Link to={PATH.TOPIC_ADMIN}>
                    <li
                        className={`${
                            twoEleResult === "topic"
                                ? "active"
                                : "hover:text-black hover:bg-white rounded-xl"
                        } text-gray-700
                    flex flex-col items-center justify-center w-16 h-16 mt-1.5 cursor-pointer rounded-xl`}
                    >
                        <Icon className="w-5 h-5 mt-3">
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                            />
                        </Icon>
                        <p className="text-xs mt-1">Topic</p>
                    </li>
                </Link>

                <Link to={PATH.ADMIN_PROFILE}>
                    <li
                        className={`${
                            twoEleResult === "profile"
                                ? "active"
                                : "hover:text-black hover:bg-white rounded-xl"
                        } text-gray-700
                    flex flex-col items-center justify-center w-16 h-16 mt-1.5 cursor-pointer rounded-xl mb-5`}
                    >
                        <Icon className="w-5 h-5 mt-3">
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                            />
                        </Icon>
                        <p className="text-xs mt-1">Profile</p>
                    </li>
                </Link>
            </div>
        </div>
    );
};

export default SubNavAdmin;

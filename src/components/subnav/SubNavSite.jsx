import React from "react";
import { Link, useLocation } from "react-router-dom";

import { PATH } from "../../contants/PATH";
import Icon from "../icon";

const SubNavSite = () => {
    const location = useLocation();
    let result;
    if (location.pathname) {
        result = location.pathname.split("/")[1];
    }
    return (
        <div className="px-1.5 fixed z-20">
            <div className="w-20 text-sm font-semibold flex flex-col items-center my-4">
                <ul>
                    <Link to={PATH.HOME}>
                        <li
                            className={`text-gray-700 ${
                                result === "home"
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

                    <Link to={PATH.CATEGORIES}>
                        <li
                            className={`text-gray-700 ${
                                result === "categories"
                                    ? "active"
                                    : "hover:bg-white hover:text-black rounded-xl"
                            } ${result === "topic" ? "active" : ""} ${
                                result === "course" ? "active" : ""
                            } ${
                                result === "class" ? "active" : ""
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

                    <Link to={PATH.SCHEDULE}>
                        <li
                            className={`text-gray-700 ${
                                result === "schedule"
                                    ? "active"
                                    : "hover:bg-white hover:text-black rounded-xl"
                            }
              flex flex-col items-center justify-center w-16 h-16 mt-1.5 cursor-pointer rounded-xl`}
                        >
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="newspaper"
                                className="svg-inline--fa fa-newspaper fa-w-18 w-5 h-5"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"
                                ></path>
                            </svg>
                            <p className="text-xs mt-1">Calendar</p>
                        </li>
                    </Link>

                    {/* <Link to={PATH.SCORE}>
            <li
              className={`${
                result === "score"
                  ? "active"
                  : "hover:bg-white hover:text-black rounded-xl"
              }
              flex flex-col items-center justify-center w-16 h-16 mt-1.5 cursor-pointer`}
            >
              <Icon className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </Icon>

              <p className="text-xs mt-1">Score</p>
            </li>
          </Link> */}

                    <Link to={PATH.HOME}>
                        <li
                            className={`text-gray-700               flex flex-col items-center justify-center w-16 h-16 mt-1.5 cursor-pointer rounded-xl`}
                        >
                            <Icon className="w-5 h-5 mt-3">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                                />
                            </Icon>
                            <p className="text-xs mt-1">Status</p>
                        </li>
                    </Link>

                    <Link to={PATH.PROFILE}>
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

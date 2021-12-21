import React, { memo } from "react";
// import { debounce } from "lodash";
// import { Input } from "antd";

// import User from "../../apis/auth";

import { useStore, actions } from "../../context";
import { useHistory, useLocation, Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { PATH } from "../../contants/PATH";
import { Popover, Avatar } from "antd";

// function DebounceSelect({ fetchOptions, debounceTimeout = 300, ...props }) {
//     const [fetching, setFetching] = useState(false);
//     const [options, setOptions] = useState([]);

//     const debounceFetcher = React.useMemo(() => {
//         const loadOptions = (value) => {
//             setOptions([]);
//             setFetching(true);

//             fetchOptions(value).then((newOptions) => {
//                 console.log(newOptions);
//                 setOptions(newOptions);
//                 setFetching(false);
//             });
//         };

//         return debounce(loadOptions, debounceTimeout);
//     }, [debounceTimeout, fetchOptions]);

//     useEffect(() => {
//         return () => {
//             // clear when unmount
//             setOptions([]);
//         };
//     }, []);

//     return (
//         <div className="absolute w-96 left-1/2 top-4 transform -translate-x-1/3">
//             <Input.Search
//                 placeholder="input search text"
//                 loading={fetching}
//                 allowClear
//                 onSearch={debounceFetcher}
//                 {...props}
//                 onBlur={() => setOptions([])}
//             />
//             <ul className="bg-white rounded-b-lg max-h-80 overflow-auto">
//                 {options.map((opt) => (
//                     <li key={opt._id} className="mt-3 font-semibold p-2">
//                         {opt.fullName}
//                     </li>
//                 ))}
//                 <li></li>
//             </ul>
//         </div>
//     );
// }

// function fetchUserList(search) {
//     return User.user_search(search);
// }

const Header = () => {
    const {
        authState: { data },
        dispatchAuth,
    } = useStore();
    let home;
    // const [value, setValue] = useState();
    const history = useHistory();
    const location = useLocation();
    const path = location.pathname;
    // console.log(value);
    if (
        path === "/home" ||
        path === "/admin" ||
        path === "/trainner" ||
        path === "/"
    ) {
        home = true;
    } else {
        home = false;
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        dispatchAuth(actions.authActions.logout_success());
        history.push("/login");
    };

    return (
        <div className="fixed z-50 w-full shadow-sm bg-white">
            <div className="h-16 flex items-center justify-between px-8">
                <div className="flex items-center">
                    <img src={logo} alt="" className="w-10 rounded-md" />
                    {!home ? (
                        <div
                            className="flex items-center text-lg text-gray-500 font-bold cursor-pointer"
                            onClick={() => history.goBack()}
                        >
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="chevron-left"
                                className="svg-inline--fa fa-chevron-left w-2 transform translate-y-0.5 ml-5 mr-1.5"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                                ></path>
                            </svg>
                            Quay lại
                        </div>
                    ) : (
                        <p className="ml-5 mt-4 text-xl font-bold">
                            AP-Manager Group 3
                        </p>
                    )}
                </div>

                {/* <DebounceSelect
                    name="search-user"
                    fetchOptions={fetchUserList}
                    style={{ width: "100%" }}
                /> */}

                <div className="flex items-center">
                    <>
                        {data ? (
                            <>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-600 mr-4 cursor-pointer"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>

                                <Popover
                                    placement="bottomRight"
                                    title={
                                        <div className="flex items-center">
                                            <Avatar
                                                size="large"
                                                src={`https://ap-sever.herokuapp.com/avatars/${data?.avatar}`}
                                            >
                                                {data?.avatar
                                                    ? ""
                                                    : data?.email
                                                          ?.charAt(0)
                                                          .toUpperCase()}
                                            </Avatar>
                                            <p className="ml-3 pt-4 text-xl font-bold">
                                                {data?.fullName}
                                            </p>
                                        </div>
                                    }
                                    content={
                                        <div>
                                            <p
                                                className="text-gray-600 font-medium border-gray-300 cursor-pointer hover:text-black"
                                                onClick={handleLogout}
                                            >
                                                Đăng xuất
                                            </p>
                                        </div>
                                    }
                                    trigger="click"
                                >
                                    <Avatar
                                        className="cursor-pointer"
                                        size="large"
                                        src={`https://ap-sever.herokuapp.com/avatars/${data?.avatar}`}
                                    >
                                        {data?.avatar
                                            ? ""
                                            : data?.email
                                                  ?.charAt(0)
                                                  .toUpperCase()}
                                    </Avatar>
                                </Popover>
                            </>
                        ) : (
                            <Link to={PATH.LOGIN}>
                                <button className="py-2 px-4 bg-blue-400 rounded-xl text-white">
                                    Đăng nhập
                                </button>
                            </Link>
                        )}
                    </>
                </div>
            </div>
        </div>
    );
};

export default memo(Header);

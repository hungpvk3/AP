import React, { useState, useEffect } from "react";
import axiosClient from "../../../helpers/axiosClient";
import { useStore, actions, actionsAlert } from "../../../context";
import { Redirect } from "react-router-dom";
import { PATH } from "../../../contants/PATH";
import Auth from "../../../apis/auth";
import logo from "../../../assets/img/logo.png";
import Alert from "../../../components/alert";

const LoginPage = () => {
    const { authState, dispatchAuth, dispatchAlert } = useStore();
    const [role, setRole] = useState("");
    const [isShowPass, setIsShowPass] = useState(false);
    const [isLoad, setIsLoad] = useState(false);
    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    let body;

    const handleSubmit = async () => {
        setIsLoad(true);
        try {
            const response = await Auth.login(userData);
            console.log(response);
            if (response.token) {
                window.localStorage.setItem("token", response.token);
                dispatchAuth(actions.authActions.login_success());
                dispatchAlert(
                    actionsAlert.alertActions.display({
                        variant: "success",
                        text: "Đăng nhập thành công",
                    })
                );
            } else {
                setIsLoad(false);
                dispatchAlert(
                    actionsAlert.alertActions.display({
                        variant: "error",
                        text: "Vui lòng kiểm tra lại tài khoản hoặc mật khẩu",
                    })
                );
            }
        } catch (error) {
            dispatchAuth(actions.authActions.login_fail());
        }
    };

    // Handleler
    const handleChangInput = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        async function fetchData() {
            if (localStorage.getItem("token") && authState.isAuthenticated) {
                axiosClient.defaults.headers.common["Authorization"] =
                    "Bearer " + localStorage.getItem("token");
                setIsLoad(true);
                try {
                    const response = await Auth.user();

                    if (response.userCode) {
                        const role = response.userCode.split("-")[0];
                        console.log(response);
                        dispatchAuth(
                            actions.authActions.user_success({
                                data: response,
                                role,
                            })
                        );
                        setIsLoad(false);
                        setRole(role);
                    } else {
                        setIsLoad(false);
                        <Redirect to={PATH.LOGIN} />;
                    }
                } catch (error) {
                    dispatchAuth(actions.authActions.login_fail());
                    localStorage.removeItem("token");
                    setIsLoad(false);
                }
            } else {
                setIsLoad(false);
            }
        }

        fetchData();
    }, [dispatchAuth, authState.isAuthenticated]);

    if (role === "FSST" || role === "FSMG") return <Redirect to={PATH.HOME} />;
    else if (role === "FSAD") return <Redirect to={PATH.ADMIN} />;
    else if (role === "FSTC") return <Redirect to={PATH.TRAINNER} />;
    else {
        body = (
            <div className="">
                <Alert />
                <div className="absolute top-1/2 left-1/2 w-1/3 h-2/3 transform -translate-y-1/2 -translate-x-1/2 rounded-xl form-content">
                    <div className="text-center mt-20">
                        <img
                            src={logo}
                            alt="Logo"
                            className="mx-auto w-12 py-4 rounded-lg"
                        />
                        <p className="text-2xl text-white font-bold">
                            Đăng nhập vào Fsoft
                        </p>
                    </div>
                    <div className="mt-12">
                        <div className="flex items-center border border-gray-400 w-80 mx-auto my-6 rounded-xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-600 mx-2 rounded-l-x"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>

                            <input
                                type="text"
                                placeholder="Username"
                                name="username"
                                className="w-80 py-2 px-4 focus:outline-none rounded-r-xl"
                                value={userData.username}
                                onChange={handleChangInput}
                            />
                        </div>

                        <div className="relative flex items-center border border-gray-400 w-80 mx-auto my-6 rounded-xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-600 mx-2 rounded-l-x"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </svg>
                            <input
                                placeholder="Password"
                                type={isShowPass ? "" : "password"}
                                name="password"
                                className="w-80 py-2 px-4 focus:outline-none rounded-r-xl"
                                value={userData.password}
                                onChange={handleChangInput}
                            />
                            <div
                                className="absolute right-2"
                                onClick={() => setIsShowPass(!isShowPass)}
                            >
                                {!isShowPass ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-gray-900"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-80 mx-auto">
                        <button
                            disabled={isLoad}
                            className={`${
                                isLoad ? "cursor-wait" : ""
                            } transition-all duration-500 ease bg-transparent w-80 font-bold py-2 rounded-xl text-white uppercase border border-white hover:bg-white hover:text-black font-black`}
                            onClick={handleSubmit}
                        >
                            {isLoad ? "Đang đăng nhập..." : "Đăng nhập"}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return <div className="form relative login">{body}</div>;
};

export default LoginPage;

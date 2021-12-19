import React, { useEffect, useReducer } from "react";
import { Redirect } from "react-router-dom";

import ProviderContext from "./context";
import axiosClient from "../helpers/axiosClient";
import authReducer, { initialStateAuth } from "./reducers/authReducer";
import majorsReducer, { initialStateMajors } from "./reducers/majorsReducer";
import courseReducer, { initialStateCourse } from "./reducers/courseReducer";
import classReducer, { initialStateClass } from "./reducers/classReducer";
import scoreReducer, { initialStateScore } from "./reducers/scoreReducer";
import alertReducer, { initialStateAlert } from "./reducers/alertReducer";
import { authActions } from "./actions/auth";
import { majorActions } from "./actions/majors";
import Auth from "../apis/auth";
import Major from "../apis/majors";
import { PATH } from "../contants/PATH";

const Provider = ({ children }) => {
    const [authState, dispatchAuth] = useReducer(authReducer, initialStateAuth);
    const [majorState, dispatchMajor] = useReducer(
        majorsReducer,
        initialStateMajors
    );
    const [courseState, dispatchCourse] = useReducer(
        courseReducer,
        initialStateCourse
    );
    const [classState, dispatchClass] = useReducer(
        classReducer,
        initialStateClass
    );
    const [scoreState, dispatchScore] = useReducer(
        scoreReducer,
        initialStateScore
    );
    const [alertState, dispatchAlert] = useReducer(
        alertReducer,
        initialStateAlert
    );

    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatchAuth(authActions.login_success());
        } else {
            dispatchAuth(authActions.login_fail());
            localStorage.removeItem("token");
        }
    }, []);

    useEffect(() => {
        async function fetchData() {
            if (localStorage.getItem("token")) {
                axiosClient.defaults.headers.common["Authorization"] =
                    "Bearer " + localStorage.getItem("token");
                try {
                    const response = await Auth.user();

                    if (response.userCode) {
                        const role = response.userCode.split("-")[0];
                        dispatchAuth(
                            authActions.user_success({ data: response, role })
                        );
                        dispatchAuth(authActions.login_success());
                    } else {
                        <Redirect to={PATH.LOGIN} />;
                    }
                } catch (error) {
                    dispatchAuth(authActions.login_fail());
                    localStorage.removeItem("token");
                }
            }
        }

        fetchData();
    }, [dispatchAuth]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Major.getMajors();

                if (response) {
                    console.log(response);
                    dispatchMajor(majorActions.get_mojors(response.majors));
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [dispatchMajor]);

    return (
        <ProviderContext.Provider
            value={{
                authState,
                dispatchAuth,
                majorState,
                dispatchMajor,
                courseState,
                dispatchCourse,
                classState,
                dispatchClass,
                scoreState,
                dispatchScore,
                alertState,
                dispatchAlert,
            }}
        >
            {children}
        </ProviderContext.Provider>
    );
};

export default Provider;

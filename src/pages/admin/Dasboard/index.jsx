import React, { useEffect, useState } from "react";

import { useStore, actions, actionsMajor } from "../../../context";
import Card from "./components/Card";
import CardTrending from "./components/CardTrending";
import Auth from "../../../apis/auth";
import Major from "../../../apis/majors";

const AdminPage = () => {
    const {
        authState,
        dispatchAuth,
        dispatchMajor,
        majorState: { isLoading },
    } = useStore();
    const [majors, setMajors] = useState([]);
    const [isLoad, setIsLoad] = useState(true);
    console.log(majors);
    useEffect(() => {
        const fetchData = async () => {
            if (authState.isAuthenticated) {
                try {
                    const response = await Auth.users();
                    console.log(response);
                    if (response) {
                        dispatchAuth(actions.authActions.get_users(response));
                        setIsLoad(false);
                    }
                } catch (error) {
                    console.log("Internal server error");
                }
            }
        };

        fetchData();
    }, [dispatchAuth, authState.isAuthenticated]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Major.getMajors();

                if (response) {
                    dispatchMajor(
                        actionsMajor.majorActions.get_mojors(response.majors)
                    );
                    setMajors(response.majors);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [dispatchMajor]);

    const myData = Object.keys(authState.users).map((key) => {
        return authState.users[key];
    });
    console.log(myData);
    return (
        <div className="page bg-white">
            <div className="mx-10">
                <div className="text-gradient w-max">
                    <p className="text-3xl text-white font-semibold pt-1.5 pl-14">
                        Dasboard
                    </p>
                </div>

                {isLoad && isLoading ? (
                    <div className="loader">
                        <div className="spinner"></div>
                    </div>
                ) : (
                    <>
                        <div className="grid gap-10 grid-cols-3 mt-20">
                            <Card
                                name={"Số lượng thành viên"}
                                total={authState.users._total}
                                icon={
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                }
                            />
                            <Card
                                name={"Khoá học hiện có"}
                                total={majors?.length}
                                icon={
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                    />
                                }
                            />
                        </div>

                        <div className="mt-20">
                            <p className="text-xl font-bold my-4 text-gray-700">
                                Trending Course
                            </p>

                            <div className="grid gap-10 grid-cols-3">
                                {majors.length > 0 &&
                                    majors.map((major, i) => (
                                        <div key={major._id}>
                                            <CardTrending
                                                name={major.name}
                                                _total={myData[i + 1]}
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default AdminPage;

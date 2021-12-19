import React, { useState, useEffect } from "react";
import ClassItem from "./components/ClassItem";
import Class from "../../../apis/class";

const ScorePage = () => {
    const [classData, setClassData] = useState({
        isLoading: true,
        classes: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            setClassData((pre) => ({ ...pre, isLoading: true }));
            try {
                const response = await Class.getClasses();
                console.log(response);
                setClassData({
                    isLoading: false,
                    classes: response.classes,
                });
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="page bg-white">
            <div className="mx-10">
                <div className="text-gradient w-max">
                    <p className="text-3xl text-white font-semibold pt-1.5 pl-14">
                        Score
                    </p>
                </div>

                <div className="mt-14">
                    <div className="t-head text-lg text-white font-semibold col-span-3 shadow-lg">
                        <ul className="flex items-center grid grid-cols-7 gap-4 p-3 rounded-t-xl bg-gray-500">
                            <li className="col-span-5">Name</li>
                            <li className="">Thêm sinh viên</li>
                            <li className="flex items-center justify-between">
                                <span>Cập nhật</span>
                                <span>Xoá</span>
                            </li>
                        </ul>
                    </div>

                    {classData.isLoading ? (
                        <div className="loader">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        classData.classes.map((cls) => (
                            <div key={cls._id}>
                                <ClassItem name={cls.name} />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default ScorePage;

import React, { useEffect, useState } from "react";

import Class from "../../../apis/class";
import ClassItem from "./components/ClassItem";

const ClassTrainnerPage = () => {
    const [classData, setClassData] = useState({
        isLoading: true,
        classes: [],
    });
    console.log(classData);
    useEffect(() => {
        setClassData((pre) => ({ ...pre, isLoading: true }));
        const fetchData = async () => {
            const response = await Class.getClassUser();

            if (response.success) {
                setClassData({ isLoading: false, classes: response.classes });
            }
        };

        fetchData();
    }, []);

    return (
        <div className="page bg-white">
            <div className="mx-10">
                <div className="text-gradient w-max">
                    <p className="text-3xl text-white font-semibold pt-1.5 pl-14">
                        Manager Class
                    </p>
                </div>

                <div className="mt-14">
                    <ul className="flex items-center py-2 bg-gray-500 rounded-lg px-6 text-white font-semibold">
                        <li className="mr-16">Mã lớp học</li>
                        <li className="mx-96">Tên lớp</li>
                        <li className="ml-48">Action</li>
                    </ul>
                    {classData.isLoading ? (
                        <div className="loader">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        classData.classes.map((cls) => (
                            <div key={cls._id}>
                                <ClassItem
                                    path={cls._id}
                                    classCode={cls.classCode}
                                    name={cls.classCode}
                                    nameCourse={cls.name}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClassTrainnerPage;

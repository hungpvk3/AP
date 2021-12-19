import React, { useState, useEffect } from "react";
import ScheduleItem from "./components/ScheduleItem";

import Class from "../../../apis/class";
import Schedule from "../../../apis/schedule";

const SchedulePage = () => {
    const [classData, setClassData] = useState({
        isLoading: true,
        classes: [],
        selectClass: "",
    });

    const [scheduleData, setScheduleData] = useState({
        isLoading: true,
        schedule: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Class.getClassUser();
                console.log(response);
                if (response.success) {
                    setClassData({
                        isLoading: false,
                        classes: response.classes,
                    });
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setScheduleData((pre) => ({ ...pre, isLoading: true }));
                const response = await Schedule.getSchedeulClass(
                    classData.selectClass
                );

                if (response) {
                    setScheduleData({
                        isLoading: false,
                        schedule: response.data,
                    });
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [classData.selectClass]);

    return (
        <div className="page bg-white">
            <div className="mx-10">
                <div className="flex justify-between">
                    <div className="text-gradient w-max">
                        <p className="text-2xl font-bold text-white pt-2 pl-14">
                            Lịch học
                        </p>
                    </div>

                    <div className="mb-6 flex items-center mt-10">
                        <select
                            name=""
                            id=""
                            className="focus:outline-none mx-6 py-2 px-4 rounded-xl bg-tranparent capitalize"
                            onChange={(e) =>
                                setClassData((pre) => ({
                                    ...pre,
                                    selectClass: e.target.value,
                                }))
                            }
                        >
                            <option
                                defaultValue={""}
                                selected="selected"
                                hidden="hidden"
                            >
                                Lọc theo lớp
                            </option>
                            {classData.classes.map((cl) => (
                                <option value={cl.classCode} key={cl._id}>
                                    lớp {cl.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="relative" style={{ height: "500px" }}>
                    {scheduleData.isLoading ? (
                        <div className="loader">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 gap-6 mt-4">
                            <div className="t-head text-lg text-white font-bold col-span-3 shadow-lg">
                                <ul className="flex items-center grid grid-cols-5 gap-4 p-3 rounded-t-xl bg-gray-500">
                                    <li className="">Ngày học</li>
                                    <li className=""> Giảng đường</li>
                                    <li className="">Môn học</li>
                                    <li className="">Lớp</li>
                                    <li className="">Chi tiết môn học</li>
                                </ul>
                            </div>

                            <div className="t-body text-lg text-gray-500 col-span-3">
                                {scheduleData.schedule?.map((scdl) => (
                                    <div key={scdl._id}>
                                        <ScheduleItem
                                            date={scdl.date}
                                            location={scdl.location}
                                            course={scdl.courseId.name}
                                            room={scdl.rooms}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SchedulePage;

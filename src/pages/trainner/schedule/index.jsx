import React, { useState, useEffect } from "react";
import ScheduleItem from "../../site/schedule/components/ScheduleItem";
import { useParams } from "react-router-dom";

import Schedule from "../../../apis/schedule";

const SchedulePage = () => {
    const { idClass } = useParams();

    const [scheduleData, setScheduleData] = useState({
        isLoading: true,
        schedule: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setScheduleData((pre) => ({ ...pre, isLoading: true }));
                const response = await Schedule.getSchedeulClass(idClass);

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
    }, [idClass]);

    return (
        <div className="page bg-white">
            <div className="mx-10">
                <div className="flex justify-between">
                    <div className="text-gradient w-max">
                        <p className="text-2xl font-bold text-white pt-2 pl-14">
                            Lịch học
                        </p>
                    </div>
                </div>
                <div className="relative mt-14" style={{ height: "500px" }}>
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

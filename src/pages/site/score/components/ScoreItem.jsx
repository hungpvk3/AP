import React from "react";

const ScoreItem = ({ score, course, comment, dotTime }) => {
    return (
        <div className="">
            <div>
                <p className="mb-3 py-3 pr-5 border-b border-gray-200">
                    <span className="mr-5 text-xl font-bold text-black">
                        Môn học:
                    </span>
                    <span className="font-semibold text-lg uppercase">
                        {course}
                    </span>
                </p>

                <div categories="grid grid-cols-3 gap-6 border-b border-gray-200">
                    <div className="col-span-3 bg-blue-500 rounded-t-xl">
                        <ul className="grid grid-cols-3 text-lg text-white">
                            <li className="pl-5 py-2 border border-white">
                                Tên đàu điểm
                            </li>
                            <li className="pl-5 py-2 border border-white">
                                Trọng số
                            </li>
                            <li className="pl-5 py-2 border border-white">
                                Điểm
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-3 bg-gray-100">
                        <ul className="grid grid-cols-3">
                            <li className="pl-5 py-2 border border-white">
                                {dotTime}
                            </li>
                            <li className="pl-5 py-2 border border-white"></li>
                            <li className="pl-5 py-2 border border-white">
                                {score}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-5 px-5">
                    <p className="text-lg font-bold">Ghi chú: </p>
                    {comment ? comment : <p>Tạm thời chưa có ghi chú gì...</p>}
                </div>
            </div>
        </div>
    );
};

export default ScoreItem;

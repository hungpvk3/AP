import React from "react";
import Divider from "@material-ui/core/Divider";

const ScoreItem = ({ stt, course, namePoint, point, not }) => {
    return (
        <div>
            <div>
                <p className="py-2 px-3 bg-blue-500 rounded-t-xl text-white font-semibold">
                    {stt}. Môn học: {course}
                </p>

                <div className="grid grid-cols-2 gap-10 mt-2">
                    <p>Tên đầu điểm: {namePoint}</p>
                    <p>Điểm: {point}</p>
                    <p>Ghi chú: {not}</p>
                </div>
            </div>
            <Divider />
        </div>
    );
};

export default ScoreItem;

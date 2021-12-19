import React from "react";

const ScheduleItem = ({ date, location, course, room }) => {
    return (
        <div className="p-2 mb-3 border border-t-white border-l-white rounded-lg shadow-sm text-sm hover:bg-gray-100">
            <ul className="grid grid-cols-5 gap-4">
                <li>{date}</li>
                <li>{location}</li>
                <li>{course}</li>
                <li>{room}</li>
                <li>Xem chi tiết</li>
            </ul>
        </div>
    );
};

export default ScheduleItem;

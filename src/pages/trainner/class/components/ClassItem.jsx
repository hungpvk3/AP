import React from "react";
import { Link } from "react-router-dom";
import { Popover, Button } from "antd";

import { PATH } from "../../../../contants/PATH";

const ClassItem = ({ path, name, nameCourse, classCode }) => {
    return (
        <div className="flex items-center px-5 border border-gray-400 bg-gray-100 rounded-xl">
            <p className=" pt-3 ">{name}</p>
            <p className=" pt-3 mx-96 ">{nameCourse}</p>
            <Popover
                className="ml-32"
                placement="bottomRight"
                content={
                    <div className="flex flex-col">
                        <Link to={`${PATH.SCHEDULE_TRAINNER}/${classCode}`}>
                            <Button type="primary" className="w-full mb-3">
                                Lịch học
                            </Button>
                        </Link>

                        <Link to={`${PATH.CLASS_TRAINNER}/${path}`}>
                            <Button type="primary" className="w-full">
                                Xem chi tiết
                            </Button>
                        </Link>
                    </div>
                }
                trigger="click"
            >
                <Button>Action</Button>
            </Popover>
        </div>
    );
};

export default ClassItem;

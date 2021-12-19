import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { List, ListItem, Divider } from "@material-ui/core";

import Class from "../../../../apis/class";
import Auth from "../../../../apis/auth";
import TooltipDelete from "../../../../components/tooltip/Delete";
import UserDetail from "./UserDetail";

function DetailCourse() {
    const { id } = useParams();
    const [classData, setClassData] = useState({
        isLoading: true,
        nameClass: "",
        teacherData: {},
        students: [],
    });
    const [userDetail, setUserDetail] = useState({
        isOpen: false,
        selectUser: "",
    });
    const [data, setData] = useState({
        isLoading: true,
        userData: {},
    });
    const [isRefesh, setIsRefesh] = useState(true);

    const handleRefesh = () => {
        setIsRefesh(!isRefesh);
    };

    const handleOpenUserDetail = (userId) => {
        setUserDetail({
            isOpen: true,
            selectUser: userId,
        });
    };
    const handleClose = () => {
        setUserDetail({
            isOpen: false,
            selectUser: "",
        });
    };

    const handleRemoveStudent = async (idStudent) => {
        try {
            const response = await Class.removeStudent(id, {
                studentId: idStudent,
            });
            if (response) {
                handleRefesh();
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setClassData((pre) => ({ ...pre, isLoading: true }));
            try {
                const response = await Class.getUsersClass(id);

                if (response) {
                    setClassData({
                        isLoading: false,
                        nameClass: response.classInfomation.name,
                        teacherData: response.classInfomation.teacherId,
                        students: response.classInfomation.studentId,
                    });
                }
            } catch (error) {
                console.log(error);
            }
        };

        if (id) {
            fetchData();
        }
    }, [id, isRefesh]);

    useEffect(() => {
        const fetchData = async () => {
            setData((pre) => ({ ...pre, isLoading: true }));
            try {
                const response = await Auth.userDetail(userDetail.selectUser);

                if (response.success) {
                    setData({ isLoading: false, userData: response.user });
                }
            } catch (error) {
                console.log(error);
            }
        };

        if (userDetail.selectUser) {
            fetchData();
        }
    }, [userDetail.selectUser]);

    return (
        <div className="page bg-white">
            <div className="mx-10">
                <div className="flex justify-between">
                    <div className="text-gradient">
                        <p className="text-3xl text-white font-semibold pt-1.5 pl-14">
                            Class Detail
                        </p>
                    </div>
                </div>

                {classData.isLoading ? (
                    <div className="loader">
                        <div className="spinner"></div>
                    </div>
                ) : (
                    <div className="mt-14" style={{ overflow: "hidden" }}>
                        <List>
                            <ListItem button className="font-semibold">
                                Tên Lớp học: {classData.nameClass}
                            </ListItem>
                            <Divider />
                            <ListItem button className="font-semibold">
                                Giáo viên: {classData.teacherData.fullName}
                            </ListItem>
                            <Divider />
                            <ListItem button className="font-semibold">
                                Danh sách sinh viên
                            </ListItem>
                            <Divider />
                            <ListItem
                                className="overflow-auto"
                                style={{
                                    height: "460px",
                                    display: "block",
                                }}
                            >
                                {classData.students.map((student) => (
                                    <div className="w-full" key={student._id}>
                                        <div className="flex items-center py-2 px-1 cursor-pointer hover:bg-gray-100">
                                            <span
                                                className="flex-1"
                                                onClick={() =>
                                                    handleOpenUserDetail(
                                                        student._id
                                                    )
                                                }
                                            >
                                                {student.fullName}
                                            </span>

                                            <TooltipDelete
                                                title="Xoá sinh viên"
                                                placement="top-end"
                                            >
                                                <svg
                                                    onClick={() =>
                                                        handleRemoveStudent(
                                                            student._id
                                                        )
                                                    }
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-red-600"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                            </TooltipDelete>
                                        </div>
                                        <Divider />
                                    </div>
                                ))}
                            </ListItem>
                        </List>
                    </div>
                )}
            </div>

            <UserDetail
                isOpen={userDetail.isOpen}
                data={data}
                handleClose={handleClose}
            />
        </div>
    );
}

export default memo(DetailCourse);

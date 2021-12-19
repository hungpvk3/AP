import React, { useEffect, useState } from "react";
import { List, ListItem, Divider } from "@material-ui/core";
import { useParams } from "react-router-dom";

import Auth from "../../../apis/auth";
import Class from "../../../apis/class";
import UserDetail from "../../admin/Class/components/UserDetail";

const ClassDetail = () => {
    const { idClass } = useParams();
    const [dataClass, setDataClass] = useState({
        isLoading: true,
        classData: {},
        students: [],
    });
    const [data, setData] = useState({
        isLoading: true,
        userData: {},
    });
    const [userDetail, setUserDetail] = useState({
        isOpen: false,
        selectUser: "",
    });

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Class.getUsersClass(idClass);

                if (response.success) {
                    setDataClass({
                        isLoading: false,
                        classData: response.classInfomation,
                        students: response.classInfomation.studentId,
                    });
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [idClass]);

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
                <div className="text-gradient w-max">
                    <p className="text-3xl text-white font-semibold pt-1.5 pl-14">
                        Detail
                    </p>
                </div>

                {dataClass.isLoading ? (
                    <div className="loader">
                        <div className="spinner"></div>
                    </div>
                ) : (
                    <div className="mt-14" style={{ overflow: "hidden" }}>
                        <List>
                            <ListItem button className="font-semibold">
                                Tên Lớp học: {dataClass.classData.name}
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
                                {dataClass.students.map((student) => (
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
};

export default ClassDetail;

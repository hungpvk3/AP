import React, { useState, useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { DatePicker, Input, Button } from "antd";
import moment from "moment";

import { useStore, actions, actionsAlert } from "../../../context";
import Auth from "../../../apis/auth";

const ProfilePage = () => {
    const {
        authState: { data },
        dispatchAuth,
        dispatchAlert,
    } = useStore();
    const [preview, setPreview] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [userData, setUserData] = useState(data);
    const [isLoading, setIsLoading] = useState(false);

    const handleChangeDate = (date, dateString) => {
        setUserData({ ...userData, DoB: dateString });
    };
    const handleChangeInput = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };
    const handleCloseEdit = () => {
        setIsEdit(false);
        setUserData(data);
        preview && URL.revokeObjectURL(preview);
        setPreview();
    };
    const handleUpdateUser = async () => {
        const formData = new FormData();
        formData.append("DoB", userData.DoB);
        formData.append("address", userData.address);
        formData.append("email", userData.email);
        formData.append("fullName", userData.fullName);
        formData.append("gender", userData.gender);
        formData.append("nationality", userData.nationality);
        formData.append("phone", userData.phone);
        formData.append("userCode", userData.userCode);
        formData.append("username", userData.username);
        formData.append("password", userData.password);
        formData.append("avatar", userData.avatar);

        setIsLoading(true);
        try {
            const response = await Auth.userUpdateProfile(formData);

            if (response.success) {
                dispatchAuth(
                    actions.authActions.user_update_profile(response.user)
                );
                dispatchAlert(
                    actionsAlert.alertActions.display({
                        variant: "success",
                        text: "Cập nhật thành công",
                    })
                );
                setIsLoading(false);
                setIsEdit(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        return () => {
            console.log("remove memory");
            preview && URL.revokeObjectURL(preview);
        };
    }, [preview]);

    return (
        <div className="page bg-white">
            <div className="mx-10">
                <div className="text-gradient w-max">
                    <p className="text-2xl font-bold text-white pt-2 pl-14">
                        Thông tin cá nhân
                    </p>
                </div>

                <div>
                    <div className="mt-20 h-2/3 rounded-2xl grid lg:grid-cols-6">
                        <div className="w-64 xl:h-80 lg:h-64 text-center relative xl:col-span-1 lg:col-span-2">
                            {preview ? (
                                <img
                                    src={preview}
                                    alt="Avatar"
                                    className="xl:h-80 lg:h-64 object-cover rounded-t-2xl"
                                />
                            ) : (
                                <img
                                    src={`${
                                        userData.avatar
                                            ? `https://ap-sever.herokuapp.com/avatars/${userData.avatar}`
                                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                                    }`}
                                    alt="Avatar"
                                    className="xl:h-80 lg:h-64 object-cover rounded-t-2xl"
                                />
                            )}
                            {isEdit ? (
                                <>
                                    <label
                                        className="absolute bottom-0 left-0 w-full py-2 text-white button cursor-pointer"
                                        htmlFor="image"
                                    >
                                        Chỉnh sửa
                                    </label>
                                    <input
                                        type="file"
                                        className="hidden"
                                        id="image"
                                        onChange={(e) => {
                                            setUserData((pre) => ({
                                                ...pre,
                                                avatar: e.target.files[0],
                                            }));
                                            setPreview(
                                                URL.createObjectURL(
                                                    e.target.files[0]
                                                )
                                            );
                                        }}
                                    />
                                </>
                            ) : (
                                ""
                            )}

                            {isEdit ? (
                                <ListItem button>
                                    <span className="mr-2">Name:</span>
                                    <Input
                                        placeholder="name"
                                        name="fullName"
                                        value={userData.fullName}
                                        onChange={handleChangeInput}
                                    />
                                </ListItem>
                            ) : (
                                <ListItem button>
                                    <span className="py-1.5">
                                        Name: {data.fullName}
                                    </span>
                                </ListItem>
                            )}
                            <Divider />

                            {isEdit ? (
                                <div className="flex gap-5">
                                    <Button
                                        type="primary"
                                        className="py-1.5 w-full rounded-lg mt-3"
                                        onClick={handleUpdateUser}
                                        loading={isLoading ? true : false}
                                        disabled={isLoading ? true : false}
                                    >
                                        {isLoading ? "Saving..." : "Save"}
                                    </Button>

                                    <Button
                                        type="primary"
                                        danger
                                        className="py-1.5 w-full text-white bg-red-400 border border-gray-300 rounded-lg hover:bg-red-500 mt-3"
                                        onClick={handleCloseEdit}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            ) : (
                                <button
                                    className="py-1.5 w-full bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 mt-3"
                                    onClick={() => setIsEdit(true)}
                                >
                                    Edit Profile
                                </button>
                            )}
                        </div>

                        {isEdit ? (
                            <div className="w-full pl-20 lg:col-span-4 xl:flex xl:col-span-5 xl:gap-10">
                                <div className="w-full">
                                    <p className="font-bold text-xl text-center w-full py-2 bg-blue-500 text-white rounded-xl">
                                        Thông tin sinh viên
                                    </p>
                                    <List>
                                        <Divider />
                                        <ListItem button>
                                            <span className="w-16 mr-3">
                                                Email:
                                            </span>
                                            <Input
                                                placeholder="email..."
                                                name="email"
                                                value={userData.email}
                                                onChange={handleChangeInput}
                                            />
                                        </ListItem>
                                        <Divider />
                                    </List>
                                </div>
                                <div className="w-full xl:mt-0 lg:mt-6">
                                    <p className="font-bold text-xl text-center w-full py-2 bg-blue-500 text-white rounded-xl">
                                        Thông tin cá nhân
                                    </p>
                                    <List>
                                        <Divider />
                                        <ListItem button>
                                            <span className="w-16 mr-3">
                                                Date
                                            </span>
                                            <DatePicker
                                                className="w-full"
                                                defaultValue={moment(
                                                    userData.DoB,
                                                    "DD/MM/YYYY"
                                                )}
                                                onChange={handleChangeDate}
                                            />
                                        </ListItem>
                                        <Divider />
                                        <ListItem button>
                                            <span className="w-16 mr-3">
                                                Địa chỉ:
                                            </span>
                                            <Input
                                                placeholder="Address"
                                                name="address"
                                                value={userData.address}
                                                onChange={handleChangeInput}
                                            />
                                        </ListItem>
                                        <Divider />
                                        <ListItem button>
                                            <span className="w-16 mr-3">
                                                SDT:
                                            </span>
                                            <Input
                                                placeholder="Phone number"
                                                name="phone"
                                                value={userData.phone}
                                                onChange={handleChangeInput}
                                            />
                                        </ListItem>
                                        <Divider />
                                    </List>
                                </div>
                            </div>
                        ) : (
                            <div className="w-full pl-20 lg:col-span-4 xl:flex xl:col-span-5 xl:gap-10">
                                <div className="w-full">
                                    <p className="font-bold text-xl text-center w-full py-2 bg-blue-500 text-white rounded-xl">
                                        Thông tin sinh viên
                                    </p>
                                    <List>
                                        <ListItem button>
                                            Trạng thái: Đang học
                                        </ListItem>
                                        <Divider />
                                        <ListItem button>
                                            Khoá học: 2019
                                        </ListItem>
                                        <Divider />

                                        <ListItem button>
                                            Email: {data.email}
                                        </ListItem>
                                        <Divider />
                                        <ListItem button>
                                            Mã sinh viên: {data.userCode}
                                        </ListItem>
                                        <Divider />
                                    </List>
                                </div>
                                <div className="w-full">
                                    <p className="font-bold text-xl text-center w-full py-2 bg-blue-500 text-white rounded-xl">
                                        Thông tin cá nhân
                                    </p>
                                    <List>
                                        <ListItem button>
                                            Ngày sinh: {data.DoB.split("T")[0]}
                                        </ListItem>
                                        <Divider />
                                        <ListItem button>
                                            Địa chỉ: {data.address}
                                        </ListItem>
                                        <Divider />
                                        <ListItem button>
                                            SDT: {data.phone}
                                        </ListItem>
                                        <Divider />
                                    </List>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;

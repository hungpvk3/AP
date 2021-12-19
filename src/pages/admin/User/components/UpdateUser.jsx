import React, { useState, useEffect } from "react";
import { DatePicker, Modal } from "antd";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import Auth from "../../../../apis/auth";
import Input from "../../../../components/input";
import { useStore, actionsAlert } from "../../../../context";
import moment from "moment";
import { useDate } from "../../../../helpers/hooks";

const UpdateUser = ({ isOpen, roles, handleClose, majors }) => {
    const {
        authState: { userFind },
        dispatchAlert,
    } = useStore();
    const date = useDate(userFind?.DoB);
    const [userData, setUserData] = useState(userFind);
    console.log(userFind);
    useEffect(() => setUserData(userFind), [userFind]);

    const handleChangeInput = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleChangeDate = (date, dateString) => {
        setUserData({ ...userData, DoB: dateString });
    };

    const handleUpdate = async () => {
        handleClose();
        try {
            const response = await Auth.updateUser(userData);
            if (response) {
                console.log(response);
                dispatchAlert(
                    actionsAlert.alertActions.display({
                        variant: "success",
                        text: "Cập nhật thông tin thành công",
                    })
                );
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal
            title="Basic Modal"
            visible={isOpen}
            onOk={handleUpdate}
            onCancel={handleClose}
            width="1200px"
        >
            <div className="flex justify-between">
                <div style={{ width: "600px" }}>
                    <p className="text-2xl font-bold text-center">
                        Thông tin tài khoản
                    </p>

                    <div>
                        <Input
                            css="w-2/3"
                            placeholder="Fullname"
                            name="fullName"
                            value={userData.fullName}
                            isIcon="userIcon"
                            handleChange={handleChangeInput}
                        />
                        <Input
                            css="w-2/3"
                            placeholder="Email"
                            name="email"
                            value={userData.email}
                            isIcon="emailIcon"
                            handleChange={handleChangeInput}
                        />
                        <Input
                            css="w-2/3"
                            placeholder="Mã sinh viên"
                            name="userCode"
                            value={userData.userCode}
                            isIcon="userIcon"
                            handleChange={handleChangeInput}
                        />
                        <div className="flex items-center justify-between mx-auto w-2/3">
                            <select
                                className="py-2 px-5 border border-gray-400 flex rounded-xl text-gray-500 focus:outline-none"
                                name="rolesId"
                                onChange={handleChangeInput}
                            >
                                <option
                                    defaultValue={userData?.rolesId?._id}
                                    selected="selected"
                                    hidden="hidden"
                                >
                                    {userData?.rolesId?.name}
                                </option>
                                {roles.map((role) => (
                                    <option value={role._id} key={role._id}>
                                        {role.name}
                                    </option>
                                ))}
                            </select>

                            <DatePicker
                                defaultValue={moment(date, "DD/MM/YYYY")}
                                onChange={handleChangeDate}
                            />
                        </div>
                    </div>
                </div>

                <div style={{ width: "600px" }}>
                    <p className="text-2xl font-bold text-center">
                        Thông tin cá nhận
                    </p>

                    <div>
                        <div>
                            <Input
                                css="w-2/3"
                                name="phone"
                                placeholder="Phone Number"
                                isIcon="phoneIcon"
                                value={userData.phone}
                                handleChange={handleChangeInput}
                            />
                            <Input
                                css="w-2/3"
                                name="address"
                                placeholder="Address"
                                isIcon="addressIcon"
                                value={userData.address}
                                handleChange={handleChangeInput}
                            />
                            <Input
                                css="w-2/3"
                                name="nationality"
                                placeholder="Nationality"
                                isIcon="addressIcon"
                                value={userData.nationality}
                                handleChange={handleChangeInput}
                            />
                            <div className="flex justify-center">
                                <FormControl component="fieldset">
                                    <div className="flex items-center">
                                        <p className="mr-10 font-semibold text-md mt-3">
                                            Gender
                                        </p>
                                        <RadioGroup
                                            aria-label="gender"
                                            name="gender1"
                                            value={userData?.gender}
                                        >
                                            <div className="flex">
                                                <FormControlLabel
                                                    value="Nữ"
                                                    name="gender"
                                                    control={<Radio />}
                                                    label="Female"
                                                    onChange={handleChangeInput}
                                                />
                                                <FormControlLabel
                                                    value="Nam"
                                                    name="gender"
                                                    control={<Radio />}
                                                    label="Male"
                                                    onChange={handleChangeInput}
                                                />
                                            </div>
                                        </RadioGroup>
                                    </div>
                                </FormControl>
                            </div>
                            <select
                                className="w-2/3 py-2 px-5 border border-gray-400 flex mx-auto rounded-xl text-gray-500 focus:outline-none"
                                name="majorsId"
                                onChange={handleChangeInput}
                            >
                                <option
                                    defaultValue={userData?.majorsId?._id}
                                    selected="selected"
                                    hidden="hidden"
                                >
                                    {userData?.majorsId?.name}
                                </option>
                                {majors.map((major) => (
                                    <option value={major._id} key={major._id}>
                                        {major.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default UpdateUser;

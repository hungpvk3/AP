import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { DatePicker } from "antd";

import Auth from "../../../../apis/auth";
import Input from "../../../../components/input";
import { useStore, actions, actionsAlert } from "../../../../context";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "relative",
        background: "white",
        color: "black",
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    root: {
        width: "100%",
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

const handleChangeDate = (date, dateString) => {
    console.log(date, dateString);
};

function getSteps() {
    return ["Plesse enter infomation account", "Create an ad group"];
}

function getStepContent(step, userData, roles, majors, handleChangeInput) {
    switch (step) {
        case 0:
            return (
                <div>
                    <p className="text-2xl font-bold text-center">
                        Thông tin tài khoản
                    </p>

                    <div>
                        <Input
                            placeholder="Username"
                            name="username"
                            value={userData.username}
                            isIcon="userIcon"
                            handleChange={handleChangeInput}
                        />
                        <Input
                            placeholder="Password"
                            name="password"
                            value={userData.password}
                            isIcon="passwordIcon"
                            handleChange={handleChangeInput}
                            type="password"
                        />
                        <Input
                            placeholder="Fullname"
                            name="fullName"
                            value={userData.fullName}
                            isIcon="userIcon"
                            handleChange={handleChangeInput}
                        />
                        <Input
                            placeholder="Email"
                            name="email"
                            value={userData.email}
                            isIcon="emailIcon"
                            handleChange={handleChangeInput}
                        />
                        <Input
                            placeholder="Mã sinh viên"
                            name="userCode"
                            value={userData.userCode}
                            isIcon="userIcon"
                            handleChange={handleChangeInput}
                        />
                        <div className="flex items-center justify-between mx-auto w-1/2">
                            <select
                                className="py-2 px-5 border border-gray-400 flex rounded-xl text-gray-500 focus:outline-none"
                                name="rolesId"
                                onChange={handleChangeInput}
                            >
                                <option
                                    defaultValue=""
                                    selected="selected"
                                    hidden="hidden"
                                >
                                    Vui lòng chọn role
                                </option>
                                {roles.map((role) => (
                                    <option value={role._id} key={role._id}>
                                        {role.name}
                                    </option>
                                ))}
                            </select>

                            <DatePicker onChange={handleChangeDate} />
                        </div>
                    </div>
                </div>
            );
        case 1:
            return (
                <div>
                    <p className="text-2xl font-bold text-center">
                        Thông tin cá nhận
                    </p>

                    <div>
                        <div>
                            <Input
                                name="phone"
                                placeholder="Phone Number"
                                isIcon="phoneIcon"
                                value={userData.phone}
                                handleChange={handleChangeInput}
                            />
                            <Input
                                name="address"
                                placeholder="Address"
                                isIcon="addressIcon"
                                value={userData.address}
                                handleChange={handleChangeInput}
                            />
                            <select
                                className="w-1/2 py-2 px-5 border border-gray-400 flex mx-auto rounded-xl text-gray-500 focus:outline-none"
                                name="majorsId"
                                onChange={handleChangeInput}
                            >
                                <option
                                    defaultValue=""
                                    selected="selected"
                                    hidden="hidden"
                                >
                                    Đăng kí chuyên nghành
                                </option>
                                {majors.map((major) => (
                                    <option value={major._id} key={major._id}>
                                        {major.name}
                                    </option>
                                ))}
                            </select>
                            <div className="flex justify-center">
                                <FormControl component="fieldset">
                                    <div className="flex items-center">
                                        <p className="mr-10 font-bold">
                                            Gender
                                        </p>
                                        <RadioGroup
                                            aria-label="gender"
                                            name="gender1"
                                        >
                                            <div className="flex">
                                                <FormControlLabel
                                                    value="female"
                                                    name="gender"
                                                    control={<Radio />}
                                                    label="Female"
                                                    onChange={handleChangeInput}
                                                />
                                                <FormControlLabel
                                                    value="male"
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
                        </div>
                    </div>
                </div>
            );
        default:
            return "Unknown step";
    }
}

function VerticalLinearStepper({
    userData,
    roles,
    majors,
    handleChangeInput,
    handleSubmit,
}) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography>
                                {getStepContent(
                                    index,
                                    userData,
                                    roles,
                                    majors,
                                    handleChangeInput
                                )}
                            </Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    {activeStep === 0 ? (
                                        <Button
                                            disabled={
                                                userData.password === "" ||
                                                userData.fullName === "" ||
                                                userData.email === "" ||
                                                userData.userCode === ""
                                            }
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1
                                                ? "Finish"
                                                : "Next"}
                                        </Button>
                                    ) : (
                                        <Button
                                            disabled={
                                                userData.gender === "" ||
                                                userData.address === ""
                                            }
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1
                                                ? "Finish"
                                                : "Next"}
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <div className="text-center">
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        variant="contained"
                        className={classes.button}
                    >
                        Back
                    </Button>
                    <Button
                        disabled={
                            userData.phone === "" ||
                            userData.address === "" ||
                            userData.gender === ""
                        }
                        onClick={handleSubmit}
                        className={classes.button}
                        variant="contained"
                        color="primary"
                    >
                        Tạo mới
                    </Button>
                </div>
            )}
        </div>
    );
}

export default function FullScreenDialog({
    isOpen,
    handleClose,
    roles,
    majors,
}) {
    const { dispatchAuth, dispatchAlert } = useStore();
    const [userData, setUserData] = useState({
        username: "",
        password: "",
        fullName: "",
        email: "",
        userCode: "",
        rolesId: "",
        majorsId: "",
        phone: "",
        address: "",
        gender: "",
    });

    const handleChangeInput = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        handleClose();
        try {
            const response = await Auth.postUsers(userData);

            if (response.users) {
                dispatchAuth(actions.authActions.post_user(response.users));
            }
            dispatchAlert(
                actionsAlert.alertActions.display({
                    variant: "success",
                    text: "Tạo mới tài khoản thành công",
                })
            );
        } catch (error) {
            console.log(error);
        }
    };

    const classes = useStyles();
    return (
        <div>
            <Dialog fullScreen open={isOpen} onClose={handleClose}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Tạo mới sinh viên
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    <VerticalLinearStepper
                        userData={userData}
                        roles={roles}
                        majors={majors}
                        handleChangeInput={handleChangeInput}
                        handleSubmit={handleSubmit}
                    />
                </List>
            </Dialog>
        </div>
    );
}

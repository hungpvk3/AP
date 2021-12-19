import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import { ICON } from "../../contants/Icon";

const CssTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "rgb(175 67 241)",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "rgb(175 67 241)",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "red",
            },
            "&:hover fieldset": {
                borderColor: "yellow",
            },
            "&.Mui-focused fieldset": {
                borderColor: "rgb(175 67 241)",
            },
        },
    },
})(TextField);

const Input = ({
    name,
    placeholder,
    value,
    isIcon,
    css,
    handleChange,
    ...rest
}) => {
    let icon;

    if (isIcon === "userIcon") {
        icon = ICON.userIcon;
    } else if (isIcon === "passwordIcon") {
        icon = ICON.passwordIcon;
    } else if (isIcon === "emailIcon") {
        icon = ICON.emailIcon;
    } else if (isIcon === "courseIcon") {
        icon = ICON.courseIcon;
    } else if (isIcon === "phoneIcon") {
        icon = ICON.phoneIcon;
    } else if (isIcon === "bookIcon") {
        icon = ICON.bookIcon;
    } else if (isIcon === "addressIcon") {
        icon = ICON.addressIcon;
    }

    return (
        <div
            className={`relative flex items-center w-1/2 mx-auto my-6 rounded-xl ${css}`}
        >
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <svg
                        style={{ color: "rgb(175 67 241)" }}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-600 mx-2 rounded-l-xl"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {icon}
                    </svg>
                </Grid>
                <Grid item className="flex-1">
                    <CssTextField
                        className="w-full"
                        id="input-with-icon-grid"
                        label={placeholder}
                        value={value}
                        name={name}
                        onChange={handleChange}
                        {...rest}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Input;

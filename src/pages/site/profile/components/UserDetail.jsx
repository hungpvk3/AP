import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

import { useDate } from "../../../../helpers/hooks";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "relative",
        background: "white",
        color: "black",
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
        fontWeight: "bold",
    },
}));

function UserDetail({ isOpen, data, handleClose }) {
    const classes = useStyles();

    return (
        <div>
            <Dialog fullScreen open={isOpen} onClose={handleClose}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Thông tin sinh viên
                        </Typography>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className="bg-gray-100 h-full">
                    <div className="m-10 bg-white h-2/3 p-10 rounded-2xl grid grid-cols-6">
                        <div className="w-64 h-80 text-center">
                            <img
                                src={`https://ap-sever.herokuapp.com/avatars/${data.avatar}`}
                                alt="Avatar"
                                className="h-full h-52 object-cover rounded-t-2xl"
                            />
                            <p className="text-xl font-bold my-5">
                                {data.fullName}
                            </p>
                            <p className="font-semibold">
                                Mã sinh viên: {data.userCode}
                            </p>
                        </div>
                        <div className="w-full pl-20 col-span-5 grid grid-cols-2 gap-10">
                            <div className="w-full">
                                <p className="font-bold text-xl text-center w-full py-2 bg-blue-500 text-white rounded-xl">
                                    Thông tin sinh viên
                                </p>
                                <List>
                                    <ListItem button>
                                        Trạng thái: Đang học
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>Khoá học: 2019</ListItem>
                                    <Divider />
                                    <ListItem button>
                                        Khoa: {data.majorsId.name}
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                        Email: {data.email}
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
                                        Ngày sinh: {useDate(data.DoB)}
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
                    </div>
                </div>
            </Dialog>
        </div>
    );
}

export default memo(UserDetail);

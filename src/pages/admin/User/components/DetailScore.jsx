import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
// import ListItem from "@material-ui/core/ListItem";
// import List from "@material-ui/core/List";
// import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

import ScoreItem from "./ScoreItem";

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
}));

export default function DetailCourse({ isOpen, listScore, onClose }) {
    const classes = useStyles();

    return (
        <div>
            <Dialog fullScreen open={isOpen} onClose={onClose}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Logo
                        </Typography>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={onClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div
                    className="bg-gray-100 h-full"
                    style={{ overflow: "hidden" }}
                >
                    <div
                        className="mt-10 mx-auto w-2/3 bg-white p-10 rounded-2xl"
                        style={{ height: "650px" }}
                    >
                        <div className="text-gradient w-max">
                            <p className="font-bold text-2xl pt-2 pl-14 pr-10 text-white">
                                Chi tiết điểm
                            </p>
                        </div>

                        <div
                            className="mt-16 w-full overflow-auto"
                            style={{ height: "480px" }}
                        >
                            {listScore?.isLoading ? (
                                <div className="loader">
                                    <div className="spinner"></div>
                                </div>
                            ) : listScore.scoreUsers.length > 0 ? (
                                listScore.scoreUsers.map((score, i) => (
                                    <div key={score?._id}>
                                        <ScoreItem
                                            stt={i + 1}
                                            course={score?.courseId?.name}
                                            namePoint={score?.dotTime}
                                            point={score?.point}
                                            not={score?.comment}
                                        />
                                    </div>
                                ))
                            ) : (
                                "Chưa có danh sách điểm"
                            )}
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}

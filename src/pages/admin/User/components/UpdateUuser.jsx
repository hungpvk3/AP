import React, { useState, useEffect } from "react";
import Auth from "../../../../apis/auth";
import { useStore, actions, actionsAlert } from "../../../../context";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Input from "../../../../components/input";

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

export default function FullScreenDialog({
  isOpen,
  roles,
  handleClose,
  majors,
}) {
  const {
    authState: { userFind },
    dispatchAuth,
    dispatchAlert,
  } = useStore();
  const classes = useStyles();
  const [change, setChange] = useState(false);
  const [userData, setUserData] = useState(userFind);

  useEffect(() => setUserData(userFind), [userFind]);

  const handleChangeInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    handleClose();
    try {
      const response = await Auth.updateUser(userData);
      if (response) {
        dispatchAuth(actions.authActions.update_user(response.user));
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
    <div>
      <Dialog fullScreen open={isOpen} onClose={handleClose}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Cập nhật thông tin sinh viên
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
        <div>
          <div className="mx-40 grid grid-cols-3 gap-10 mt-20">
            <div>
              <p
                className="py-3 px-5 bg-gray-100 rounded-xl w-full"
                onClick={() => setChange(false)}
              >
                Cập nhật thông tin
              </p>
              <p
                className="py-3 px-5 bg-gray-100 rounded-xl w-full my-5"
                onClick={() => setChange(true)}
              >
                Cập nhật chức năng
              </p>
            </div>
            <div className="col-span-2 bg-gray-100 w-full h-max">
              {change ? (
                <div>
                  <p className="text-2xl text-center mt-6 font-bold">
                    Cập nhật chức năng
                  </p>

                  <div className="mx-10">
                    <div className="my-6 flex items-center">
                      <p className="flex-1 font-bold">Permision</p>
                      <select
                        className="w-1/2 py-2 px-5 border border-gray-400 flex mx-auto rounded-xl text-gray-500 focus:outline-none"
                        name="rolesId"
                        //   onChange={handleChangeInput}
                      >
                        <option
                          defaultValue={userData?.rolesId._id}
                          selected="selected"
                          hidden="hidden"
                        >
                          {userData?.rolesId.name}
                        </option>
                        {roles.map((role) => (
                          <option value={role._id} key={role._id}>
                            {role.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="my-6 flex items-center">
                      <p className="flex-1 font-bold">Chuyên nghành</p>
                      <select
                        className="w-1/2 py-2 px-5 border border-gray-400 flex mx-auto rounded-xl text-gray-500 focus:outline-none"
                        name="majorsId"
                        onChange={handleChangeInput}
                      >
                        <option
                          defaultValue={userData?.majorsId._id}
                          selected="selected"
                          hidden="hidden"
                        >
                          {userData?.majorsId.name}
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
              ) : (
                <div>
                  <p className="text-2xl text-center mt-6 font-bold">
                    Cập nhật thông tin
                  </p>

                  <div>
                    <Input
                      placeholder="Fullname"
                      name="fullName"
                      value={userData?.fullName}
                      isIcon="userIcon"
                      handleChange={handleChangeInput}
                    />
                    <Input
                      placeholder="Email"
                      name="email"
                      value={userData?.email}
                      isIcon="emailIcon"
                      handleChange={handleChangeInput}
                    />
                    <Input
                      placeholder="Mã sinh viên"
                      name="userCode"
                      value={userData?.userCode}
                      isIcon="userIcon"
                      handleChange={handleChangeInput}
                    />
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
                  </div>
                </div>
              )}
              <div className="p-5 float-right">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUpdate}
                >
                  Cập nhật
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

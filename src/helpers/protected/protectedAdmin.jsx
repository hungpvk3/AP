import React, { useEffect } from "react";
import { PATH } from "../../contants/PATH";
import { Route, Redirect } from "react-router-dom";
import { useStore, actionsMajor, actions } from "../../context";
import Majors from "../../apis/majors";
import Auth from "../../apis/auth";

const PotectedRouterAdmin = ({ component: Component, ...restOfProps }) => {
  const { authState, dispatchMajor, dispatchAuth } = useStore();
  console.log("priveroute", authState);
  // const history = useHistory();
  // if (isLoading && localStorage.getItem("token")) {
  //   return (
  //     <div className="loader">
  //       <div className="spinner"></div>
  //     </div>
  //   );
  // }

  useEffect(() => {
    const fetchData = async () => {
      if (authState.isAuthenticated) {
        try {
          const response = await Auth.users();

          if (response) {
            dispatchAuth(actions.authActions.get_users(response));
          }
        } catch (error) {
          console.log("Internal server error");
        }
      }
    };

    fetchData();
  }, [dispatchAuth, authState.isAuthenticated]);

  useEffect(() => {
    const fetchData = async () => {
      if (authState.isAuthenticated) {
        const response = await Majors.getMajors();

        if (response) {
          dispatchMajor(actionsMajor.majorActions.get_mojors(response));
        }
      }
    };

    fetchData();
  }, [authState.isAuthenticated, dispatchMajor]);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        authState.isAuthenticated && authState.role === "FSAD" ? (
          <Component {...props} {...restOfProps} />
        ) : (
          <Redirect to={PATH.LOGIN} />
        )
      }
    />
  );
};

export default PotectedRouterAdmin;

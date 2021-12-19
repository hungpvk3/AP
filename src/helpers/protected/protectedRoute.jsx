import React, { useEffect } from "react";
import { PATH } from "../../contants/PATH";
import { Route, Redirect } from "react-router-dom";
import { useStore, actionsMajor } from "../../context";
import Majors from "../../apis/majors";

const PotectedRouter = ({ component: Component, ...restOfProps }) => {
  const { authState, dispatchMajor } = useStore();
  console.log("priveroute", authState);
  // const history = useHistory();

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

  if (authState.isLoading && localStorage.getItem("token")) {
    return (
      <div className="loader">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        authState.isAuthenticated ? (
          <Component {...props} {...restOfProps} />
        ) : (
          <Redirect to={PATH.LOGIN} />
        )
      }
    />
  );
};

export default PotectedRouter;

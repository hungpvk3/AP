import React from "react";
import { Redirect } from "react-router-dom";

import { PATH } from "./contants/PATH";

const Landing = () => {
  return <Redirect to={PATH.LOGIN} />;
};

export default Landing;

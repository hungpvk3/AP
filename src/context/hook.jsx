import { useContext } from "react";
import ProviderContext from "./context";

export const useStore = function () {
  const {
    authState,
    dispatchAuth,
    majorState,
    dispatchMajor,
    courseState,
    dispatchCourse,
    classState,
    dispatchClass,
    scoreState,
    dispatchScore,
    alertState,
    dispatchAlert,
  } = useContext(ProviderContext);

  return {
    authState,
    dispatchAuth,
    majorState,
    dispatchMajor,
    courseState,
    dispatchCourse,
    classState,
    dispatchClass,
    scoreState,
    dispatchScore,
    alertState,
    dispatchAlert,
  };
};

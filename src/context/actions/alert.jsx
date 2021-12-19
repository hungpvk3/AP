import { ALERT } from "../../contants/ACTION";

export const alertActions = {
  display: (payload) => {
    return {
      type: ALERT.DISPLAY,
      payload,
    };
  },
  hidden: (payload) => {
    return {
      type: ALERT.HIDDEN,
      payload,
    };
  },
};

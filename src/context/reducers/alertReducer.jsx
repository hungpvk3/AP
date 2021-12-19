import { ALERT } from "../../contants/ACTION";

export const initialStateAlert = {
  success: false,
  variant: "",
  text: "",
};

const alertReducer = (state, action) => {
  switch (action.type) {
    case ALERT.DISPLAY:
      return {
        ...state,
        success: true,
        variant: action.payload.variant,
        text: action.payload.text,
      };
    case ALERT.HIDDEN:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};

export default alertReducer;

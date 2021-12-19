import { CLASS_ACTIONS } from "../../contants/ACTION";

export const initialStateClass = {
  isLoading: true,
  classes: [],
  classesCourse: [],
};

const classReducer = (state, action) => {
  switch (action.type) {
    case CLASS_ACTIONS.GET_CLASSES:
      return {
        isLoading: false,
        classes: action.payload,
      };

    case CLASS_ACTIONS.GET_CLASS_COURSE:
      return {
        isLoading: false,
        classesCourse: action.payload,
      };
    default:
      return state;
  }
};

export default classReducer;

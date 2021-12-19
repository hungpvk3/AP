import { CLASS_ACTIONS } from "../../contants/ACTION";

export const classActions = {
  get_class: (payload) => {
    return {
      type: CLASS_ACTIONS.GET_CLASSES,
      payload,
    };
  },

  get_class_course: (payload) => {
    return {
      type: CLASS_ACTIONS.GET_CLASS_COURSE,
      payload,
    };
  },
};

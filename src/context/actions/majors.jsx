import { MAJOR_ACTIONS } from "../../contants/ACTION";

export const majorActions = {
  get_mojors: (payload) => {
    return {
      type: MAJOR_ACTIONS.GET_MAJORS,
      payload,
    };
  },
  post_major: (payload) => {
    return {
      type: MAJOR_ACTIONS.POST_MAJOR,
      payload,
    };
  },
  update_major: (payload) => {
    return {
      type: MAJOR_ACTIONS.UPDATE_MAJOR,
      payload,
    };
  },
  delete_major: (payload) => {
    return {
      type: MAJOR_ACTIONS.DELETE_MAJOR,
      payload,
    };
  },
  find_major: (payload) => {
    return {
      type: MAJOR_ACTIONS.FIND_MAJOR,
      payload,
    };
  },
};

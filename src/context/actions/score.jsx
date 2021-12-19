import { SCORE_ACTIONS } from "../../contants/ACTION";

export const scoreActions = {
  get_score_class: (payload) => {
    return {
      type: SCORE_ACTIONS.GET_SCORE_CLASS,
      payload,
    };
  },
};

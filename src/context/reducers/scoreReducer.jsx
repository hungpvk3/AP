import { SCORE_ACTIONS } from "../../contants/ACTION";

export const initialStateScore = {
  score_class: [],
};

const scoreReducer = (state, action) => {
  switch (action.type) {
    case SCORE_ACTIONS.GET_SCORE_CLASS:
      return {
        ...state,
        score_class: action.payload,
      };
    default:
      return state;
  }
};

export default scoreReducer;

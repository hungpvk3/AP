import { MAJOR_ACTIONS } from "../../contants/ACTION";

export const initialStateMajors = {
    isLoading: true,
    majors: [],
    majorFind: {},
};

const majorsReducer = (state, action) => {
    switch (action.type) {
        case MAJOR_ACTIONS.GET_MAJORS:
            return {
                ...state,
                isLoading: false,
                majors: action.payload,
            };
        case MAJOR_ACTIONS.POST_MAJOR:
            return {
                ...state,
                majors: [...state.majors, action.payload],
            };
        case MAJOR_ACTIONS.UPDATE_MAJOR:
            const updateMajor = state.majors.map((major) =>
                major._id === action.payload._id ? action.payload : major
            );
            return {
                ...state,
                majors: updateMajor,
            };
        case MAJOR_ACTIONS.DELETE_MAJOR:
            const majorDelete = state.majors.filter(
                (major) => major._id !== action.payload?._id
            );
            return {
                ...state,
                majors: majorDelete,
            };
        case MAJOR_ACTIONS.FIND_MAJOR:
            return {
                ...state,
                majorFind: action.payload,
            };
        default:
            throw new Error("Invalid action");
    }
};

export default majorsReducer;

import { COURSE_ACTIONS } from "../../contants/ACTION";

export const initialStateCourse = {
  isLoading: true,
  courses: null,
  courseMajor: [],
  course: {},
  courses_pagination: [],
  courseFind: {},
};

const courseReducer = (state, action) => {
  switch (action.type) {
    case COURSE_ACTIONS.GET_COURSES:
      return {
        ...state,
        isLoading: false,
        courses: action.payload,
      };
    case COURSE_ACTIONS.GET_COURSE_MAJOR:
      return {
        ...state,
        isLoading: false,
        courseMajor: action.payload,
      };
    case COURSE_ACTIONS.GET_COURSES_PAGINATION:
      return {
        ...state,
        courses_pagination: action.payload,
      };
    case COURSE_ACTIONS.POST_COURSE:
      return {
        ...state,
        courses_pagination: [action.payload, ...state.courses_pagination],
      };
    case COURSE_ACTIONS.UPDATE_COURSE:
      const updateCourse = state.courses_pagination.map((crs) =>
        crs._id === action.payload._id ? action.payload : crs
      );
      return {
        ...state,
        courses_pagination: updateCourse,
      };
    case COURSE_ACTIONS.DELETE_COURSE:
      const deleteCourse = state.courses_pagination.filter(
        (course) => course._id !== action.payload._id
      );
      return {
        ...state,
        courses_pagination: deleteCourse,
      };
    case COURSE_ACTIONS.FIND_COURSE:
      return {
        ...state,
        courseFind: action.payload,
      };
    default:
      throw new Error(`Action ${action.type}`);
  }
};

export default courseReducer;

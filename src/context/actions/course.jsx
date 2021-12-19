import { COURSE_ACTIONS } from "../../contants/ACTION";

export const courseActions = {
  get_courses(payload) {
    return {
      type: COURSE_ACTIONS.GET_COURSES,
      payload,
    };
  },
  get_courses_major(payload) {
    return {
      type: COURSE_ACTIONS.GET_COURSE_MAJOR,
      payload,
    };
  },
  get_courses_pagination: (payload) => {
    return {
      type: COURSE_ACTIONS.GET_COURSES_PAGINATION,
      payload,
    };
  },
  update_course: (payload) => {
    return {
      type: COURSE_ACTIONS.UPDATE_COURSE,
      payload,
    };
  },
  post_course: (payload) => {
    return {
      type: COURSE_ACTIONS.POST_COURSE,
      payload,
    };
  },
  delete_course: (payload) => {
    return {
      type: COURSE_ACTIONS.DELETE_COURSE,
      payload,
    };
  },
  find_course: (payload) => {
    return {
      type: COURSE_ACTIONS.FIND_COURSE,
      payload,
    };
  },
};

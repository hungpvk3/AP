export const AUTHACTIONS = {
    LOGIN_SUCCESS: "login_success",
    LOGIN_FAIL: "login_fail",
    USER_SUCCESS: "user_success",
    GET_USERS: "get_users",
    GET_USERS_PAGINATION: "get_users_pagination",
    POST_USER_ADMIN: "post_user_admin",
    LOGOUT_SUCCESS: "logout_success",
    GET_ROLES: "get_roles",
    POST_USER: "post_user",
    DELETE_USER: "delete_user",
    UPDATE_USER: "update_user",
    USER_UPDATE_PROFILE: "user_update_profile",
    FIND_USER: "find_user",
};

export const MAJOR_ACTIONS = {
    GET_MAJORS: "get_mojors",
    FIND_MAJOR: "find_mojor",
    POST_MAJOR: "post_major",
    UPDATE_MAJOR: "update_major",
    DELETE_MAJOR: "delete_major",
};

export const COURSE_ACTIONS = {
    GET_COURSES: "get_courses",
    GET_COURSE_MAJOR: "get_course_major",
    GET_COURSES_PAGINATION: "get_course_pagination",
    FIND_COURSE: "find_course",
    POST_COURSE: "post_course",
    UPDATE_COURSE: "update_course",
    DELETE_COURSE: "delete_course",
};

export const CLASS_ACTIONS = {
    GET_CLASSES: "get_classes",
    GET_CLASS_COURSE: "get_class_course",
    POST_CLASS: "post_class",
    UPDATE_CLASS: "update_class",
    DELETE_CLASS: "delete_class",
    ADD_STUDENT: "add_student",
};

export const SCORE_ACTIONS = {
    GET_SCORE_CLASS: "get_score_class",
    GET_SCORE_USER: "get_score_user",
};

export const ALERT = {
    DISPLAY: "display",
    HIDDEN: "hidden",
};

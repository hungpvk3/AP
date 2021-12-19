import { AUTHACTIONS } from "../../contants/ACTION";

export const authActions = {
    login_success: (payload) => {
        return {
            type: AUTHACTIONS.LOGIN_SUCCESS,
            payload,
        };
    },
    login_fail: (payload) => {
        return {
            type: AUTHACTIONS.LOGIN_FAIL,
            payload,
        };
    },
    user_success: (payload) => {
        return {
            type: AUTHACTIONS.USER_SUCCESS,
            payload,
        };
    },
    get_users: (payload) => {
        return {
            type: AUTHACTIONS.GET_USERS,
            payload,
        };
    },
    get_users_pagination: (payload) => {
        return {
            type: AUTHACTIONS.GET_USERS_PAGINATION,
            payload,
        };
    },
    get_roles: (payload) => {
        return {
            type: AUTHACTIONS.GET_ROLES,
            payload,
        };
    },
    post_user: (payload) => {
        return {
            type: AUTHACTIONS.POST_USER,
            payload,
        };
    },
    update_user: (payload) => {
        return {
            type: AUTHACTIONS.UPDATE_USER,
            payload,
        };
    },
    user_update_profile: (payload) => {
        return {
            type: AUTHACTIONS.USER_UPDATE_PROFILE,
            payload,
        };
    },
    delete_user: (payload) => {
        return {
            type: AUTHACTIONS.DELETE_USER,
            payload,
        };
    },
    find_user: (payload) => {
        return {
            type: AUTHACTIONS.FIND_USER,
            payload,
        };
    },
    logout_success: (payload) => {
        return {
            type: AUTHACTIONS.LOGOUT_SUCCESS,
            payload,
        };
    },
};

import { AUTHACTIONS } from "../../contants/ACTION";

export const initialStateAuth = {
    isLoading: true,
    isAuthenticated: false,
    data: null,
    role: null,
    roles: [],
    users: {},
    userFind: {},
    users_pagination: [],
};

const authReducer = (state, action) => {
    switch (action.type) {
        case AUTHACTIONS.LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
            };
        case AUTHACTIONS.LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
            };
        case AUTHACTIONS.USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
                role: action.payload.role,
            };
        case AUTHACTIONS.GET_USERS_PAGINATION:
            return {
                ...state,
                users_pagination: action.payload,
            };
        case AUTHACTIONS.POST_USER:
            return {
                ...state,
                users_pagination: [...state.users_pagination, action.payload],
            };
        case AUTHACTIONS.UPDATE_USER:
            const newUserUpdate = state.users_pagination.map((user) =>
                user._id === action.payload?._id ? action.payload : user
            );
            return {
                ...state,
                users_pagination: newUserUpdate,
            };
        case AUTHACTIONS.USER_UPDATE_PROFILE:
            return {
                ...state,
                data: action.payload,
            };
        case AUTHACTIONS.DELETE_USER:
            const newUserDelete = state.users_pagination.filter(
                (user) => user._id !== action.payload?._id
            );
            return {
                ...state,
                users_pagination: newUserDelete,
            };
        case AUTHACTIONS.FIND_USER:
            return {
                ...state,
                userFind: action.payload,
            };
        case AUTHACTIONS.LOGOUT_SUCCESS:
            return {
                ...state,
                isLoading: true,
                isAuthenticated: false,
                data: null,
                role: null,
                roles: [],
                users: [],
                userFind: {},
            };
        case AUTHACTIONS.GET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case AUTHACTIONS.GET_ROLES:
            return {
                ...state,
                roles: action.payload,
            };
        default:
            throw new Error("Invalid action");
    }
};

export default authReducer;

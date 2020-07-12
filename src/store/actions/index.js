import * as actionTypes from './actionTypes';

export const fetchBlogs = () => {
    return (dispatch) => {
        dispatch({ type: actionTypes.FETCH_BLOGS });
    };
};

export const addBlog = (title, body, tags, cover) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.ADD_BLOG,
            blogData: { id: Date.now(), title, body, tags, cover },
        });
    };
};

export const editBlog = (id, title, body, tags, cover) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.EDIT_BLOG,
            blogData: { id, title, body, tags, cover },
        });
    };
};

export const deleteBlog = (id) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.DELETE_BLOG,
            blogData: { id },
        });
    };
};

export const changePage = (activePage) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.CHANGE_PAGE,
            blogData: { activePage },
        });
    };
};

export const registerUserAcount = (id, name, email, password) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.REGISTER_USER_ACCOUNT,
            userData: { id, name, email, password },
        });
    };
};

export const loginUserAcount = (email, password) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.LOGIN_USER_ACCOUNT,
            userData: { email, password },
        });
    };
};

export const deleteUserAcount = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.DELETE_USER_ACCOUNT,
            userData: {},
        });
    };
};

export const followUserAcount = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.FOLLOW_USER_ACCOUNT,
            userData: {},
        });
    };
};

export const unfollowUserAcount = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.UNFOLLOW_USER_ACCOUNT,
            userData: {},
        });
    };
};

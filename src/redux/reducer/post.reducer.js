import {  GET_POST_DATA, GET_POST_FAILURE, GET_POST_SUCCESS,GET_USER_LOGIN_DATA, GET_USER_FAILURE, GET_USER_SUCCESS, LOGOUT_USER, GET_POST_BY_ID_DATA, GET_POST_BY_ID_SUCCESS, GET_POST_BY_ID_FAILURE } from "../action.type"


const initialState = {
    postList: [],
    postLoadingList: true,
    postListError: false,
    postListErrorMessage: "",



    post: {},
    loadingPostById: true,
    PostByIdErrorMessage: "",
    PostByIdError: false,

    loading: true,
}

export function postReducer(state = initialState, action) {
    switch (action.type) {

        case GET_POST_DATA:
            return { ...state, postLoadingList: true }
        case GET_POST_SUCCESS:
            return { ...state, postList: action.payload, postLoadingList: false, loading: false }
        case GET_POST_FAILURE:
            return { ...state, postListErrorMessage: action.payload, postLoadingList: false, postListError: true }

        case GET_POST_BY_ID_DATA:
            return { ...state, loadingPostById: true }
        case GET_POST_BY_ID_SUCCESS:
            return { ...state, post: action.payload, loadingPostById: false, loading: false }
        case GET_POST_BY_ID_FAILURE:
            return { ...state, PostByIdErrorMessage: action.payload, loadingPostById: false, PostByIdError: true }


        default:
            return state
    }
}

const userInitialState = {
    loggedInData: {},
    loggedInDataLoading: true,
    loggedInDataError: false,
    loggedInDataErrorMessage: "",
}
export function userReducer(state = userInitialState, action) {
    switch (action.type) {

        case GET_USER_LOGIN_DATA:
            return { ...state, loggedInDataLoading: true }
        case GET_USER_SUCCESS:
            return { ...state, loggedInData: action.payload, loggedInDataLoading: false }
        case GET_USER_FAILURE:
            return { ...state, loggedInDataErrorMessage: action.payload, loggedInDataLoading: false, loggedInDataError: true }
        case LOGOUT_USER:
            return { ...state, loggedInData: {}, loggedInDataLoading: false }

        default:
            return state
    }
}

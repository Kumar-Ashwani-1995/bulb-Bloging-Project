import { BASE_URL, GET_POST_DATA, GET_POST_FAILURE, GET_POST_SUCCESS, GET_USER_LOGIN_DATA, GET_USER_FAILURE, GET_USER_SUCCESS, LOGOUT_USER, GET_POST_BY_ID_DATA, GET_POST_BY_ID_SUCCESS, GET_POST_BY_ID_FAILURE } from "../action.type";

const allPost = `${BASE_URL}/posts?_sort=date&_order=desc`;
const trending = `${BASE_URL}/posts?_sort=clap&_order=desc&_limit=6`;
const loginUser = (email, password) => `${BASE_URL}/user?email=${email}&password=${password}`;
const postByCategory = (categoryList) => `${BASE_URL}/posts?category_like=${categoryList}`;
const postById = (postId) => `${BASE_URL}/posts/${postId}`;
const searchByTerm = (searchTerm) => `${BASE_URL}/posts?title_like=${searchTerm}`;
const signUpUser = `${BASE_URL}/user`;

const commentByPost = (postId) => `${BASE_URL}/comments?postId=${postId}&_sort=date&_order=desc`;
const uploadPost = `${BASE_URL}/posts`;
const commentOnPost = `${BASE_URL}/comments`;
const updateDeletePost = (postId) => `${BASE_URL}/posts/${postId}`;
const updateProfile = (userId) => `${BASE_URL}/user/${userId}`;


export const getPostData = () => async dispatch => {
    dispatch(
        { type: GET_POST_DATA }
    )
    try {
        let response = await fetch(allPost);
        let data = await response.json();
        dispatch({
            type: GET_POST_SUCCESS,
            payload: data

        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_POST_FAILURE,
            payload: error.message

        })
    }
}
export const getTrendingData = () => async dispatch => {
    dispatch(
        { type: GET_POST_DATA }
    )
    try {
        let response = await fetch(trending);
        let data = await response.json();
        dispatch({
            type: GET_POST_SUCCESS,
            payload: data

        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_POST_FAILURE,
            payload: error.message

        })
    }
}
export const getPostByCategory = (category) => async dispatch => {
    dispatch(
        { type: GET_POST_DATA }
    )
    try {
        let URL;
        if (category === "fetchAll") {
            URL = allPost
        }
        else {
            URL = postByCategory(category)

        }
        let response = await fetch(URL);
        let data = await response.json();
        dispatch({
            type: GET_POST_SUCCESS,
            payload: data

        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_POST_FAILURE,
            payload: error.message

        })
    }
}
export const authLoginUser = (email, password) => async dispatch => {
    dispatch(
        { type: GET_USER_LOGIN_DATA }
    )
    try {

        let response = await fetch(loginUser(email, password));
        let data = await response.json();
        
        if(data.length===1){
            dispatch({
                type: GET_USER_SUCCESS,
                payload: {...data[0],password:""}
            })
            sessionStorage["loggedIn"]=JSON.stringify({...data[0],password:""})
            return "success"
        }
        else{
            return "failure"
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_USER_FAILURE,
            payload: error.message

        })
        return "failure"
    }
}
export const authLogOutUser = () => async dispatch => {
    dispatch(
        { type: LOGOUT_USER }
    )
}
export const getPostById = (postId) => async dispatch => {
    dispatch(
        { type: GET_POST_BY_ID_DATA }
    )
    try {
        let response = await fetch(postById(postId));
        let data = await response.json();
        dispatch({
            type: GET_POST_BY_ID_SUCCESS,
            payload: data

        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_POST_BY_ID_FAILURE,
            payload: error.message

        })
    }
}

export const getPostBySearchTerm = (term) => async dispatch => {
    dispatch(
        { type: GET_POST_DATA }
    )
    try {
        let URL;
        if (term === "") {
            URL = allPost
        }
        else {
            URL = searchByTerm(term)

        }
        let response = await fetch(URL);
        let data = await response.json();
        dispatch({
            type: GET_POST_SUCCESS,
            payload: data

        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_POST_FAILURE,
            payload: error.message

        })
    }
}





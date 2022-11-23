import { BASE_URL, GET_POST_DATA, GET_POST_FAILURE, GET_POST_SUCCESS, GET_USER_LOGIN_DATA, GET_USER_FAILURE, GET_USER_SUCCESS, LOGOUT_USER, GET_POST_BY_ID_DATA, GET_POST_BY_ID_SUCCESS, GET_POST_BY_ID_FAILURE, GET_MORE_POST_SUCCESS } from "../action.type";

const allPost = `${BASE_URL}/posts?_sort=date&_order=desc`;
const allPostByLimit = (pageNo) => `${BASE_URL}/posts?_sort=date&_order=desc&_page=${pageNo}&_limit=10`;
const trending = `${BASE_URL}/posts?_sort=clap&_order=desc&_limit=6`;
const loginUser = (email, password) => `${BASE_URL}/user?email=${email}&password=${password}`;
const postByCategory = `${BASE_URL}/posts?`;
const postById = (postId) => `${BASE_URL}/posts/${postId}`;
const searchByTerm = (searchTerm) => `${BASE_URL}/posts?title_like=${searchTerm}`;
const signUpUser = `${BASE_URL}/user`;
const status = `${BASE_URL}/status`;
const postByUserId = (userId,pageNo) => `${BASE_URL}/posts?userId=${userId}&_sort=date&_order=desc&_page=${pageNo}&_limit=10`;

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
export const getPostDataByLimit = (pageNo) => async dispatch => {
    dispatch(
        { type: GET_POST_DATA }
    )
    try {
        let response = await fetch(allPostByLimit(pageNo));
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
export const getPostByCategory = (categoryArray) => async dispatch => {
    dispatch(
        { type: GET_POST_DATA }
    )
    try {
        let URL;
        if (categoryArray === "fetchAll") {
            URL = allPost
        }
        else {
            let cat = (categoryElement)=> `category_like=${categoryElement}`
            URL = postByCategory
            for (let i = 0; i < categoryArray.length; i++) {
                URL=URL+"&";
                URL = URL+cat(categoryArray[i]);
            }

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

        if (data.length === 1) {
            dispatch({
                type: GET_USER_SUCCESS,
                payload: { ...data[0], password: "" }
            })
            sessionStorage["loggedIn"] = JSON.stringify({ ...data[0], password: "" })
            return "success"
        }
        else {
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

export const getDbStatus = () => async dispatch => {
    try {
        let response = await fetch(status);
        let data = await response.json();
    } catch (error) {
        dispatch(
            { type: LOGOUT_USER }
        )
        console.log(error,"network Error");
    }
}

export const getMyPost = (userId,pageNo) => async dispatch => {
    dispatch(
        { type: GET_POST_DATA }
    )
    try {
       
        let response = await fetch(postByUserId(userId,pageNo));
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

export const updateLoginData = (userData,id) => async dispatch => {
    dispatch(
        { type: GET_USER_LOGIN_DATA }
    )
    try {
        const signupUser = `${BASE_URL}/user/${id}`;
        let response = await fetch(signupUser, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });
        let data = await response.json();
        console.log(data,{ ...data, password: "" });
        if (data.email === userData.email) {
            dispatch({
                type: GET_USER_SUCCESS,
                payload: { ...data, password: "" }
            })
            sessionStorage["loggedIn"] = JSON.stringify({ ...data, password: "" })
          return "success"
        } else {
          return "failure"
        }
      } catch (error) {
        console.log(error);
        dispatch({
            type: GET_USER_FAILURE,
            payload: error.message

        })
        return error
      }
}



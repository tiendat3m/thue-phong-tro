import * as apis from "~/services"
import actionTypes from "./actionsTypes"


export const getPosts = () => async (dispatch) => {
    try {
        const response = await apis.apiGetPosts()
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS,
                data: response.data.response,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS,
            data: null
        })
    }
}

export const getPostsLimit = (query) => async (dispatch) => {
    try {
        const response = await apis.apiGetPostsLimit(query)
        // console.log(response)
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS_LIMIT,
                data: response.data.response.rows,
                count: response.data.response.count,
            })
        } else {
            dispatch({
                type: actionTypes.GET_POSTS_LIMIT,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS_LIMIT,
            data: null
        })
    }
}

export const getNewPosts = () => async (dispatch) => {
    try {
        const response = await apis.apiGetNewPosts()
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_NEWPOSTS,
                data: response.data.response,
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_NEWPOSTS,
            data: null
        })
    }
}
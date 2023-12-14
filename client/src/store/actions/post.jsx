import { apiGetPosts } from "~/services/post"
import actionTypes from "./actionsTypes"


export const getPosts = () => async (dispatch) => {
    try {
        const response = await apiGetPosts()
        console.log(response)
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
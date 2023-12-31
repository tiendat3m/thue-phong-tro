
import actionTypes from "./actionsTypes"
import * as apis from "~/services"


export const getCategories = () => async (dispatch) => {
    try {
        const response = await apis.apiGetCategories()
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_CATEGORIES,
                data: response.data.response,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_CATEGORIES,
            data: null
        })
    }
}

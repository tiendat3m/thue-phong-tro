import * as apis from "~/services"
import actionTypes from "./actionsTypes"


export const getCurrent = () => async (dispatch) => {
    try {
        const response = await apis.getCurrent()
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_CURRENT,
                data: response.data.response,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_CURRENT,
            data: null
        })
    }
}
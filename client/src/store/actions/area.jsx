import actionTypes from "./actionsTypes"
import * as apis from "~/services"



export const getAreas = () => async (dispatch) => {
    try {
        const response = await apis.apiGetAreas()
        console.log(response)
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_AREAS,
                data: response.data.response.sort((a, b) => { return +a.order - +b.order }),
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_AREAS,
            data: null
        })
    }
}
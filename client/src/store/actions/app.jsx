import actionTypes from "./actionsTypes"
import * as apis from "~/services"

export const getPrices = () => async (dispatch) => {
    try {
        const response = await apis.apiGetPrices()
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_PRICES,
                data: response.data.response.sort((a, b) => { return +a.order - +b.order }),
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRICES,
            data: null
        })
    }
}

export const getAreas = () => async (dispatch) => {
    try {
        const response = await apis.apiGetAreas()
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
            data: error
        })
    }
}
export const getProvinces = () => async (dispatch) => {
    try {
        const response = await apis.apiGetProvinces()
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_PROVINCES,
                data: response.data.response,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PROVINCES,
            data: error
        })
    }
}


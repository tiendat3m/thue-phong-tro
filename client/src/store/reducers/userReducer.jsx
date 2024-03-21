import actionTypes from "../actions/actionsTypes";

const initState = {
    current: {}
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_CURRENT:
            return {
                ...state,
                current: action.data || {}
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                current: {}
            }
        default:
            return state;
    }
}

export default userReducer
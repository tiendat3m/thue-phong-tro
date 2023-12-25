import actionTypes from "../actions/actionsTypes";


const initState = {
    msg: '',
    categories: [],
    prices: [],
    areas: [],
    provinces: []
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORIES:
            return {
                ...state,
                categories: action.data || [],
                msg: action.msg || '',
            }
        case actionTypes.GET_PRICES:
            return {
                ...state,
                prices: action.data || [],
                msg: action.msg || '',
            }
        case actionTypes.GET_AREAS:
            return {
                ...state,
                areas: action.data || [],
                msg: action.msg || '',
            }
        case actionTypes.GET_PROVINCES:
            return {
                ...state,
                provinces: action.data || [],
                msg: action.msg || '',
            }
        default:
            return state

    }

}

export default appReducer
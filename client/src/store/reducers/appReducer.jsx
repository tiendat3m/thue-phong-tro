import actionTypes from "../actions/actionsTypes";


const initState = {
    msg: '',
    categories: []
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORIES:
            return {
                ...state,
                categories: action.data || [],
                msg: action.msg || '',
            }
        default:
            return state

    }

}

export default appReducer
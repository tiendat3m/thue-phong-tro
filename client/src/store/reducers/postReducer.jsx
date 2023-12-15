import actionTypes from "../actions/actionsTypes";


const initState = {
    posts: [],
    count: 0,
    msg: ''
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS:
        case actionTypes.GET_POSTS_LIMIT:
            return {
                ...state,
                posts: action.data || [],
                count: action.count || 0,
                msg: action.msg || '',
            }
        default:
            return state

    }

}

export default postReducer
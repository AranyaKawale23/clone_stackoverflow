const initialState = null
const postAnsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_ANS':
            return action.payload
        default:
            return state
    }
}

export default postAnsReducer
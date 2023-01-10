const initialState = null

const askQuesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ASK_QUES':
            return state
        case 'GET_QUES':
            return action.payload
        default:
            return state
    }
}

export default askQuesReducer
const initialState = null
const facebookReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FB_REQUESTS':
            return state
        case 'SAVE_USERS_CHATS':
            return state
        case 'SAVE_CHATBOT':
            return state
        case 'FETCH_FB_USERS':
            return action.payload
        default:
            return state
    }
}

export default facebookReducer 
const initialState = null

const fbpostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_IMAGE':
            return state
        case 'VOTE_FB_POST':
            return state
        case 'DEL_POST':
            return state
        case 'FETCH_POSTED_IMAGE':
            return action.payload
        default:
            return state
    }
}

export default fbpostsReducer
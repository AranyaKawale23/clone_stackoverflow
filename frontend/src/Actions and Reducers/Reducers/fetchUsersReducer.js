const initialState = null

const fetchAllUsers = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ALL_USERS':
            return action.payload

        case 'UPDATE_PROFILE':
            return state

        case 'UPDATED_PROFILE':
            return action.payload

        default:
            return state
    }
}

export { fetchAllUsers }
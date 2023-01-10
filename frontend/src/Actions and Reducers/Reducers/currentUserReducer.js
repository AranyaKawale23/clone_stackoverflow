const initialState = null

const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'CURRENT_USER':
            return action?.payload

        default:
            return state
    }
}

export default currentUserReducer
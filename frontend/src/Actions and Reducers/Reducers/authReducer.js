const initialState = null
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem("profile", JSON.stringify({ ...action?.data.data }))
            return state

        case 'LOG_OUT':
            localStorage.clear()
            return state

        default:
            return initialState
    }
}

export default authReducer
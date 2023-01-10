import * as api from '../../API/Api'

const currentUserAction = (currentUserData) => {
    return {
        type: 'CURRENT_USER',
        payload: currentUserData
    }
}

const fetchAllUsers = () => async (dispatch) => {
    try {
        const data = await api.fetchAllUsers()
        dispatch({ type: 'FETCH_ALL_USERS', payload: data })
    }
    catch (error) {
        console.log(error);
    }
}

const updateProfile = (id, updateData) => async (dispatch) => {
    try {
        const data = await api.updateProfile(id, updateData)
        dispatch({ type: 'UPDATE_PROFILE', payload: data })
        dispatch(getUpdatedProfile())
    }
    catch (error) {
        console.log(error);
    }
}

const getUpdatedProfile = (id) => async (dispatch) => {
    try {
        const data = await api.getUpdatedProfile(id)
        dispatch({ type: 'UPDATED_PROFILE', payload: data })
    }
    catch (error) {
        console.log(error);
    }
}

export { currentUserAction, fetchAllUsers, updateProfile, getUpdatedProfile }
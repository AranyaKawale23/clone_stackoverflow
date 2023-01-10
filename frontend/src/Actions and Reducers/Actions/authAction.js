import * as api from '../../API/Api'
import { currentUserAction } from './usersAction'
import { fetchAllQues } from './quesAction'

const signup = (authData, navigate) => async (dispatch) => {

    try {
        const data = await api.signup(authData)

        dispatch({ type: 'AUTH', data })
        dispatch(currentUserAction(JSON.parse(localStorage.getItem("profile"))))
        dispatch(fetchAllQues())
        navigate('/')

    } catch (error) {
        console.log(error);
    }
}

const login = (authData, navigate) => async (dispatch) => {

    try {
        const data = await api.login(authData)

        dispatch({ type: 'AUTH', data })
        dispatch(currentUserAction(JSON.parse(localStorage.getItem("profile"))))
        dispatch(fetchAllQues())
        navigate('/')

    } catch (error) {
        console.log(error);
    }
}

const logOut = (navigate) => async (dispatch) => {
    try {
        dispatch({ type: 'LOG_OUT' })
        dispatch(currentUserAction(JSON.parse(localStorage.getItem("profile"))))
        dispatch(fetchAllQues())
        navigate('/')
    } catch (error) {
        console.log(error);
    }
}

export { signup, login, logOut }
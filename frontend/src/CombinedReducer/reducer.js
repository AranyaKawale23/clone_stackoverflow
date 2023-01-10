import { combineReducers } from "redux";
import authReducer from '../Actions and Reducers/Reducers/authReducer'
import currentUserReducer from '../Actions and Reducers/Reducers/currentUserReducer'
import askQuesReducer from "../Actions and Reducers/Reducers/quesReducer";
import postAnsReducer from '../Actions and Reducers/Reducers/postAnsReducer'
import { fetchAllUsers } from '../Actions and Reducers/Reducers/fetchUsersReducer'
import facebookReducer from '../Actions and Reducers/Reducers/facebookReducer'
import fbpostsReducer from '../Actions and Reducers/Reducers/fbPostsReducer'

export default combineReducers({
    authReducer, currentUserReducer, askQuesReducer, postAnsReducer, fetchAllUsers, facebookReducer, fbpostsReducer
})
import * as api from '../../API/Api'

const fbReqBtnAct = (fbReqData) => async (dispatch) => {
    try {
        await api.fbReqBtn(fbReqData)
        dispatch({ type: 'FB_REQUESTS' })
        dispatch(fetchAllFbUsers())
    }
    catch (error) {
        console.log(error);
    }
}

const saveUserChatsAct = (userChatData) => async (dispatch) => {
    try {
        await api.saveUserMessages(userChatData)
        dispatch({ type: 'SAVE_USERS_CHATS' })
        dispatch(fetchAllFbUsers())
    }
    catch (error) {
        console.log(error);
    }
}

const saveChatsAct = (chatData) => async (dispatch) => {
    try {
        await api.saveChatbotMessages(chatData)
        dispatch({ type: 'SAVE_CHATBOT' })
        dispatch(fetchAllFbUsers())
    }
    catch (error) {
        console.log(error);
    }
}

const fetchAllFbUsers = () => async (dispatch) => {
    try {
        const data = await api.fetchAllFbUsersData()
        dispatch({ type: 'FETCH_FB_USERS', payload: data })

    } catch (error) {
        console.log(error);
    }
}

export { fbReqBtnAct, saveChatsAct, fetchAllFbUsers, saveUserChatsAct }
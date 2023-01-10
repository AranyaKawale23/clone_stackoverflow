import * as api from '../../API/Api'

const askQuesAction = (questionData, navigate) => async (dispatch) => {
    try {
        const data = await api.askQues(questionData)
        dispatch({ type: 'ASK_QUES', payload: data })
        navigate('/questions')
        dispatch(fetchAllQues())
    } catch (error) {
        console.log(error);
    }
}

const deleteQuesAction = (id, navigate) => async (dispatch) => {
    try {
        await api.deleteQuestion(id)
        navigate('/questions')
        dispatch(fetchAllQues()) // --- for real time interface
    } catch (error) {
        console.log(error);
    }
}

const voteForQues = (id, voteData) => async (dispatch) => {
    try {
        await api.voteForQuestion(id, voteData)
        dispatch(fetchAllQues())
    } catch (error) {
        console.log(error);
    }
}

const fetchAllQues = () => async (dispatch) => {
    try {
        const data = await api.getAllQuestions()
        dispatch({ type: 'GET_QUES', payload: data })

    } catch (error) {
        console.log(error);
    }
}

export { askQuesAction, deleteQuesAction, voteForQues, fetchAllQues }
import * as api from '../../API/Api'
import { fetchAllQues } from './quesAction'

const postAnswerAct = (ansData) => async (dispatch) => {
    try {
        const data = await api.postAnswer(ansData)
        dispatch({ type: 'POST_ANS', payload: data })
        dispatch(fetchAllQues())
    }
    catch (error) {
        console.log(error);
    }
}

const DelAnswerAct = (ansData) => async (dispatch) => {
    try {
        await api.deleteAnswer(ansData)
        dispatch(fetchAllQues())
    }
    catch (error) {
        console.log(error);
    }
}
export { postAnswerAct, DelAnswerAct }
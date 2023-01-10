import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { askQuesAction } from '../../../Actions and Reducers/Actions/quesAction'
import './askQuestion.css'

const AskQuestion = () => {

    const [quesTitle, setQuesTitle] = useState("")
    const [quesBody, setQuesBody] = useState("")
    const [quesTags, setQuesTags] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => (state.currentUserReducer))

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(askQuesAction({ quesTitle, quesBody, quesTags, userPosted: user.result.name, userId: user.result._id }, navigate))
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            setQuesBody(quesBody + '/n')
        }
    }

    return (
        <>
            <div className="askQues-body">
                <div className="askQues-cont">
                    <h2>Ask a public question</h2>
                    <form className="askQues-form" onSubmit={handleSubmit}>
                        <div className='ask-form'>
                            <label htmlFor='ask-ques-title'>
                                <h4>Title</h4>
                                <p>be specific and imagine you're asking a question </p>
                                <input type="text" id='write-ques' placeholder='e.g. Is there any array.method to remove last index ?' onChange={(e) => setQuesTitle(e.target.value)} required />
                            </label>
                            <label htmlFor='ask-ques-title'>
                                <h4>Body</h4>
                                <p>include all the information, so someone can answer your question </p>
                                <textarea name="" id='write-ques write-ques-body' onChange={(e) => setQuesBody(e.target.value)} cols="30" rows="10" onKeyPress={handleEnter}></textarea>
                            </label>
                            <label htmlFor='ask-ques-title'>
                                <h4>Tags</h4>
                                <p>Add up to 5 Tags to describe what your question is about </p>
                                <input type="text" id='write-ques' placeholder='+5 tags like node, react, java, etc.' onChange={(e) => setQuesTags(e.target.value.split(',' || ' '))} required />
                            </label>
                            <input type="submit" value='Review' className='review-btn' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AskQuestion
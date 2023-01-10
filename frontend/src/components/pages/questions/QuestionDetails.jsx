import React, { useEffect, useState } from 'react'
import QuestionDetailSecOne from './QuesDetailSecOne'
import QuesDetailSecTwo from './QuesDetailSecTwo'
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postAnswerAct, DelAnswerAct } from '../../../Actions and Reducers/Actions/answerAction'
import { deleteQuesAction, fetchAllQues, voteForQues } from '../../../Actions and Reducers/Actions/quesAction'
import copy from 'copy-to-clipboard'
import './displayQues.css'

const QuestionDetails = () => {

    const avtStyles = {
        backgroundColor: "rgb(255, 0, 0)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "monospace"
    }

    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const questionlist = useSelector((state) => (state.askQuesReducer))
    const user = useSelector((state) => (state.currentUserReducer))

    const [Answer, setAnswer] = useState("")
    const location = useLocation()
    const url = `https://mern-sof-clone.netlify.app`

    const handleSubmit = (e) => {
        e.preventDefault()
        setAnswer('')
        if (!user) {
            alert('signup or login to answer the question')
            navigate('/login')
        } else {
            questionlist.data.filter(ques => ques._id === id).map(q => {
                return dispatch(postAnswerAct({ id, answerBody: Answer, noOfAnswers: q.answer.length + 1, userAnswered: user.result.name, userId: user.result._id }))
            })
        }
    }

    useEffect(() => {
        dispatch(fetchAllQues())
    }, [dispatch])

    const handleShare = () => {
        copy(`${url}${location.pathname}`)
        setTimeout(() => {
            alert("url copied to share")
        }, 100);
    }

    console.log(location.pathname);

    const handleDelete = () => {
        dispatch(deleteQuesAction(id, navigate))
    }

    const handleAnsDelete = (answerId, noOfAnswers) => {
        dispatch(DelAnswerAct({ id, answerId: answerId, noOfAnswers: noOfAnswers }))
    }

    const handleVoteUp = () => {
        if (user === null) {
            alert("Signup or Login First, To Perforn Vote")
            navigate("/login")
        }
        else {
            dispatch(voteForQues(id, { value: "upVote", userId: user.result._id }))
        }
    }

    const handleVoteDown = () => {
        if (user === null) {
            alert("Signup or Login First, To Perforn Vote")
            navigate("/login")
        }
        else {
            dispatch(voteForQues(id, { value: "downVote", userId: user.result._id }))
        }
    }

    return (
        <>
            {
                questionlist === null ? <h1>loading...</h1> :
                    <>
                        {
                            questionlist.data.filter(question => question._id === id).map(question => {
                                return <div className='ques-route-box' key={question._id}>

                                    {/* {SECTION 1} */}
                                    <QuestionDetailSecOne question={question} handleVoteUp={handleVoteUp}
                                        handleVoteDown={handleVoteDown} handleShare={handleShare} user={user}
                                        handleDelete={handleDelete} avtStyles={avtStyles} />

                                    {/* {SECTION 2} */}
                                    <QuesDetailSecTwo question={question} questionlist={questionlist} handleShare={handleShare}
                                        user={user} avtStyles={avtStyles} handleAnsDelete={handleAnsDelete} />

                                    {/* {SECTION 3} */}
                                    <section className='ques-sec-one post-answer'>
                                        <h3>You Answer</h3>
                                        <form onSubmit={handleSubmit}>
                                            <textarea id="" cols="30" rows="10" value={Answer} onChange={(e) => setAnswer(e.target.value)} required></textarea><br />
                                            <input className='post-answer-btn' type="submit" value="POST" />
                                        </form>
                                        <p className='last-sec-last-text'>Browse other questions tagged {` `}
                                            {
                                                question.quesTags.map((tag, index) => {
                                                    return <NavLink to={'/tags'} key={index} className='answer-tags' >{tag}&nbsp;</NavLink>
                                                })
                                            } or&nbsp;
                                            <NavLink to={'/askquestion'} className='ask-your-question'>Ask Your question</NavLink>
                                        </p>
                                    </section>
                                </div>
                            })
                        }
                    </>
            }
        </>
    )
}

export default QuestionDetails
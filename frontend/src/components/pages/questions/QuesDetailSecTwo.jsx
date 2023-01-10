import React from 'react'
import moment from 'moment'
import { NavLink } from 'react-router-dom'
import Avatar from '../../avatar/Avatar'

const QuesDetailSecTwo = ({ questionlist, question, handleShare, user, avtStyles,handleAnsDelete }) => {
    return (
        <>
            <section className='ques-sec-one ques-sec-two'>
                {
                    questionlist.data.noOfAnswers !== 0 && (
                        <section className='ques-sec-one'>
                            <h3 className='sec1-header'>{question.answer.length} answers</h3>
                            {
                                question.answer.map((ans, index) => {
                                    return <div className='display-ans' key={index}>
                                        <p>{ans.answerBody}</p>
                                        <div className='ques-sec-one-inner-div2'>
                                            <div className='ques-sec-one-inner-div2-btnbox'>
                                                <div type='button' className='QuesAndAns-page-btns share-btn' onClick={handleShare}>share</div>
                                                {
                                                    user?.result?._id === ans?.userId && (
                                                        <div key={index} type='button' className='QuesAndAns-page-btns' onClick={() => handleAnsDelete(ans._id, question.answer.length)}>delete</div>
                                                    )
                                                }
                                            </div>
                                            <div className='ques-sec-one-inner-div2-userbox'>
                                                <p className='sec1-ask-on'>answered:- {moment(ans.answerRedOn).fromNow()}</p>
                                                <NavLink className='user-link' to={`/user/${ans.userId}`}>
                                                    <Avatar icon={ans.userAnswered.charAt(0).toUpperCase()} avtStyles={avtStyles} />
                                                    <p>  {ans.userAnswered}</p>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </section>
                    )
                }
            </section>
        </>
    )
}

export default QuesDetailSecTwo
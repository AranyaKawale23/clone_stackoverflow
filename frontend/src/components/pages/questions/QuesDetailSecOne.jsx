import React from 'react'
import vote from '../../../assets/vote.png'
import voted from '../../../assets/voted.png'
import { NavLink } from 'react-router-dom'
import Avatar from '../../avatar/Avatar'
import moment from 'moment'

const QuesDetailSecOne = ({ question, handleVoteUp, handleVoteDown, handleShare, user, handleDelete, avtStyles }) => {

    return (
        <>
            <section className='ques-sec-one'>
                <h3 className='sec1-header'>{question.quesTitle}</h3>
                <div className='ques-sec-one-inner-div'>
                    <div className='ques-votes'>
                        <div className='voter' onClick={handleVoteUp}>
                            <img src={question.upVotes.includes(user?.result?._id) ? voted : vote} alt="err" />
                            <p>{question.upVotes.length}</p>
                        </div>
                        <div className='voter' onClick={handleVoteDown}>
                            <img style={{ transform: 'rotate(180deg)' }} src={question.downVotes.includes(user?.result?._id) ? voted : vote} alt="err" />
                            <p>{question.downVotes.length}</p>
                        </div>
                    </div>
                    <div className='ques-body'>
                        <p className='ques-body-fc'>{question.quesBody} </p>
                        <div className='quest-tags-body'>
                            {
                                question.quesTags.map((tag, index) => {
                                    return <p className='quest-tags-body-tags' key={index}>{tag}</p>
                                })
                            }
                            <br />
                        </div>
                    </div>
                </div>
                <div className='ques-sec-one-inner-div2'>
                    <div className='ques-sec-one-inner-div2-btnbox'>
                        <div type='button' className='QuesAndAns-page-btns share-btn' onClick={handleShare}>share</div>
                        {
                            user?.result?._id === question?.userId && (
                                <div type='button' className='QuesAndAns-page-btns' onClick={handleDelete}>delete</div>
                            )
                        }
                    </div>
                    <div className='ques-sec-one-inner-div2-userbox'>
                        <p className='sec1-ask-on'>asked:- {moment(question.askedOn).fromNow()}</p>
                        <NavLink className='user-link' to={`/user/${question.userId}`}>
                            <Avatar icon={question.userPosted.charAt(0).toUpperCase()} avtStyles={avtStyles} />
                            <p>  {question.userPosted}</p>
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

export default QuesDetailSecOne
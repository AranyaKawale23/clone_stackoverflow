import React, { useEffect } from 'react'
import vote from '../../../assets/vote.png'
import voted from '../../../assets/voted.png'
import refreshImg from '../../../assets/refresh.png'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { fetchAllQues } from '../../../Actions and Reducers/Actions/quesAction'
import moment from 'moment'
import './homemiddle.css'

const HomeMiddle = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const user = useSelector((state) => (state.currentUserReducer))
  const questionlist = useSelector((state) => (state.askQuesReducer))
  const dispatch = useDispatch()

  const voteAlert = () => {

    if (user === null) {
      alert("Signup or Login First, To Perforn Vote")
      navigate("/login")
    }
    else {
      alert("To Perform Vote, Visit To Question by clicking on it")
    }
  }

  useEffect(() => {
    dispatch(fetchAllQues())
  }, [dispatch])

  return (
    <>
      <div className='middle'>
        <div className='main-bar-header'>
          {
            location.pathname === '/' ? <h2>Top Questions</h2> : <h2>All Questions</h2>
          }
          <img className='refresh-page' onClick={() => dispatch(fetchAllQues())} src={refreshImg} alt="err" />
          <div className='ask-btn' onClick={() => !user ? alert('Login or SignIn to ask Question') || navigate('/login') : navigate('/askquestion')} >Ask Question</div>
        </div>
        <div className='qus-scrl' >
          {
            questionlist === null ? <h1>loading...</h1> :
              <>
                {
                  location.pathname === '/questions' && (<h3 className='noOfques'> {questionlist.data.length} questions</h3>)
                }

                {
                  questionlist.data.map((question, index) => {
                    return location.pathname === '/questions' || question.upVotes.length >= 1 ?
                      <div key={index} className='ques-cont'>

                        <div className='votes ques-cont-childs'>
                          <div className='voter' onClick={voteAlert}>
                            <img src={question.upVotes.includes(user?.result?._id) ? voted : vote} alt="err" />
                            <p>{question.upVotes.length}</p>
                          </div>

                          <div className='voter' onClick={voteAlert}>
                            <img style={{ transform: 'rotate(180deg)' }} src={question.downVotes.includes(user?.result?._id) ? voted : vote} alt="err" />
                            <p>{question.downVotes.length}</p>
                          </div>
                        </div>

                        <div className='answers ques-cont-childs'>
                          <p>{question.answer.length}</p>
                          <p>Answers</p>
                        </div>

                        <div className='quest ques-cont-childs'>
                          <NavLink className='quest ques-cont-childs-link' to={`/question/${question._id}`}>
                            <p>{question.quesTitle}</p>
                          </NavLink>

                          <div>
                            {
                              question.quesTags.map((tag, index) => {
                                return <p className='quest-tags' key={index}> {`${tag}`}&nbsp;</p>
                              })
                            }
                          </div>

                        </div>

                        <div className='qes-time ques-cont-childs'>
                          <p>
                            asked by&nbsp;
                            {
                              question?.userId === user?.result?._id ? "you" : question.userPosted
                            }

                          </p><br />
                          <p>{moment(question.askedOn).fromNow()}</p>
                        </div>

                      </div>
                      :
                      null
                  })
                }
              </>
          }
        </div>
      </div>
    </>
  )
}

export default HomeMiddle
import React from 'react'
import { useNavigate } from 'react-router-dom'
import fbLogo from '../../../assets/fbClone.jpg'
import chatbotLogo from '../../../assets/chatbot.gif'
import { useDispatch, useSelector } from 'react-redux'
import { saveChatsAct } from '../../../Actions and Reducers/Actions/facebookAction'
import './media.css'

const Media = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => (state?.currentUserReducer))

  return (
    <>
      <div className='media-cont'>
        <div className='media-btns'>
          <img className='social-btn' src={fbLogo} alt='err' onClick={() => navigate('/fb feature')} />
          <p>fb feature</p>
        </div>

        <div className='media-btns'>
          <img className='chatbot-btn' src={chatbotLogo} alt='err' onClick={() => navigate('/chatbot') ||
            dispatch(saveChatsAct({
              _id: user?.result?._id,
              message: "Hi My Friend✋, How Can I Help You..... You Can Ask Me Any Question About Programming languages And You Can Even Ask Me AnyThing, No Hi or Hello just ask Question Directly, Because I am not Purchased API, I have less limit. My limit is 100% after it end Buy My Subscribtion from Rapid API.com",
              sepId: "RobO_cHaTBoT"
            }))
          } />
          <p>RealTime Chatbot</p>
        </div>
      </div>
    </>
  )
}

export default Media
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchAllFbUsers, saveUserChatsAct } from '../../../../Actions and Reducers/Actions/facebookAction'
import cancelImg from '../../../../assets/cancel.png'
import refreshImg from '../../../../assets/refresh.png'
import FbMessage from './FbMessage'
import './letschat.css'

const LetChat = ({ setChatContLeft, navigate, friendUser, user, dispatch, chatContLeft }) => {

    const [message, setMessage] = useState("")
    const renewData = useSelector((state) => state.facebookReducer?.data)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(saveUserChatsAct({ _id: friendUser?._id, userName: user?.result?.name, userId: user?.result?._id, userEmail: user?.result?.email, userChats: message }))
        setMessage("")
    }

    return (
        <>
            <div style={{ right: chatContLeft }} className='let-chat-cont'>
                <div className='let-chat'>
                    <p>Fb Clone Chats</p>
                    <img onClick={() => dispatch(fetchAllFbUsers())} className='let-chat-refresh-btn' src={refreshImg} alt="err" />
                    <img onClick={() => setChatContLeft("-100%")} className='let-chat-close-btn' src={cancelImg} alt="err" />
                </div>

                <div className='fb-msg-screen'>
                    {
                        renewData?.map(cuser => cuser?._id === user?.result?._id && cuser?.letsChat?.map(userss =>
                            (userss?.userId === friendUser?._id || userss?.userId === user?.result?._id) &&
                            <FbMessage key={userss?._id} userss={userss} user={user} />
                        ))
                    }
                </div>
                <div className='msg-form-div'>
                    <form onSubmit={handleSubmit} className='msg-form'>
                        <input type="text" placeholder='Write New Message...' className='write-message' value={message} onChange={(e) => setMessage(e.target.value)} />
                        <input type="Submit" defaultValue="send" className='sent-message' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default LetChat
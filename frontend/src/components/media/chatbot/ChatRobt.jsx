import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveChatsAct } from '../../../Actions and Reducers/Actions/facebookAction';
import axios from "axios";
import Chatbox from './Chatbox';
import HomeLeft from '../../pages/home/HomeLeft';
import lockImg from '../../../assets/icons8-unlock-private-50.png'
import './chatbot.css'
import { useNavigate } from 'react-router-dom';

const ChatRobt = () => {

    const [query, setQuery] = useState("")
    const dispatch = useDispatch()
    const user = useSelector((state) => (state?.currentUserReducer))
    const realTimeChats = useSelector((state) => (state?.facebookReducer?.data))
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(saveChatsAct({ _id: user?.result?._id, message: query, sepId: user?.result?._id }))

        const fetchAnsFromApi = {
            method: 'GET',
            url: 'https://question-answer.p.rapidapi.com/question-answer',
            params: { question: query },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'question-answer.p.rapidapi.com'
            }
        };

        axios.request(fetchAnsFromApi)
            .then((resp) => {
                return dispatch(saveChatsAct({ _id: user?.result?._id, message: `${resp?.data}`, sepId: "RobO_cHaTBoT" }))
            })
            .catch((err) => console.error(err));
        setQuery("")
    }

    return (
        <div className='chatbot-cont-main'>
            <HomeLeft />
            <div className='chatbot-cont'>
                <div className='chat-bot-chats-screen'>
                    {
                        user ?
                            realTimeChats?.map(users =>
                                users?._id?.includes(user?.result?._id) ?
                                    users?.chatBox?.map(cht =>

                                        cht?.sepId?.includes(user?.result?._id) ?
                                            <Chatbox key={cht?._id} msgTime={cht?.messageOn} message={cht?.message} icon={cht} user={user} /> :
                                            <Chatbox key={cht?._id} msgTime={cht?.messageOn} message={cht?.message} icon={cht} />
                                    )
                                    : null
                            )
                            : <div className='chat-res'>
                                <img className='chat-img' src={lockImg} alt='err' />
                                <p>LOGIN OR SIGNUP TO ACCESS CHATBOT</p>
                            </div>
                    }
                </div>
                <form className='chat-bot-lower-div' onSubmit={handleSubmit}>
                    <input placeholder='Ask Any Question....' className='chat-ask-ques' type="text" value={query} onChange={(e) =>user? setQuery(e.target.value):alert("Login First To Use ChatBot")||navigate("/login")} />
                    <input className='chat-ask-ques-submit' type="submit" value="send" />
                </form>
            </div>
        </div>
    )
}

export default ChatRobt
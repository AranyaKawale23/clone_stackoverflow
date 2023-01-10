import React from 'react'
import moment from 'moment'
import RoboImg from '../../../assets/asistente-robot.gif'
import Avatar from '../../avatar/Avatar'
import { useRef } from 'react';
import { useEffect } from 'react';

const Chatbox = ({ user, icon, message, msgTime }) => {

    const avtStyles = {
        color: "white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "monospace"
    }

    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        handleClick()
    })

    return (
        <>
            <div ref={ref} className='chatbot-chat-div'>
                {
                    icon?.sepId === "RobO_cHaTBoT" ?
                        <img className='chatbot-icon' src={RoboImg} alt="err" /> :
                        <div className='my-icon'>
                            <Avatar icon={user?.result?.name[0]?.toUpperCase()} avtStyles={avtStyles} />
                        </div>
                }
                <p className={icon?.sepId === "RobO_cHaTBoT" ? 'chatbot-chats' : 'my-chats'}>{message}</p>
                <p className={icon?.sepId === "RobO_cHaTBoT" ? "RobO_cHaTBoT-time" : 'my-chats-time'}>{moment(msgTime)?.fromNow()}</p>
            </div>
        </>
    )
}

export default Chatbox
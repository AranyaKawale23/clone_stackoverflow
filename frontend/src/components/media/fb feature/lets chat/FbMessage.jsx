import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { useRef } from 'react';

const FbMessage = ({ user, userss, navigate }) => {

    const [msgLeft, setmsgLeft] = useState("right")

    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        handleClick()
    })

    useEffect(() => {
        userss?.userEmail === user?.result?.email ? setmsgLeft("right") : setmsgLeft("left")
    }, [setmsgLeft, user?.result?.email, userss?.userEmail])


    return (
        <>
            <div ref={ref} className='chat-boxes'>
                <div style={{ justifyContent: msgLeft }} className='chat-inner-div'>
                    <div className='chat-msg'>
                        <p>{userss?.userChats}</p>
                        <div style={{ display: 'flex', justifyContent: msgLeft, alignItems: 'center', marginTop: '3%' }}>
                            <p className='chat-user-name' onClick={() => navigate(`/user/${userss?.userId}`)}>
                                &nbsp;By {userss?.userId === user?.result?._id ? "you" : userss?.userName} &nbsp; </p>
                            <p >{moment(userss?.messageOn).fromNow()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FbMessage
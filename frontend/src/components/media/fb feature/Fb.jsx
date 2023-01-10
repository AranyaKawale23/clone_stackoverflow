import React, { useState } from 'react'
import refreshImg from '../../../assets/refresh.png'
import { useDispatch, useSelector } from 'react-redux'
import { fbReqBtnAct, fetchAllFbUsers } from '../../../Actions and Reducers/Actions/facebookAction'
import { voteForPost, deletePost } from '../../../Actions and Reducers/Actions/fbpostsAction'
import { useNavigate, useLocation } from 'react-router-dom'
import Avatar from '../../avatar/Avatar'
import MakeReqBtn from './fb buttons/MakeReqBtn'
import RemoveRequest from './fb buttons/RemoveRequest'
import AcceptRequest from './fb buttons/AcceptRequest'
import FbSliderMenu from './fb slideMenu/FbSliderMenu'
import FbPostsScroller from './fb posts scroller/FbPostsScroller'
import PostBtn from './fb post button/PostBtn'
import copy from 'copy-to-clipboard'
import LetChat from './lets chat/LetChat'
import HomeLeft from '../../pages/home/HomeLeft'
import lockImg from '../../../assets/icons8-unlock-private-50.png'
import './fb.css'

const Fb = () => {

    const [chatContLeft, setChatContLeft] = useState('-100%')
    const [friendUser, setFriendUser] = useState('')

    const allUsers = useSelector((state) => (state.facebookReducer))
    const user = useSelector((state) => (state.currentUserReducer))
    const allUpdatedBtns = useSelector((state) => (state.fbBtnReducer))
    const allFbPosts = useSelector((state) => (state.fbpostsReducer?.data))

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const url = `https://mern-sof-clone.netlify.app`

    const avtStyles = {
        color: "white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "monospace"
    }

    const fbReqBtn = (_id, value) => {
        if (user === null) {
            alert("Signup or Login First, To Perforn Vote")
            navigate("/login")
        }
        else {
            dispatch(fbReqBtnAct({ _id, value, userId: user?.result?._id, userName: user?.result?.name }))
        }
    }

    const manageReqBtn = (_id, value, userId, userName) => {
        if (user === null) {
            alert("Signup or Login First, To Perforn Vote")
            navigate("/login")
        }
        else {
            dispatch(fbReqBtnAct({ _id, value, userId: userId, userName: userName }))
        }
    }

    const handlePostVote = (id, value) => {
        if (user === null) {
            alert("Signup or Login First, To Perforn Vote")
            navigate("/login")
        }
        else {
            dispatch(voteForPost({ id, value, userId: user?.result?._id, userEmail: user?.result?.email, userName: user?.result?.name }))
        }
    }

    const handleShare = (path) => {
        copy(`${url}${path}`)
        setTimeout(() => {
            alert("url copied to share")
        }, 100);
    }

    const handleDelete = (_id) => {
        dispatch(deletePost(_id, navigate))
    }

    return (
        <>
            <div className='fb-cont-main'>
                <HomeLeft />
                <div className='fb-cont'>
                    {
                        user ?
                            <>
                                <PostBtn dispatch={dispatch} navigate={navigate} user={user} />
                                <FbPostsScroller handleDelete={handleDelete} handlePostVote={handlePostVote} location={location} handleShare={handleShare} allFbPosts={allFbPosts} navigate={navigate} avtStyles={avtStyles} Avatar={Avatar} user={user} />
                                <FbSliderMenu setChatContLeft={setChatContLeft} setFriendUser={setFriendUser} refreshImg={refreshImg} Avatar={Avatar} MakeReqBtn={MakeReqBtn} RemoveRequest={RemoveRequest}
                                    AcceptRequest={AcceptRequest} fetchAllFbUsers={fetchAllFbUsers}
                                    allUsers={allUsers} user={user} allUpdatedBtns={allUpdatedBtns} navigate={navigate}
                                    dispatch={dispatch} avtStyles={avtStyles} fbReqBtn={fbReqBtn} manageReqBtn={manageReqBtn} />
                                <LetChat setChatContLeft={setChatContLeft} navigate={navigate} Avatar={Avatar} avtStyles={avtStyles} friendUser={friendUser} user={user} dispatch={dispatch} chatContLeft={chatContLeft} />
                            </>
                            : <div className='fb-res'>
                                <img className='fb-res-image' src={lockImg} alt='err' />
                                <p>LOGIN OR SIGNUP TO ACCESS FB COMMUNITY</p>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Fb
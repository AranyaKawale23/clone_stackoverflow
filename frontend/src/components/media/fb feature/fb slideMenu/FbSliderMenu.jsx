import React from 'react'
import FbAvaiUsers from './FbAvaiUsers'
import FbFriends from './FbFriends'
import FbRequests from './FbRequests'

const FbSliderMenu = ({ setChatContLeft, setFriendUser, refreshImg, Avatar, ChatBtn, MakeReqBtn, RemoveRequest, AcceptRequest, fetchAllFbUsers,
    setFbBtnsAct, updateFbBtnsAct, allUsers, user, allUpdatedBtns, navigate, dispatch, avtStyles, fbReqBtn, manageReqBtn }) => {

    return (
        <>
            <div className='fb-menu'>
                <div className='fb-menu-head'></div>

                <FbAvaiUsers setChatContLeft={setChatContLeft} setFriendUser={setFriendUser} allUsers={allUsers} user={user} fbReqBtn={fbReqBtn} dispatch={dispatch} allUpdatedBtns={allUpdatedBtns}
                    updateFbBtnsAct={updateFbBtnsAct} setFbBtnsAct={setFbBtnsAct} MakeReqBtn={MakeReqBtn} navigate={navigate}
                    avtStyles={avtStyles} Avatar={Avatar} />

                <FbRequests
                    allUsers={allUsers} user={user} dispatch={dispatch} navigate={navigate} avtStyles={avtStyles} Avatar={Avatar}
                    fetchAllFbUsers={fetchAllFbUsers} refreshImg={refreshImg} AcceptRequest={AcceptRequest} manageReqBtn={manageReqBtn} />

                <FbFriends
                    allUsers={allUsers} user={user} dispatch={dispatch} updateFbBtnsAct={updateFbBtnsAct} navigate={navigate} avtStyles={avtStyles}
                    Avatar={Avatar} fetchAllFbUsers={fetchAllFbUsers} refreshImg={refreshImg} ChatBtn={ChatBtn} RemoveRequest={RemoveRequest}
                    manageReqBtn={manageReqBtn} />
            </div>
        </>
    )
}

export default FbSliderMenu
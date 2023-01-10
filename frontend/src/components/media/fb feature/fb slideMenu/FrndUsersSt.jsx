import React from 'react'

const FrndUsersSt = ({ users, navigate, allUsers, user, fbReqBtn, dispatch, allUpdatedBtns, updateFbBtnsAct, setFbBtnsAct, Avatar, avtStyles
    , MakeReqBtn, setChatContLeft, setFriendUser }) => {
    return (
        <>
            {
                users ?
                    <div className='fb-users-list'>
                        <div className='fb-avt-div' onClick={() => navigate(`/user/${users?._id}`)} style={{ textDecoration: 'none' }}>
                            <Avatar icon={users?.name[0]?.toUpperCase()} avtStyles={avtStyles} />
                        </div>
                        <p onClick={() => navigate(`/user/${users?._id}`)}>{users?.name[0].toUpperCase() + users?.name.substring(1)}</p>
                        <MakeReqBtn setChatContLeft={setChatContLeft} setFriendUser={setFriendUser} navigate={navigate} setFbBtnsAct={setFbBtnsAct} updateFbBtnsAct={updateFbBtnsAct} allUpdatedBtns={allUpdatedBtns} dispatch={dispatch} fbReqBtn={fbReqBtn} users={users} user={user} allUsers={allUsers} />
                    </div> : <p>hi</p>
            }

        </>
    )
}

export default FrndUsersSt
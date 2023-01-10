import React from 'react'

const FbFriends = ({ allUsers, user, dispatch, updateFbBtnsAct, navigate, avtStyles, Avatar, fetchAllFbUsers, refreshImg,
    RemoveRequest, manageReqBtn }) => {

    return (
        <>
            <div className='fb-users-cont'>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4>Friends</h4>
                    <p className='refresh-note'>refresh New updates</p>
                    <img className='refresh-frnd-req' onClick={() => dispatch(fetchAllFbUsers())} src={refreshImg} alt="err" />
                </div>
                <div className='scrll'>
                    {
                        allUsers?.data?.map(currUser => {
                            return currUser?._id === user?.result?._id &&
                                currUser?.friends?.map(friend => {
                                    return <div key={friend?._id} className='fb-users-list'>
                                        <div className='fb-avt-div' onClick={() => navigate(`/user/${friend?.userId}`)} style={{ textDecoration: 'none' }}>
                                            <Avatar icon={friend?.userName[0]?.toUpperCase()} avtStyles={avtStyles} />
                                        </div>
                                        <p onClick={() => navigate(`/user/${friend?.userId}`)}>{friend?.userName}</p>
                                        <RemoveRequest updateFbBtnsAct={updateFbBtnsAct} dispatch={dispatch} navigate={navigate} allUsers={allUsers} manageReqBtn={manageReqBtn} friend={friend} currUser={currUser} />
                                    </div>
                                })
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FbFriends
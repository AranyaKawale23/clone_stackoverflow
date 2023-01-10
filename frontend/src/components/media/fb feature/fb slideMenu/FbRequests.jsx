import React from 'react'

const FbRequests = ({ allUsers, user, dispatch, navigate, avtStyles, Avatar, fetchAllFbUsers, refreshImg, AcceptRequest, manageReqBtn }) => {
    return (
        <>
            <div className='fb-users-cont'>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4>Friend Requests </h4>
                    <p className='refresh-note'>refresh updated data</p>
                    <img className='refresh-frnd-req' onClick={() => dispatch(fetchAllFbUsers())} src={refreshImg} alt="err" />
                </div>
                <div className='scrll'>
                    {
                        allUsers?.data?.map(currUser => {
                            return currUser?._id?.includes(user?.result?._id) ?
                                currUser?.frequest?.map(freqs =>
                                    freqs ?
                                        <div key={freqs.userId} className='fb-users-list'>
                                            <div className='fb-avt-div' onClick={() => navigate(`/user/${freqs?.userId}`)} style={{ textDecoration: 'none' }}>
                                                <Avatar icon={freqs?.userName[0]?.toUpperCase()} avtStyles={avtStyles} />
                                            </div>
                                            <p onClick={() => navigate(`/user/${freqs?.userId}`)}>{freqs?.userName}</p>
                                            <AcceptRequest manageReqBtn={manageReqBtn} freqs={freqs} currUser={currUser} />
                                        </div>
                                        : null
                                )

                                : null
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FbRequests
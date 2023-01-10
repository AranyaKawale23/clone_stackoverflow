import React, { useState } from 'react'

const RemoveRequest = ({ manageReqBtn, friend, currUser }) => {

    const [reqBtn, setReqBtn] = useState("Remove From Friends")
    const requester = () => {
        manageReqBtn(friend?.userId, "removeFrndRequest", currUser?._id, currUser?.name)
        manageReqBtn(currUser?._id, "removeFrndRequest", friend?.userId, friend?.userName)
        setReqBtn("Removing")
    }

    return (
        <>
            <div style={{ backgroundColor: 'red', cursor: 'pointer' }} className='req-btn' onClick={() => requester()}>
                {reqBtn}
            </div>
        </>
    )
}

export default RemoveRequest
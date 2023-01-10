import React, { useState } from 'react'

const AcceptRequest = ({ freqs, currUser, manageReqBtn }) => {

    const [reqBtn, setReqBtn] = useState("Accept Request")

    const requester = () => {
        if (reqBtn === "Accept Request") {
            manageReqBtn(freqs?.userId, "acceptFrndRequest", currUser?._id, currUser?.name)
            manageReqBtn(currUser?._id, "acceptFrndRequest", freqs?.userId, freqs?.userName)
            setReqBtn("Accepted")
        }
    }

    return (
        <>
            <div style={{ backgroundColor: 'green', cursor: 'pointer' }} className='req-btn' onClick={() => requester()}>
                {reqBtn}
            </div>
        </>
    )
}

export default AcceptRequest
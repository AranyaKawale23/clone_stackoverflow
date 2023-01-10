import React, { useEffect, useState } from 'react'

const MakeReqBtn = ({ setChatContLeft, setFriendUser, navigate, users, user, fbReqBtn }) => {

    const [reqBtn, setReqBtn] = useState("Add To Friend +")
    const [reqBtnColor, setReqBtnColor] = useState("rgb(0, 121, 225)")

    const requester = () => {

        reqBtn === "Add To Friend +" && (fbReqBtn(users?._id, "sendFrndRequest"))
        reqBtn === "Cancel Request" && (fbReqBtn(users?._id, "cancelFrndRequest"))
        reqBtn === "Let's Chat" && (setFriendUser(users) || setChatContLeft("0%"))
    }

    useEffect(() => {
        users?.frequest?.map(freq => freq?.userId?.includes(user?.result?._id) && (setReqBtn("Cancel Request") || setReqBtnColor("red")))
        users?.crequest?.map(freq => freq?.userId?.includes(user?.result?._id) && (setReqBtn("Add To Friend +") || setReqBtnColor("rgb(0, 121, 225)")))
        users?.friends?.map(frndList => frndList?.userId?.includes(user?.result?._id) && (setReqBtn("Let's Chat") || setReqBtnColor("black")))
    })

    return (
        <>
            <div className='req-btn' style={{ backgroundColor: reqBtnColor, cursor: 'pointer' }} onClick={() => !user ? alert("login or sigup to perform actions") || navigate("/login") : requester()}>
                {reqBtn}
            </div>
        </>
    )
}

export default MakeReqBtn


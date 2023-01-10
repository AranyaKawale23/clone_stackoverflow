import React from 'react'
import { useState } from 'react'
import FrndUsersSt from './FrndUsersSt'

const FbAvaiUsers = ({ setChatContLeft, setFriendUser, allUsers, user, fbReqBtn, dispatch, allUpdatedBtns, updateFbBtnsAct, setFbBtnsAct,
    MakeReqBtn, navigate, avtStyles, Avatar }) => {

    const [searchedUser, setSearchedUser] = useState("")

    return (
        <>
            <div className='fb-users-cont'>
                {
                    allUsers === null ? <h3>No Users Available...</h3> :
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: '3%' }}>
                            <h4>Other Available Users ({allUsers?.data?.length - 1})</h4>
                            <input className='search-friends' value={searchedUser} onChange={(e) =>user? setSearchedUser(e.target.value):alert("login first")||navigate("/login")} type="text" placeholder='search users...' />
                        </div>
                }
                <div className='scrll'>
                    {
                        allUsers?.data?.map(users => {
                            return users?._id.includes(user?.result._id) ? null :
                                searchedUser === "" ?
                                    <FrndUsersSt key={users._id} navigate={navigate} users={users} allUsers={allUsers} user={user} fbReqBtn={fbReqBtn} dispatch={dispatch}
                                        allUpdatedBtns={allUpdatedBtns} updateFbBtnsAct={updateFbBtnsAct} setFbBtnsAct={setFbBtnsAct}
                                        Avatar={Avatar} avtStyles={avtStyles} MakeReqBtn={MakeReqBtn} setChatContLeft={setChatContLeft}
                                        setFriendUser={setFriendUser} />
                                    : users?.name?.toLowerCase()?.includes(searchedUser.toLowerCase()) ?
                                        <FrndUsersSt key={users._id} navigate={navigate} users={users} allUsers={allUsers} user={user} fbReqBtn={fbReqBtn} dispatch={dispatch}
                                            allUpdatedBtns={allUpdatedBtns} updateFbBtnsAct={updateFbBtnsAct} setFbBtnsAct={setFbBtnsAct}
                                            Avatar={Avatar} avtStyles={avtStyles} MakeReqBtn={MakeReqBtn} setChatContLeft={setChatContLeft}
                                            setFriendUser={setFriendUser} /> : null
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FbAvaiUsers
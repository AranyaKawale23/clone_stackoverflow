import React, { useState } from 'react'
import Homeleft from '../home/HomeLeft'
import Avatar from '../../../components/avatar/Avatar'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import EditProfile from './EditProfile'
import ProfileBio from './ProfileBio'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../../Actions and Reducers/Actions/authAction'
import './userprofile.css'

const UsersProfile = () => {

    const avtStyles = {
        height: "60px",
        width: "60px",
        backgroundColor: "rgb(255, 0, 0)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "monospace",
    }

    const { id } = useParams()
    const [switchh, setSwitch] = useState(false)

    const users = useSelector((state) => (state.fetchAllUsers))
    const currentProfile = users?.data?.filter(user => user?._id === id)[0]
    const currentUser = useSelector((state) => (state.currentUserReducer))

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleEdit = () => {
        setSwitch(true)
    }

    const handleLogOut = () => {
        dispatch(logOut(navigate))
    }

    return (
        <>
            <div className='user-prof'>
                <Homeleft />
                <div className='user-prof-cont'>
                    <section>
                        <div className='user-details-cont'>
                            <div className='user-details'>
                                <Avatar icon={currentProfile?.name?.charAt(0).toUpperCase()} avtStyles={avtStyles} />
                                <div className='user-name'>
                                    <h2>{currentProfile?.name}</h2>
                                    <p><FontAwesomeIcon icon={faBirthdayCake} /> member for {moment(currentProfile?.joinedOn).fromNow()}</p>
                                </div>
                            </div>
                            {
                                switchh ? <EditProfile currentProfile={currentProfile} setSwitch={setSwitch} /> : <ProfileBio currentProfile={currentProfile} />
                            }
                            {
                                currentUser?.result._id === id && (
                                    <button type='button' className='edit-profile-btn' onClick={handleEdit}><FontAwesomeIcon icon={faPen} />Edit Profile</button>
                                )
                            }
                        </div>

                        {
                            currentUser?.result._id === id && (
                                <button onClick={handleLogOut} className="logout-btn">Log Out</button>
                            )
                        }

                    </section>
                </div>
            </div>
        </>
    )
}

export default UsersProfile
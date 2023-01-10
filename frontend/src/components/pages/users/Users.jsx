import React from 'react'
import HomeLeft from '../home/HomeLeft'
import UsersList from './UsersList'
import './users.css'

const Users = () => {

    return (
        <>
            <div className='users-cont'>
                <HomeLeft />
                <div className='user-cont'>
                    <h1>Users</h1><br />
                    <UsersList />
                </div>
            </div>
        </>
    )
}

export default Users
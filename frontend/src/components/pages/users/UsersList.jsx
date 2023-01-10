import React from 'react'
import { useSelector } from 'react-redux'
import User from './User'

const UsersList = () => {
    const users = useSelector((state) => (state.fetchAllUsers))

    return (
        <>
            <div className='users-box'>
                {
                    users?.data.map(user => {
                        return <User user={user} key={user?._id} />
                    })
                }
            </div>
        </>
    )
}

export default UsersList
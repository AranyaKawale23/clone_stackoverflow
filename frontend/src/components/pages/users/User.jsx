import React from 'react'
import { NavLink } from 'react-router-dom'

const User = ({ user }) => {

  return (
    <>
      <NavLink to={`/user/${user._id}`} className='all-users-box'>
        <h3>{user?.name?.charAt(0).toUpperCase()}</h3>
        <h5>{user?.name.length > 5 ? user?.name?.slice(0,3).concat('..') : user?.name}</h5>
      </NavLink>
    </>
  )
}

export default User
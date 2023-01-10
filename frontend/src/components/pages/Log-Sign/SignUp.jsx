import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { signup } from '../../../Actions and Reducers/Actions/authAction'
import { useDispatch } from 'react-redux'


const SignUp = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signup({ name, email, password }, navigate));
  }

  return (
    <>
      <div className='section-div'>
        <form className='section-form' onSubmit={handleSubmit}>

          <label htmlFor="text" className='sec-form-childs'>Name</label>
          <input type="text" placeholder='Enter Name' className='sec-form-childs' value={name} onChange={(e) => setName(e.target.value)} />

          <label htmlFor="email" className='sec-form-childs'>Email</label>
          <input type="email" placeholder='Enter Email' className='sec-form-childs' value={email} onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="password" className='sec-form-childs'>Password</label>
          <input type="password" placeholder='Enter Password' autoComplete="on" className='sec-form-childs' value={password} onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor='check' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <input type='checkbox' id='check' style={{ height: '15px', width: '15px', margin: '8%' }} required />
            <p style={{color:'black'}}>Term & conditions check</p>
          </label>
          <input type='submit' value='SignUp' className='sec-form-btn' id='signin-btn' />
        </form>

        <p className='last-text'>
          Already have an account ? <NavLink style={{ color: 'yellowgreen' }} to={'/login'}> Login </NavLink>
        </p>
      </div>
    </>
  )
}

export default SignUp
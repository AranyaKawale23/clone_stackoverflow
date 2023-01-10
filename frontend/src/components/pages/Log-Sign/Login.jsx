import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { login } from '../../../Actions and Reducers/Actions/authAction'
import { useDispatch } from 'react-redux'
import './log_sign.css'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleForm(e) {
    e.preventDefault()
    dispatch(login({ email, password }, navigate));
  }

  return (
    <>
      <div className='section-div'>
        <form className='section-form' onSubmit={handleForm}>
          <label htmlFor="email" className='sec-form-childs'>Email</label>
          <input type="email" placeholder='Enter Email' className='sec-form-childs' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label htmlFor="password" className='sec-form-childs'>Password</label>
          <input type="password" placeholder='Enter Password'  autoComplete="on"  className='sec-form-childs' value={password} onChange={(e) => setPassword(e.target.value)} required />
          <input type='submit' value='Login' className='sec-form-btn' />
        </form>

        <p className='last-text'>
          Don't have an account ? <NavLink style={{ color: 'yellowgreen' }} to={'/signup'}> Sign Up </NavLink>
        </p>
      </div>
    </>
  )
}

export default Login
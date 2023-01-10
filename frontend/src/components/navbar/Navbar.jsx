import React, { useEffect, useState } from 'react'
import Avatar from '../avatar/Avatar'
import logo from '../../assets/stack logo.png'
import search from '../../assets/search-icon.svg'
import './navbar.css'

// ------- packages ----------
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { currentUserAction, fetchAllUsers } from '../../Actions and Reducers/Actions/usersAction'
import { logOut } from '../../Actions and Reducers/Actions/authAction'
import decode from 'jwt-decode'

const Navbar = () => {

    const [routeName, setRoute] = useState("")

    const avtStyles = {
        backgroundColor: "rgb(255, 0, 0)",
        color: "white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "monospace"
    }

    const dispatch = useDispatch()
    const user = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

    // --- save the states ---- 
    useEffect(() => {
        const token = user?.token
        if (token) {
            const decodeToken = decode(token)
            if (decodeToken.exp * 1000 < new Date().getTime())
                dispatch(logOut(navigate))
        }
        dispatch(currentUserAction(JSON.parse(localStorage.getItem("profile"))))
        // eslint-disable-next-line
    }, [dispatch])

    function handleRoute() {
        routeName.toLowerCase() === "home" ? navigate(`/`) : navigate(`/${routeName}`)
    }

    return (
        <>
            <nav className='navbar'>
                <NavLink to={'/'} className='navbar-childs nav-flex-childs'>
                    <img className='nav-logo' src={logo} alt="err" />
                    <p className=''>StackOverflow</p>
                </NavLink>

                <NavLink className='navbar-childs' to={'/media'}><p>Media</p></NavLink>
                <NavLink className='navbar-childs nav-extra-childs' to={'/payment'}><p>Plans</p></NavLink>
                <NavLink className='navbar-childs nav-extra-childs' to={'#'}><p>ForTeam</p></NavLink>

                <form className='nav-form nav-flex-childs'>
                    <input className='nav-search' type={'text'} value={routeName} onChange={(e) => setRoute(e.target.value)} placeholder='Search page...' />
                    <img className='nav-search-icon' onClick={handleRoute} src={search} alt="err" />
                </form>
                {
                    user === null ? <NavLink className='navbar-childs nav-login' to='/login'><h4>Login</h4></NavLink> :
                        <>
                            <NavLink onClick={() => dispatch(fetchAllUsers())} className='nav-avatar' style={{ textDecoration: 'none' }} to={`/user/${user?.result?._id}`}>
                                <Avatar icon={user.result.name.charAt(0).toUpperCase()} avtStyles={avtStyles} />
                            </NavLink>
                        </>
                }
            </nav>
        </>
    )
}

export default Navbar
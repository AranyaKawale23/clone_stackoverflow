import React from 'react'
import globe from '../../../assets/globe.png'
import { NavLink } from 'react-router-dom'
import { saveChatsAct } from '../../../Actions and Reducers/Actions/facebookAction'
import { useDispatch, useSelector } from 'react-redux'
import './homeleft.css'

const HomeLeft = () => {

    const dispatch = useDispatch()
    const user = useSelector((state) => (state?.currentUserReducer))

    return (
        <nav className='left-menu-bar'>
            <NavLink className='left-menubar-childs left-menu-links' to={'/'}><p>Home</p></NavLink>
            <p className='left-menubar-childs public'>PUBLIC</p>
            <NavLink className='left-menubar-childs left-menu-links' to={'/questions'}>
                <img className='left-menu-img' src={globe} alt='err' />
                <p>Questions</p>
            </NavLink>
            <NavLink className='left-menubar-childs left-menu-links left-menu-tags' to={'/tags'}><p>Tags</p></NavLink>
            <NavLink className='left-menubar-childs left-menu-links left-menu-tags' to={'/users'}><p>Users</p></NavLink>
            <NavLink className='left-menubar-childs left-menu-links left-menu-tags' to={'/chatbot'}><p onClick={() =>
                dispatch(saveChatsAct({
                    _id: user?.result?._id,
                    message: "Hi My Friend✋, How Can I Help You..... You Can Ask Me Any Question About Programming languages And You Can Even Ask Me AnyThing, No Hi or Hello just ask Question Directly, Because I am not Purchased API, I have less limit. My limit is 100% after it end Buy My Subscribtion from Rapid API.com",
                    sepId: "RobO_cHaTBoT"
                }))
            }>ChatBot</p></NavLink>
            <NavLink className='left-menubar-childs left-menu-links left-menu-tags' to={'/fb feature'}><p>Fb Feature</p></NavLink>
        </nav>
    )
}

export default HomeLeft
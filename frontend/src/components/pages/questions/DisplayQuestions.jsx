import React from 'react'
import { useLocation } from 'react-router-dom'
import HomeLeft from '../home/HomeLeft'
import HomeMiddle from '../home/HomeMiddle'
import HomeRight from '../home/HomeRight'
import QuestionDetails from './QuestionDetails'

const DisplayQuestions = () => {

    const location = useLocation()

    return (
        <>
            <div className='home-cont'>
                <HomeLeft />
                {
                    location.pathname === '/questions' ? <HomeMiddle /> : <QuestionDetails />
                }
                <HomeRight />
            </div>
        </>
    )
}

export default DisplayQuestions
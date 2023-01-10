import React from 'react'
import HomeLeftBar from '../home/HomeLeft'
import TagList from './TagList.jsx'
import './tag.css'

const Tag = () => {
    return (
        <div className='tags-cont'>
            <HomeLeftBar />
            <div className='tag-cont'>
                <h2>TAGS</h2>
                <p>A tag is a keyword to categorize your question with other.</p>
                <p>Using the right keyword makes exsier for other to find your question and answer it.</p>
                <TagList />
            </div>
        </div>
    )
}

export default Tag
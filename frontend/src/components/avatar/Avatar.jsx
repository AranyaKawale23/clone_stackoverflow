import React from 'react'
import '../navbar/navbar.css'

const Avatar = (props) => {

    return (
        <>
            <div style={props.avtStyles} className='avatar'>
                <p>{props.icon}</p>
            </div>
        </>
    )
}

export default Avatar
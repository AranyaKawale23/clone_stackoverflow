import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateProfile } from '../../../Actions and Reducers/Actions/usersAction'

const EditProfile = ({ currentProfile, setSwitch }) => {

    const [name, setName] = useState(currentProfile?.name)
    const [about, setAbout] = useState(currentProfile?.about)
    const [tags, setTags] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (tags.length === 0) {
            dispatch(updateProfile(currentProfile?._id, { name, about, tags: currentProfile?.tags }))
        } else {
            dispatch(updateProfile(currentProfile?._id, { name, about, tags }))
        }
        setSwitch(false)
    }

    return (
        <>
            <div className='edit-div'>
                <h1>Edit Your Profile </h1>
                <form className='edit-prof-form' onSubmit={handleSubmit}>
                    <label htmlFor='name'>
                        <h3>Displayed Name</h3>
                        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                    </label>

                    <label htmlFor='about'>
                        <h3>About me</h3>
                        <textarea id="about" cols="30" rows="10" value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
                    </label>
                    <label htmlFor='tags'>
                        <h3>Watched Tags</h3>
                        <p>Add tags seprated by : space</p>
                        <input type="text" id='tags' value={tags} placeholder="node, react, javascript, etc." onChange={(e) => setTags(e.target.value)} />
                    </label><br />
                    <input type="submit" value="save profile" className='edit-prof-save-btn' />
                    <button type='button' className='edit-prof-cancel-btn' onClick={() => setSwitch(false)}>cancel</button>
                </form>
            </div>
        </>
    )
}

export default EditProfile
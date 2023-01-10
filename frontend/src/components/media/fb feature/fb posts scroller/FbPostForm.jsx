import React, { useState } from 'react'
import Axios from 'axios'
import { postFbImg } from '../../../../Actions and Reducers/Actions/fbpostsAction'
import './fbpostform.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const FbPostForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => (state.currentUserReducer))

    const [writePost, setWrittenPost] = useState("")
    const [image, setImage] = useState("")
    const [postType, setpostType] = useState("")
    const [postbtn, setPostbtn] = useState("Post")
    const [cloudnaryUrlType, setCloudnaryUrlType] = useState("")

    const uploadImage = () => {
        setCloudnaryUrlType(postType?.toLowerCase())
        setPostbtn("wait..")
        const formData = new FormData()
        formData.append("file", image)
        formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)

        Axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/${cloudnaryUrlType}/upload`, formData)
            .then((res) => {
                dispatch(postFbImg({
                    userId: user?.result?._id, userName: user?.result?.name, postDisc: writePost, publicId: res?.data?.public_id,
                    resourceType: res?.data?.resource_type,
                }, navigate))
            })
            .catch((err) => console.log(err))

        setTimeout(() => {
            setPostbtn("Post")
        }, 3000);
        setpostType("")
    }

    return (
        <>
            <div className='post-in-fb-form'>
                <form className='post-media-form' onSubmit={handleSubmit}>
                    <label htmlFor='post-title'>
                        <p>Write a Post</p><br />
                        <textarea type="text" id='post-title' placeholder='partying with friends... 🎉🎊🎈'
                            value={writePost} onChange={(e) => setWrittenPost(e.target.value)} />
                    </label><br />

                    <input className='img-choose-btn' type="file" onChange={(e) => setImage(e.target.files[0])} /><br />
                    <label className='post-type' htmlFor="postType">
                        <p>POST TYPE</p>
                        <input id='postType' value={postType} onChange={(e) => setpostType(e.target.value)} type="text" placeholder=' image / video' />
                    </label>
                    <button className='img-upload-btn' type="submit" onClick={uploadImage}>{postbtn}</button>
                </form>
            </div>
        </>
    )
}

export default FbPostForm
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import moment from 'moment'
import Avatar from '../../../avatar/Avatar'
import { Image, Video, Transformation } from 'cloudinary-react'
import vote from '../../../../assets/vote.png'
import voted from '../../../../assets/voted.png'
import copy from 'copy-to-clipboard'
import './fbcurruserposts.css'
import { voteForPost, deletePost } from '../../../../Actions and Reducers/Actions/fbpostsAction'

const FbCurrUserPosts = () => {

    let cloud = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME

    const avtStyles = {
        color: "white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "monospace"
    }

    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const url = `https://mern-sof-clone.netlify.app`
    const allFbPosts = useSelector((state) => (state.fbpostsReducer?.data))
    const user = useSelector((state) => (state.currentUserReducer))

    const handlePostVote = (id, value) => {
        if (user === null) {
            alert("Signup or Login First, To Perforn Vote")
            navigate("/login")
        }
        else {
            dispatch(voteForPost({ id, value, userId: user?.result?._id, userName: user?.result?.name }))
        }
    }

    const handleShare = (path) => {
        copy(`${url}${path}`)
        setTimeout(() => {
            alert("url copied to share")
        }, 100);
    }

    return (
        <>
            <div className='fbuser-posts-cont'>
                <div className='fbuser-posts'>
                    {
                        allFbPosts?.map(allposts => {
                            return allposts?._id === params?.id ?
                                <div key={allposts?._id}>

                                    <div onClick={() => navigate(`/user/${user?.result?._id}`)} className='fbuser-post-head'>
                                        <div className="fbuser-user-icon">
                                            <Avatar icon={allposts?.userName[0]?.toUpperCase()} avtStyles={avtStyles} />
                                        </div>
                                        <h4>{allposts?.userName}</h4>
                                    </div>

                                    <p className='fbuser-post-disc'>{allposts?.postDisc}</p>
                                    <div className='fbuser-post-div'>
                                        {
                                            allposts?.resourceType === "image" ?
                                                <Image onClick={() => navigate(`/fb feature/${allposts?._id}`)} className="fb-posted-img" cloudName={cloud} publicId={allposts?.publicId} /> :
                                                <Video controls onClick={() => navigate(`/fb feature/${allposts?._id}`)} className="fb-posted-img" cloudName={cloud} publicId={allposts?.publicId} >
                                                    <Transformation overlay="text:arial_60:watchme" gravity="north" y="20" />
                                                </Video>
                                        }
                                    </div>

                                    <div className='fb-post-btns'>
                                        <div onClick={() => handlePostVote(allposts?._id, "like")} className='fb-vote-box'>
                                            <img className='fb-vote-btns' src={allposts?.imgLike.includes(user?.result?._id) ? voted : vote} alt="err" />
                                            <p>{allposts?.imgLike?.length}</p>
                                        </div>

                                        <div onClick={() => handlePostVote(allposts?._id, "dislike")} className='fb-vote-box'>
                                            <img className='fb-vote-btns' style={{ transform: 'rotate(180deg)' }} src={allposts?.imgDisLike.includes(user?.result?._id) ? voted : vote} alt="err" />
                                            <p>{allposts?.imgDisLike?.length}</p>
                                        </div>

                                        <button onClick={() => handleShare(`${location.pathname}`)} className='fb-post-share'>share</button>

                                        {
                                            user?.result?._id === allposts?.userId ? <button onClick={() => dispatch(deletePost({ _id: allposts?._id }, navigate))} className='fb-post-delete'>delete</button> : null
                                        }

                                    </div>
                                    <p className='fbuser-posted-on'>Posted {moment(allposts?.postedDate).fromNow()}</p>
                                </div>
                                : null
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FbCurrUserPosts
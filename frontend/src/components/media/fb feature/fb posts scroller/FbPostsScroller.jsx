import React from 'react'
import { Image, Video, Transformation } from 'cloudinary-react'
import vote from '../../../../assets/vote.png'
import voted from '../../../../assets/voted.png'
import moment from 'moment'
import './fbpostscroller.css'

const FbPostsScroller = ({ handleDelete, handlePostVote, location, handleShare, allFbPosts, navigate, avtStyles, Avatar, user }) => {

    let cloud = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME

    return (
        <>
            <div className='fb-posts-scroller'>
                {
                    allFbPosts?.length === 0 ? <h3 style={{ padding: '2%' }}>No Posts Available...</h3> :
                        allFbPosts?.map(allposts => {
                            // console.log(allposts);
                            return <div key={allposts?._id} className='fb-post' >

                                <div onClick={() => navigate(`/user/${allposts?.userId}`)} className='fb-post-head'>
                                    <div className="fb-post-user-icon">
                                        <Avatar icon={allposts?.userName[0]?.toUpperCase()} avtStyles={avtStyles} />
                                    </div>
                                    <h4>{allposts?.userName}</h4>
                                </div>

                                <p className='fb-post-disc'>{allposts?.postDisc}</p>
                                <div className='fb-post-div'>
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

                                    <button onClick={() => handleShare(`${location.pathname}/${allposts?._id}`)} className='fb-post-share'>share</button>

                                    {
                                        user?.result?._id === allposts?.userId ? <button onClick={() => handleDelete({ _id: allposts?._id })} className='fb-post-delete'>delete</button> : null
                                    }

                                </div>

                                <p className='fbuser-posted-on'>Posted {moment(allposts?.postedDate).fromNow()}</p>
                            </div>
                        })
                }
            </div>
        </>
    )
}

export default FbPostsScroller
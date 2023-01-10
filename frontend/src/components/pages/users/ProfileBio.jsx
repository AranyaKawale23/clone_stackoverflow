import React from 'react'

const ProfileBio = ({ currentProfile }) => {
    return (
        <>
            <div className='down-cont'>
                <div className='prof-bio-cont'>
                    {
                        currentProfile?.about ?
                            <>
                                <h2>About</h2>
                                <h3>{currentProfile?.about}</h3>
                            </>
                            :
                            <h1>No Bio Found</h1>
                    }
                </div>
                <div className='prof-tag-cont'>
                    {
                        currentProfile?.tags.length !== 0 ?
                            <>
                                <h1>Tags watched</h1>
                                {
                                    currentProfile?.tags.map(tag =>
                                        <p key={tag}>{tag}</p>
                                    )
                                }
                            </>
                            :
                            <h3>0 Tags Watched</h3>
                    }
                </div>
            </div>
        </>
    )
}

export default ProfileBio
import * as api from '../../API/Api'

const postFbImg = (postsImgData, navigate) => async (dispatch) => {
    try {
        await api.postFbImgApi(postsImgData)
        dispatch({ type: 'POST_IMAGE' })
        navigate('/fb feature')
        dispatch(fetchFbPosts())
    } catch (error) {
        console.log(error);
    }
}

const voteForPost = (voteFbPostData) => async (dispatch) => {
    try {
        await api.voteFbPosts(voteFbPostData)
        dispatch({ type: 'VOTE_FB_POST' })
        dispatch(fetchFbPosts())
    }
    catch (error) {
        console.log(error);
    }
}

const fetchFbPosts = () => async (dispatch) => {
    try {
        const data = await api.fetchAllFbPosts()
        dispatch({ type: 'FETCH_POSTED_IMAGE', payload: data })

    } catch (error) {
        console.log(error);
    }
}

const deletePost = (_id, navigate) => async (dispatch) => {

    try {
        await api.deletePost(_id)
        dispatch({ type: 'DEL_POST' })
        dispatch(fetchFbPosts())
        navigate('/fb feature')
    }
    catch (error) {
        console.log(error);
    }
}


export { postFbImg, fetchFbPosts, voteForPost, deletePost }
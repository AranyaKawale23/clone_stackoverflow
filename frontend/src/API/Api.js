import axios from 'axios'

const api = axios.create({
    baseURL: "https://mern-sof-backend.onrender.com"
    
})

api.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
        // console.log("middleware working");
    }
    return req;
})

let data;

const signup = (authData) => {
    data = api.post('/user/signup', authData)
    return data;
}

const login = (authData) => {
    data = api.post('/user/login', authData)
    return data;
}

const askQues = (questionData) => {
    data = api.post('/questions/ask', questionData)
    return data;
}

const getAllQuestions = () => {
    data = api.get('/questions/getquest')
    return data;
}

const deleteQuestion = (id) => {
    data = api.delete(`/questions/delete/${id}`)
    return data;
}

const voteForQuestion = (id, voteData) => {
    data = api.patch(`/questions/voteques/${id}`, voteData)
    return data;
}

const postAnswer = (ansData) => {
    data = api.patch(`/answers/postanswer/${ansData.id}`, ansData)
    return data;
}

const deleteAnswer = (ansData) => {
    data = api.patch(`/answers/deleteanswer/${ansData.id}`, ansData)
    return data;
}

const fetchAllUsers = () => {
    data = api.get(`/user/getallusers`)
    return data;
}

const updateProfile = (id, updateData) => {
    data = api.patch(`/user/update/${id}`, updateData)
    return data;
}

const getUpdatedProfile = (id) => {
    data = api.get(`/user/update/${id}`)
    return data;
}

const fbReqBtn = (fbReqData) => {
    data = api.patch(`/user/fbReqBtn`, fbReqData)
    return data;
}

const fetchAllFbUsersData = () => {
    data = api.get(`/user/fbReqBtn`)
    return data;
}

const postFbImgApi = (postsImgData) => {
    data = api.post('/socialmedia/postyourpost', postsImgData)
    return data;
}

const fetchAllFbPosts = () => {
    data = api.get(`/socialmedia/posts`)
    return data;
}

const saveUserMessages = (userChatData) => {
    const data = api.patch(`/user/saveuserchats`, userChatData)
    return data;
}

const saveChatbotMessages = (chatData) => {
    const data = api.patch(`/user/savechats`, chatData)
    return data;
}

const voteFbPosts = (voteFbPostData) => {
    const data = api.patch(`/socialmedia/votepost`, voteFbPostData)
    return data;
}

const deletePost = (_id) => {
    const data = api.patch(`/socialmedia/deletepost`, _id)
    return data;
}

export {
    signup, login, askQues, getAllQuestions, postAnswer, deleteQuestion, deleteAnswer, voteForQuestion, fetchAllUsers, updateProfile,
    getUpdatedProfile, fbReqBtn, fetchAllFbUsersData, postFbImgApi, fetchAllFbPosts, voteFbPosts,
    deletePost, saveChatbotMessages, saveUserMessages
}
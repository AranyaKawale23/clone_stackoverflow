import express from 'express'
import { login, signup, getAllUsers, updateProfile, getUpdatedProfile, fbFrndRequest, fetchAllFbUsers, saveUserChats, saveChatbotChats } from '../Authentication/authFunctions.js'

const userRoutes = express.Router()

userRoutes.post('/signup', signup)
userRoutes.post('/login', login)
userRoutes.get('/getallusers', getAllUsers)
userRoutes.patch('/update/:id', updateProfile)
userRoutes.get('/update/:id', getUpdatedProfile)
userRoutes.patch('/saveuserchats', saveUserChats)
userRoutes.patch('/savechats', saveChatbotChats)
userRoutes.patch('/fbReqBtn', fbFrndRequest)
userRoutes.get('/fbReqBtn', fetchAllFbUsers)

export default userRoutes
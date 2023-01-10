import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import usersModel from '../model/userModel.js'
import mongoose from 'mongoose'

async function signup(req, resp) {

    const { name, email, password } = req.body

    try {
        const existingUser = await usersModel.findOne({ email })
        if (existingUser) {
            return resp.status(404).json("User Already Exist's")
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await usersModel.create({ name, email, password: hashedPassword })
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, `${process.env.JWT_SECRET}`, { expiresIn: '1h' })
        resp.status(200).json({ result: newUser, token })

    } catch (error) {
        return resp.status(500).json("Something Wen't Wrong")
    }
}

async function login(req, resp) {
    const { email, password } = req.body
    try {

        const existingUser = await usersModel.findOne({ email })

        if (!existingUser) {
            return resp.status(404).json("User doesn't Exist's")
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

        if (!isPasswordCorrect) {
            return resp.status(400).json("invalid password")
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, `${process.env.JWT_SECRET}`, { expiresIn: '1h' })
        resp.status(200).json({ result: existingUser, token })

    } catch (error) {
        return resp.status(500).json("Something Wen't Wrong")
    }
}

const getAllUsers = async (req, resp) => {

    try {
        const allUsers = await usersModel.find()
        const allUsersDetails = []
        allUsers.forEach(users => {
            allUsersDetails.push({ _id: users._id, name: users.name, about: users.about, tags: users.tags, joinedOn: users.joinedOn })
        })
        resp.status(200).json(allUsersDetails)
    } catch (error) {
        resp.status(400).json({ message: error.message })
    }
}

const updateProfile = async (req, resp) => {
    const { id: _id } = req.params;
    const { name, about, tags } = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return resp.status(404).send("user doesn't exist")
    }

    try {
        const updatedProfile = await usersModel.findByIdAndUpdate(_id, { $set: { 'name': name, 'about': about, 'tags': tags } }, { new: true })
        resp.status(200).json(updatedProfile)
    } catch (error) {
        resp.status(405).json({ message: error.message })
    }
}

const getUpdatedProfile = async (req, resp) => {

    try {
        const updatedUser = await usersModel.find()
        const updatedUserDetails = []
        updatedUser.forEach(users => {
            updatedUserDetails.push({ _id: users._id, name: users.name, about: users.about, tags: users.tags, joinedOn: users.joinedOn })
        })
        resp.status(200).json(updatedUserDetails)
    } catch (error) {
        resp.status(400).json({ message: error.message })
    }
}

const fbFrndRequest = async (req, resp) => {

    const { _id, value, userId, userName } = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return resp.status(404).send("user doesn't exist")
    }
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return resp.status(404).send("user doesn't exist")
    }

    try {

        let fbReqData = await usersModel.findById(_id)

        if (value === "sendFrndRequest") {
            if (!fbReqData?.frequest?.includes(userId)) {
                fbReqData = await usersModel.findByIdAndUpdate(_id, { $addToSet: { "frequest": [{ userId, userName }] } })
                fbReqData = await usersModel.findByIdAndUpdate({ _id: _id }, { $pull: { "crequest": { userId: userId, userName: userName } } })
                resp.status(200).json(fbReqData)
            }
            if (fbReqData?.frequest?.includes(userId)) {
                fbReqData = await usersModel.findByIdAndUpdate({ _id: _id }, { $pull: { "frequest": { userId: userId, userName: userName } } })
                resp.status(200).json(fbReqData)
            }
        }

        if (value === "cancelFrndRequest") {
            if (!fbReqData?.crequest?.includes(userId)) {
                fbReqData = await usersModel.findByIdAndUpdate(_id, { $addToSet: { "crequest": [{ userId, userName }] } })
                fbReqData = await usersModel.findByIdAndUpdate({ _id: _id }, { $pull: { "frequest": { userId: userId, userName: userName } } })
                resp.status(200).json(fbReqData)
            }
        }

        if (value === "acceptFrndRequest") {
            if (!fbReqData?.friends?.includes(userId)) {
                fbReqData = await usersModel.findByIdAndUpdate({ _id: _id }, { $pull: { "frequest": { userId: userId, userName: userName } } })
                fbReqData = await usersModel.findByIdAndUpdate(_id, { $addToSet: { "friends": [{ userId, userName }] } })
                resp.status(200).json(fbReqData)
            }
        }

        if (value === "removeFrndRequest") {
            fbReqData = await usersModel.findByIdAndUpdate({ _id: _id }, { $pull: { "friends": { userId: userId, userName: userName } } })
            resp.status(200).json(fbReqData)
        }
    }

    catch (error) {
        resp.status(404).json({ message: error.message })
    }
}

const saveUserChats = async (req, resp) => {

    const { _id, userName, userId, userEmail, userChats } = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return resp.status(404).send("user doesn't exist")
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return resp.status(404).send("user doesn't exist")
    }

    try {
        let saveUsersChat = await usersModel.findById(_id)
        if (userChats !== "") {
            saveUsersChat = await usersModel.findByIdAndUpdate(_id, { $addToSet: { "letsChat": [{ userName, userId, userEmail, userChats }] } })
            saveUsersChat = await usersModel.findByIdAndUpdate(userId, { $addToSet: { "letsChat": [{ userName, userId: _id, userEmail, userChats }] } })
            resp.status(200).json(saveUsersChat)
        }

    } catch (error) {
        resp.status(404).json({ message: error.message })
    }
}


const saveChatbotChats = async (req, resp) => {

    const { _id, message, sepId } = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return resp.status(404).send("user doesn't exist")
    }

    try {
        let saveChats = await usersModel.findById(_id)
        if (message !== "") {
            saveChats = await usersModel.findByIdAndUpdate(_id, { $addToSet: { "chatBox": [{ message, sepId }] } })
            resp.status(200).json(saveChats)
        }

    } catch (error) {
        resp.status(404).json({ message: error.message })
    }
}

const fetchAllFbUsers = async (req, resp) => {
    try {
        const fetchFbUsersData = await usersModel.find()
        resp.status(200).json(fetchFbUsersData)
    } catch (error) {
        resp.status(404).json({ message: error.message })
    }
}



export { login, signup, getAllUsers, updateProfile, getUpdatedProfile, fbFrndRequest, fetchAllFbUsers, saveUserChats, saveChatbotChats }
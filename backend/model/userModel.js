import mongoose from 'mongoose'

// user database
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    about: { type: String },
    tags: { type: [String] },
    joinedOn: { type: Date, default: Date.now },
    frequest: [{ userName: String, userId: String, }],
    crequest: [{ userName: String, userId: String, }],
    friends: [{ userName: String, userId: String, }],
    // for usersChat
    letsChat: [{ userName: String, userId: String, userEmail: String, userChats: String, messageOn: { type: Date, default: Date.now } }],
    // for chatbot
    chatBox: [{ message: String, sepId: String, messageOn: { type: Date, default: Date.now } }],
})

const usersModel = mongoose.model('users', userSchema)
export default usersModel
import mongoose from 'mongoose'

const socialMediaSchema = mongoose.Schema({
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    postDisc: { type: String },
    publicId: { type: String },
    resourceType: { type: String },
    postedDate: { type: Date, default: Date.now },
    imgLike: { type: [String], default: [] },
    imgDisLike: { type: [String], default: [] },
    comments: { type: [String], default: [] }
})

const socialMediaModel = mongoose.model('socialmedia', socialMediaSchema)
export default socialMediaModel
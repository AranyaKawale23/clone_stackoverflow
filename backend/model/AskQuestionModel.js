import mongoose from 'mongoose'

const askQuesSchema = mongoose.Schema({
    quesTitle: { type: String, required: "Question must have a title" },
    quesBody: { type: String },
    quesTags: { type: [String], required: "Question must have a tags" },
    noOfAnswers: { type: Number, default: 0 },
    upVotes: { type: [String], default: [] },
    downVotes: { type: [String], default: [] },
    userPosted: { type: String, required: "Question must have a author" },
    userId: { type: String },
    askedOn: { type: Date, default: Date.now },
    answer: [
        {
            answerBody: String,
            userAnswered: String,
            userId: String,
            answerRedOn: { type: Date, default: Date.now },
        }
    ]
})

const askQuesModel = mongoose.model('askQuestions', askQuesSchema)
export default askQuesModel
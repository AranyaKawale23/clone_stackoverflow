import mongoose from 'mongoose'
import askQuesModel from '../model/AskQuestionModel.js'

// -------- ASK QUESTION --------
export const askQues = async (req, resp) => {
    const postQuestionData = req.body
    const postQuestion = new askQuesModel({ ...postQuestionData, userId: req.body.userId })
    try {
        await postQuestion.save()
        resp.status(200).json("question posted successfully")
    } catch (error) {
        console.log(error);
        resp.status(409).json("question coundn't post")
    }
}

// ------- GET ALL QUESTION --------
export const getAllQuestion = async (req, resp) => {
    try {
        const questionList = await askQuesModel.find()
        resp.status(200).json(questionList)
    } catch (error) {
        resp.status(404).json({ message: error.message })
    }
}

// ------- DELETE QUESTION --------
export const deleteQuestion = async (req, resp) => {

    const { id: _id } = req.params

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return resp.status(404).send("question doesn't exist")
    }

    try {
        await askQuesModel.findByIdAndRemove(_id)
        resp.status(200).json({ message: "question successfully deleted" })

    } catch (error) {
        resp.status(404).json({ message: error.message })
    }
}

// ----------- VOTE QUESTION -----------
export const voteQuestion = async (req, resp) => {
    const { id: _id } = req.params
    const { value, userId } = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        resp.status(404).json({ message: error.message })
    }

    try {
        let ques = await askQuesModel.findById(_id)
        // ------ for upvote -----
        if (value === "upVote") {
            if (!ques.upVotes.includes(userId)) {
                ques = await askQuesModel.findByIdAndUpdate(_id, { $addToSet: { "upVotes": [userId] } })
                ques = await askQuesModel.findByIdAndUpdate({ _id: _id }, { $pullAll: { "downVotes": [userId] } })
                resp.status(200).json(ques)
            }

            else if (ques.upVotes.includes(userId)) {
                ques = await askQuesModel.findByIdAndUpdate({ _id: _id }, { $pullAll: { "upVotes": [userId] } })
                resp.status(200).json(ques)
            }
        }

        // ------ for downvote -----
        if (value === "downVote") {
            if (!ques.downVotes.includes(userId)) {
                ques = await askQuesModel.findByIdAndUpdate(_id, { $addToSet: { "downVotes": [userId] } })
                ques = await askQuesModel.findByIdAndUpdate({ _id: _id }, { $pullAll: { "upVotes": [userId] } })
                resp.status(200).json(ques)
            }
            else if (ques.downVotes.includes(userId)) {
                ques = await askQuesModel.findByIdAndUpdate({ _id: _id }, { $pullAll: { "downVotes": [userId] } })
                resp.status(200).json(ques)
            }
        }

    } catch (error) {
        resp.status(404).json({ message: error.message })
    }
}
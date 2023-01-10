import mongoose from 'mongoose'
import askQuesModel from "../model/AskQuestionModel.js"

const upadteNoOfQuestions = async (_id, noOfAnswers) => {
    try {
        await askQuesModel.findByIdAndUpdate(_id, { $set: { 'noOfAnswers': noOfAnswers } })
    } catch (error) {
        console.log(error);
    }
}

const postAnswer = async (req, resp) => {
    const { id: _id } = req.params
    const { noOfAnswers, answerBody, userAnswered, userId } = req.body

    //--- checlking id valid or not from mongoose ---
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return resp.status(404).send("question does'n exist")
    }

    upadteNoOfQuestions(_id, noOfAnswers)

    try {
        const updatedQuestion = await askQuesModel.findByIdAndUpdate(_id, { $addToSet: { 'answer': [{ answerBody, userAnswered, userId }] } })
        resp.status(200).json(updatedQuestion)
    } catch (error) {
        resp.status(400).json(error)
    }
}

const deleteAnswer = async (req, resp) => {

    const { id: _id } = req.params
    const { answerId, noOfAnswers } = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return resp.status(404).send("question doesn't exist")
    }

    if (!mongoose.Types.ObjectId.isValid(answerId)) {
        return resp.status(404).send("answer not exist")
    }

    upadteNoOfQuestions(_id, noOfAnswers)

    try {
        await askQuesModel.updateOne(
            { _id },
            { $pull: { 'answer': { _id: answerId } } }
        )
        resp.status(200).json("Your Answer is Successfully removed")
    } catch (error) {
        resp.status(405).json(error)
    }
}

export { postAnswer, deleteAnswer }
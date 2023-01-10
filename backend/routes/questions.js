import express from 'express'
import { askQues, getAllQuestion, deleteQuestion, voteQuestion } from '../Authentication/question.js'

const quesRoutes = express.Router()

quesRoutes.post('/ask', askQues)
quesRoutes.get('/getquest', getAllQuestion)
quesRoutes.delete('/delete/:id', deleteQuestion)
quesRoutes.patch('/voteques/:id', voteQuestion)

export default quesRoutes
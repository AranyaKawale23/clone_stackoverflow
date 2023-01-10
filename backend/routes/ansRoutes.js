import express from 'express'
import { postAnswer, deleteAnswer } from '../Authentication/Answer.js'

const ansRoutes = express.Router()

ansRoutes.patch('/postanswer/:id', postAnswer)
ansRoutes.patch('/deleteanswer/:id', deleteAnswer)

export default ansRoutes
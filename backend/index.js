import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'
import quesRoutes from './routes/questions.js'
import ansRoutes from './routes/ansRoutes.js'
import socialMediaRoutes from './routes/socialMediaRoutes.js'

const app = express()

// -------- middlewares -----------------
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

// -------- using user route as middleware -----------
app.use('/user', userRoutes)
app.use('/questions', quesRoutes)
app.use('/answers', ansRoutes)
app.use('/socialmedia', socialMediaRoutes)

// ----- server ------
app.get('/', (req, res) => {
    res.send('Hi From StackOverflow-Clone')
})

dotenv.config()
const PORT = process.env.PORT || 5000

mongoose.set('strictQuery', false);
// ----- db connection -----
const db_url = process.env.CONNECTION_URL
mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server started on port ${PORT}!`)))
    .catch((err) => console.log(err))
import jwt from 'jsonwebtoken'

const middleware = (req, resp, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]

        let decodeData = jwt.verify(token, `${process.env.JWT_SECRET}`)
        req.userId = decodeData?.id
        next()

    } catch (error) {
        console.log("error in applying middleware");
    }
}

export default middleware
//necessary dependencies for setting up the server
const express = require ('express')
const morgan = require ('morgan')
const cors = require ('cors')

const {BadRequestError, NotFoundError} = require('./utils/errors')

const app = express()
app.use(cors())
// app.use(morgan('tiny'))

const PORT = 3000

app.use((req,res,next) => {
    return next(new NotFoundError())
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message

    return res.status(status).json({
        error: {message, status}
    })
})

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ` + PORT)
})



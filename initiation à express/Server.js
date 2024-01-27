require('dotenv').config()
const express = require('express')
const userRoutes = require('./routes/User')


const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


app.use("/users", userRoutes)

app.listen(process.env.PORT, () => {
    console.log("Listening on port: ", process.env.PORT)
})
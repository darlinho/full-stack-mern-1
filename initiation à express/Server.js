require('dotenv').config()
require("./db")
const express = require("express"),
    bodyParser = require("body-parser"),
    swaggerJsdoc = require("swagger-jsdoc"),
    swaggerUi = require("swagger-ui-express"),
    userRoutes = require('./routes/User'),
    postRoutes = require('./routes/Post'),
    options = require('./docs/options');

const app = express()
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use(express.json())

const specs = swaggerJsdoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, {
        explorer: true,
    })
);


app.use("/users", userRoutes)
app.use("/posts", postRoutes)

app.listen(process.env.PORT, () => {
    console.log("Listening on port: ", process.env.PORT)
})
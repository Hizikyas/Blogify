const express = require("express")
const blogRouter = require("./Route/blogRoute")
const globalErrorHundler = require("./Controller/errorController")
const app = express() ;  // this line creates an instance of the express app
app.use(express.json()) ;

app.use("/v1/Blogify/" , blogRouter)
app.use(globalErrorHundler)

module.exports = app ;
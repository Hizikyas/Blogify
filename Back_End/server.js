const dotenv = require("dotenv")
dotenv.config({path : "./configure.env" })
const mongoose = require("mongoose")
const app = require("./app")

// --------connecting Mongoose------
const dbString = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD)
mongoose
.connect(dbString )
.then( con => { console.log("Db connected successfully")})
.catch(err => console.log("DB connection error", err))

app.listen( process.env.PORT , () => {
console.log(`App runing in port ${process.env.PORT}`)
} )
const dotenv = require("dotenv") ;
dotenv.config({path : "./configure.env"})
const fs = require("fs") ;
const mongoose = require("mongoose") ;
const Blog = require("../models/Blogs")

const blogs = JSON.parse(fs.readFileSync(`${__dirname}/blogs_data.json` , "utf8")) ; 
const dbString = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD)
mongoose
.connect(dbString)
.then( con => { console.log("Db connected successfully")})
.catch(err => console.log("DB connection error"))

// if(process.env.NODE_ENV === "development")

const importBlog = async () => {
    await Blog.create(blogs) ;
    console.log("blog imported successfully")
    process.exit() ;
} ;

const deletBlog = async () => {
   await Blog.deleteMany() ;
   console.log("blog deleted successfully") ;
   process.exit() ;
}
if(process.argv[2] === "--import")  importBlog() 
if(process.argv[2] === "--delete")  deletBlog() 



const express = require("express") ;
const blogController = require("../Controller/blogController") ;

const Router = express.Router() ;

Router
.route("/")
.get(blogController.getAllBlogs)
.post(blogController.postBlogs)

Router
.route("/:id") 
.get(blogController.getBlog) 
.patch(blogController.patchBlogs) 
.delete(blogController.deleteBlogs)


module.exports = Router ;
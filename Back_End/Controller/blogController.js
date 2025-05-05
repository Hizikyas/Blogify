const Blog = require("../models/Blogs")
const ApiFeatures = require("../utils/apiFeatures")
const catchAsync = require("../utils/catchAsync")


exports.getAllBlogs = catchAsync( async (req , res , next) => {

 const Features = new ApiFeatures(Blog.find() , req.query).filter().sort().limitFields().pagination() ;
 const blogs = await Features.query ;
res.status(200).json({
    status: "success",
    result : blogs.length || 0 ,
    blog : blogs
})
next() ;
}) 

exports.postBlogs =catchAsync( async (req , res , next) => {
   const blog = req.body ;
   const postBlog = await Blog.create(blog) ;

   res.status(201).json({
    status : "success" ,
    postBlog 
   })
   next() ;
}) 

exports.getBlog = catchAsync ( async (req , res , next) => {
    const id = req.params.id ;

    const blogDetail = await Blog.findById(id) ;

    res.status(200).json({
        status : "success" ,
        blogDetail 
    })
    next() ;
}) 

exports.patchBlogs = catchAsync ( async (req , res , next) => {
    const id = req.params.id ;
    const patchBlog = await Blog.findByIdAndUpdate(id , req.body , { new : true , runValidators : true }) ;

     res.status(200).json({
        status : "success" ,
        patchBlog
     })
    next() ;
})

exports.deleteBlogs = catchAsync(async (req , res , next ) => {

    const id = req.params.id ;

    await Blog.findByIdAndDelete(id) ;

    res.status(204).json({
        status : "success" ,
        data : null
    })
    next() ;
}) 
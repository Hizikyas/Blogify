const mongoose = require("mongoose") ;

const blogSchema = mongoose.Schema(
    {
        title: {
            type : String , 
            required : [true , "A blog ust have a title"] ,
            trim : true ,
            maxLength : [100 , "Title can not be morethan 100 character"]
        } ,
        content : {
            type : String ,
            required : [true , "A blog must have a content"] ,
            trim : true 
        } ,
        author : {
            type : String ,
            required : [true , "A blog must belong to an author"]
        } ,
        coverImage : {
            type: String ,
        },
        categories : {
            type : String ,
            enum : ["music" , "movie" , "tech" , "fashion" , "other"] ,
            required : [true , "A blog must have a catagorie"]
        } ,
        publishedAt : {
            type : Date ,
            default : Date.now ,
        } , 
        meta : {
            likes : {
                type : Number , 
                default : 0 
            } ,
            commentsCount : {
                type : Number , 
                default : 0 
            } ,
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
) ;

blogSchema.virtual("publishedDuration").get(function (next) {
    const timeGap = Date.now() - this.publishedAt; // Fix subtraction
    const seconds = Math.floor(timeGap / 1000);
    const minutes = Math.floor(timeGap / (1000 * 60));
    const hours = Math.floor(timeGap / (1000 * 60 * 60));
    const days = Math.floor(timeGap / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) return "Recently added";
    if (minutes < 60) return `${minutes} min ago`;
    if (hours < 24) return `${hours} hours ago`;
    if (days < 30) return `${days} days ago`;
    if (months < 12) return `${months} months ago`;
    
    return `${years} years ago`;
    next() ;
});

const Blog = mongoose.model("Blog" , blogSchema) ;

module.exports = Blog ; 
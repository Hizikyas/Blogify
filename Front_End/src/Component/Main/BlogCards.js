import React, { useState } from 'react';
import { Heart, Clock, Bookmark , MessageCircleMore  } from 'lucide-react';

const BlogCards = ({ article: initialArticle }) => {
    const [article, setArticle] = useState(initialArticle);

    const handleLike = () => {
        setArticle(prevArticle => ({
            ...prevArticle,
            isLiked: !prevArticle.isLiked,
            likes: prevArticle.isLiked ? prevArticle.likes - 1 : prevArticle.likes + 1
        }));
    };

    const handleComment = () => {
        setArticle(prevArticle => ({
            ...prevArticle,
            isComment: !prevArticle.isComment,
            comments: prevArticle.isComment ? prevArticle.comments - 1 : prevArticle.comments + 1
        }));
    };

    const handleSave = () => {
        setArticle(prevArticle => ({
            ...prevArticle,
            isSaved: !prevArticle.isSaved
        }));
    };

    return (
        <article className="overflow-hidden">
            <div className="flex py-3 pr-2">
                {/* Author Section */}
                <div className="flex items-start justify-evenly w-32 bg-transparent pb-2">
                    <div className='flex items-center justify-center gap-2 w-full'>
                        <img src={article.author.avatar} alt={article.author.name} className="w-8 h-8 rounded-full object-cover" />
                        <span className="text-sm items-center font-medium dark:text-white">{article.author.name}</span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-t-xl shadow-sm transition-all duration-300 overflow-hidden hover:shadow-lg dark:border-gray-700">
                   {article.image && <img src={article.image} alt={article.title} className="w-full h-48 object-cover" /> } 
                    
                    <div className="pt-1 pb-2">

                  {  article.image &&  <div className="flex items-center px-6 gap-2 text-gray-500 dark:text-gray-400 text-sm pt-1">
                            <Clock className="h-4 w-4" />
                            <span>{article.readTime}</span>
                        </div>}

                        <h3 className="text-xl font-bold mt-3 px-6 mb-2 dark:text-white">{article.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 px-6 mb-6">{article.excerpt}</p>

                        {!(article.image) && (  <div className="flex items-center justify-end px-6 gap-2 text-gray-500 dark:text-gray-400 text-sm pb-1">
                                    <Clock className="h-4 w-4" />
                                    <span>{article.readTime}</span>
                                </div>)}

     
                        <div className="flex items-center justify-between px-[1rem] border-t-[1px] border-t-gray-700 dark:border-t-gray-100">
                            <button className="px-4 py-2 text-gray-600 rounded-lg hover:text-blue-600 transition-colors">
                                Read More
                            </button>

                            <div className="flex items-center gap-4">
                                <button 
                                    onClick={handleLike}
                                    title='Like button'
                                    className="flex items-center gap-1"
                                >
                                    <Heart 
                                        className={`h-5 w-5 ${article.isLiked ? 'text-red-500 fill-red-500' : 'text-gray-500 dark:text-gray-400'}`} 
                                    />
                                    <span className="text-sm text-gray-600 dark:text-gray-300">{article.likes}</span>
                                </button>

                                <button onClick={handleSave}
                                    className="flex items-center gap-1"
                                    title="Save to archive"
                                >
                                    <Bookmark 
                                        className={`h-5 w-5 ${article.isSaved ? 'text-blue-500 fill-blue-500' : 'text-gray-500 dark:text-gray-400'}`} 
                                    />
                                </button>

                                <button title='Comment button' onClick = {handleComment} className="flex items-center gap-1">
                                        <MessageCircleMore  className={`h-5 w-6 ${article.isComment ? ' h-6 w-6 text-white fill-blue-500 dark:text-gray-800' : 'text-gray-500 dark:text-gray-400'}`} />
                                        <span className="text-sm text-gray-600 dark:text-gray-300">{article.comments}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogCards;
import {  Star } from 'lucide-react';


const SimpleBlog = (props) => {
    const post = props.post ;
  return (
    <div key={post.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
    <h3 className="font-semibold mb-2 dark:text-white">{post.title}</h3>
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-1 text-yellow-500">
        <Star className="h-4 w-4 fill-current" />
        <span>{post.rating}</span>
      </div>
      <span className="text-gray-500 dark:text-gray-400">{post.views} views</span>
    </div>
  </div>
  )
}

export default SimpleBlog
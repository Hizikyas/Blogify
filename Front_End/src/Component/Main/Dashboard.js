import React, { useState } from 'react';
import { Search, ListFilter, Sun, Moon, Home, PenSquare, BookOpen, Grid3X3, TrendingUp, Star, ChevronDown,  Archive } from 'lucide-react';
import BlogCards from './BlogCards';
import SimpleBlog from './SimpleBlog';
import john from "../../Asset/Testimonials/john.jpg";
import { IoMdPerson } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
const trendingArticles = [
  {
    id: 1,
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the web development landscape in 2024. From WebAssembly to Edge Computing...",
    // image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
    author: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100"
    },
    publishedDate: "Mar 15, 2024",
    readTime: "5 min read",
    likes: 234,
    comments: 45,
    isLiked: false,
    isSaved: false ,
    isComment: false
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    excerpt: "A comprehensive guide to using React Hooks effectively in your applications. Learn best practices and advanced patterns...",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800",
    author: {
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100"
    },
    publishedDate: "Mar 14, 2024",
    readTime: "7 min read",
    likes: 189,
    comments: 32,
    isLiked: false,
    isSaved: false, 
    isComment: false
  }
];

const topRatedPosts = [
  {
    id: 1,
    title: "Ultimate Guide to TypeScript",
    rating: 4.9,
    views: "12.5k"
  },
  {
    id: 2,
    title: "Modern CSS Techniques",
    rating: 4.8,
    views: "10.2k"
  },
  {
    id: 3,
    title: "State Management in 2024",
    rating: 4.7,
    views: "8.9k"
  },
  {
    id: 4,
    title: "State Management in 2024",
    rating: 4.7,
    views: "8.9k"
  } ,
  {
    id: 5,
    title: "State Management in 2024",
    rating: 4.7,
    views: "8.9k"
  } ,
  {
    id: 6,
    title: "State Management in 2024",
    rating: 4.7,
    views: "8.9k"
  } ,
  {
    id: 7,
    title: "State Management in 2024",
    rating: 4.7,
    views: "8.9k"
  }
];

const Dashboard = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Top Bar */}
      <header className="fixed top-0 left-64 right-0 h-16 bg-white dark:bg-gray-800 shadow-sm z-50">
        <div className="flex items-center justify-center gap-[0rem] px-4 h-full max-w-7xl mx-auto">
          <div className="flex items-center flex-1 gap-2">
            <div className='flex justify-center items-center gap-[4px]'>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2 rounded-l-[15px] border border-gray-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white w-[30rem]"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" style={{ fontSize: '1rem' }} />
              </div>
              <button><Search className=" h-[2.55rem] w-[4rem] p-[0.4rem] text-white bg-blue-900 rounded-r-[15px] border border-gray-500 dark:border-gray-700 dark:bg-gray-700 hover:p-[0.3rem]" /> </button>
            </div>

            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <ListFilter className="h-5 w-5 dark:text-white" />
              <span className='dark:text-white'>Filters</span>
            </button>
          </div>

          <div className="mr-[1rem] flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="group p-2 rounded-lg hover:bg-transparent dark:hover:bg-transparent transition-all duration-300"
            >
              <div className="relative h-5 w-5">
                <Moon className={`h-5 w-5 absolute transition-all fill-black duration-300 group-hover:scale-90 ${isDarkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                <Sun className={`h-5 w-5 text-white absolute transition-all duration-300 group-hover:scale-90 ${isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
              </div>
            </button>

            {/* Avatar */}
            <div className="relative">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-md overflow-hidden border dark:border-gray-100">
                    <img src={john} alt="Profile" className="object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-sm text-gray-900 dark:text-gray-100">john cadlop</p>
                    <p className="text-xs text-gray-700 dark:text-gray-300">cadlop</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <ChevronDown className="h-4 w-4 dark:text-gray-100" />
                </button>
              </div>

              {isDropdownOpen && (
                <div className={`absolute right-[0.1rem] top-[2.8rem] mt-2 w-48 rounded-md bg-white dark:bg-gray-800 shadow-lg z-50 border border-gray-200 dark:border-gray-700 dropdown-transition ${isDropdownOpen ? 'dropdown-enter-active' : 'dropdown-exit-active'}`}>
                  <div className="py-1">
                    <button
                      className=" flex justify-start items-center gap-[1rem] block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span><IoMdPerson Add className="h-5 w-5 text-gray-900 dark:text-gray-200" /></span>
                      <p>Your Profile</p>
                    </button>
                    <button
                      className="flex justify-start items-center gap-[1rem] block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span><MdEdit Add className="h-5 w-5 text-gray-900 dark:text-gray-200" /></span>
                      Customize profile
                    </button>
                    <button
                      className="flex justify-start items-center gap-[1rem] block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                       <span><MdOutlinePassword Add className="h-5 w-5 text-gray-900 dark:text-gray-200" /></span>
                      change password
                    </button>
                    <button
                      className="flex justify-start items-center gap-[1rem] block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                       <span><GoSignOut Add className="h-5 w-5 text-gray-900 dark:text-gray-200" /></span>
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="fixed left-0 text-gray-50 top-0 bottom-0 w-64 bg-auth-gradiant dark:bg-gray-800 shadow-sm pt-16">
        <div className="pl-4 pr-4 pb-4 flex flex-col gap-[6rem] items-center">
          <div className="mb-8 mt-1">
            <span className="font-Pacifico text-4xl font-normal">blogify</span>
          </div>
          <nav className="space-y-[1rem] w-full">
            <a href="#we" className="flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </a>
            <a href="#we" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <PenSquare className="h-5 w-5" />
              <span>New Post</span>
            </a>
            <a href="#we" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <BookOpen className="h-5 w-5" />
              <span>My Posts</span>
            </a>
            <a href="#we" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <Grid3X3 className="h-5 w-5" />
              <span>Categories</span>
            </a>
            <a href="#we" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <Archive className="h-5 w-5" />
              <span>Archive</span>
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pt-24 pl-72 pr-8 bg-gray-100 dark:bg-gray-900 ">
        <div className="max-w-7xl mx-auto grid grid-cols-7 gap-8">

          {/* Trending Articles */}
          <div className="col-span-5 ">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-6 w-6 text-red-500" />
              <h2 className="text-2xl font-bold dark:text-white">Trending Articles</h2>
            </div>
            <div className="space-y-8 overflow-y-scroll  h-[500px] scrollbar-hidden">
              {trendingArticles.map(article => (
                <BlogCards article={article}/>
              ))}
            </div>
          </div>

          {/* Top Rated Posts - Sticky on the right side */}
          <div className="col-span-2">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Star className="h-6 w-6 text-yellow-500" />
                <h2 className="text-2xl font-bold dark:text-white">Top Rated</h2>
              </div>
              <div className="sticky top-28 h-[500px] space-y-4 overflow-y-auto scrollbar-hidden">
                {topRatedPosts.map(post => (
                  <SimpleBlog post={post}/> 
                ))}
              </div>
            </div>
          </div>

          </div>
      </main>
    </div>
  );
};

export default Dashboard;

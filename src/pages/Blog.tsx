import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, X } from 'lucide-react';
import { blogPosts, categories } from '../data/blog';

interface BlogProps {
  isDarkMode: boolean;
}

export default function Blog({ isDarkMode }: BlogProps) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => 
    selectedCategory === "All" ? true : post.category === selectedCategory
  );

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm sm:text-base transition-colors duration-200 ${
                selectedCategory === category
                  ? isDarkMode
                    ? 'bg-blue-500 text-white'
                    : 'bg-blue-600 text-white'
                  : isDarkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="mb-12">
          <h2 className={`text-xl sm:text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Articles
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post, index) => (
              <article 
                key={index} 
                className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} rounded-lg shadow-md p-6 transition-all hover:shadow-lg hover:scale-[1.01] flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <time className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{post.date}</time>
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-blue-400 bg-blue-400/10' : 'text-blue-600 bg-blue-50'} px-3 py-1 rounded-full`}>
                      {post.category}
                    </span>
                  </div>
                  <h3 className={`text-lg sm:text-xl font-semibold mb-3 line-clamp-2`}>{post.title}</h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 text-sm sm:text-base line-clamp-2`}>{post.summary}</p>
                </div>
                <div className="border-t pt-4 mt-auto">
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => setSelectedPost(post)}
                      className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${isDarkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors`}
                    >
                      Read Full Article
                    </button>
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Regular Posts Section */}
      <section>
        <h2 className={`text-xl sm:text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Latest Articles
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post, index) => (
            <article 
              key={index} 
              className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} rounded-lg shadow-md p-6 transition-all hover:shadow-lg hover:scale-[1.01] flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <time className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{post.date}</time>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-blue-400 bg-blue-400/10' : 'text-blue-600 bg-blue-50'} px-3 py-1 rounded-full`}>
                    {post.category}
                  </span>
                </div>
                <h3 className={`text-lg sm:text-xl font-semibold mb-3 line-clamp-2`}>{post.title}</h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 text-sm sm:text-base line-clamp-2`}>{post.summary}</p>
              </div>
              <div className="border-t pt-4 mt-auto">
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => setSelectedPost(post)}
                    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${isDarkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors`}
                  >
                    Read Full Article
                  </button>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div 
            className={`${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } rounded-xl w-full max-w-4xl my-8 relative shadow-2xl`}
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-sm font-medium ${
                      isDarkMode ? 'text-blue-400 bg-blue-400/10' : 'text-blue-600 bg-blue-50'
                    } px-3 py-1 rounded-full`}>
                      {selectedPost.category}
                    </span>
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {selectedPost.readTime}
                    </span>
                  </div>
                  <h2 className={`text-2xl md:text-3xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  } mb-2`}>
                    {selectedPost.title}
                  </h2>
                  <time className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {selectedPost.date}
                  </time>
                </div>
                <button 
                  onClick={() => setSelectedPost(null)}
                  className={`${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-700' 
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  } transition-colors p-2 rounded-lg`}
                  aria-label="Close modal"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className={`prose max-w-none ${isDarkMode ? 'prose-invert' : ''}`}>
                <div className={`text-lg mb-8 font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {selectedPost.description}
                </div>

                <div className={`space-y-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <section>
                    <h3 className={`text-xl font-semibold mb-4 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Introduction
                    </h3>
                    <p className="leading-relaxed">
                      {selectedPost.content.introduction}
                    </p>
                  </section>

                  <section>
                    <h3 className={`text-xl font-semibold mb-4 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Main Content
                    </h3>
                    <p className="leading-relaxed whitespace-pre-line">
                      {selectedPost.content.mainContent}
                    </p>
                  </section>

                  <section>
                    <h3 className={`text-xl font-semibold mb-4 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Conclusion
                    </h3>
                    <p className="leading-relaxed">
                      {selectedPost.content.conclusion}
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
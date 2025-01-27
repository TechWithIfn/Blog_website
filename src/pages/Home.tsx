import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Shield, Cloud, Smartphone, Newspaper, BookOpen, Zap, Users, Sparkles } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isDarkMode: boolean;
}

function FeatureCard({ icon, title, description, isDarkMode }: FeatureCardProps) {
  return (
    <div className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} p-6 rounded-xl shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group cursor-pointer`}>
      <div className={`${isDarkMode ? 'text-blue-400 group-hover:text-blue-300' : 'text-blue-600 group-hover:text-blue-500'} mb-4 transition-colors duration-300`}>
        {icon}
      </div>
      <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'} group-hover:translate-x-1 transition-transform duration-300`}>
        {title}
      </h3>
      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm group-hover:translate-x-1 transition-transform duration-300`}>
        {description}
      </p>
    </div>
  );
}

interface HomeProps {
  isDarkMode: boolean;
}

export default function Home({ isDarkMode }: HomeProps) {
  return (
    <div>
      {/* Hero Section with Animated Background */}
      <section className={`relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'} py-20 sm:py-32`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[100%] opacity-50 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6 animate-bounce">
              <div className={`p-3 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <Sparkles className={`h-16 w-16 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
            </div>
            <h1 className={`text-5xl sm:text-6xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'} tracking-tight`}>
              Explore the Future of{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            <p className={`text-xl sm:text-2xl mb-10 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              Your gateway to insightful articles on technology, programming, and digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className={`inline-flex items-center px-8 py-4 rounded-full text-white ${
                  isDarkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'
                } transition-all duration-300 transform hover:scale-105 font-medium gap-2 text-lg shadow-lg hover:shadow-xl`}
              >
                Start Reading
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className={`inline-flex items-center px-8 py-4 rounded-full ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                    : 'bg-white hover:bg-gray-50 text-gray-900'
                } transition-all duration-300 transform hover:scale-105 font-medium gap-2 text-lg shadow-lg hover:shadow-xl`}
              >
                Learn More
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Explore Our Categories
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Dive into our comprehensive collection of articles across various technology domains
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Code className="h-8 w-8" />}
              title="Programming"
              description="Master modern programming languages and frameworks through practical tutorials."
              isDarkMode={isDarkMode}
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="AI & Machine Learning"
              description="Stay updated with the latest in artificial intelligence and machine learning."
              isDarkMode={isDarkMode}
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Cybersecurity"
              description="Learn about security best practices and protect your digital assets."
              isDarkMode={isDarkMode}
            />
            <FeatureCard
              icon={<Cloud className="h-8 w-8" />}
              title="Cloud Computing"
              description="Explore cloud services, architecture, and deployment strategies."
              isDarkMode={isDarkMode}
            />
            <FeatureCard
              icon={<Smartphone className="h-8 w-8" />}
              title="Mobile Development"
              description="Build amazing mobile applications with cutting-edge technologies."
              isDarkMode={isDarkMode}
            />
            <FeatureCard
              icon={<BookOpen className="h-8 w-8" />}
              title="Web Development"
              description="Create modern web applications using the latest frameworks and tools."
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Why Choose Us
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              We're committed to providing high-quality content that helps you grow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-8 rounded-2xl shadow-lg text-center`}>
              <div className="inline-block p-4 rounded-full bg-blue-100 mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Expert Authors
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Articles written by industry professionals with years of experience
              </p>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-8 rounded-2xl shadow-lg text-center`}>
              <div className="inline-block p-4 rounded-full bg-blue-100 mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Up-to-date Content
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Stay current with the latest trends and technologies
              </p>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-8 rounded-2xl shadow-lg text-center`}>
              <div className="inline-block p-4 rounded-full bg-blue-100 mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Practical Learning
              </h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Real-world examples and hands-on tutorials
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-3xl shadow-xl overflow-hidden`}>
            <div className="p-8 sm:p-16 text-center">
              <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Stay Updated
              </h2>
              <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
                Subscribe to our newsletter for weekly updates on the latest in technology
              </p>
              <form className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`flex-1 px-6 py-3 rounded-full ${
                    isDarkMode 
                      ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' 
                      : 'bg-gray-50 text-gray-900 placeholder-gray-500 border-gray-200'
                  } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <button
                  type="submit"
                  className={`px-8 py-3 rounded-full text-white ${
                    isDarkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'
                  } transition-colors duration-300 font-medium`}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
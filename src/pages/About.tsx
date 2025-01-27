import React from 'react';
import { Users, Target, Award, Rocket } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className={`text-4xl sm:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          About Irfan Blogs
        </h1>
        <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          We're passionate about sharing knowledge and insights in technology, programming, and digital innovation.
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-20">
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-8 sm:p-12`}>
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
            <div className="flex-1">
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Mission</h2>
              <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                To empower developers and tech enthusiasts with high-quality, accessible content that helps them stay ahead in the rapidly evolving world of technology.
              </p>
              <ul className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="flex items-center gap-3">
                  <Target className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span>Provide comprehensive, up-to-date technical content</span>
                </li>
                <li className="flex items-center gap-3">
                  <Users className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span>Foster a community of continuous learning</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span>Maintain high standards of technical accuracy</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-20">
        <h2 className={`text-3xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-md`}>
            <div className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-4`}>
              <Award className="h-8 w-8" />
            </div>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Excellence</h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We strive for excellence in every article, tutorial, and piece of content we produce.
            </p>
          </div>
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-md`}>
            <div className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-4`}>
              <Users className="h-8 w-8" />
            </div>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Community</h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We believe in building and nurturing a supportive community of learners and experts.
            </p>
          </div>
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-md`}>
            <div className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-4`}>
              <Rocket className="h-8 w-8" />
            </div>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Innovation</h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We stay at the forefront of technology to bring you the latest insights and trends.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-8 sm:p-12`}>
        <h2 className={`text-3xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>50K+</div>
            <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Monthly Readers</div>
          </div>
          <div className="text-center">
            <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>200+</div>
            <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Articles Published</div>
          </div>
          <div className="text-center">
            <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>20+</div>
            <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Expert Contributors</div>
          </div>
          <div className="text-center">
            <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>15K+</div>
            <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Community Members</div>
          </div>
        </div>
      </section>
    </div>
  );
}
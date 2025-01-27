import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Newspaper, Sun, Moon } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Layout({ children, isDarkMode, toggleTheme }: LayoutProps) {
  const location = useLocation();
  
  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Title Bar */}
      <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} py-3 sm:py-2 px-4 shadow-sm transition-colors duration-200 sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-base sm:text-lg font-medium hover:opacity-80 transition-opacity">
            Irfan Blogs
          </Link>
          <div className="flex items-center gap-6">
            <nav className="hidden sm:flex items-center gap-6">
              <Link 
                to="/" 
                className={`transition-colors ${
                  location.pathname === '/' 
                    ? isDarkMode ? 'text-blue-400' : 'text-blue-600' 
                    : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className={`transition-colors ${
                  location.pathname === '/blog' 
                    ? isDarkMode ? 'text-blue-400' : 'text-blue-600' 
                    : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors ${
                  location.pathname === '/about' 
                    ? isDarkMode ? 'text-blue-400' : 'text-blue-600' 
                    : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                About
              </Link>
              <Link 
                to="/team" 
                className={`transition-colors ${
                  location.pathname === '/team' 
                    ? isDarkMode ? 'text-blue-400' : 'text-blue-600' 
                    : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Team
              </Link>
            </nav>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-200`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t transition-colors duration-200 mt-8`}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Newspaper className={`h-5 w-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium`}>
                  Irfan Blogs
                </span>
              </div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Your source for tech insights and programming knowledge.
              </p>
            </div>
            
            <div>
              <h3 className={`font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Navigation</h3>
              <nav className="flex flex-col gap-2">
                <Link 
                  to="/" 
                  className={`text-sm transition-colors ${
                    isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/blog" 
                  className={`text-sm transition-colors ${
                    isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Blog
                </Link>
                <Link 
                  to="/about" 
                  className={`text-sm transition-colors ${
                    isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  About
                </Link>
                <Link 
                  to="/team" 
                  className={`text-sm transition-colors ${
                    isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Team
                </Link>
              </nav>
            </div>

            <div>
              <h3 className={`font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link 
                  to="/privacy" 
                  className={`text-sm transition-colors ${
                    isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms" 
                  className={`text-sm transition-colors ${
                    isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Terms of Service
                </Link>
              </nav>
            </div>

            <div>
              <h3 className={`font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Contact</h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Email: hello@irfanblogs.com
              </p>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Follow us on social media for updates
              </p>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8">
            <p className={`text-sm text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 Irfan Blogs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
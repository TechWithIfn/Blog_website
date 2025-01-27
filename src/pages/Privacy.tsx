import React from 'react';
import { Shield, Lock, Eye, FileCheck } from 'lucide-react';

interface PrivacyProps {
  isDarkMode: boolean;
}

export default function Privacy({ isDarkMode }: PrivacyProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className={`text-4xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Privacy Policy
      </h1>

      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6 sm:p-8 mb-8`}>
        <div className="flex items-center gap-3 mb-4">
          <Shield className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Our Commitment to Privacy
          </h2>
        </div>
        <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          At Irfan Blogs, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information when you use our website.
        </p>
      </div>

      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6 sm:p-8 mb-8`}>
        <div className="flex items-center gap-3 mb-4">
          <Eye className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Information We Collect
          </h2>
        </div>
        <ul className={`space-y-3 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <li>• Email address (when you subscribe to our newsletter)</li>
          <li>• Usage data (how you interact with our website)</li>
          <li>• Cookies and similar tracking technologies</li>
          <li>• Technical information about your device and browser</li>
        </ul>
      </div>

      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6 sm:p-8 mb-8`}>
        <div className="flex items-center gap-3 mb-4">
          <Lock className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            How We Protect Your Data
          </h2>
        </div>
        <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          We implement various security measures to maintain the safety of your personal information:
        </p>
        <ul className={`space-y-3 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <li>• Secure SSL encryption</li>
          <li>• Regular security assessments</li>
          <li>• Limited access to personal information</li>
          <li>• Secure data storage practices</li>
        </ul>
      </div>

      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6 sm:p-8 mb-8`}>
        <div className="flex items-center gap-3 mb-4">
          <FileCheck className={`h-6 w-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Your Rights
          </h2>
        </div>
        <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          You have the right to:
        </p>
        <ul className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <li>• Access your personal data</li>
          <li>• Correct any inaccurate information</li>
          <li>• Request deletion of your data</li>
          <li>• Withdraw consent at any time</li>
          <li>• Object to processing of your data</li>
        </ul>
      </div>

      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        Last updated: March 15, 2025
      </p>
    </div>
  );
}
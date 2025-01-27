import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "Editor in Chief",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Sarah brings over 15 years of tech journalism experience, leading our editorial direction and content strategy.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Michael Chen",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Michael is a full-stack developer with expertise in cloud architecture and distributed systems.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Emily Rodriguez",
    role: "Content Strategist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Emily ensures our content meets the highest standards of quality and relevance for our readers.",
    social: {
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "David Kim",
    role: "Security Expert",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "David leads our cybersecurity coverage, bringing deep expertise in security best practices.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Lisa Patel",
    role: "AI Researcher",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "Lisa specializes in artificial intelligence and machine learning, making complex topics accessible.",
    social: {
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "James Wilson",
    role: "DevOps Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80",
    bio: "James shares insights on DevOps practices, CI/CD, and cloud infrastructure.",
    social: {
      twitter: "#",
      github: "#"
    }
  }
];

interface TeamProps {
  isDarkMode: boolean;
}

export default function Team({ isDarkMode }: TeamProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className={`text-4xl sm:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Meet Our Team
        </h1>
        <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Our diverse team of experts brings together years of experience in technology, writing, and research.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]`}
          >
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className={`text-xl font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {member.name}
              </h3>
              <p className={`text-sm mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {member.role}
              </p>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {member.bio}
              </p>
              <div className="flex gap-4">
                {member.social.twitter && (
                  <a 
                    href={member.social.twitter}
                    className={`${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
                {member.social.linkedin && (
                  <a 
                    href={member.social.linkedin}
                    className={`${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {member.social.github && (
                  <a 
                    href={member.social.github}
                    className={`${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
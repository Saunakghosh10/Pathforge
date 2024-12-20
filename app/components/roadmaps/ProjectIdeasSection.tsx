'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ClipboardDocumentListIcon, 
  ChatBubbleLeftRightIcon, 
  UserCircleIcon 
} from '@heroicons/react/24/outline';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const projects = [
  {
    title: 'Task Management Dashboard',
    description: 'Build a Trello-like task management app with drag and drop functionality',
    icon: <ClipboardDocumentListIcon className="h-6 w-6" />,
    href: '/roadmaps/frontend/projects/task-dashboard',
    difficulty: 'Intermediate',
    technologies: ['React', 'DnD', 'State Management']
  },
  {
    title: 'Real-time Chat Application',
    description: 'Create a modern chat app with real-time messaging capabilities',
    icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
    href: '/roadmaps/frontend/projects/chat-app',
    difficulty: 'Advanced',
    technologies: ['WebSocket', 'UI Design', 'Authentication']
  },
  {
    title: 'Portfolio Website',
    description: 'Design and build a stunning portfolio to showcase your work',
    icon: <UserCircleIcon className="h-6 w-6" />,
    href: '/roadmaps/frontend/projects/portfolio',
    difficulty: 'Beginner',
    technologies: ['HTML/CSS', 'Responsive Design', 'Animation']
  }
];

export default function ProjectIdeasSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-8"
    >
      <h2 className="text-2xl font-bold mb-6">Project Ideas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            className="group relative"
          >
            <Link href={project.href}>
              <div className="p-6 rounded-xl bg-[#1a1f2c] border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-[#161922]">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300">
                        {project.difficulty}
                      </span>
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeftIcon, ClockIcon, TagIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.3
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

interface ProjectLayoutProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  difficulty: string;
  estimatedTime: string;
  topics: string[];
  children: React.ReactNode;
}

export default function ProjectLayout({
  title,
  description,
  icon,
  difficulty,
  estimatedTime,
  topics,
  children
}: ProjectLayoutProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[#0f1117] text-white"
    >
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div variants={itemVariants} className="mb-8">
          <Link
            href="/roadmaps"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Roadmaps
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500/20 to-pink-500/20 backdrop-blur-sm">
              {icon}
            </div>
            <div>
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="text-gray-400 mt-2">{description}</p>
            </div>
          </div>

          {/* Project Info */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div 
              variants={itemVariants}
              className="p-4 rounded-lg bg-[#1a1f2c] border border-gray-800"
            >
              <div className="flex items-center gap-2 text-gray-400">
                <RocketLaunchIcon className="h-5 w-5" />
                <span>Difficulty</span>
              </div>
              <div className="mt-1 text-lg font-medium text-white">
                {difficulty}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="p-4 rounded-lg bg-[#1a1f2c] border border-gray-800"
            >
              <div className="flex items-center gap-2 text-gray-400">
                <ClockIcon className="h-5 w-5" />
                <span>Estimated Time</span>
              </div>
              <div className="mt-1 text-lg font-medium text-white">
                {estimatedTime}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="p-4 rounded-lg bg-[#1a1f2c] border border-gray-800"
            >
              <div className="flex items-center gap-2 text-gray-400">
                <TagIcon className="h-5 w-5" />
                <span>Technologies</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-1 text-sm rounded-full bg-indigo-500/20 text-indigo-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}

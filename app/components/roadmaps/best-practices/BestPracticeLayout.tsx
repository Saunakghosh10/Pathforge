'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

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

interface BestPracticeLayoutProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  difficulty: string;
  topics: string[];
  children: React.ReactNode;
}

export default function BestPracticeLayout({
  title,
  description,
  icon,
  difficulty,
  topics,
  children
}: BestPracticeLayoutProps) {
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
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm">
              {icon}
            </div>
            <div>
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="text-gray-400 mt-2">{description}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-300">
              {difficulty}
            </span>
            {topics.map((topic) => (
              <span
                key={topic}
                className="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300"
              >
                {topic}
              </span>
            ))}
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

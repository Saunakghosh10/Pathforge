'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { BookmarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import * as HeroIcons from '@heroicons/react/24/outline';
import type { BestPractice } from '@/app/roadmaps/data/sections';

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
    opacity: 1
  }
};

interface BestPracticeCardProps {
  practice: BestPractice;
}

function BestPracticeCard({ practice }: BestPracticeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = HeroIcons[practice.iconName as keyof typeof HeroIcons];

  return (
    <motion.div 
      variants={itemVariants}
      className="relative"
    >
      <motion.div 
        className={`group rounded-lg bg-[#1e2330] hover:bg-[#252b3b] transition-all overflow-hidden ${isExpanded ? 'ring-2 ring-blue-500/20' : ''}`}
        layout
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <motion.div className="relative p-4" layout>
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-[#161922] text-white">
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold text-white group-hover:text-white truncate">
                  {practice.title}
                </h3>
                {practice.isNew && (
                  <span className="shrink-0 px-2 py-1 text-xs font-medium rounded-full bg-indigo-500/20 text-indigo-300">
                    New
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 truncate">
                {practice.description}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-1 rounded bg-[#161922] text-gray-300">
                {practice.difficulty}
              </span>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 rounded-lg hover:bg-[#161922] transition-colors"
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                </motion.div>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-4 space-y-4 overflow-hidden"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-gray-300">Key Topics</h4>
                    <button
                      className="p-1.5 rounded-lg hover:bg-[#161922] transition-colors"
                      aria-label="Bookmark best practice"
                    >
                      <BookmarkIcon className="h-4 w-4 text-gray-400 hover:text-white" />
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {practice.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-300"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={practice.path}
                    className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
                  >
                    View Practice Details
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

interface BestPracticesSectionProps {
  practices: BestPractice[];
}

export default function BestPracticesSection({ practices }: BestPracticesSectionProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      <h2 className="text-xl font-semibold text-white">Best Practices</h2>
      <div className="grid grid-cols-1 gap-3">
        {practices.map((practice) => (
          <BestPracticeCard key={practice.path} practice={practice} />
        ))}
      </div>
    </motion.div>
  );
}

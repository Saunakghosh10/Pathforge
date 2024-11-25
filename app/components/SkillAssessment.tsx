'use client';

import { motion } from 'framer-motion';
import { useProgress } from '@/app/context/ProgressContext';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

interface RoadmapInfo {
  id: string;
  title: string;
  description: string;
  path: string;
}

const roadmaps: RoadmapInfo[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Master modern web development',
    path: '/roadmaps/frontend'
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Build scalable server applications',
    path: '/roadmaps/backend'
  },
  {
    id: 'devops',
    title: 'DevOps Engineering',
    description: 'Master cloud and DevOps practices',
    path: '/roadmaps/devops'
  }
];

export default function SkillAssessment() {
  const { getRoadmapProgress } = useProgress();

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-12">
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
          Your Learning Progress
        </motion.h2>
        <motion.p variants={itemVariants} className="text-accent max-w-2xl mx-auto">
          Track your progress across different development paths
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {roadmaps.map((roadmap) => {
          const progress = getRoadmapProgress(roadmap.id);

          return (
            <Link key={roadmap.id} href={roadmap.path}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-6 rounded-xl border-2 border-current/10 bg-secondary hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{roadmap.title}</h3>
                  <FiArrowRight className="w-5 h-5" />
                </div>

                <p className="text-accent mb-6">{roadmap.description}</p>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm font-medium">{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-light rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-accent rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}

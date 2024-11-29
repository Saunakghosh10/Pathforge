'use client';

import { motion } from 'framer-motion';
import { useProgress } from '@/app/context/ProgressContext';
import {
  SiPython,
  SiReact,
  SiDocker,
  SiAmazon,
  SiGit,
  SiNodedotjs,
  SiTensorflow,
  SiKubernetes
} from 'react-icons/si';
import { IconType } from 'react-icons';

interface SkillCard {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  roadmapId: string;
  topicId: string;
}

const skills: SkillCard[] = [
  {
    id: 'python',
    title: 'Python Programming',
    description: 'Core Python concepts and best practices',
    icon: SiPython,
    roadmapId: 'datascience',
    topicId: 'python-fundamentals'
  },
  {
    id: 'react',
    title: 'React Development',
    description: 'Modern React and component architecture',
    icon: SiReact,
    roadmapId: 'frontend',
    topicId: 'react-fundamentals'
  },
  {
    id: 'docker',
    title: 'Docker',
    description: 'Container orchestration and deployment',
    icon: SiDocker,
    roadmapId: 'devops',
    topicId: 'containerization'
  },
  {
    id: 'aws',
    title: 'AWS',
    description: 'Cloud infrastructure and services',
    icon: SiAmazon,
    roadmapId: 'cloud',
    topicId: 'aws-fundamentals'
  },
  {
    id: 'git',
    title: 'Git & Version Control',
    description: 'Source control and collaboration',
    icon: SiGit,
    roadmapId: 'fullstack',
    topicId: 'version-control'
  },
  {
    id: 'nodejs',
    title: 'Node.js',
    description: 'Server-side JavaScript development',
    icon: SiNodedotjs,
    roadmapId: 'backend',
    topicId: 'nodejs-fundamentals'
  },
  {
    id: 'tensorflow',
    title: 'TensorFlow',
    description: 'Machine learning and deep learning',
    icon: SiTensorflow,
    roadmapId: 'datascience',
    topicId: 'machine-learning'
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes',
    description: 'Container orchestration at scale',
    icon: SiKubernetes,
    roadmapId: 'devops',
    topicId: 'kubernetes'
  }
];

export default function SkillAssessment() {
  const { getTopicProgress } = useProgress();

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
      y: 0
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Skill Assessment</h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill) => {
          const progress = getTopicProgress(skill.roadmapId, skill.topicId);
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.id}
              variants={itemVariants}
              className={`p-6 rounded-lg border border-gray-medium hover:shadow-lg transition-shadow ${
                progress?.completed ? 'bg-green-50 border-l-4 border-l-green-500' : 'bg-secondary'
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Icon size={24} className="text-primary" />
                <h3 className="font-semibold text-primary">{skill.title}</h3>
              </div>
              <p className="text-accent text-sm mb-4">{skill.description}</p>
              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${
                  progress?.completed ? 'text-green-600' : 'text-accent'
                }`}>
                  {progress?.completed ? 'Completed' : 'Not Started'}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

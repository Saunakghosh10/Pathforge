'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCode, FiDatabase, FiGitBranch, FiServer, FiTerminal } from 'react-icons/fi';

interface SkillNode {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  dependencies: string[];
  level: 'beginner' | 'intermediate' | 'advanced';
  isCompleted: boolean;
}

export default function RoadmapVisualization() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [skills, setSkills] = useState<SkillNode[]>([
    {
      id: 'html-css',
      title: 'HTML & CSS',
      description: 'Building blocks of web development',
      icon: <FiCode />,
      dependencies: [],
      level: 'beginner',
      isCompleted: true
    },
    {
      id: 'javascript',
      title: 'JavaScript',
      description: 'Programming fundamentals and DOM manipulation',
      icon: <FiTerminal />,
      dependencies: ['html-css'],
      level: 'beginner',
      isCompleted: false
    },
    {
      id: 'git',
      title: 'Git & GitHub',
      description: 'Version control and collaboration',
      icon: <FiGitBranch />,
      dependencies: [],
      level: 'beginner',
      isCompleted: false
    },
    {
      id: 'react',
      title: 'React',
      description: 'Building user interfaces',
      icon: <FiCode />,
      dependencies: ['javascript'],
      level: 'intermediate',
      isCompleted: false
    },
    {
      id: 'node',
      title: 'Node.js',
      description: 'Server-side JavaScript',
      icon: <FiServer />,
      dependencies: ['javascript'],
      level: 'intermediate',
      isCompleted: false
    },
    {
      id: 'database',
      title: 'Databases',
      description: 'Data storage and management',
      icon: <FiDatabase />,
      dependencies: ['node'],
      level: 'advanced',
      isCompleted: false
    }
  ]);

  const toggleComplete = (id: string) => {
    setSkills(skills.map(skill => {
      if (skill.id === id) {
        return { ...skill, isCompleted: !skill.isCompleted };
      }
      return skill;
    }));
  };

  const getLevelColor = (level: SkillNode['level']) => {
    switch (level) {
      case 'beginner':
        return 'border-green-500';
      case 'intermediate':
        return 'border-blue-500';
      case 'advanced':
        return 'border-purple-500';
      default:
        return 'border-gray-medium';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">Development Roadmap</h2>
          <p className="text-accent">Click on skills to mark them as completed</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
            <span className="text-sm">Beginner</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2" />
            <span className="text-sm">Intermediate</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-purple-500 mr-2" />
            <span className="text-sm">Advanced</span>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Connection lines */}
        <svg className="absolute inset-0 pointer-events-none">
          {skills.map(skill =>
            skill.dependencies.map(depId => {
              const dependencyNode = skills.find(s => s.id === depId);
              if (!dependencyNode) return null;

              return (
                <line
                  key={`${skill.id}-${depId}`}
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="50%"
                  className="stroke-gray-medium stroke-2"
                  strokeDasharray="4"
                />
              );
            })
          )}
        </svg>

        {/* Skill nodes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                getLevelColor(skill.level)
              } ${
                skill.isCompleted
                  ? 'bg-primary text-secondary'
                  : 'bg-secondary hover:border-primary'
              }`}
              onClick={() => toggleComplete(skill.id)}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  skill.isCompleted ? 'bg-secondary text-primary' : 'bg-gray-light'
                }`}>
                  {skill.icon}
                </div>
                <h3 className="font-bold">{skill.title}</h3>
              </div>
              <p className={skill.isCompleted ? 'text-secondary/80' : 'text-accent'}>
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

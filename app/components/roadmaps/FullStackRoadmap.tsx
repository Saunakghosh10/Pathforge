'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiClock, FiCheck } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiMongodb, SiPostgresql, SiDocker, SiGit, SiTypescript, SiRedux, SiNestjs, SiGraphql } from 'react-icons/si';
import { useProgress } from '@/app/context/ProgressContext';
import { IconType } from 'react-icons';

interface TopicLink {
  title: string;
  url: string;
}

interface RoadmapTopic {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  level: 'beginner' | 'intermediate' | 'advanced';
  isCompleted: boolean;
  links: TopicLink[];
  subtopics?: string[];
  estimatedTime?: string;
  prerequisites?: string[];
}

export default function FullStackRoadmap() {
  const { updateTopicProgress, getTopicProgress } = useProgress();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics: RoadmapTopic[] = [
    {
      id: 'frontend-fundamentals',
      title: 'Frontend Fundamentals',
      description: 'Master core frontend technologies and modern frameworks',
      icon: SiReact,
      level: 'beginner',
      isCompleted: getTopicProgress('frontend-fundamentals'),
      links: [
        { title: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
        { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/' }
      ],
      subtopics: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript', 'Redux', 'Next.js'],
      estimatedTime: '8-10 weeks',
      prerequisites: []
    },
    {
      id: 'backend-fundamentals',
      title: 'Backend Fundamentals',
      description: 'Learn server-side programming and API development',
      icon: SiNodedotjs,
      level: 'beginner',
      isCompleted: getTopicProgress('backend-fundamentals'),
      links: [
        { title: 'Node.js Documentation', url: 'https://nodejs.org/docs/latest/api/' },
        { title: 'Express.js Guide', url: 'https://expressjs.com/en/guide/routing.html' }
      ],
      subtopics: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'Authorization'],
      estimatedTime: '6-8 weeks',
      prerequisites: ['frontend-fundamentals']
    },
    {
      id: 'database-management',
      title: 'Database Management',
      description: 'Master both SQL and NoSQL databases',
      icon: SiMongodb,
      level: 'intermediate',
      isCompleted: getTopicProgress('database-management'),
      links: [
        { title: 'MongoDB University', url: 'https://university.mongodb.com/' },
        { title: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com/' }
      ],
      subtopics: ['MongoDB', 'PostgreSQL', 'Database Design', 'Data Modeling', 'Indexing'],
      estimatedTime: '4-6 weeks',
      prerequisites: ['backend-fundamentals']
    },
    {
      id: 'advanced-backend',
      title: 'Advanced Backend',
      description: 'Advanced server-side concepts and frameworks',
      icon: SiNestjs,
      level: 'advanced',
      isCompleted: getTopicProgress('advanced-backend'),
      links: [
        { title: 'NestJS Documentation', url: 'https://docs.nestjs.com/' },
        { title: 'GraphQL Documentation', url: 'https://graphql.org/learn/' }
      ],
      subtopics: ['NestJS', 'GraphQL', 'Microservices', 'Message Queues'],
      estimatedTime: '8-10 weeks',
      prerequisites: ['database-management']
    },
    {
      id: 'devops-basics',
      title: 'DevOps Fundamentals',
      description: 'Learn deployment and container orchestration',
      icon: SiDocker,
      level: 'intermediate',
      isCompleted: getTopicProgress('devops-basics'),
      links: [
        { title: 'Docker Documentation', url: 'https://docs.docker.com/' },
        { title: 'CI/CD Best Practices', url: 'https://www.atlassian.com/continuous-delivery/principles' }
      ],
      subtopics: ['Docker', 'CI/CD', 'Cloud Platforms', 'Monitoring'],
      estimatedTime: '4-6 weeks',
      prerequisites: ['advanced-backend']
    }
  ];

  const handleTopicClick = (topicId: string) => {
    setSelectedTopic(selectedTopic === topicId ? null : topicId);
  };

  const handleCheckboxChange = (topicId: string) => {
    updateTopicProgress(topicId, !getTopicProgress(topicId));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Full Stack Development Roadmap
      </motion.h1>
      
      <div className="grid grid-cols-1 gap-6 md:gap-8">
        {topics.map((topic, index) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white rounded-lg shadow-lg overflow-hidden ${
              selectedTopic === topic.id ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <div
              className="p-6 cursor-pointer flex items-center justify-between"
              onClick={() => handleTopicClick(topic.id)}
            >
              <div className="flex items-center space-x-4">
                <topic.icon className="w-8 h-8 text-blue-500" />
                <div>
                  <h3 className="text-xl font-semibold">{topic.title}</h3>
                  <p className="text-gray-600">{topic.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <FiClock className="text-gray-400" />
                  <span className="text-sm text-gray-500">{topic.estimatedTime}</span>
                </div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={topic.isCompleted}
                    onChange={() => handleCheckboxChange(topic.id)}
                    className="form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-500">Completed</span>
                </label>
              </div>
            </div>
            
            {selectedTopic === topic.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="px-6 pb-6 space-y-4"
              >
                <div>
                  <h4 className="font-semibold mb-2">Subtopics:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {topic.subtopics?.map((subtopic) => (
                      <li key={subtopic} className="text-gray-600">{subtopic}</li>
                    ))}
                  </ul>
                </div>
                
                {topic.prerequisites.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Prerequisites:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {topic.prerequisites.map((prereq) => (
                        <li key={prereq} className="text-gray-600">
                          {topics.find(t => t.id === prereq)?.title}
                          {getTopicProgress(prereq) && (
                            <FiCheck className="inline-block ml-2 text-green-500" />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div>
                  <h4 className="font-semibold mb-2">Resources:</h4>
                  <ul className="space-y-2">
                    {topic.links.map((link) => (
                      <li key={link.title}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-600 underline"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

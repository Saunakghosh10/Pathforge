'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCode, FiGitBranch, FiServer } from 'react-icons/fi';
import { SiNestjs, SiNodedotjs } from 'react-icons/si';

interface TopicLink {
  title: string;
  url: string;
}

interface RoadmapTopic {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  level: 'beginner' | 'intermediate' | 'advanced';
  isCompleted: boolean;
  links: TopicLink[];
  subtopics?: string[];
  estimatedTime?: string;
  prerequisites?: string[];
}

export default function BackendRoadmap() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [topics, setTopics] = useState<RoadmapTopic[]>([
    {
      id: 'basics',
      title: 'Programming Fundamentals',
      description: 'Core programming concepts and algorithms',
      icon: <FiCode className="w-6 h-6" />,
      level: 'beginner',
      isCompleted: false,
      estimatedTime: '4-6 weeks',
      links: [
        { title: 'Python Tutorial', url: 'https://docs.python.org/3/tutorial/' },
        { title: 'JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' }
      ],
      subtopics: ['Data Structures', 'Algorithms', 'OOP Concepts', 'Design Patterns'],
      prerequisites: []
    },
    {
      id: 'version-control',
      title: 'Version Control',
      description: 'Master Git and collaboration workflows',
      icon: <FiGitBranch className="w-6 h-6" />,
      level: 'beginner',
      isCompleted: false,
      estimatedTime: '1-2 weeks',
      links: [
        { title: 'Git Documentation', url: 'https://git-scm.com/doc' },
        { title: 'GitHub Guides', url: 'https://guides.github.com' }
      ],
      subtopics: ['Git Basics', 'Branching Strategy', 'Pull Requests', 'CI/CD Integration'],
      prerequisites: ['basics']
    },
    {
      id: 'nodejs',
      title: 'Node.js',
      description: 'Server-side JavaScript runtime',
      icon: <SiNodedotjs className="w-6 h-6" />,
      level: 'beginner',
      isCompleted: false,
      estimatedTime: '4-6 weeks',
      links: [
        { title: 'Node.js Docs', url: 'https://nodejs.org/docs/latest/api/' },
        { title: 'Express.js Guide', url: 'https://expressjs.com/en/guide/routing.html' }
      ],
      subtopics: ['Express.js', 'REST APIs', 'Middleware', 'Error Handling'],
      prerequisites: ['basics']
    },
    {
      id: 'python',
      title: 'Python Backend',
      description: 'Python web frameworks and tools',
      icon: <SiNestjs className="w-6 h-6" />,
      level: 'intermediate',
      isCompleted: false,
      estimatedTime: '6-8 weeks',
      links: [
        { title: 'Django Documentation', url: 'https://docs.djangoproject.com/' },
        { title: 'FastAPI Documentation', url: 'https://fastapi.tiangolo.com/' }
      ],
      subtopics: ['Django', 'FastAPI', 'SQLAlchemy', 'Celery'],
      prerequisites: ['basics', 'databases']
    },
    {
      id: 'databases',
      title: 'Databases',
      description: 'SQL and NoSQL database systems',
      icon: <FiServer className="w-6 h-6" />,
      level: 'intermediate',
      isCompleted: false,
      estimatedTime: '6-8 weeks',
      links: [
        { title: 'PostgreSQL Tutorial', url: 'https://www.postgresql.org/docs/current/tutorial.html' },
        { title: 'MongoDB University', url: 'https://university.mongodb.com/' }
      ],
      subtopics: ['SQL', 'PostgreSQL', 'MongoDB', 'Redis'],
      prerequisites: ['basics']
    },
    {
      id: 'api-design',
      title: 'API Design',
      description: 'RESTful and GraphQL API design',
      icon: <FiServer className="w-6 h-6" />,
      level: 'intermediate',
      isCompleted: false,
      estimatedTime: '3-4 weeks',
      links: [
        { title: 'REST API Design', url: 'https://restfulapi.net/' },
        { title: 'GraphQL Docs', url: 'https://graphql.org/learn/' }
      ],
      subtopics: ['REST Principles', 'GraphQL', 'API Security', 'Documentation'],
      prerequisites: ['nodejs', 'python']
    },
    {
      id: 'devops',
      title: 'DevOps & Deployment',
      description: 'Containerization and cloud deployment',
      icon: <FiServer className="w-6 h-6" />,
      level: 'advanced',
      isCompleted: false,
      estimatedTime: '8-10 weeks',
      links: [
        { title: 'Docker Documentation', url: 'https://docs.docker.com/' },
        { title: 'AWS Documentation', url: 'https://docs.aws.amazon.com/' }
      ],
      subtopics: ['Docker', 'Kubernetes', 'AWS/GCP', 'CI/CD Pipelines'],
      prerequisites: ['nodejs', 'python', 'databases']
    },
    {
      id: 'security',
      title: 'Security',
      description: 'Backend security best practices',
      icon: <FiServer className="w-6 h-6" />,
      level: 'advanced',
      isCompleted: false,
      estimatedTime: '4-6 weeks',
      links: [
        { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
        { title: 'Web Security', url: 'https://developer.mozilla.org/en-US/docs/Web/Security' }
      ],
      subtopics: ['Authentication', 'Authorization', 'OWASP', 'Encryption'],
      prerequisites: ['api-design', 'databases']
    }
  ]);

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

  const getLevelColor = (level: RoadmapTopic['level']) => {
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

  const handleTopicClick = (topicId: string) => {
    setSelectedTopic(selectedTopic === topicId ? null : topicId);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-12"
      >
        <div className="text-center">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            Backend Development Path
          </motion.h1>
          <motion.p variants={itemVariants} className="text-accent max-w-2xl mx-auto">
            Master server-side development, databases, and deployment
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="flex justify-center space-x-4 flex-wrap gap-y-2">
          <span className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
            <span className="text-sm">Beginner</span>
          </span>
          <span className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2" />
            <span className="text-sm">Intermediate</span>
          </span>
          <span className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-purple-500 mr-2" />
            <span className="text-sm">Advanced</span>
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <motion.div
              key={topic.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleTopicClick(topic.id)}
              className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
                getLevelColor(topic.level)
              } ${
                topic.isCompleted
                  ? 'bg-primary text-secondary'
                  : 'bg-secondary hover:shadow-lg'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    topic.isCompleted ? 'bg-secondary text-primary' : 'bg-gray-light'
                  }`}>
                    {topic.icon}
                  </div>
                  <h3 className="text-xl font-bold">{topic.title}</h3>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setTopics(topics.map(t => 
                      t.id === topic.id ? { ...t, isCompleted: !t.isCompleted } : t
                    ));
                  }}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    topic.isCompleted
                      ? 'bg-secondary text-primary border-secondary'
                      : 'border-current'
                  }`}
                >
                  {topic.isCompleted && <FiCode className="w-4 h-4" />}
                </button>
              </div>

              <p className={topic.isCompleted ? 'text-secondary/80' : 'text-accent'}>
                {topic.description}
              </p>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">
                    Est. Time: {topic.estimatedTime}
                  </span>
                  {topic.prerequisites && topic.prerequisites.length > 0 && (
                    <span className="text-sm font-medium">
                      Prerequisites: {topic.prerequisites.join(', ')}
                    </span>
                  )}
                </div>

                <h4 className={`font-medium ${topic.isCompleted ? 'text-secondary' : 'text-primary'}`}>
                  Key Topics:
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {topic.subtopics?.map((subtopic) => (
                    <li
                      key={subtopic}
                      className={`text-sm ${topic.isCompleted ? 'text-secondary/80' : 'text-accent'}`}
                    >
                      • {subtopic}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-current/10">
                <h4 className={`font-medium mb-2 ${topic.isCompleted ? 'text-secondary' : 'text-primary'}`}>
                  Resources:
                </h4>
                <div className="space-y-2">
                  {topic.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`block text-sm ${
                        topic.isCompleted
                          ? 'text-secondary/80 hover:text-secondary'
                          : 'text-accent hover:text-primary'
                      }`}
                    >
                      → {link.title}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

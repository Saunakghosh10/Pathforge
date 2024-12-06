'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '@/app/context/ProgressContext';
import { 
  CommandLineIcon,
  ServerIcon,
  CircleStackIcon,
  CloudIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CodeBracketIcon,
  CubeTransparentIcon,
  ArrowPathIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

interface Topic {
  id: string;
  title: string;
  description: string;
  icon: any;
  level: string;
  isCompleted: boolean;
  links: { title: string; url: string }[];
  subtopics: string[];
  estimatedTime: string;
  prerequisites: string[];
}

export default function NodejsRoadmap() {
  const { updateTopicProgress, getTopicProgress } = useProgress();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics: Topic[] = [
    {
      id: 'javascript-advanced',
      title: 'Advanced JavaScript',
      description: 'Deep dive into JavaScript concepts for Node.js',
      icon: CommandLineIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'JavaScript.info', url: 'https://javascript.info/' },
        { title: 'Node.js & JavaScript', url: 'https://nodejs.dev/learn/differences-between-nodejs-and-the-browser' }
      ],
      subtopics: [
        'Event Loop',
        'Closures',
        'Prototypes',
        'Async Programming',
        'ES6+ Features',
        'Error Handling'
      ],
      estimatedTime: '3-4 weeks',
      prerequisites: []
    },
    {
      id: 'nodejs-basics',
      title: 'Node.js Fundamentals',
      description: 'Core Node.js concepts and runtime',
      icon: ServerIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'Node.js Documentation', url: 'https://nodejs.org/docs/latest/api/' },
        { title: 'Node.js Best Practices', url: 'https://github.com/goldbergyoni/nodebestpractices' }
      ],
      subtopics: [
        'Node.js Architecture',
        'Modules System',
        'File System',
        'Streams',
        'Buffer & Events',
        'Process & Child Process'
      ],
      estimatedTime: '4-5 weeks',
      prerequisites: ['javascript-advanced']
    },
    {
      id: 'express',
      title: 'Express.js',
      description: 'Web application framework for Node.js',
      icon: CodeBracketIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Express Documentation', url: 'https://expressjs.com/' },
        { title: 'Express Guide', url: 'https://expressjs.com/en/guide/routing.html' }
      ],
      subtopics: [
        'Routing',
        'Middleware',
        'Error Handling',
        'Template Engines',
        'Static Files',
        'Security Best Practices'
      ],
      estimatedTime: '3-4 weeks',
      prerequisites: ['nodejs-basics']
    },
    {
      id: 'databases',
      title: 'Databases',
      description: 'Working with databases in Node.js',
      icon: CircleStackIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'MongoDB Node.js Driver', url: 'https://docs.mongodb.com/drivers/node/' },
        { title: 'Sequelize ORM', url: 'https://sequelize.org/' }
      ],
      subtopics: [
        'SQL vs NoSQL',
        'MongoDB',
        'PostgreSQL',
        'ORMs',
        'Database Design',
        'Query Optimization'
      ],
      estimatedTime: '4-5 weeks',
      prerequisites: ['express']
    },
    {
      id: 'authentication',
      title: 'Authentication & Authorization',
      description: 'Implementing security in Node.js applications',
      icon: ShieldCheckIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Passport.js', url: 'http://www.passportjs.org/' },
        { title: 'JWT.io', url: 'https://jwt.io/' }
      ],
      subtopics: [
        'JWT',
        'OAuth',
        'Sessions',
        'Passport.js',
        'Role-Based Access',
        'Security Headers'
      ],
      estimatedTime: '3-4 weeks',
      prerequisites: ['express', 'databases']
    },
    {
      id: 'api-design',
      title: 'API Design',
      description: 'Building robust and scalable APIs',
      icon: CubeTransparentIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'REST API Design', url: 'https://restfulapi.net/' },
        { title: 'GraphQL', url: 'https://graphql.org/learn/' }
      ],
      subtopics: [
        'REST Principles',
        'GraphQL',
        'API Security',
        'Rate Limiting',
        'Documentation',
        'Versioning'
      ],
      estimatedTime: '3-4 weeks',
      prerequisites: ['express', 'authentication']
    },
    {
      id: 'testing',
      title: 'Testing',
      description: 'Testing Node.js applications',
      icon: BeakerIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Jest Documentation', url: 'https://jestjs.io/' },
        { title: 'Supertest', url: 'https://github.com/visionmedia/supertest' }
      ],
      subtopics: [
        'Unit Testing',
        'Integration Testing',
        'E2E Testing',
        'Test Coverage',
        'Mocking',
        'CI/CD Integration'
      ],
      estimatedTime: '3-4 weeks',
      prerequisites: ['api-design']
    },
    {
      id: 'deployment',
      title: 'Deployment & DevOps',
      description: 'Deploying and managing Node.js applications',
      icon: CloudIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'PM2 Documentation', url: 'https://pm2.keymetrics.io/' },
        { title: 'Docker Documentation', url: 'https://docs.docker.com/' }
      ],
      subtopics: [
        'Process Managers',
        'Docker',
        'CI/CD',
        'Monitoring',
        'Load Balancing',
        'Cloud Platforms'
      ],
      estimatedTime: '4-5 weeks',
      prerequisites: ['testing']
    },
    {
      id: 'performance',
      title: 'Performance & Scaling',
      description: 'Optimizing Node.js applications',
      icon: CpuChipIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Node.js Performance', url: 'https://nodejs.org/en/docs/guides/dont-block-the-event-loop/' },
        { title: 'Scaling Node.js', url: 'https://nodejs.org/api/cluster.html' }
      ],
      subtopics: [
        'Caching',
        'Memory Management',
        'Clustering',
        'Load Testing',
        'Profiling',
        'Microservices'
      ],
      estimatedTime: '4-5 weeks',
      prerequisites: ['deployment']
    },
    {
      id: 'websockets',
      title: 'Real-time Applications',
      description: 'Building real-time features with WebSocket',
      icon: ArrowPathIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Socket.io', url: 'https://socket.io/' },
        { title: 'WebSocket Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API' }
      ],
      subtopics: [
        'WebSocket Protocol',
        'Socket.io',
        'Real-time Events',
        'Scaling WebSocket',
        'Error Handling',
        'Security'
      ],
      estimatedTime: '3-4 weeks',
      prerequisites: ['performance']
    }
  ];

  const handleTopicClick = (topicId: string) => {
    setSelectedTopic(selectedTopic === topicId ? null : topicId);
  };

  const handleCheckboxChange = (topicId: string) => {
    updateTopicProgress('nodejs', topicId, !getTopicProgress('nodejs', topicId)?.completed);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold mb-8">Node.js Development Roadmap</h1>
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
              className="p-6 cursor-pointer"
              onClick={() => handleTopicClick(topic.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <topic.icon className="w-8 h-8 text-blue-500" />
                  <div>
                    <h3 className="text-xl font-semibold">{topic.title}</h3>
                    <p className="text-gray-600">{topic.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {topic.level}
                  </span>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={getTopicProgress('nodejs', topic.id)?.completed || false}
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
                  className="mt-4"
                >
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Estimated Time:</h4>
                      <p className="text-gray-600">{topic.estimatedTime}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Prerequisites:</h4>
                      <div className="flex flex-wrap gap-2">
                        {topic.prerequisites.map((prereq) => (
                          <span
                            key={prereq}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {topics.find(t => t.id === prereq)?.title || prereq}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Topics Covered:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {topic.subtopics.map((subtopic) => (
                          <span
                            key={subtopic}
                            className="text-gray-600 text-sm"
                          >
                            • {subtopic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Learning Resources:</h4>
                      <div className="space-y-2">
                        {topic.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600 block text-sm"
                          >
                            {link.title} →
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '@/app/context/ProgressContext';
import { 
  CommandLineIcon,
  BeakerIcon,
  CircleStackIcon,
  CloudIcon,
  CpuChipIcon,
  CodeBracketIcon,
  ChartBarIcon,
  CubeTransparentIcon,
  ArrowPathIcon,
  ServerIcon
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

export default function PythonRoadmap() {
  const { updateTopicProgress, getTopicProgress } = useProgress();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics: Topic[] = [
    {
      id: 'python-basics',
      title: 'Python Fundamentals',
      description: 'Core Python programming concepts',
      icon: CommandLineIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'Python Documentation', url: 'https://docs.python.org/3/' },
        { title: 'Python for Everybody', url: 'https://www.py4e.com/' }
      ],
      subtopics: [
        'Variables & Data Types',
        'Control Flow',
        'Functions',
        'Object-Oriented Programming',
        'Modules & Packages',
        'Error Handling'
      ],
      estimatedTime: '4-6 weeks',
      prerequisites: []
    },
    {
      id: 'advanced-python',
      title: 'Advanced Python',
      description: 'Advanced Python features and concepts',
      icon: CodeBracketIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Python Advanced Tutorial', url: 'https://realpython.com/' },
        { title: 'Python Design Patterns', url: 'https://python-patterns.guide/' }
      ],
      subtopics: [
        'Decorators',
        'Generators',
        'Context Managers',
        'Metaclasses',
        'Concurrency',
        'Memory Management'
      ],
      estimatedTime: '4-5 weeks',
      prerequisites: ['python-basics']
    },
    {
      id: 'data-structures',
      title: 'Data Structures',
      description: 'Python data structures and algorithms',
      icon: CircleStackIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Python DSA', url: 'https://www.geeksforgeeks.org/python-data-structures/' },
        { title: 'Algorithm Visualizations', url: 'https://visualgo.net/' }
      ],
      subtopics: [
        'Lists & Tuples',
        'Dictionaries & Sets',
        'Stacks & Queues',
        'Trees & Graphs',
        'Sorting Algorithms',
        'Search Algorithms'
      ],
      estimatedTime: '5-6 weeks',
      prerequisites: ['python-basics']
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Building web applications with Python',
      icon: ServerIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Django Documentation', url: 'https://docs.djangoproject.com/' },
        { title: 'Flask Documentation', url: 'https://flask.palletsprojects.com/' }
      ],
      subtopics: [
        'Django',
        'Flask',
        'FastAPI',
        'RESTful APIs',
        'Authentication',
        'Deployment'
      ],
      estimatedTime: '6-8 weeks',
      prerequisites: ['advanced-python']
    },
    {
      id: 'data-science',
      title: 'Data Science',
      description: 'Data analysis and scientific computing',
      icon: ChartBarIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'NumPy Documentation', url: 'https://numpy.org/doc/' },
        { title: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/' }
      ],
      subtopics: [
        'NumPy',
        'Pandas',
        'Data Visualization',
        'Statistical Analysis',
        'Jupyter Notebooks',
        'Data Cleaning'
      ],
      estimatedTime: '6-8 weeks',
      prerequisites: ['advanced-python']
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      description: 'ML algorithms and frameworks',
      icon: CpuChipIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Scikit-learn', url: 'https://scikit-learn.org/' },
        { title: 'TensorFlow', url: 'https://www.tensorflow.org/' }
      ],
      subtopics: [
        'Supervised Learning',
        'Unsupervised Learning',
        'Deep Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Model Deployment'
      ],
      estimatedTime: '8-10 weeks',
      prerequisites: ['data-science']
    },
    {
      id: 'testing',
      title: 'Testing',
      description: 'Testing Python applications',
      icon: BeakerIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'pytest Documentation', url: 'https://docs.pytest.org/' },
        { title: 'unittest Documentation', url: 'https://docs.python.org/3/library/unittest.html' }
      ],
      subtopics: [
        'Unit Testing',
        'Integration Testing',
        'pytest',
        'Mock Objects',
        'Test Coverage',
        'TDD'
      ],
      estimatedTime: '3-4 weeks',
      prerequisites: ['advanced-python']
    },
    {
      id: 'automation',
      title: 'Automation & Scripting',
      description: 'Automating tasks with Python',
      icon: ArrowPathIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Automate the Boring Stuff', url: 'https://automatetheboringstuff.com/' },
        { title: 'Python Scripting', url: 'https://realpython.com/tutorials/scripting/' }
      ],
      subtopics: [
        'File Operations',
        'Web Scraping',
        'Task Automation',
        'GUI Automation',
        'System Administration',
        'Scheduling'
      ],
      estimatedTime: '4-5 weeks',
      prerequisites: ['python-basics']
    },
    {
      id: 'databases',
      title: 'Databases',
      description: 'Working with databases in Python',
      icon: CircleStackIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'SQLAlchemy', url: 'https://www.sqlalchemy.org/' },
        { title: 'MongoDB with Python', url: 'https://pymongo.readthedocs.io/' }
      ],
      subtopics: [
        'SQL Databases',
        'NoSQL Databases',
        'ORMs',
        'Database Design',
        'Query Optimization',
        'Data Migration'
      ],
      estimatedTime: '5-6 weeks',
      prerequisites: ['advanced-python']
    },
    {
      id: 'devops',
      title: 'DevOps & Deployment',
      description: 'Deploying and managing Python applications',
      icon: CloudIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Docker Documentation', url: 'https://docs.docker.com/' },
        { title: 'AWS with Python', url: 'https://boto3.amazonaws.com/v1/documentation/api/latest/index.html' }
      ],
      subtopics: [
        'Docker',
        'CI/CD',
        'Cloud Deployment',
        'Monitoring',
        'Configuration Management',
        'Infrastructure as Code'
      ],
      estimatedTime: '6-8 weeks',
      prerequisites: ['testing', 'databases']
    }
  ];

  const handleTopicClick = (topicId: string) => {
    setSelectedTopic(selectedTopic === topicId ? null : topicId);
  };

  const handleCheckboxChange = (topicId: string) => {
    updateTopicProgress('python', topicId, !getTopicProgress('python', topicId)?.completed);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold mb-8">Python Development Roadmap</h1>
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
                      checked={getTopicProgress('python', topic.id)?.completed || false}
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
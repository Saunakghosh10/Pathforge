'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '@/app/context/ProgressContext';
import { 
  CodeBracketIcon,
  CubeIcon,
  ServerIcon,
  BeakerIcon,
  CloudIcon,
  CommandLineIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CircleStackIcon
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

export default function ReactRoadmap() {
  const { updateTopicProgress, getTopicProgress } = useProgress();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics: Topic[] = [
    {
      id: 'javascript-fundamentals',
      title: 'JavaScript Fundamentals',
      description: 'Core JavaScript concepts required for React',
      icon: CommandLineIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'JavaScript.info', url: 'https://javascript.info/' },
        { title: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' }
      ],
      subtopics: [
        'ES6+ Features',
        'Promises & Async/Await',
        'Array Methods',
        'Destructuring',
        'Modules',
        'Event Loop'
      ],
      estimatedTime: '4-6 weeks',
      prerequisites: []
    },
    {
      id: 'react-basics',
      title: 'React Fundamentals',
      description: 'Core React concepts and component basics',
      icon: CodeBracketIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'React Documentation', url: 'https://react.dev' },
        { title: 'React Tutorial', url: 'https://react.dev/learn' }
      ],
      subtopics: [
        'JSX',
        'Components',
        'Props',
        'State',
        'Event Handling',
        'Conditional Rendering'
      ],
      estimatedTime: '4-6 weeks',
      prerequisites: ['javascript-fundamentals']
    },
    {
      id: 'hooks',
      title: 'React Hooks',
      description: 'Modern React state management with hooks',
      icon: ArrowPathIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Hooks API Reference', url: 'https://react.dev/reference/react' },
        { title: 'Hooks Guide', url: 'https://react.dev/learn/hooks-overview' }
      ],
      subtopics: [
        'useState',
        'useEffect',
        'useContext',
        'useReducer',
        'useCallback',
        'useMemo',
        'Custom Hooks'
      ],
      estimatedTime: '3-4 weeks',
      prerequisites: ['react-basics']
    },
    {
      id: 'routing',
      title: 'React Router',
      description: 'Client-side routing in React applications',
      icon: ServerIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'React Router Documentation', url: 'https://reactrouter.com/' },
        { title: 'React Router Tutorial', url: 'https://reactrouter.com/docs/en/v6/getting-started/tutorial' }
      ],
      subtopics: [
        'Route Configuration',
        'Dynamic Routes',
        'Nested Routes',
        'Protected Routes',
        'Route Parameters',
        'Navigation'
      ],
      estimatedTime: '2-3 weeks',
      prerequisites: ['hooks']
    },
    {
      id: 'state-management',
      title: 'State Management',
      description: 'Global state management solutions',
      icon: CircleStackIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Redux Documentation', url: 'https://redux.js.org/' },
        { title: 'Zustand Documentation', url: 'https://github.com/pmndrs/zustand' }
      ],
      subtopics: [
        'Context API',
        'Redux Toolkit',
        'Zustand',
        'Jotai',
        'State Persistence',
        'Middleware'
      ],
      estimatedTime: '4-5 weeks',
      prerequisites: ['hooks']
    },
    {
      id: 'typescript',
      title: 'TypeScript with React',
      description: 'Type-safe React development',
      icon: CodeBracketIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/' },
        { title: 'React TypeScript Cheatsheet', url: 'https://react-typescript-cheatsheet.netlify.app/' }
      ],
      subtopics: [
        'Type Definitions',
        'Interfaces',
        'Generics',
        'Type Assertions',
        'Props Types',
        'Event Types'
      ],
      estimatedTime: '4-5 weeks',
      prerequisites: ['react-basics']
    },
    {
      id: 'styling',
      title: 'Modern React Styling',
      description: 'Styling solutions for React applications',
      icon: BeakerIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
        { title: 'Styled Components', url: 'https://styled-components.com/' }
      ],
      subtopics: [
        'CSS Modules',
        'Tailwind CSS',
        'Styled Components',
        'CSS-in-JS',
        'Theme Systems',
        'Responsive Design'
      ],
      estimatedTime: '3-4 weeks',
      prerequisites: ['react-basics']
    },
    {
      id: 'testing',
      title: 'Testing React Applications',
      description: 'Testing strategies and tools',
      icon: ShieldCheckIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'React Testing Library', url: 'https://testing-library.com/docs/react-testing-library/intro/' },
        { title: 'Jest Documentation', url: 'https://jestjs.io/docs/getting-started' }
      ],
      subtopics: [
        'Unit Testing',
        'Integration Testing',
        'Component Testing',
        'Mocking',
        'Test Coverage',
        'E2E Testing'
      ],
      estimatedTime: '4-5 weeks',
      prerequisites: ['hooks', 'typescript']
    },
    {
      id: 'performance',
      title: 'React Performance',
      description: 'Optimizing React applications',
      icon: CpuChipIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'React Performance', url: 'https://react.dev/learn/render-and-commit' },
        { title: 'Web Vitals', url: 'https://web.dev/vitals/' }
      ],
      subtopics: [
        'Code Splitting',
        'Lazy Loading',
        'Memo & Pure Components',
        'Virtual DOM',
        'Bundle Optimization',
        'Performance Monitoring'
      ],
      estimatedTime: '3-4 weeks',
      prerequisites: ['hooks', 'state-management']
    },
    {
      id: 'next-js',
      title: 'Next.js',
      description: 'React framework for production',
      icon: CloudIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Next.js Documentation', url: 'https://nextjs.org/docs' },
        { title: 'Next.js Learn', url: 'https://nextjs.org/learn' }
      ],
      subtopics: [
        'Server Components',
        'App Router',
        'Data Fetching',
        'API Routes',
        'Static Generation',
        'Deployment'
      ],
      estimatedTime: '5-6 weeks',
      prerequisites: ['performance', 'typescript']
    }
  ];

  const handleTopicClick = (topicId: string) => {
    setSelectedTopic(selectedTopic === topicId ? null : topicId);
  };

  const handleCheckboxChange = (topicId: string) => {
    updateTopicProgress('react', topicId, !getTopicProgress('react', topicId)?.completed);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold mb-8">React Development Roadmap</h1>
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
                      checked={getTopicProgress('react', topic.id)?.completed || false}
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
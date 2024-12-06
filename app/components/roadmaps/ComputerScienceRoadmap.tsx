'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '@/app/context/ProgressContext';
import { 
  CommandLineIcon, 
  CpuChipIcon, 
  CircleStackIcon, 
  CodeBracketIcon,
  LockClosedIcon,
  ServerIcon,
  WindowIcon,
  CubeTransparentIcon,
  ArrowPathIcon,
  ChartBarIcon
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

export default function ComputerScienceRoadmap() {
  const { updateTopicProgress, getTopicProgress } = useProgress();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics: Topic[] = [
    {
      id: 'programming-fundamentals',
      title: 'Programming Fundamentals',
      description: 'Core programming concepts and problem solving',
      icon: CommandLineIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'Python for Everybody', url: 'https://www.py4e.com/' },
        { title: 'Java Programming', url: 'https://java-programming.mooc.fi/' }
      ],
      subtopics: [
        'Variables & Data Types',
        'Control Structures',
        'Functions & Methods',
        'Object-Oriented Programming',
        'Error Handling',
        'Basic Algorithms'
      ],
      estimatedTime: '8-10 weeks',
      prerequisites: []
    },
    {
      id: 'data-structures',
      title: 'Data Structures',
      description: 'Fundamental data structures and their implementations',
      icon: CircleStackIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'Data Structures Course', url: 'https://www.coursera.org/learn/data-structures' },
        { title: 'Visualgo', url: 'https://visualgo.net/' }
      ],
      subtopics: [
        'Arrays & Strings',
        'Linked Lists',
        'Stacks & Queues',
        'Trees & Graphs',
        'Hash Tables',
        'Heaps'
      ],
      estimatedTime: '8-10 weeks',
      prerequisites: ['programming-fundamentals']
    },
    {
      id: 'algorithms',
      title: 'Algorithms',
      description: 'Algorithm design, analysis, and problem-solving strategies',
      icon: ArrowPathIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Algorithms Course', url: 'https://www.coursera.org/learn/algorithms-part1' },
        { title: 'Algorithm Visualizations', url: 'https://algorithm-visualizer.org/' }
      ],
      subtopics: [
        'Sorting & Searching',
        'Recursion',
        'Dynamic Programming',
        'Graph Algorithms',
        'Greedy Algorithms',
        'Algorithm Analysis'
      ],
      estimatedTime: '10-12 weeks',
      prerequisites: ['data-structures']
    },
    {
      id: 'computer-architecture',
      title: 'Computer Architecture',
      description: 'Understanding computer organization and assembly',
      icon: CpuChipIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Computer Architecture', url: 'https://www.coursera.org/learn/comparch' },
        { title: 'Nand2Tetris', url: 'https://www.nand2tetris.org/' }
      ],
      subtopics: [
        'Digital Logic',
        'CPU Architecture',
        'Memory Hierarchy',
        'Assembly Language',
        'Pipelining',
        'Cache Design'
      ],
      estimatedTime: '8-10 weeks',
      prerequisites: ['programming-fundamentals']
    },
    {
      id: 'operating-systems',
      title: 'Operating Systems',
      description: 'OS concepts and system programming',
      icon: WindowIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'OS Course', url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/' },
        { title: 'Linux Programming', url: 'https://tldp.org/LDP/tlk/tlk.html' }
      ],
      subtopics: [
        'Process Management',
        'Memory Management',
        'File Systems',
        'Concurrency',
        'Scheduling',
        'System Calls'
      ],
      estimatedTime: '10-12 weeks',
      prerequisites: ['computer-architecture']
    },
    {
      id: 'networking',
      title: 'Computer Networks',
      description: 'Network protocols and distributed systems',
      icon: ServerIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Computer Networking', url: 'https://gaia.cs.umass.edu/kurose_ross/index.php' },
        { title: 'Network Programming', url: 'https://beej.us/guide/bgnet/' }
      ],
      subtopics: [
        'TCP/IP Protocol',
        'Network Layers',
        'Routing',
        'Socket Programming',
        'Network Security',
        'HTTP/HTTPS'
      ],
      estimatedTime: '8-10 weeks',
      prerequisites: ['operating-systems']
    },
    {
      id: 'databases',
      title: 'Database Systems',
      description: 'Database design and management',
      icon: CircleStackIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Database Course', url: 'https://www.db-book.com/' },
        { title: 'SQL Tutorial', url: 'https://mode.com/sql-tutorial/' }
      ],
      subtopics: [
        'Relational Databases',
        'SQL',
        'Database Design',
        'Transactions',
        'Indexing',
        'NoSQL'
      ],
      estimatedTime: '6-8 weeks',
      prerequisites: ['data-structures']
    },
    {
      id: 'security',
      title: 'Computer Security',
      description: 'Security principles and cryptography',
      icon: LockClosedIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Cryptography Course', url: 'https://www.coursera.org/learn/crypto' },
        { title: 'Security Engineering', url: 'https://www.cl.cam.ac.uk/~rja14/book.html' }
      ],
      subtopics: [
        'Cryptography',
        'Network Security',
        'Web Security',
        'Authentication',
        'Access Control',
        'Security Protocols'
      ],
      estimatedTime: '8-10 weeks',
      prerequisites: ['networking']
    },
    {
      id: 'software-engineering',
      title: 'Software Engineering',
      description: 'Software development principles and practices',
      icon: CodeBracketIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Software Engineering', url: 'https://www.coursera.org/learn/software-engineering' },
        { title: 'Clean Code', url: 'https://www.oreilly.com/library/view/clean-code/9780136083238/' }
      ],
      subtopics: [
        'Design Patterns',
        'Software Architecture',
        'Testing',
        'Version Control',
        'Agile Methods',
        'DevOps'
      ],
      estimatedTime: '10-12 weeks',
      prerequisites: ['algorithms', 'databases']
    },
    {
      id: 'theory-computation',
      title: 'Theory of Computation',
      description: 'Theoretical foundations of computer science',
      icon: CubeTransparentIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Automata Theory', url: 'https://www.coursera.org/learn/automata' },
        { title: 'Computational Theory', url: 'https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/' }
      ],
      subtopics: [
        'Automata Theory',
        'Computability',
        'Complexity Theory',
        'Formal Languages',
        'Turing Machines',
        'P vs NP'
      ],
      estimatedTime: '10-12 weeks',
      prerequisites: ['algorithms']
    }
  ];

  const handleTopicClick = (topicId: string) => {
    setSelectedTopic(selectedTopic === topicId ? null : topicId);
  };

  const handleCheckboxChange = (topicId: string) => {
    updateTopicProgress('computer-science', topicId, !getTopicProgress('computer-science', topicId)?.completed);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold mb-8">Computer Science Roadmap</h1>
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
                      checked={getTopicProgress('computer-science', topic.id)?.completed || false}
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
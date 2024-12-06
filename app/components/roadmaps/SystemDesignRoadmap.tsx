'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '@/app/context/ProgressContext';
import { 
  CircleStackIcon,
  CloudIcon,
  ServerIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CodeBracketIcon,
  ChartBarIcon,
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

export default function SystemDesignRoadmap() {
  const { updateTopicProgress, getTopicProgress } = useProgress();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics: Topic[] = [
    {
      id: 'fundamentals',
      title: 'System Design Fundamentals',
      description: 'Core concepts of distributed systems',
      icon: CircleStackIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' },
        { title: 'Distributed Systems', url: 'https://www.distributed-systems.net/index.php/books/ds3/' }
      ],
      subtopics: [
        'Client-Server Model',
        'Network Protocols',
        'Storage Systems',
        'Latency vs Throughput',
        'CAP Theorem',
        'ACID vs BASE'
      ],
      estimatedTime: '4-5 weeks',
      prerequisites: []
    },
    {
      id: 'scalability',
      title: 'Scalability & Performance',
      description: 'Scaling systems and optimizing performance',
      icon: ArrowPathIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Scalability Blog', url: 'http://highscalability.com/' },
        { title: 'Performance Patterns', url: 'https://martinfowler.com/articles/patterns-of-distributed-systems/' }
      ],
      subtopics: [
        'Horizontal vs Vertical Scaling',
        'Load Balancing',
        'Caching Strategies',
        'Database Sharding',
        'Microservices',
        'Performance Metrics'
      ],
      estimatedTime: '5-6 weeks',
      prerequisites: ['fundamentals']
    },
    {
      id: 'databases',
      title: 'Database Design',
      description: 'Database architecture and optimization',
      icon: CircleStackIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Database Internals', url: 'https://www.databass.dev/' },
        { title: 'SQL vs NoSQL', url: 'https://www.mongodb.com/nosql-explained' }
      ],
      subtopics: [
        'Database Types',
        'Data Modeling',
        'Indexing Strategies',
        'Replication',
        'Partitioning',
        'Consistency Models'
      ],
      estimatedTime: '6-7 weeks',
      prerequisites: ['fundamentals']
    },
    {
      id: 'distributed-systems',
      title: 'Distributed Systems',
      description: 'Building reliable distributed systems',
      icon: ServerIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Distributed Systems', url: 'https://www.distributed-systems.net/' },
        { title: 'Consensus Protocols', url: 'https://raft.github.io/' }
      ],
      subtopics: [
        'Consensus Algorithms',
        'Leader Election',
        'Distributed Transactions',
        'Fault Tolerance',
        'Message Queues',
        'Event Sourcing'
      ],
      estimatedTime: '8-10 weeks',
      prerequisites: ['scalability']
    },
    {
      id: 'security',
      title: 'Security Design',
      description: 'Security architecture and best practices',
      icon: ShieldCheckIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
        { title: 'Security Patterns', url: 'https://www.patterns.dev/posts/security-patterns/' }
      ],
      subtopics: [
        'Authentication',
        'Authorization',
        'Encryption',
        'API Security',
        'Security Protocols',
        'Threat Modeling'
      ],
      estimatedTime: '5-6 weeks',
      prerequisites: ['distributed-systems']
    },
    {
      id: 'cloud-architecture',
      title: 'Cloud Architecture',
      description: 'Designing for cloud platforms',
      icon: CloudIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'AWS Architecture', url: 'https://aws.amazon.com/architecture/' },
        { title: 'Cloud Patterns', url: 'https://docs.microsoft.com/azure/architecture/patterns/' }
      ],
      subtopics: [
        'Cloud Services',
        'Serverless Architecture',
        'Container Orchestration',
        'Service Mesh',
        'Cloud Security',
        'Cost Optimization'
      ],
      estimatedTime: '6-8 weeks',
      prerequisites: ['distributed-systems']
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Observability',
      description: 'System monitoring and troubleshooting',
      icon: ChartBarIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Observability Guide', url: 'https://www.honeycomb.io/what-is-observability' },
        { title: 'Monitoring Patterns', url: 'https://sre.google/sre-book/monitoring-distributed-systems/' }
      ],
      subtopics: [
        'Metrics Collection',
        'Logging',
        'Tracing',
        'Alerting',
        'Dashboards',
        'Incident Response'
      ],
      estimatedTime: '4-5 weeks',
      prerequisites: ['scalability']
    },
    {
      id: 'api-design',
      title: 'API Design',
      description: 'Designing scalable and maintainable APIs',
      icon: CodeBracketIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'REST API Design', url: 'https://restfulapi.net/' },
        { title: 'API Patterns', url: 'https://www.apiguide.net/api/' }
      ],
      subtopics: [
        'REST Principles',
        'GraphQL',
        'API Gateways',
        'Versioning',
        'Documentation',
        'Rate Limiting'
      ],
      estimatedTime: '4-5 weeks',
      prerequisites: ['fundamentals']
    },
    {
      id: 'data-processing',
      title: 'Data Processing',
      description: 'Large-scale data processing systems',
      icon: CpuChipIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Big Data Patterns', url: 'https://www.manning.com/books/big-data' },
        { title: 'Stream Processing', url: 'https://www.oreilly.com/library/view/streaming-systems/9781491983867/' }
      ],
      subtopics: [
        'Batch Processing',
        'Stream Processing',
        'ETL Pipelines',
        'Data Lakes',
        'Real-time Analytics',
        'Data Warehousing'
      ],
      estimatedTime: '6-8 weeks',
      prerequisites: ['distributed-systems']
    },
    {
      id: 'case-studies',
      title: 'System Design Case Studies',
      description: 'Real-world system design examples',
      icon: BeakerIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'System Design Interview', url: 'https://github.com/checkcheckzz/system-design-interview' },
        { title: 'Real World Systems', url: 'https://engineeringblog.yelp.com/' }
      ],
      subtopics: [
        'URL Shortener',
        'Social Networks',
        'Video Streaming',
        'Chat Systems',
        'Search Engines',
        'Payment Systems'
      ],
      estimatedTime: '6-8 weeks',
      prerequisites: ['distributed-systems', 'security', 'cloud-architecture']
    }
  ];

  const handleTopicClick = (topicId: string) => {
    setSelectedTopic(selectedTopic === topicId ? null : topicId);
  };

  const handleCheckboxChange = (topicId: string) => {
    updateTopicProgress('system-design', topicId, !getTopicProgress('system-design', topicId)?.completed);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold mb-8">System Design Roadmap</h1>
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
                      checked={getTopicProgress('system-design', topic.id)?.completed || false}
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
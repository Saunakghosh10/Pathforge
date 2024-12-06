'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '@/app/context/ProgressContext';
import { 
  CubeTransparentIcon,
  ServerIcon,
  CloudIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CodeBracketIcon,
  CircleStackIcon,
  ArrowPathIcon,
  BeakerIcon,
  CommandLineIcon
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

export default function DockerRoadmap() {
  const { updateTopicProgress, getTopicProgress } = useProgress();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics: Topic[] = [
    {
      id: 'docker-basics',
      title: 'Docker Fundamentals',
      description: 'Core Docker concepts and commands',
      icon: CubeTransparentIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'Docker Get Started', url: 'https://docs.docker.com/get-started/' },
        { title: 'Docker Overview', url: 'https://docs.docker.com/get-started/overview/' }
      ],
      subtopics: [
        'Container Basics',
        'Docker Architecture',
        'Images & Containers',
        'Basic Commands',
        'Docker Hub',
        'Container Lifecycle'
      ],
      estimatedTime: '2-3 weeks',
      prerequisites: []
    },
    {
      id: 'dockerfile',
      title: 'Dockerfile & Images',
      description: 'Creating and managing Docker images',
      icon: CodeBracketIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'Dockerfile Reference', url: 'https://docs.docker.com/engine/reference/builder/' },
        { title: 'Best Practices', url: 'https://docs.docker.com/develop/develop-images/dockerfile_best-practices/' }
      ],
      subtopics: [
        'Dockerfile Syntax',
        'Building Images',
        'Layer Optimization',
        'Multi-stage Builds',
        'Image Tags',
        'Image Security'
      ],
      estimatedTime: '2-3 weeks',
      prerequisites: ['docker-basics']
    },
    {
      id: 'docker-compose',
      title: 'Docker Compose',
      description: 'Multi-container Docker applications',
      icon: CircleStackIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Compose Overview', url: 'https://docs.docker.com/compose/' },
        { title: 'Compose File Reference', url: 'https://docs.docker.com/compose/compose-file/' }
      ],
      subtopics: [
        'Compose File',
        'Services',
        'Networks',
        'Volumes',
        'Environment Variables',
        'Dependencies'
      ],
      estimatedTime: '2-3 weeks',
      prerequisites: ['dockerfile']
    },
    {
      id: 'networking',
      title: 'Docker Networking',
      description: 'Container networking and communication',
      icon: ServerIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Network Overview', url: 'https://docs.docker.com/network/' },
        { title: 'Network Tutorial', url: 'https://docs.docker.com/network/network-tutorial-standalone/' }
      ],
      subtopics: [
        'Network Drivers',
        'Bridge Networks',
        'Overlay Networks',
        'Network Security',
        'Service Discovery',
        'Load Balancing'
      ],
      estimatedTime: '2-3 weeks',
      prerequisites: ['docker-compose']
    },
    {
      id: 'volumes',
      title: 'Storage & Volumes',
      description: 'Managing data in Docker containers',
      icon: CircleStackIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Volumes', url: 'https://docs.docker.com/storage/volumes/' },
        { title: 'Storage Overview', url: 'https://docs.docker.com/storage/' }
      ],
      subtopics: [
        'Volume Types',
        'Bind Mounts',
        'tmpfs Mounts',
        'Volume Drivers',
        'Data Persistence',
        'Backup & Restore'
      ],
      estimatedTime: '1-2 weeks',
      prerequisites: ['docker-compose']
    },
    {
      id: 'security',
      title: 'Docker Security',
      description: 'Securing Docker containers and images',
      icon: ShieldCheckIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Security Overview', url: 'https://docs.docker.com/engine/security/' },
        { title: 'Security Guidelines', url: 'https://docs.docker.com/engine/security/security/' }
      ],
      subtopics: [
        'Security Best Practices',
        'Image Scanning',
        'Runtime Security',
        'Access Control',
        'Secrets Management',
        'Compliance'
      ],
      estimatedTime: '2-3 weeks',
      prerequisites: ['networking', 'volumes']
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Logging',
      description: 'Container monitoring and log management',
      icon: ArrowPathIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Docker Logs', url: 'https://docs.docker.com/config/containers/logging/' },
        { title: 'Prometheus', url: 'https://prometheus.io/docs/introduction/overview/' }
      ],
      subtopics: [
        'Logging Drivers',
        'Metrics Collection',
        'Monitoring Tools',
        'Log Aggregation',
        'Alerting',
        'Debugging'
      ],
      estimatedTime: '2-3 weeks',
      prerequisites: ['docker-compose']
    },
    {
      id: 'orchestration',
      title: 'Container Orchestration',
      description: 'Introduction to container orchestration',
      icon: ArrowPathIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Docker Swarm', url: 'https://docs.docker.com/engine/swarm/' },
        { title: 'Kubernetes Basics', url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/' }
      ],
      subtopics: [
        'Docker Swarm',
        'Kubernetes Basics',
        'Service Scaling',
        'Rolling Updates',
        'Health Checks',
        'Load Balancing'
      ],
      estimatedTime: '3-4 weeks',
      prerequisites: ['networking', 'security']
    },
    {
      id: 'ci-cd',
      title: 'CI/CD with Docker',
      description: 'Docker in continuous integration and deployment',
      icon: CloudIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'GitHub Actions', url: 'https://docs.github.com/en/actions/publishing-packages/publishing-docker-images' },
        { title: 'Jenkins Pipeline', url: 'https://www.jenkins.io/doc/book/pipeline/docker/' }
      ],
      subtopics: [
        'CI/CD Pipelines',
        'Automated Builds',
        'Testing',
        'Deployment Strategies',
        'Registry Integration',
        'Automation'
      ],
      estimatedTime: '2-3 weeks',
      prerequisites: ['orchestration']
    },
    {
      id: 'production',
      title: 'Production Deployment',
      description: 'Running Docker in production',
      icon: CpuChipIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Production Guide', url: 'https://docs.docker.com/config/containers/start-containers-automatically/' },
        { title: 'Best Practices', url: 'https://docs.docker.com/develop/dev-best-practices/' }
      ],
      subtopics: [
        'High Availability',
        'Scalability',
        'Resource Management',
        'Backup Strategies',
        'Disaster Recovery',
        'Performance Tuning'
      ],
      estimatedTime: '3-4 weeks',
      prerequisites: ['security', 'monitoring', 'ci-cd']
    }
  ];

  const handleTopicClick = (topicId: string) => {
    setSelectedTopic(selectedTopic === topicId ? null : topicId);
  };

  const handleCheckboxChange = (topicId: string) => {
    updateTopicProgress('docker', topicId, !getTopicProgress('docker', topicId)?.completed);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold mb-8">Docker Development Roadmap</h1>
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
                      checked={getTopicProgress('docker', topic.id)?.completed || false}
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
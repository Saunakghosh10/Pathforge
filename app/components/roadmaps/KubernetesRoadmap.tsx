'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '@/app/context/ProgressContext';
import { 
  CloudIcon,
  ServerIcon,
  CircleStackIcon,
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

export default function KubernetesRoadmap() {
  const { updateTopicProgress, getTopicProgress } = useProgress();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics: Topic[] = [
    {
      id: 'container-basics',
      title: 'Container Fundamentals',
      description: 'Understanding containers and Docker basics',
      icon: CubeTransparentIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'Docker Overview', url: 'https://docs.docker.com/get-started/overview/' },
        { title: 'Container Guide', url: 'https://kubernetes.io/docs/concepts/containers/' }
      ],
      subtopics: [
        'Container Concepts',
        'Docker Basics',
        'Container Images',
        'Container Runtime',
        'Networking Basics',
        'Storage Basics'
      ],
      estimatedTime: '2-3 weeks',
      prerequisites: []
    },
    {
      id: 'kubernetes-basics',
      title: 'Kubernetes Fundamentals',
      description: 'Core Kubernetes concepts and architecture',
      icon: CloudIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'Kubernetes Basics', url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/' },
        { title: 'K8s Concepts', url: 'https://kubernetes.io/docs/concepts/' }
      ],
      subtopics: [
        'K8s Architecture',
        'Nodes & Pods',
        'Control Plane',
        'kubectl CLI',
        'Namespaces',
        'Labels & Selectors'
      ],
      estimatedTime: '3-4 weeks',
      prerequisites: ['container-basics']
    },
    {
      id: 'workloads',
      title: 'Workload Resources',
      description: 'Managing applications in Kubernetes',
      icon: ServerIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Workloads', url: 'https://kubernetes.io/docs/concepts/workloads/' },
        { title: 'Deployments', url: 'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/' }
      ],
      subtopics: [
        'Pods',
        'ReplicaSets',
        'Deployments',
        'StatefulSets',
        'DaemonSets',
        'Jobs & CronJobs'
      ],
      estimatedTime: '3-4 weeks',
      prerequisites: ['kubernetes-basics']
    },
    {
      id: 'networking',
      title: 'Kubernetes Networking',
      description: 'Network concepts and implementation',
      icon: ArrowPathIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'K8s Networking', url: 'https://kubernetes.io/docs/concepts/cluster-administration/networking/' },
        { title: 'Network Policies', url: 'https://kubernetes.io/docs/concepts/services-networking/network-policies/' }
      ],
      subtopics: [
        'Services',
        'Ingress',
        'Network Policies',
        'DNS',
        'Load Balancing',
        'Service Mesh'
      ],
      estimatedTime: '3-4 weeks',
      prerequisites: ['workloads']
    },
    {
      id: 'storage',
      title: 'Storage',
      description: 'Managing persistent storage in Kubernetes',
      icon: CircleStackIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Storage Concepts', url: 'https://kubernetes.io/docs/concepts/storage/' },
        { title: 'Volumes Guide', url: 'https://kubernetes.io/docs/concepts/storage/volumes/' }
      ],
      subtopics: [
        'Volumes',
        'PersistentVolumes',
        'StorageClasses',
        'Volume Snapshots',
        'CSI Drivers',
        'Storage Best Practices'
      ],
      estimatedTime: '2-3 weeks',
      prerequisites: ['workloads']
    },
    {
      id: 'security',
      title: 'Security',
      description: 'Securing Kubernetes clusters and applications',
      icon: ShieldCheckIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Security Concepts', url: 'https://kubernetes.io/docs/concepts/security/' },
        { title: 'Security Guide', url: 'https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/' }
      ],
      subtopics: [
        'Authentication',
        'Authorization',
        'RBAC',
        'Security Contexts',
        'Pod Security',
        'Network Policies'
      ],
      estimatedTime: '3-4 weeks',
      prerequisites: ['networking', 'storage']
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Logging',
      description: 'Observability in Kubernetes',
      icon: ArrowPathIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Prometheus', url: 'https://prometheus.io/docs/introduction/overview/' },
        { title: 'Monitoring Guide', url: 'https://kubernetes.io/docs/tasks/debug-application-cluster/resource-usage-monitoring/' }
      ],
      subtopics: [
        'Metrics',
        'Prometheus',
        'Grafana',
        'Logging Architecture',
        'EFK Stack',
        'Tracing'
      ],
      estimatedTime: '2-3 weeks',
      prerequisites: ['workloads']
    },
    {
      id: 'configuration',
      title: 'Configuration & Secrets',
      description: 'Managing application configuration',
      icon: CodeBracketIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Configuration', url: 'https://kubernetes.io/docs/concepts/configuration/' },
        { title: 'Secrets', url: 'https://kubernetes.io/docs/concepts/configuration/secret/' }
      ],
      subtopics: [
        'ConfigMaps',
        'Secrets',
        'Environment Variables',
        'Resource Management',
        'HPA',
        'VPA'
      ],
      estimatedTime: '2-3 weeks',
      prerequisites: ['workloads']
    },
    {
      id: 'cluster-management',
      title: 'Cluster Management',
      description: 'Managing Kubernetes clusters',
      icon: CpuChipIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Cluster Admin', url: 'https://kubernetes.io/docs/concepts/cluster-administration/' },
        { title: 'Multi-cluster', url: 'https://kubernetes.io/docs/concepts/cluster-administration/federation/' }
      ],
      subtopics: [
        'Cluster Architecture',
        'High Availability',
        'Backup & Restore',
        'Upgrades',
        'Multi-cluster',
        'Resource Management'
      ],
      estimatedTime: '4-5 weeks',
      prerequisites: ['security', 'monitoring']
    },
    {
      id: 'advanced-topics',
      title: 'Advanced Topics',
      description: 'Advanced Kubernetes concepts',
      icon: BeakerIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'CRDs', url: 'https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/' },
        { title: 'Operators', url: 'https://kubernetes.io/docs/concepts/extend-kubernetes/operator/' }
      ],
      subtopics: [
        'Custom Resources',
        'Operators',
        'API Extensions',
        'Admission Controllers',
        'Service Mesh',
        'GitOps'
      ],
      estimatedTime: '4-5 weeks',
      prerequisites: ['cluster-management']
    }
  ];

  const handleTopicClick = (topicId: string) => {
    setSelectedTopic(selectedTopic === topicId ? null : topicId);
  };

  const handleCheckboxChange = (topicId: string) => {
    updateTopicProgress('kubernetes', topicId, !getTopicProgress('kubernetes', topicId)?.completed);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold mb-8">Kubernetes Development Roadmap</h1>
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
                      checked={getTopicProgress('kubernetes', topic.id)?.completed || false}
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
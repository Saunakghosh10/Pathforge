'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiClock, FiCheck, FiCloud, FiServer, FiDatabase, FiLayers, FiBox } from 'react-icons/fi';
import { DiGoogleCloudPlatform, DiDocker } from 'react-icons/di';
import { TbBrandAzure } from 'react-icons/tb';
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
  completed: boolean;
  links: TopicLink[];
  subtopics?: string[];
  estimatedTime?: string;
  prerequisites: string[];
}

export default function CloudComputingRoadmap() {
  const { updateTopicProgress, getTopicProgress } = useProgress();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics: RoadmapTopic[] = [
    {
      id: 'cloud-fundamentals',
      title: 'Cloud Computing Fundamentals',
      description: 'Learn core cloud concepts and service models',
      icon: FiCloud,
      level: 'beginner',
      completed: getTopicProgress('cloud', 'cloud-fundamentals')?.completed || false,
      links: [
        { title: 'AWS Cloud Practitioner', url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/' },
        { title: 'Cloud Computing Concepts', url: 'https://www.coursera.org/learn/cloud-computing' }
      ],
      subtopics: ['IaaS, PaaS, SaaS', 'Cloud Service Models', 'Cloud Deployment Models', 'Cloud Architecture', 'Cloud Economics'],
      estimatedTime: '4-6 weeks',
      prerequisites: []
    },
    {
      id: 'aws-essentials',
      title: 'AWS Essentials',
      description: 'Master Amazon Web Services core services',
      icon: FiServer,
      level: 'beginner',
      completed: getTopicProgress('aws', 'aws-essentials')?.completed || false,
      links: [
        { title: 'AWS Documentation', url: 'https://docs.aws.amazon.com/' },
        { title: 'AWS Solutions Architect', url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/' }
      ],
      subtopics: ['EC2', 'S3', 'VPC', 'IAM', 'RDS', 'Lambda', 'CloudFormation'],
      estimatedTime: '8-10 weeks',
      prerequisites: ['cloud-fundamentals']
    },
    {
      id: 'azure-fundamentals',
      title: 'Azure Fundamentals',
      description: 'Learn Microsoft Azure cloud platform',
      icon: TbBrandAzure,
      level: 'beginner',
      completed: getTopicProgress('azure', 'azure-fundamentals')?.completed || false,
      links: [
        { title: 'Azure Documentation', url: 'https://docs.microsoft.com/azure/' },
        { title: 'Azure Fundamentals', url: 'https://docs.microsoft.com/learn/paths/azure-fundamentals/' }
      ],
      subtopics: ['Virtual Machines', 'App Services', 'Storage', 'Active Directory', 'Networking'],
      estimatedTime: '6-8 weeks',
      prerequisites: ['cloud-fundamentals']
    },
    {
      id: 'gcp-essentials',
      title: 'Google Cloud Platform Basics',
      description: 'Understand GCP services and cloud architecture.',
      icon: DiGoogleCloudPlatform,
      level: 'intermediate',
      completed: getTopicProgress('gcp', 'gcp-essentials')?.completed || false,
      links: [
        { title: 'GCP Getting Started', url: 'https://cloud.google.com/gcp/getting-started' }
      ],
      subtopics: ['Compute Engine', 'App Engine', 'Cloud Storage', 'Cloud SQL', 'Cloud Datastore'],
      estimatedTime: '4 weeks',
      prerequisites: ['cloud-fundamentals']
    },
    {
      id: 'containerization',
      title: 'Containerization & Orchestration',
      description: 'Master Docker and Kubernetes',
      icon: DiDocker,
      level: 'intermediate',
      completed: getTopicProgress('containerization', 'containerization')?.completed || false,
      links: [
        { title: 'Docker Documentation', url: 'https://docs.docker.com/' },
        { title: 'Kubernetes Documentation', url: 'https://kubernetes.io/docs/home/' }
      ],
      subtopics: ['Docker', 'Kubernetes', 'Container Security', 'Microservices', 'Service Mesh'],
      estimatedTime: '8-10 weeks',
      prerequisites: ['aws-essentials']
    },
    {
      id: 'infrastructure-as-code',
      title: 'Infrastructure as Code',
      description: 'Learn infrastructure automation and management',
      icon: FiBox,
      level: 'advanced',
      completed: getTopicProgress('infrastructure-as-code', 'infrastructure-as-code')?.completed || false,
      links: [
        { title: 'Terraform Documentation', url: 'https://www.terraform.io/docs' },
        { title: 'AWS CDK Guide', url: 'https://docs.aws.amazon.com/cdk/latest/guide/' }
      ],
      subtopics: ['Terraform', 'CloudFormation', 'AWS CDK', 'Ansible', 'Configuration Management'],
      estimatedTime: '6-8 weeks',
      prerequisites: ['containerization']
    },
    {
      id: 'cloud-security',
      title: 'Cloud Security',
      description: 'Implement cloud security best practices',
      icon: FiLayers,
      level: 'advanced',
      completed: getTopicProgress('cloud-security', 'cloud-security')?.completed || false,
      links: [
        { title: 'AWS Security Best Practices', url: 'https://aws.amazon.com/architecture/security-identity-compliance/' },
        { title: 'Cloud Security Alliance', url: 'https://cloudsecurityalliance.org/' }
      ],
      subtopics: ['Identity Management', 'Network Security', 'Compliance', 'Encryption', 'Security Automation'],
      estimatedTime: '6-8 weeks',
      prerequisites: ['infrastructure-as-code']
    }
  ];

  const handleTopicClick = (topicId: string) => {
    setSelectedTopic(selectedTopic === topicId ? null : topicId);
  };

  const handleCheckboxChange = (topicId: string) => {
    const currentProgress = getTopicProgress('cloud', topicId);
    updateTopicProgress('cloud', topicId, !currentProgress?.completed || false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Cloud Computing Roadmap
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
                    checked={topic.completed}
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
                          {getTopicProgress('cloud', prereq)?.completed && (
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

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCloud, FiServer, FiLayers, FiGitBranch, FiShield, FiCode, FiMonitor, FiClock, FiCheck } from 'react-icons/fi';
import { SiDocker, SiKubernetes, SiAmazon, SiTerraform, SiJenkins, SiGrafana, SiPrometheus } from 'react-icons/si';
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

export default function DevOpsRoadmap() {
  const { updateTopicProgress, getTopicProgress } = useProgress();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics: RoadmapTopic[] = [
    {
      id: 'linux-basics',
      title: 'Linux Fundamentals',
      description: 'Master Linux command line and system administration',
      icon: FiCode,
      level: 'beginner',
      isCompleted: false,
      estimatedTime: '4-6 weeks',
      links: [
        { title: 'Linux Journey', url: 'https://linuxjourney.com/' },
        { title: 'Linux Documentation', url: 'https://www.kernel.org/doc/html/latest/' }
      ],
      subtopics: ['Command Line', 'File System', 'Process Management', 'Shell Scripting'],
      prerequisites: []
    },
    {
      id: 'version-control',
      title: 'Version Control',
      description: 'Advanced Git and collaboration workflows',
      icon: FiGitBranch,
      level: 'beginner',
      isCompleted: false,
      estimatedTime: '2-3 weeks',
      links: [
        { title: 'Git Documentation', url: 'https://git-scm.com/doc' },
        { title: 'Git Branching', url: 'https://learngitbranching.js.org/' }
      ],
      subtopics: ['Git Flow', 'Branching Strategies', 'CI/CD Integration', 'Code Review'],
      prerequisites: ['linux-basics']
    },
    {
      id: 'containerization',
      title: 'Containerization',
      description: 'Docker and container orchestration',
      icon: SiDocker,
      level: 'intermediate',
      isCompleted: false,
      estimatedTime: '6-8 weeks',
      links: [
        { title: 'Docker Documentation', url: 'https://docs.docker.com/' },
        { title: 'Kubernetes Docs', url: 'https://kubernetes.io/docs/home/' }
      ],
      subtopics: ['Docker', 'Kubernetes', 'Container Security', 'Orchestration'],
      prerequisites: ['linux-basics']
    },
    {
      id: 'cloud-platforms',
      title: 'Cloud Platforms',
      description: 'Cloud infrastructure and services',
      icon: SiAmazon,
      level: 'intermediate',
      isCompleted: false,
      estimatedTime: '8-10 weeks',
      links: [
        { title: 'AWS Documentation', url: 'https://docs.aws.amazon.com/' },
        { title: 'Azure Documentation', url: 'https://docs.microsoft.com/azure/' }
      ],
      subtopics: ['AWS', 'Azure', 'GCP', 'Cloud Security'],
      prerequisites: ['containerization']
    },
    {
      id: 'infrastructure-as-code',
      title: 'Infrastructure as Code',
      description: 'Automate infrastructure deployment',
      icon: SiTerraform,
      level: 'intermediate',
      isCompleted: false,
      estimatedTime: '6-8 weeks',
      links: [
        { title: 'Terraform Docs', url: 'https://www.terraform.io/docs' },
        { title: 'Ansible Docs', url: 'https://docs.ansible.com/' }
      ],
      subtopics: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi'],
      prerequisites: ['cloud-platforms']
    },
    {
      id: 'ci-cd',
      title: 'CI/CD',
      description: 'Continuous Integration and Deployment',
      icon: SiJenkins,
      level: 'advanced',
      isCompleted: false,
      estimatedTime: '4-6 weeks',
      links: [
        { title: 'Jenkins Docs', url: 'https://www.jenkins.io/doc/' },
        { title: 'GitHub Actions', url: 'https://docs.github.com/actions' }
      ],
      subtopics: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'ArgoCD'],
      prerequisites: ['version-control', 'containerization']
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Logging',
      description: 'System monitoring and log management',
      icon: SiGrafana,
      level: 'advanced',
      isCompleted: false,
      estimatedTime: '4-6 weeks',
      links: [
        { title: 'Prometheus Docs', url: 'https://prometheus.io/docs/' },
        { title: 'Grafana Docs', url: 'https://grafana.com/docs/' }
      ],
      subtopics: ['Prometheus', 'Grafana', 'ELK Stack', 'Log Analysis'],
      prerequisites: ['cloud-platforms']
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      description: 'DevSecOps and security best practices',
      icon: FiShield,
      level: 'advanced',
      isCompleted: false,
      estimatedTime: '6-8 weeks',
      links: [
        { title: 'OWASP DevSecOps', url: 'https://owasp.org/www-project-devsecops-guideline/' },
        { title: 'Cloud Security', url: 'https://aws.amazon.com/security/' }
      ],
      subtopics: ['DevSecOps', 'Compliance', 'Security Scanning', 'Access Management'],
      prerequisites: ['ci-cd', 'monitoring']
    }
  ];

  const handleTopicClick = (topicId: string) => {
    const currentProgress = getTopicProgress('devops', topicId);
    if (currentProgress) {
      updateTopicProgress('devops', topicId, !currentProgress.isCompleted);
    } else {
      updateTopicProgress('devops', topicId, true);
    }
  };

  const isTopicAccessible = (topic: RoadmapTopic) => {
    if (!topic.prerequisites) return true;
    return topic.prerequisites.every(prereqId => {
      const progress = getTopicProgress('devops', prereqId);
      return progress?.isCompleted;
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        DevOps Engineering Roadmap
      </motion.h1>

      <div className="space-y-6">
        {topics.map((topic, index) => {
          const progress = getTopicProgress('devops', topic.id);
          const isAccessible = isTopicAccessible(topic);
          const Icon = topic.icon;

          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-lg border ${
                progress?.isCompleted
                  ? 'bg-green-50 border-green-200'
                  : isAccessible
                  ? 'bg-white hover:bg-gray-50 cursor-pointer'
                  : 'bg-gray-50 opacity-75'
              }`}
              onClick={() => isAccessible && handleTopicClick(topic.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-3 rounded-lg ${
                      progress?.isCompleted ? 'bg-green-200' : 'bg-gray-200'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                    <p className="text-gray-600 mb-4">{topic.description}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span
                        className={`font-medium ${
                          topic.level === 'beginner'
                            ? 'text-green-600'
                            : topic.level === 'intermediate'
                            ? 'text-yellow-600'
                            : 'text-red-600'
                        }`}
                      >
                        {topic.level.charAt(0).toUpperCase() + topic.level.slice(1)}
                      </span>
                      {topic.estimatedTime && (
                        <span className="flex items-center text-gray-600">
                          <FiClock className="mr-1" />
                          {topic.estimatedTime}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {progress?.isCompleted && (
                  <FiCheck className="w-6 h-6 text-green-600" />
                )}
              </div>

              {topic.prerequisites && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Prerequisites:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {topic.prerequisites.map(prereqId => {
                      const prereqProgress = getTopicProgress('devops', prereqId);
                      const prereqTopic = topics.find(t => t.id === prereqId);
                      return (
                        <span
                          key={prereqId}
                          className={`text-sm px-2 py-1 rounded ${
                            prereqProgress?.isCompleted
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {prereqTopic?.title}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}

              {topic.links && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">Resources:</p>
                  <div className="space-y-2">
                    {topic.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 hover:text-blue-800"
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useProgress } from '@/app/context/ProgressContext';
import {
  SiLinux,
  SiDocker,
  SiKubernetes,
  SiAnsible,
  SiTerraform,
  SiJenkins,
  SiPrometheus,
  SiGit
} from 'react-icons/si';
import { RoadmapTopic } from '@/types/roadmap';
import RoadmapNode from './RoadmapNode';

export default function DevOpsRoadmap() {
  const { getTopicProgress } = useProgress();

  const topics: RoadmapTopic[] = [
    {
      id: 'linux-fundamentals',
      title: 'Linux Fundamentals',
      description:
        'Master Linux operating system and command line.',
      icon: SiLinux,
      level: 'beginner',
      completed: getTopicProgress('devops', 'linux-fundamentals')?.completed || false,
      links: [
        { title: 'Linux Documentation', url: 'https://www.linux.org/' },
        { title: 'Linux Command Line', url: 'https://linuxcommand.org/' }
      ]
    },
    {
      id: 'version-control',
      title: 'Version Control',
      description:
        'Learn Git and version control practices.',
      icon: SiGit,
      level: 'beginner',
      completed: getTopicProgress('devops', 'version-control')?.completed || false,
      links: [
        { title: 'Git Documentation', url: 'https://git-scm.com/doc' },
        { title: 'Git Branching', url: 'https://learngitbranching.js.org/' }
      ]
    },
    {
      id: 'containerization',
      title: 'Containerization',
      description:
        'Master Docker and container concepts.',
      icon: SiDocker,
      level: 'intermediate',
      completed: getTopicProgress('devops', 'containerization')?.completed || false,
      links: [
        { title: 'Docker Documentation', url: 'https://docs.docker.com/' },
        { title: 'Docker Tutorial', url: 'https://www.docker.com/get-started' }
      ]
    },
    {
      id: 'container-orchestration',
      title: 'Container Orchestration',
      description:
        'Learn Kubernetes for container orchestration.',
      icon: SiKubernetes,
      level: 'advanced',
      completed: getTopicProgress('devops', 'container-orchestration')?.completed || false,
      links: [
        { title: 'Kubernetes Docs', url: 'https://kubernetes.io/docs/home/' },
        { title: 'K8s Tutorial', url: 'https://kubernetes.io/docs/tutorials/' }
      ]
    },
    {
      id: 'configuration-management',
      title: 'Configuration Management',
      description:
        'Automate infrastructure with Ansible.',
      icon: SiAnsible,
      level: 'intermediate',
      completed: getTopicProgress('devops', 'configuration-management')?.completed || false,
      links: [
        { title: 'Ansible Documentation', url: 'https://docs.ansible.com/' },
        { title: 'Ansible Tutorial', url: 'https://www.ansible.com/resources/get-started' }
      ]
    },
    {
      id: 'infrastructure-as-code',
      title: 'Infrastructure as Code',
      description:
        'Manage infrastructure with Terraform.',
      icon: SiTerraform,
      level: 'advanced',
      completed: getTopicProgress('devops', 'infrastructure-as-code')?.completed || false,
      links: [
        { title: 'Terraform Documentation', url: 'https://www.terraform.io/docs' },
        { title: 'Terraform Tutorial', url: 'https://learn.hashicorp.com/terraform' }
      ]
    },
    {
      id: 'ci-cd',
      title: 'CI/CD',
      description:
        'Implement continuous integration and deployment.',
      icon: SiJenkins,
      level: 'intermediate',
      completed: getTopicProgress('devops', 'ci-cd')?.completed || false,
      links: [
        { title: 'Jenkins Documentation', url: 'https://www.jenkins.io/doc/' },
        { title: 'CI/CD Pipeline', url: 'https://www.jenkins.io/doc/book/pipeline/' }
      ]
    },
    {
      id: 'monitoring',
      title: 'Monitoring',
      description:
        'Set up monitoring and alerting with Prometheus.',
      icon: SiPrometheus,
      level: 'advanced',
      completed: getTopicProgress('devops', 'monitoring')?.completed || false,
      links: [
        { title: 'Prometheus Docs', url: 'https://prometheus.io/docs/introduction/overview/' },
        { title: 'Monitoring Guide', url: 'https://prometheus.io/docs/practices/instrumentation/' }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold mb-8">DevOps Roadmap</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <RoadmapNode
            key={topic.id}
            topic={topic}
            roadmapId="devops"
          />
        ))}
      </div>
    </motion.div>
  );
}

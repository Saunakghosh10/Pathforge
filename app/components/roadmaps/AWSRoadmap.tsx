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

export default function AWSRoadmap() {
  const { updateTopicProgress, getTopicProgress } = useProgress();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics: Topic[] = [
    {
      id: 'cloud-basics',
      title: 'Cloud Computing Fundamentals',
      description: 'Core cloud computing concepts',
      icon: CloudIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'AWS Cloud Practitioner', url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/' },
        { title: 'AWS Overview', url: 'https://aws.amazon.com/getting-started/' }
      ],
      subtopics: [
        'Cloud Models',
        'AWS Global Infrastructure',
        'AWS Services Overview',
        'Pricing Models',
        'Security Basics',
        'AWS Console'
      ],
      estimatedTime: '3-4 weeks',
      prerequisites: []
    },
    {
      id: 'compute',
      title: 'Compute Services',
      description: 'AWS compute and serverless services',
      icon: CpuChipIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'EC2 Documentation', url: 'https://docs.aws.amazon.com/ec2/' },
        { title: 'Lambda Guide', url: 'https://docs.aws.amazon.com/lambda/' }
      ],
      subtopics: [
        'EC2',
        'Lambda',
        'ECS',
        'EKS',
        'Auto Scaling',
        'Elastic Beanstalk'
      ],
      estimatedTime: '4-5 weeks',
      prerequisites: ['cloud-basics']
    },
    {
      id: 'storage',
      title: 'Storage Services',
      description: 'AWS storage solutions',
      icon: CircleStackIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'S3 Documentation', url: 'https://docs.aws.amazon.com/s3/' },
        { title: 'EBS Guide', url: 'https://docs.aws.amazon.com/ebs/' }
      ],
      subtopics: [
        'S3',
        'EBS',
        'EFS',
        'FSx',
        'Storage Gateway',
        'Backup Solutions'
      ],
      estimatedTime: '3-4 weeks',
      prerequisites: ['cloud-basics']
    },
    {
      id: 'networking',
      title: 'Networking & Content Delivery',
      description: 'AWS networking services',
      icon: ServerIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'VPC Documentation', url: 'https://docs.aws.amazon.com/vpc/' },
        { title: 'CloudFront Guide', url: 'https://docs.aws.amazon.com/cloudfront/' }
      ],
      subtopics: [
        'VPC',
        'Route 53',
        'CloudFront',
        'API Gateway',
        'Load Balancers',
        'Direct Connect'
      ],
      estimatedTime: '4-5 weeks',
      prerequisites: ['compute', 'storage']
    },
    {
      id: 'databases',
      title: 'Database Services',
      description: 'AWS database solutions',
      icon: CircleStackIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'RDS Documentation', url: 'https://docs.aws.amazon.com/rds/' },
        { title: 'DynamoDB Guide', url: 'https://docs.aws.amazon.com/dynamodb/' }
      ],
      subtopics: [
        'RDS',
        'DynamoDB',
        'Aurora',
        'ElastiCache',
        'Redshift',
        'DocumentDB'
      ],
      estimatedTime: '4-5 weeks',
      prerequisites: ['networking']
    },
    {
      id: 'security',
      title: 'Security & Identity',
      description: 'AWS security services and practices',
      icon: ShieldCheckIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'IAM Documentation', url: 'https://docs.aws.amazon.com/iam/' },
        { title: 'Security Best Practices', url: 'https://aws.amazon.com/architecture/security-identity-compliance/' }
      ],
      subtopics: [
        'IAM',
        'Security Groups',
        'KMS',
        'WAF & Shield',
        'GuardDuty',
        'Security Hub'
      ],
      estimatedTime: '4-5 weeks',
      prerequisites: ['networking']
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Management',
      description: 'AWS monitoring and management tools',
      icon: ArrowPathIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'CloudWatch Documentation', url: 'https://docs.aws.amazon.com/cloudwatch/' },
        { title: 'Systems Manager', url: 'https://docs.aws.amazon.com/systems-manager/' }
      ],
      subtopics: [
        'CloudWatch',
        'CloudTrail',
        'Config',
        'Systems Manager',
        'Trusted Advisor',
        'Organizations'
      ],
      estimatedTime: '3-4 weeks',
      prerequisites: ['security']
    },
    {
      id: 'devops',
      title: 'DevOps Services',
      description: 'AWS DevOps tools and practices',
      icon: ArrowPathIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'CodePipeline', url: 'https://docs.aws.amazon.com/codepipeline/' },
        { title: 'DevOps Guide', url: 'https://aws.amazon.com/devops/' }
      ],
      subtopics: [
        'CodeCommit',
        'CodeBuild',
        'CodeDeploy',
        'CodePipeline',
        'CloudFormation',
        'OpsWorks'
      ],
      estimatedTime: '4-5 weeks',
      prerequisites: ['monitoring']
    },
    {
      id: 'containers',
      title: 'Containers & Serverless',
      description: 'Container and serverless architectures',
      icon: CubeTransparentIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'ECS Documentation', url: 'https://docs.aws.amazon.com/ecs/' },
        { title: 'Serverless Guide', url: 'https://aws.amazon.com/serverless/' }
      ],
      subtopics: [
        'ECS Deep Dive',
        'EKS Advanced',
        'Fargate',
        'Lambda Advanced',
        'SAM',
        'Step Functions'
      ],
      estimatedTime: '5-6 weeks',
      prerequisites: ['devops']
    },
    {
      id: 'architecture',
      title: 'Solution Architecture',
      description: 'AWS solution architecture patterns',
      icon: BeakerIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Architecture Center', url: 'https://aws.amazon.com/architecture/' },
        { title: 'Well-Architected', url: 'https://aws.amazon.com/architecture/well-architected/' }
      ],
      subtopics: [
        'Well-Architected Framework',
        'High Availability',
        'Cost Optimization',
        'Migration Strategies',
        'Hybrid Architecture',
        'Disaster Recovery'
      ],
      estimatedTime: '6-8 weeks',
      prerequisites: ['containers', 'security', 'databases']
    }
  ];

  const handleTopicClick = (topicId: string) => {
    setSelectedTopic(selectedTopic === topicId ? null : topicId);
  };

  const handleCheckboxChange = (topicId: string) => {
    updateTopicProgress('aws', topicId, !getTopicProgress('aws', topicId)?.completed);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold mb-8">AWS Development Roadmap</h1>
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
                      checked={getTopicProgress('aws', topic.id)?.completed || false}
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
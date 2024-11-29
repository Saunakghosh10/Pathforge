'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, CpuChipIcon, CloudIcon, BeakerIcon, ChartBarIcon } from '@heroicons/react/24/outline';

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

export default function AIEngineerRoadmap() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());

  const topics: Topic[] = [
    {
      id: 'foundations',
      title: 'AI/ML Foundations',
      description: 'Core concepts of artificial intelligence and machine learning',
      icon: BeakerIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'Machine Learning Course', url: 'https://www.coursera.org/learn/machine-learning' },
        { title: 'Deep Learning Specialization', url: 'https://www.coursera.org/specializations/deep-learning' }
      ],
      subtopics: ['Linear Algebra', 'Statistics', 'Calculus', 'Probability', 'ML Theory'],
      estimatedTime: '8-10 weeks',
      prerequisites: []
    },
    {
      id: 'python-datascience',
      title: 'Python for Data Science',
      description: 'Essential Python libraries for AI/ML',
      icon: CodeBracketIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'NumPy Documentation', url: 'https://numpy.org/doc/' },
        { title: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/' }
      ],
      subtopics: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
      estimatedTime: '6-8 weeks',
      prerequisites: ['foundations']
    },
    {
      id: 'ml-algorithms',
      title: 'ML Algorithms',
      description: 'Traditional machine learning algorithms',
      icon: ChartBarIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Scikit-learn Documentation', url: 'https://scikit-learn.org/stable/' },
        { title: 'ML Algorithms Guide', url: 'https://machinelearningmastery.com/start-here/' }
      ],
      subtopics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Feature Engineering'],
      estimatedTime: '8-10 weeks',
      prerequisites: ['python-datascience']
    },
    {
      id: 'deep-learning',
      title: 'Deep Learning',
      description: 'Neural networks and deep learning frameworks',
      icon: CpuChipIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'TensorFlow Documentation', url: 'https://www.tensorflow.org/docs' },
        { title: 'PyTorch Tutorials', url: 'https://pytorch.org/tutorials/' }
      ],
      subtopics: ['Neural Networks', 'CNNs', 'RNNs', 'Transformers', 'GANs'],
      estimatedTime: '12-14 weeks',
      prerequisites: ['ml-algorithms']
    },
    {
      id: 'deployment',
      title: 'Model Deployment',
      description: 'Deploy and scale AI models',
      icon: CloudIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'MLOps Guide', url: 'https://ml-ops.org/' },
        { title: 'AWS ML Services', url: 'https://aws.amazon.com/machine-learning/' }
      ],
      subtopics: ['MLOps', 'Model Serving', 'API Development', 'Cloud Deployment', 'Monitoring'],
      estimatedTime: '6-8 weeks',
      prerequisites: ['deep-learning']
    }
  ];

  const handleTopicClick = (topicId: string) => {
    setSelectedTopic(selectedTopic === topicId ? null : topicId);
  };

  const handleCheckboxChange = (topicId: string) => {
    const newCompletedTopics = new Set(completedTopics);
    if (completedTopics.has(topicId)) {
      newCompletedTopics.delete(topicId);
    } else {
      newCompletedTopics.add(topicId);
    }
    setCompletedTopics(newCompletedTopics);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        AI Engineer Roadmap
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
              className="p-6 cursor-pointer"
              onClick={() => handleTopicClick(topic.id)}
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <topic.icon className="w-8 h-8 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{topic.title}</h3>
                  <p className="text-gray-600">{topic.description}</p>
                </div>
                <div className="ml-auto">
                  <input
                    type="checkbox"
                    checked={completedTopics.has(topic.id)}
                    onChange={() => handleCheckboxChange(topic.id)}
                    className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              {selectedTopic === topic.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-gray-200"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Subtopics</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {topic.subtopics.map((subtopic) => (
                          <li key={subtopic}>{subtopic}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Resources</h4>
                      <ul className="space-y-2">
                        {topic.links.map((link) => (
                          <li key={link.url}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800"
                            >
                              {link.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-600">
                      Estimated Time: {topic.estimatedTime}
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

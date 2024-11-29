'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { UserGroupIcon, ChartBarIcon, WrenchScrewdriverIcon, PresentationChartBarIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

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

export default function EngineeringManagerRoadmap() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());

  const topics: Topic[] = [
    {
      id: 'leadership-basics',
      title: 'Leadership Fundamentals',
      description: 'Core leadership and management principles',
      icon: UserGroupIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'The Manager\'s Path', url: 'https://www.oreilly.com/library/view/the-managers-path/9781491973882/' },
        { title: 'Engineering Management', url: 'https://www.atlassian.com/engineering/management' }
      ],
      subtopics: ['Team Leadership', 'Communication Skills', 'Delegation', 'Mentoring', 'Conflict Resolution'],
      estimatedTime: '8-10 weeks',
      prerequisites: []
    },
    {
      id: 'project-management',
      title: 'Project Management',
      description: 'Managing technical projects and deliverables',
      icon: ChartBarIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Agile Project Management', url: 'https://www.atlassian.com/agile/project-management' },
        { title: 'Scrum Guide', url: 'https://scrumguides.org/scrum-guide.html' }
      ],
      subtopics: ['Agile Methodologies', 'Sprint Planning', 'Risk Management', 'Resource Allocation', 'Stakeholder Management'],
      estimatedTime: '6-8 weeks',
      prerequisites: ['leadership-basics']
    },
    {
      id: 'technical-strategy',
      title: 'Technical Strategy',
      description: 'Developing and executing technical vision',
      icon: WrenchScrewdriverIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Tech Strategy', url: 'https://www.thoughtworks.com/insights/blog/technology-strategy' },
        { title: 'Architecture Decision Records', url: 'https://adr.github.io/' }
      ],
      subtopics: ['System Architecture', 'Technology Selection', 'Technical Debt', 'Scalability Planning', 'Innovation Management'],
      estimatedTime: '10-12 weeks',
      prerequisites: ['project-management']
    },
    {
      id: 'performance-management',
      title: 'Performance Management',
      description: 'Managing team performance and growth',
      icon: PresentationChartBarIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Performance Reviews', url: 'https://www.radicalcandor.com/blog/performance-reviews/' },
        { title: 'Career Development', url: 'https://www.manager-tools.com/map-universe/careers' }
      ],
      subtopics: ['Goal Setting', 'Performance Reviews', 'Career Development', 'Feedback', 'Recognition'],
      estimatedTime: '6-8 weeks',
      prerequisites: ['leadership-basics']
    },
    {
      id: 'process-improvement',
      title: 'Process & Quality',
      description: 'Improving development processes and quality',
      icon: DocumentTextIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'DevOps Culture', url: 'https://www.atlassian.com/devops/what-is-devops/devops-culture' },
        { title: 'Quality Management', url: 'https://martinfowler.com/articles/is-quality-worth-cost.html' }
      ],
      subtopics: ['DevOps Culture', 'Code Quality', 'CI/CD', 'Documentation', 'Knowledge Management'],
      estimatedTime: '8-10 weeks',
      prerequisites: ['technical-strategy']
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
        Engineering Manager Roadmap
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

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, DevicePhoneMobileIcon, CubeIcon, CloudIcon, CommandLineIcon } from '@heroicons/react/24/outline';

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

export default function IOSDeveloperRoadmap() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());

  const topics: Topic[] = [
    {
      id: 'swift-basics',
      title: 'Swift Programming',
      description: 'Master Swift, the modern language for iOS development',
      icon: CodeBracketIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'Swift Documentation', url: 'https://swift.org/documentation/' },
        { title: 'Swift Programming Guide', url: 'https://docs.swift.org/swift-book/' }
      ],
      subtopics: ['Swift Syntax', 'Optionals', 'Protocols', 'Extensions', 'Memory Management'],
      estimatedTime: '6-8 weeks',
      prerequisites: []
    },
    {
      id: 'ios-fundamentals',
      title: 'iOS Fundamentals',
      description: 'Core concepts of iOS development',
      icon: DevicePhoneMobileIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'iOS Development', url: 'https://developer.apple.com/ios/' },
        { title: 'UIKit Documentation', url: 'https://developer.apple.com/documentation/uikit' }
      ],
      subtopics: ['UIKit', 'View Controllers', 'Auto Layout', 'Storyboards', 'Navigation'],
      estimatedTime: '8-10 weeks',
      prerequisites: ['swift-basics']
    },
    {
      id: 'ios-frameworks',
      title: 'iOS Frameworks',
      description: 'Essential iOS frameworks and libraries',
      icon: CubeIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'SwiftUI', url: 'https://developer.apple.com/xcode/swiftui/' },
        { title: 'Core Data', url: 'https://developer.apple.com/documentation/coredata' }
      ],
      subtopics: ['SwiftUI', 'Core Data', 'Core Animation', 'Core Location', 'MapKit'],
      estimatedTime: '8-10 weeks',
      prerequisites: ['ios-fundamentals']
    },
    {
      id: 'networking-storage',
      title: 'Networking & Storage',
      description: 'Handle network requests and data persistence',
      icon: CloudIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'URLSession', url: 'https://developer.apple.com/documentation/foundation/urlsession' },
        { title: 'Core Data Guide', url: 'https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/' }
      ],
      subtopics: ['URLSession', 'JSON Parsing', 'REST APIs', 'Core Data', 'UserDefaults'],
      estimatedTime: '6-8 weeks',
      prerequisites: ['ios-frameworks']
    },
    {
      id: 'deployment-testing',
      title: 'Testing & Deployment',
      description: 'Test and deploy iOS applications',
      icon: CommandLineIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'XCTest', url: 'https://developer.apple.com/documentation/xctest' },
        { title: 'App Store Guidelines', url: 'https://developer.apple.com/app-store/review/guidelines/' }
      ],
      subtopics: ['Unit Testing', 'UI Testing', 'TestFlight', 'App Store Connect', 'CI/CD'],
      estimatedTime: '4-6 weeks',
      prerequisites: ['networking-storage']
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
        iOS Developer Roadmap
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

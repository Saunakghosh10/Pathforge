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

export default function AndroidDeveloperRoadmap() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());

  const topics: Topic[] = [
    {
      id: 'kotlin',
      title: 'Kotlin Programming',
      description: 'Master Kotlin, the modern language for Android development',
      icon: CodeBracketIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'Kotlin Official Docs', url: 'https://kotlinlang.org/docs/home.html' },
        { title: 'Android Kotlin Fundamentals', url: 'https://developer.android.com/courses/kotlin-fundamentals/overview' }
      ],
      subtopics: ['Basic Syntax', 'Object-Oriented Programming', 'Coroutines', 'Collections', 'Null Safety'],
      estimatedTime: '6-8 weeks',
      prerequisites: []
    },
    {
      id: 'android-basics',
      title: 'Android Fundamentals',
      description: 'Core concepts of Android development',
      icon: DevicePhoneMobileIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'Android Basics', url: 'https://developer.android.com/courses/android-basics-kotlin/course' },
        { title: 'Android Developer Guides', url: 'https://developer.android.com/guide' }
      ],
      subtopics: ['Activity Lifecycle', 'Fragments', 'Layouts', 'UI Components', 'Material Design'],
      estimatedTime: '8-10 weeks',
      prerequisites: ['kotlin']
    },
    {
      id: 'android-jetpack',
      title: 'Android Jetpack',
      description: 'Modern Android development with Jetpack libraries',
      icon: CubeIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Jetpack Documentation', url: 'https://developer.android.com/jetpack' },
        { title: 'Android Architecture Components', url: 'https://developer.android.com/topic/libraries/architecture' }
      ],
      subtopics: ['ViewModel', 'LiveData', 'Room', 'Navigation', 'WorkManager'],
      estimatedTime: '8-10 weeks',
      prerequisites: ['android-basics']
    },
    {
      id: 'android-networking',
      title: 'Networking & Data',
      description: 'Handle network requests and data persistence',
      icon: CloudIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Retrofit Documentation', url: 'https://square.github.io/retrofit/' },
        { title: 'Room Database Guide', url: 'https://developer.android.com/training/data-storage/room' }
      ],
      subtopics: ['RESTful APIs', 'Retrofit', 'Room Database', 'Data Storage', 'Content Providers'],
      estimatedTime: '6-8 weeks',
      prerequisites: ['android-jetpack']
    },
    {
      id: 'android-testing',
      title: 'Testing & Debugging',
      description: 'Write tests and debug Android applications',
      icon: CommandLineIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Android Testing Guide', url: 'https://developer.android.com/training/testing' },
        { title: 'Android Debug Guide', url: 'https://developer.android.com/studio/debug' }
      ],
      subtopics: ['Unit Testing', 'UI Testing', 'Integration Testing', 'Debugging Tools', 'Performance Testing'],
      estimatedTime: '4-6 weeks',
      prerequisites: ['android-networking']
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
        Android Developer Roadmap
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

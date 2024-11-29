'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCode, FiSmartphone, FiLayers, FiDatabase, FiCloud, FiShield } from 'react-icons/fi';
import { SiReact, SiFlutter, SiKotlin, SiSwift, SiFirebase, SiGraphql } from 'react-icons/si';
import { useProgress } from '@/app/context/ProgressContext';

interface TopicLink {
  title: string;
  url: string;
}

interface RoadmapTopic {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  level: 'beginner' | 'intermediate' | 'advanced';
  isCompleted: boolean;
  links: TopicLink[];
  subtopics: string[];
  estimatedTime: string;
  prerequisites: string[];
}

export default function MobileRoadmap() {
  const { updateTopicProgress, getTopicProgress } = useProgress();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [topics, setTopics] = useState<RoadmapTopic[]>([
    {
      id: 'fundamentals',
      title: 'Mobile Development Fundamentals',
      description: 'Core concepts of mobile app development',
      icon: <FiSmartphone className="w-6 h-6" />,
      level: 'beginner',
      isCompleted: false,
      estimatedTime: '4-6 weeks',
      links: [
        { title: 'Mobile App Architecture', url: 'https://developer.android.com/guide/app-architecture' },
        { title: 'iOS App Life Cycle', url: 'https://developer.apple.com/documentation/uikit/app_and_environment/managing_your_app_s_life_cycle' }
      ],
      subtopics: ['App Architecture', 'UI/UX Design', 'Mobile Design Patterns', 'Performance Optimization'],
      prerequisites: []
    },
    {
      id: 'react-native',
      title: 'React Native',
      description: 'Cross-platform mobile development with React',
      icon: <SiReact className="w-6 h-6" />,
      level: 'beginner',
      isCompleted: false,
      estimatedTime: '8-10 weeks',
      links: [
        { title: 'React Native Docs', url: 'https://reactnative.dev/docs/getting-started' },
        { title: 'React Navigation', url: 'https://reactnavigation.org/docs/getting-started' }
      ],
      subtopics: ['Components', 'Navigation', 'State Management', 'Native Modules'],
      prerequisites: ['fundamentals']
    },
    {
      id: 'flutter',
      title: 'Flutter',
      description: 'Google\'s UI toolkit for mobile apps',
      icon: <SiFlutter className="w-6 h-6" />,
      level: 'intermediate',
      isCompleted: false,
      estimatedTime: '8-10 weeks',
      links: [
        { title: 'Flutter Documentation', url: 'https://flutter.dev/docs' },
        { title: 'Dart Language Tour', url: 'https://dart.dev/guides/language/language-tour' }
      ],
      subtopics: ['Dart', 'Widgets', 'State Management', 'Animations'],
      prerequisites: ['fundamentals']
    },
    {
      id: 'native-android',
      title: 'Native Android',
      description: 'Android development with Kotlin',
      icon: <SiKotlin className="w-6 h-6" />,
      level: 'intermediate',
      isCompleted: false,
      estimatedTime: '10-12 weeks',
      links: [
        { title: 'Android Developer Guides', url: 'https://developer.android.com/guide' },
        { title: 'Kotlin Documentation', url: 'https://kotlinlang.org/docs/home.html' }
      ],
      subtopics: ['Kotlin', 'Android SDK', 'Material Design', 'Background Processing'],
      prerequisites: ['fundamentals']
    },
    {
      id: 'native-ios',
      title: 'Native iOS',
      description: 'iOS development with Swift',
      icon: <SiSwift className="w-6 h-6" />,
      level: 'intermediate',
      isCompleted: false,
      estimatedTime: '10-12 weeks',
      links: [
        { title: 'iOS Developer Documentation', url: 'https://developer.apple.com/documentation/' },
        { title: 'Swift Documentation', url: 'https://swift.org/documentation/' }
      ],
      subtopics: ['Swift', 'UIKit', 'SwiftUI', 'Core Data'],
      prerequisites: ['fundamentals']
    },
    {
      id: 'backend-integration',
      title: 'Backend Integration',
      description: 'Connect mobile apps to backend services',
      icon: <FiCloud className="w-6 h-6" />,
      level: 'intermediate',
      isCompleted: false,
      estimatedTime: '4-6 weeks',
      links: [
        { title: 'Firebase Documentation', url: 'https://firebase.google.com/docs' },
        { title: 'GraphQL Documentation', url: 'https://graphql.org/learn/' }
      ],
      subtopics: ['REST APIs', 'GraphQL', 'Firebase', 'WebSockets'],
      prerequisites: ['react-native', 'flutter', 'native-android', 'native-ios']
    },
    {
      id: 'data-storage',
      title: 'Data Storage & Sync',
      description: 'Local storage and data synchronization',
      icon: <FiDatabase className="w-6 h-6" />,
      level: 'advanced',
      isCompleted: false,
      estimatedTime: '4-6 weeks',
      links: [
        { title: 'SQLite Documentation', url: 'https://www.sqlite.org/docs.html' },
        { title: 'Realm Documentation', url: 'https://realm.io/docs/' }
      ],
      subtopics: ['SQLite', 'Realm', 'Offline Storage', 'Data Sync'],
      prerequisites: ['backend-integration']
    },
    {
      id: 'security',
      title: 'Mobile Security',
      description: 'Secure your mobile applications',
      icon: <FiShield className="w-6 h-6" />,
      level: 'advanced',
      isCompleted: false,
      estimatedTime: '4-6 weeks',
      links: [
        { title: 'OWASP Mobile Security', url: 'https://owasp.org/www-project-mobile-security/' },
        { title: 'Mobile App Security', url: 'https://developer.android.com/training/articles/security-tips' }
      ],
      subtopics: ['Authentication', 'Encryption', 'Secure Storage', 'API Security'],
      prerequisites: ['data-storage']
    }
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const getLevelColor = (level: RoadmapTopic['level']) => {
    switch (level) {
      case 'beginner':
        return 'border-green-500';
      case 'intermediate':
        return 'border-blue-500';
      case 'advanced':
        return 'border-purple-500';
      default:
        return 'border-gray-medium';
    }
  };

  const handleTopicClick = (topicId: string) => {
    setSelectedTopic(selectedTopic === topicId ? null : topicId);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-12"
      >
        <div className="text-center">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            Mobile Development Path
          </motion.h1>
          <motion.p variants={itemVariants} className="text-accent max-w-2xl mx-auto">
            Build native and cross-platform mobile applications
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="flex justify-center space-x-4 flex-wrap gap-y-2">
          <span className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
            <span className="text-sm">Beginner</span>
          </span>
          <span className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2" />
            <span className="text-sm">Intermediate</span>
          </span>
          <span className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-purple-500 mr-2" />
            <span className="text-sm">Advanced</span>
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => {
            const progress = getTopicProgress('mobile', topic.id);
            const isCompleted = progress?.completed || false;

            return (
              <motion.div
                key={topic.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleTopicClick(topic.id)}
                className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
                  getLevelColor(topic.level)
                } ${
                  isCompleted
                    ? 'bg-primary text-secondary'
                    : 'bg-secondary hover:shadow-lg'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isCompleted ? 'bg-secondary text-primary' : 'bg-gray-light'
                    }`}>
                      {topic.icon}
                    </div>
                    <h3 className="text-xl font-bold">{topic.title}</h3>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      updateTopicProgress('mobile', topic.id, !isCompleted);
                    }}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      isCompleted
                        ? 'bg-secondary text-primary border-secondary'
                        : 'border-current'
                    }`}
                  >
                    {isCompleted && <FiCode className="w-4 h-4" />}
                  </button>
                </div>

                <p className={isCompleted ? 'text-secondary/80' : 'text-accent'}>
                  {topic.description}
                </p>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">
                      Est. Time: {topic.estimatedTime}
                    </span>
                    <span className="text-sm font-medium">
                      Prerequisites: {topic.prerequisites.join(', ')}
                    </span>
                  </div>

                  <h4 className={`font-medium ${isCompleted ? 'text-secondary' : 'text-primary'}`}>
                    Key Topics:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {topic.subtopics.map((subtopic) => (
                      <li
                        key={subtopic}
                        className={`text-sm ${isCompleted ? 'text-secondary/80' : 'text-accent'}`}
                      >
                        • {subtopic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-4 border-t border-current/10">
                  <h4 className={`font-medium mb-2 ${isCompleted ? 'text-secondary' : 'text-primary'}`}>
                    Resources:
                  </h4>
                  <div className="space-y-2">
                    {topic.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`block text-sm ${
                          isCompleted
                            ? 'text-secondary/80 hover:text-secondary'
                            : 'text-accent hover:text-primary'
                        }`}
                      >
                        → {link.title}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

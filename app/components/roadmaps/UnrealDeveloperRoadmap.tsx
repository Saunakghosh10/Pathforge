'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, CubeIcon, PlayIcon, CommandLineIcon, CpuChipIcon } from '@heroicons/react/24/outline';

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

export default function UnrealDeveloperRoadmap() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());

  const topics: Topic[] = [
    {
      id: 'unreal-basics',
      title: 'Unreal Engine Fundamentals',
      description: 'Master Unreal Editor and core concepts',
      icon: CubeIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'Unreal Online Learning', url: 'https://www.unrealengine.com/learn' },
        { title: 'Unreal Documentation', url: 'https://docs.unrealengine.com/' }
      ],
      subtopics: ['Unreal Editor Interface', 'Level Editor', 'Content Browser', 'Blueprints Basics', 'Materials Basics'],
      estimatedTime: '6-8 weeks',
      prerequisites: []
    },
    {
      id: 'cpp-unreal',
      title: 'C++ for Unreal',
      description: 'Learn C++ programming specifically for Unreal Engine',
      icon: CodeBracketIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Unreal C++ Documentation', url: 'https://docs.unrealengine.com/ProgrammingAndScripting/ProgrammingWithCPP/' },
        { title: 'C++ Programming Guide', url: 'https://www.learncpp.com/' }
      ],
      subtopics: ['C++ Basics', 'Unreal Framework', 'UObject System', 'Garbage Collection', 'Reflection System'],
      estimatedTime: '10-12 weeks',
      prerequisites: ['unreal-basics']
    },
    {
      id: 'blueprints-advanced',
      title: 'Advanced Blueprints',
      description: 'Master Unreal\'s visual scripting system',
      icon: PlayIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Blueprint Documentation', url: 'https://docs.unrealengine.com/ProgrammingAndScripting/Blueprints/' },
        { title: 'Blueprint Best Practices', url: 'https://docs.unrealengine.com/ProgrammingAndScripting/Blueprints/BestPractices/' }
      ],
      subtopics: ['Blueprint Communication', 'Interfaces', 'Event Dispatchers', 'Animation Blueprints', 'Behavior Trees'],
      estimatedTime: '8-10 weeks',
      prerequisites: ['unreal-basics']
    },
    {
      id: 'graphics-rendering',
      title: 'Graphics & Rendering',
      description: 'Master Unreal\'s graphics and rendering systems',
      icon: CpuChipIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Materials Documentation', url: 'https://docs.unrealengine.com/RenderingAndGraphics/Materials/' },
        { title: 'Post Process Effects', url: 'https://docs.unrealengine.com/RenderingAndGraphics/PostProcessEffects/' }
      ],
      subtopics: ['Material Editor', 'Post Processing', 'Lighting', 'Niagara VFX', 'Ray Tracing'],
      estimatedTime: '8-10 weeks',
      prerequisites: ['blueprints-advanced']
    },
    {
      id: 'gameplay-framework',
      title: 'Gameplay Framework',
      description: 'Implement core gameplay systems',
      icon: CommandLineIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Gameplay Framework', url: 'https://docs.unrealengine.com/InteractiveExperiences/Framework/' },
        { title: 'Networking Guide', url: 'https://docs.unrealengine.com/InteractiveExperiences/Networking/' }
      ],
      subtopics: ['GameMode & GameState', 'Player Controllers', 'Character Movement', 'Networking', 'Save Systems'],
      estimatedTime: '8-10 weeks',
      prerequisites: ['cpp-unreal']
    },
    {
      id: 'optimization-deployment',
      title: 'Optimization & Deployment',
      description: 'Optimize and deploy Unreal games',
      icon: CommandLineIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Performance Guidelines', url: 'https://docs.unrealengine.com/Performance/Guidelines/' },
        { title: 'Packaging Projects', url: 'https://docs.unrealengine.com/Basics/Projects/Packaging/' }
      ],
      subtopics: ['Performance Profiling', 'Memory Optimization', 'LOD Systems', 'Platform-specific Features', 'Distribution'],
      estimatedTime: '6-8 weeks',
      prerequisites: ['gameplay-framework', 'graphics-rendering']
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
        Unreal Developer Roadmap
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

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

export default function UnityDeveloperRoadmap() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());

  const topics: Topic[] = [
    {
      id: 'unity-basics',
      title: 'Unity Fundamentals',
      description: 'Master Unity Editor and core concepts',
      icon: CubeIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'Unity Learn Platform', url: 'https://learn.unity.com/' },
        { title: 'Unity Manual', url: 'https://docs.unity3d.com/Manual/' }
      ],
      subtopics: ['Unity Interface', 'Scene Management', 'GameObjects & Components', 'Prefabs', 'Asset Management'],
      estimatedTime: '6-8 weeks',
      prerequisites: []
    },
    {
      id: 'csharp-unity',
      title: 'C# for Unity',
      description: 'Learn C# programming specifically for Unity development',
      icon: CodeBracketIcon,
      level: 'beginner',
      isCompleted: false,
      links: [
        { title: 'Unity Scripting Reference', url: 'https://docs.unity3d.com/ScriptReference/' },
        { title: 'C# Programming Guide', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' }
      ],
      subtopics: ['C# Basics', 'Unity Scripting', 'MonoBehaviour', 'Coroutines', 'Events & Delegates'],
      estimatedTime: '8-10 weeks',
      prerequisites: ['unity-basics']
    },
    {
      id: 'unity-graphics',
      title: 'Unity Graphics & Animation',
      description: 'Master Unity\'s graphics and animation systems',
      icon: PlayIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Unity Graphics', url: 'https://docs.unity3d.com/Manual/Graphics.html' },
        { title: 'Unity Animation', url: 'https://learn.unity.com/tutorial/working-with-animations' }
      ],
      subtopics: ['Shaders', 'Particle Systems', 'Animation System', 'Timeline', 'Post-processing'],
      estimatedTime: '8-10 weeks',
      prerequisites: ['csharp-unity']
    },
    {
      id: 'unity-physics',
      title: 'Physics & Game Mechanics',
      description: 'Implement physics-based gameplay and mechanics',
      icon: CpuChipIcon,
      level: 'intermediate',
      isCompleted: false,
      links: [
        { title: 'Unity Physics', url: 'https://docs.unity3d.com/Manual/PhysicsSection.html' },
        { title: 'Unity Input System', url: 'https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual/index.html' }
      ],
      subtopics: ['Physics Engine', 'Collisions', 'Rigidbodies', 'Input System', 'Character Controllers'],
      estimatedTime: '6-8 weeks',
      prerequisites: ['unity-graphics']
    },
    {
      id: 'unity-optimization',
      title: 'Optimization & Publishing',
      description: 'Optimize and deploy Unity games',
      icon: CommandLineIcon,
      level: 'advanced',
      isCompleted: false,
      links: [
        { title: 'Unity Optimization', url: 'https://docs.unity3d.com/Manual/OptimizingGraphicsPerformance.html' },
        { title: 'Unity Build Settings', url: 'https://docs.unity3d.com/Manual/BuildSettings.html' }
      ],
      subtopics: ['Performance Optimization', 'Memory Management', 'Build Pipeline', 'Platform-specific Features', 'Publishing'],
      estimatedTime: '6-8 weeks',
      prerequisites: ['unity-physics']
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
        Unity Developer Roadmap
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

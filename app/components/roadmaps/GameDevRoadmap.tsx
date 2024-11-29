'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiClock, FiCheck } from 'react-icons/fi';
import { SiUnity, SiUnrealengine, SiCplusplus, SiBlender, SiGodotengine, SiWebgl, SiOpengl, SiVulkan } from 'react-icons/si';
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

export default function GameDevRoadmap() {
  const { updateTopicProgress, getTopicProgress } = useProgress();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics: RoadmapTopic[] = [
    {
      id: 'programming-fundamentals',
      title: 'Programming Fundamentals',
      description: 'Master core programming concepts and game programming patterns',
      icon: SiCplusplus,
      level: 'beginner',
      isCompleted: false,
      estimatedTime: '8-10 weeks',
      links: [
        { title: 'Game Programming Patterns', url: 'https://gameprogrammingpatterns.com/' },
        { title: 'C++ Tutorial', url: 'https://www.learncpp.com/' }
      ],
      subtopics: ['OOP', 'Data Structures', 'Algorithms', 'Game Loops', 'Memory Management']
    },
    {
      id: 'game-engines',
      title: 'Game Engines',
      description: 'Learn popular game engines and their ecosystems',
      icon: SiUnity,
      level: 'beginner',
      isCompleted: false,
      estimatedTime: '12-16 weeks',
      links: [
        { title: 'Unity Learn', url: 'https://learn.unity.com/' },
        { title: 'Unreal Engine Documentation', url: 'https://docs.unrealengine.com/' }
      ],
      subtopics: ['Unity', 'Unreal Engine', 'Godot']
    },
    {
      id: '3d-modeling',
      title: '3D Modeling & Animation',
      description: 'Create and animate 3D models for games',
      icon: SiBlender,
      level: 'intermediate',
      isCompleted: false,
      estimatedTime: '10-12 weeks',
      prerequisites: ['game-engines'],
      links: [
        { title: 'Blender Fundamentals', url: 'https://www.blender.org/support/tutorials/' },
        { title: 'Maya Learning Center', url: 'https://area.autodesk.com/tutorials/maya/' }
      ],
      subtopics: ['Modeling', 'Texturing', 'Rigging', 'Animation']
    },
    {
      id: 'graphics-programming',
      title: 'Graphics Programming',
      description: 'Understand computer graphics and rendering',
      icon: SiOpengl,
      level: 'advanced',
      isCompleted: false,
      estimatedTime: '16-20 weeks',
      prerequisites: ['programming-fundamentals'],
      links: [
        { title: 'Learn OpenGL', url: 'https://learnopengl.com/' },
        { title: 'Vulkan Tutorial', url: 'https://vulkan-tutorial.com/' }
      ],
      subtopics: ['OpenGL', 'Vulkan', 'DirectX', 'Shaders']
    },
    {
      id: 'game-physics',
      title: 'Game Physics',
      description: 'Implement realistic physics in games',
      icon: SiUnrealengine,
      level: 'advanced',
      isCompleted: false,
      estimatedTime: '8-10 weeks',
      prerequisites: ['programming-fundamentals', 'game-engines'],
      links: [
        { title: 'Game Physics Tutorial', url: 'https://gafferongames.com/' },
        { title: 'Physics for Games', url: 'https://www.toptal.com/game/video-game-physics-part-i-an-introduction-to-rigid-body-dynamics' }
      ],
      subtopics: ['Collision Detection', 'Rigid Body Dynamics', 'Particle Systems']
    },
    {
      id: 'game-ai',
      title: 'Game AI',
      description: 'Create intelligent game behaviors and systems',
      icon: SiGodotengine,
      level: 'advanced',
      isCompleted: false,
      estimatedTime: '10-12 weeks',
      prerequisites: ['programming-fundamentals', 'game-engines'],
      links: [
        { title: 'Game AI Pro', url: 'http://www.gameaipro.com/' },
        { title: 'AI Game Dev', url: 'https://aigamedev.com/' }
      ],
      subtopics: ['Pathfinding', 'Behavior Trees', 'State Machines', 'Machine Learning']
    },
    {
      id: 'game-networking',
      title: 'Game Networking',
      description: 'Implement multiplayer and networking features',
      icon: SiWebgl,
      level: 'advanced',
      isCompleted: false,
      estimatedTime: '12-14 weeks',
      prerequisites: ['programming-fundamentals', 'game-engines'],
      links: [
        { title: 'Multiplayer Game Programming', url: 'https://gafferongames.com/' },
        { title: 'Network Programming', url: 'https://www.gabrielgambetta.com/client-server-game-architecture.html' }
      ],
      subtopics: ['Client-Server Architecture', 'State Synchronization', 'Lag Compensation']
    },
    {
      id: 'game-optimization',
      title: 'Game Optimization',
      description: 'Optimize game performance and resource usage',
      icon: SiVulkan,
      level: 'advanced',
      isCompleted: false,
      estimatedTime: '8-10 weeks',
      prerequisites: ['graphics-programming', 'game-physics'],
      links: [
        { title: 'Game Engine Architecture', url: 'https://www.gameenginebook.com/' },
        { title: 'Performance Optimization', url: 'https://docs.unity3d.com/Manual/OptimizingGraphicsPerformance.html' }
      ],
      subtopics: ['Memory Management', 'CPU Optimization', 'GPU Optimization', 'Asset Management']
    }
  ];

  const handleTopicClick = (topicId: string) => {
    const currentProgress = getTopicProgress('gamedev', topicId);
    if (currentProgress) {
      updateTopicProgress('gamedev', topicId, !currentProgress.completed);
    } else {
      updateTopicProgress('gamedev', topicId, true);
    }
  };

  const isTopicAccessible = (topic: RoadmapTopic) => {
    if (!topic.prerequisites) return true;
    return topic.prerequisites.every(prereqId => {
      const progress = getTopicProgress('gamedev', prereqId);
      return progress?.completed;
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        Game Development Roadmap
      </motion.h1>

      <div className="space-y-6">
        {topics.map((topic, index) => {
          const progress = getTopicProgress('gamedev', topic.id);
          const isAccessible = isTopicAccessible(topic);
          const Icon = topic.icon;

          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-lg border ${
                progress?.completed
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
                      progress?.completed ? 'bg-green-200' : 'bg-gray-200'
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
                {progress?.completed && (
                  <FiCheck className="w-6 h-6 text-green-600" />
                )}
              </div>

              {topic.prerequisites && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Prerequisites:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {topic.prerequisites.map(prereqId => {
                      const prereqProgress = getTopicProgress('gamedev', prereqId);
                      const prereqTopic = topics.find(t => t.id === prereqId);
                      return (
                        <span
                          key={prereqId}
                          className={`text-sm px-2 py-1 rounded ${
                            prereqProgress?.completed
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

              {topic.subtopics && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">Key Topics:</p>
                  <div className="flex flex-wrap gap-2">
                    {topic.subtopics.map((subtopic, idx) => (
                      <span
                        key={idx}
                        className="text-sm px-2 py-1 bg-gray-100 text-gray-800 rounded"
                      >
                        {subtopic}
                      </span>
                    ))}
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

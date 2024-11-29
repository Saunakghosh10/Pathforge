'use client';

import { createContext, useContext, useState } from 'react';

interface Challenge {
  id: string;
  title: string;
  completed: boolean;
  completedAt?: string;
}

interface TopicProgress {
  topicId: string;
  completed: boolean;
  completedAt?: string;
  challenges?: Challenge[];
}

interface RoadmapProgress {
  roadmapId: string;
  topics: TopicProgress[];
}

interface ProgressContextType {
  updateTopicProgress: (roadmapId: string, topicId: string, completed: boolean) => void;
  getTopicProgress: (roadmapId: string, topicId: string) => TopicProgress | undefined;
  updateChallenge: (roadmapId: string, topicId: string, challenge: Challenge) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<RoadmapProgress[]>([]);

  const updateTopicProgress = (roadmapId: string, topicId: string, completed: boolean) => {
    setProgress(prevProgress => {
      const roadmapIndex = prevProgress.findIndex(r => r.roadmapId === roadmapId);
      
      if (roadmapIndex === -1) {
        // Create new roadmap progress
        return [...prevProgress, {
          roadmapId,
          topics: [{
            topicId,
            completed,
            completedAt: completed ? new Date().toISOString() : undefined
          }]
        }];
      }

      const roadmap = prevProgress[roadmapIndex];
      const topicIndex = roadmap.topics.findIndex(t => t.topicId === topicId);

      if (topicIndex === -1) {
        // Add new topic progress
        const updatedRoadmap = {
          ...roadmap,
          topics: [...roadmap.topics, {
            topicId,
            completed,
            completedAt: completed ? new Date().toISOString() : undefined
          }]
        };
        return [
          ...prevProgress.slice(0, roadmapIndex),
          updatedRoadmap,
          ...prevProgress.slice(roadmapIndex + 1)
        ];
      }

      // Update existing topic progress
      const updatedTopics = [...roadmap.topics];
      updatedTopics[topicIndex] = {
        ...updatedTopics[topicIndex],
        completed,
        completedAt: completed ? new Date().toISOString() : undefined
      };

      return [
        ...prevProgress.slice(0, roadmapIndex),
        { ...roadmap, topics: updatedTopics },
        ...prevProgress.slice(roadmapIndex + 1)
      ];
    });
  };

  const getTopicProgress = (roadmapId: string, topicId: string) => {
    const roadmap = progress.find(r => r.roadmapId === roadmapId);
    return roadmap?.topics.find(t => t.topicId === topicId);
  };

  const updateChallenge = (roadmapId: string, topicId: string, challenge: Challenge) => {
    setProgress(prevProgress => {
      const roadmapIndex = prevProgress.findIndex(r => r.roadmapId === roadmapId);
      if (roadmapIndex === -1) return prevProgress;

      const roadmap = prevProgress[roadmapIndex];
      const topicIndex = roadmap.topics.findIndex(t => t.topicId === topicId);
      if (topicIndex === -1) return prevProgress;

      const topic = roadmap.topics[topicIndex];
      const challenges = topic.challenges || [];
      const challengeIndex = challenges.findIndex(c => c.id === challenge.id);

      const updatedChallenges = challengeIndex === -1
        ? [...challenges, challenge]
        : [
            ...challenges.slice(0, challengeIndex),
            challenge,
            ...challenges.slice(challengeIndex + 1)
          ];

      const updatedTopics = [...roadmap.topics];
      updatedTopics[topicIndex] = {
        ...topic,
        challenges: updatedChallenges
      };

      return [
        ...prevProgress.slice(0, roadmapIndex),
        { ...roadmap, topics: updatedTopics },
        ...prevProgress.slice(roadmapIndex + 1)
      ];
    });
  };

  return (
    <ProgressContext.Provider value={{ updateTopicProgress, getTopicProgress, updateChallenge }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}

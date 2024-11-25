'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface QuizResult {
  quizId: string;
  score: number;
  totalQuestions: number;
  timestamp: string;
  topicId: string;
  roadmapId: string;
}

interface Challenge {
  id: string;
  title: string;
  completed: boolean;
  timestamp?: string;
}

interface Analytics {
  quizzesTaken: number;
  averageScore: number;
  challengesCompleted: number;
  totalStudyTime: number; // in minutes
  lastStudySession?: string;
  strengthAreas: string[];
  improvementAreas: string[];
}

interface Progress {
  [roadmapId: string]: {
    [topicId: string]: {
      isCompleted: boolean;
      lastUpdated: string;
      notes?: string;
      resources?: {
        title: string;
        url: string;
        completed: boolean;
      }[];
      quizResults?: QuizResult[];
      challenges?: Challenge[];
      studyTime?: number; // in minutes
    };
  };
}

interface ProgressContextType {
  progress: Progress;
  updateTopicProgress: (roadmapId: string, topicId: string, isCompleted: boolean) => void;
  updateTopicNotes: (roadmapId: string, topicId: string, notes: string) => void;
  updateResourceProgress: (roadmapId: string, topicId: string, resourceIndex: number, completed: boolean) => void;
  addQuizResult: (result: QuizResult) => void;
  updateChallenge: (roadmapId: string, topicId: string, challenge: Challenge) => void;
  updateStudyTime: (roadmapId: string, topicId: string, minutes: number) => void;
  getTopicProgress: (roadmapId: string, topicId: string) => {
    isCompleted: boolean;
    notes?: string;
    resources?: { title: string; url: string; completed: boolean; }[];
    quizResults?: QuizResult[];
    challenges?: Challenge[];
    studyTime?: number;
  } | null;
  getRoadmapProgress: (roadmapId: string) => number;
  getAnalytics: (roadmapId?: string) => Analytics;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<Progress>({});

  useEffect(() => {
    const savedProgress = localStorage.getItem('pathforge-progress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('pathforge-progress', JSON.stringify(progress));
  }, [progress]);

  const updateTopicProgress = (roadmapId: string, topicId: string, isCompleted: boolean) => {
    setProgress(prev => ({
      ...prev,
      [roadmapId]: {
        ...prev[roadmapId],
        [topicId]: {
          ...prev[roadmapId]?.[topicId],
          isCompleted,
          lastUpdated: new Date().toISOString()
        }
      }
    }));
  };

  const updateTopicNotes = (roadmapId: string, topicId: string, notes: string) => {
    setProgress(prev => ({
      ...prev,
      [roadmapId]: {
        ...prev[roadmapId],
        [topicId]: {
          ...prev[roadmapId]?.[topicId],
          notes,
          lastUpdated: new Date().toISOString()
        }
      }
    }));
  };

  const updateResourceProgress = (
    roadmapId: string,
    topicId: string,
    resourceIndex: number,
    completed: boolean
  ) => {
    setProgress(prev => {
      const currentTopic = prev[roadmapId]?.[topicId] || {
        isCompleted: false,
        lastUpdated: new Date().toISOString(),
        resources: []
      };

      const updatedResources = [...(currentTopic.resources || [])];
      if (updatedResources[resourceIndex]) {
        updatedResources[resourceIndex] = {
          ...updatedResources[resourceIndex],
          completed
        };
      }

      return {
        ...prev,
        [roadmapId]: {
          ...prev[roadmapId],
          [topicId]: {
            ...currentTopic,
            resources: updatedResources,
            lastUpdated: new Date().toISOString()
          }
        }
      };
    });
  };

  const addQuizResult = (result: QuizResult) => {
    setProgress(prev => {
      const currentTopic = prev[result.roadmapId]?.[result.topicId] || {
        isCompleted: false,
        lastUpdated: new Date().toISOString(),
        quizResults: []
      };

      return {
        ...prev,
        [result.roadmapId]: {
          ...prev[result.roadmapId],
          [result.topicId]: {
            ...currentTopic,
            quizResults: [...(currentTopic.quizResults || []), result],
            lastUpdated: new Date().toISOString()
          }
        }
      };
    });
  };

  const updateChallenge = (roadmapId: string, topicId: string, challenge: Challenge) => {
    setProgress(prev => {
      const currentTopic = prev[roadmapId]?.[topicId] || {
        isCompleted: false,
        lastUpdated: new Date().toISOString(),
        challenges: []
      };

      const existingChallengeIndex = (currentTopic.challenges || [])
        .findIndex(c => c.id === challenge.id);

      const updatedChallenges = [...(currentTopic.challenges || [])];
      if (existingChallengeIndex >= 0) {
        updatedChallenges[existingChallengeIndex] = challenge;
      } else {
        updatedChallenges.push(challenge);
      }

      return {
        ...prev,
        [roadmapId]: {
          ...prev[roadmapId],
          [topicId]: {
            ...currentTopic,
            challenges: updatedChallenges,
            lastUpdated: new Date().toISOString()
          }
        }
      };
    });
  };

  const updateStudyTime = (roadmapId: string, topicId: string, minutes: number) => {
    setProgress(prev => {
      const currentTopic = prev[roadmapId]?.[topicId] || {
        isCompleted: false,
        lastUpdated: new Date().toISOString(),
        studyTime: 0
      };

      return {
        ...prev,
        [roadmapId]: {
          ...prev[roadmapId],
          [topicId]: {
            ...currentTopic,
            studyTime: (currentTopic.studyTime || 0) + minutes,
            lastUpdated: new Date().toISOString()
          }
        }
      };
    });
  };

  const getTopicProgress = (roadmapId: string, topicId: string) => {
    return progress[roadmapId]?.[topicId] || null;
  };

  const getRoadmapProgress = (roadmapId: string) => {
    const roadmap = progress[roadmapId];
    if (!roadmap) return 0;

    const totalTopics = Object.keys(roadmap).length;
    const completedTopics = Object.values(roadmap).filter(topic => topic.isCompleted).length;

    return totalTopics > 0 ? (completedTopics / totalTopics) * 100 : 0;
  };

  const getAnalytics = (roadmapId?: string): Analytics => {
    let quizzesTaken = 0;
    let totalScore = 0;
    let challengesCompleted = 0;
    let totalStudyTime = 0;
    let lastStudySession: string | undefined;
    const strengthAreas: string[] = [];
    const improvementAreas: string[] = [];

    const processRoadmap = (roadmapData: Progress[string]) => {
      Object.entries(roadmapData).forEach(([topicId, topicData]) => {
        // Quiz analytics
        if (topicData.quizResults) {
          quizzesTaken += topicData.quizResults.length;
          totalScore += topicData.quizResults.reduce((acc, quiz) => 
            acc + (quiz.score / quiz.totalQuestions), 0);

          // Determine strength/improvement areas based on quiz performance
          const avgScore = topicData.quizResults.reduce((acc, quiz) => 
            acc + (quiz.score / quiz.totalQuestions), 0) / topicData.quizResults.length;
          
          if (avgScore >= 0.8) {
            strengthAreas.push(topicId);
          } else if (avgScore <= 0.6) {
            improvementAreas.push(topicId);
          }
        }

        // Challenge analytics
        if (topicData.challenges) {
          challengesCompleted += topicData.challenges.filter(c => c.completed).length;
        }

        // Study time analytics
        if (topicData.studyTime) {
          totalStudyTime += topicData.studyTime;
        }

        // Last study session
        if (!lastStudySession || topicData.lastUpdated > lastStudySession) {
          lastStudySession = topicData.lastUpdated;
        }
      });
    };

    if (roadmapId) {
      if (progress[roadmapId]) {
        processRoadmap(progress[roadmapId]);
      }
    } else {
      Object.values(progress).forEach(processRoadmap);
    }

    return {
      quizzesTaken,
      averageScore: quizzesTaken > 0 ? (totalScore / quizzesTaken) * 100 : 0,
      challengesCompleted,
      totalStudyTime,
      lastStudySession,
      strengthAreas,
      improvementAreas
    };
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        updateTopicProgress,
        updateTopicNotes,
        updateResourceProgress,
        addQuizResult,
        updateChallenge,
        updateStudyTime,
        getTopicProgress,
        getRoadmapProgress,
        getAnalytics
      }}
    >
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

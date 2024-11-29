'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { useProgress } from '@/app/context/ProgressContext';
import { FaTrophy, FaBook, FaClock, FaChartLine } from 'react-icons/fa';

interface Milestone {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  date: string;
  type: 'achievement' | 'progress' | 'time' | 'skill';
}

export default function LearningMilestones() {
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const { getTopicProgress } = useProgress();

  useEffect(() => {
    const calculateMilestones = (): Milestone[] => {
      const completedTopics = new Set<string>();
      const dates: string[] = [];

      // For now, we'll check a few key roadmaps
      const roadmaps = ['data-analyst', 'data-engineer', 'ai-engineer', 'game-dev', 'unreal'];

      roadmaps.forEach(roadmapId => {
        // This is a simplified version since we don't track all topics explicitly
        // In a real app, we'd have a way to get all topics for a roadmap
        const sampleTopics = ['foundations', 'tools', 'advanced'];
        sampleTopics.forEach(topicId => {
          const progress = getTopicProgress(roadmapId, topicId);
          if (progress?.completed) {
            completedTopics.add(`${roadmapId}-${topicId}`);
            if (progress.completedAt) {
              dates.push(progress.completedAt);
            }
          }
        });
      });

      const milestones: Milestone[] = [];

      // First Topic Completed
      if (completedTopics.size > 0) {
        const firstDate = dates.sort()[0];
        milestones.push({
          id: 'first-topic',
          title: 'First Topic Completed',
          description: 'Started your learning journey',
          icon: FaBook,
          date: firstDate || new Date().toISOString(),
          type: 'achievement'
        });
      }

      // Multiple Topics Milestone
      if (completedTopics.size >= 5) {
        milestones.push({
          id: 'five-topics',
          title: '5 Topics Mastered',
          description: 'Making great progress!',
          icon: FaTrophy,
          date: dates.sort()[4] || new Date().toISOString(),
          type: 'progress'
        });
      }

      // Consistent Learning
      if (dates.length > 0) {
        const uniqueDates = [...new Set(dates)].sort();
        const daysBetween = Math.floor(
          (new Date(uniqueDates[uniqueDates.length - 1]).getTime() -
            new Date(uniqueDates[0]).getTime()) /
            (1000 * 60 * 60 * 24)
        );

        if (daysBetween >= 7 && uniqueDates.length >= 3) {
          milestones.push({
            id: 'consistent-learning',
            title: 'Consistent Learner',
            description: 'Learning regularly for over a week',
            icon: FaClock,
            date: new Date().toISOString(),
            type: 'time'
          });
        }
      }

      // Advanced Topics
      const advancedTopics = Array.from(completedTopics).filter(topic =>
        topic.includes('advanced')
      );
      if (advancedTopics.length > 0) {
        milestones.push({
          id: 'advanced-topics',
          title: 'Advanced Achievement',
          description: 'Completed advanced level topics',
          icon: FaChartLine,
          date: new Date().toISOString(),
          type: 'skill'
        });
      }

      return milestones.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    };

    setMilestones(calculateMilestones());
  }, [getTopicProgress]);

  if (milestones.length === 0) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Learning Milestones</h2>
        <p className="text-gray-600">
          Start learning to unlock your first milestone!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Learning Milestones</h2>
      <div className="space-y-6">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-start space-x-4 p-4 rounded-lg ${
              milestone.type === 'achievement'
                ? 'bg-yellow-50'
                : milestone.type === 'progress'
                ? 'bg-green-50'
                : milestone.type === 'time'
                ? 'bg-blue-50'
                : 'bg-purple-50'
            }`}
          >
            <div
              className={`p-3 rounded-full ${
                milestone.type === 'achievement'
                  ? 'bg-yellow-100 text-yellow-600'
                  : milestone.type === 'progress'
                  ? 'bg-green-100 text-green-600'
                  : milestone.type === 'time'
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-purple-100 text-purple-600'
              }`}
            >
              <milestone.icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{milestone.title}</h3>
              <p className="text-gray-600">{milestone.description}</p>
              <p className="text-sm text-gray-500 mt-1">
                {format(new Date(milestone.date), 'MMM d, yyyy')}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

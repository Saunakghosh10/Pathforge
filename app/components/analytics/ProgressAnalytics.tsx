'use client';

import { motion } from 'framer-motion';
import { useProgress } from '@/app/context/ProgressContext';
import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import LearningMilestones from './LearningMilestones';

interface RoadmapProgress {
  name: string;
  completed: number;
  total: number;
  percentage: number;
}

interface SkillLevel {
  name: string;
  value: number;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export default function ProgressAnalytics() {
  const { getTopicProgress } = useProgress();
  const [roadmapProgress, setRoadmapProgress] = useState<RoadmapProgress[]>([]);
  const [skillLevels, setSkillLevels] = useState<SkillLevel[]>([]);
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    // Calculate progress for each roadmap
    const roadmaps = [
      { id: 'frontend', name: 'Frontend' },
      { id: 'backend', name: 'Backend' },
      { id: 'devops', name: 'DevOps' },
      { id: 'gamedev', name: 'Game Dev' }
    ];

    const progress = roadmaps.map(roadmap => {
      const topics = getAllTopics(roadmap.id);
      const completed = topics.filter(topic => 
        getTopicProgress(roadmap.id, topic)?.completed
      ).length;

      return {
        name: roadmap.name,
        completed,
        total: topics.length,
        percentage: (completed / topics.length) * 100
      };
    });

    setRoadmapProgress(progress);

    // Calculate skill levels
    const levels = [
      { name: 'Beginner', value: 0 },
      { name: 'Intermediate', value: 0 },
      { name: 'Advanced', value: 0 }
    ];

    roadmaps.forEach(roadmap => {
      const topics = getAllTopics(roadmap.id);
      topics.forEach(topic => {
        if (getTopicProgress(roadmap.id, topic)?.completed) {
          const level = getTopicLevel(roadmap.id, topic);
          const levelIndex = levels.findIndex(l => l.name.toLowerCase() === level);
          if (levelIndex !== -1) {
            levels[levelIndex].value++;
          }
        }
      });
    });

    setSkillLevels(levels);

    // Calculate total study time
    const totalMinutes = roadmaps.reduce((acc, roadmap) => {
      const topics = getAllTopics(roadmap.id);
      const completedTopics = topics.filter(topic => 
        getTopicProgress(roadmap.id, topic)?.completed
      );
      
      return acc + completedTopics.reduce((time, topic) => {
        const estimatedTime = getTopicEstimatedTime(roadmap.id, topic);
        return time + estimatedTime;
      }, 0);
    }, 0);

    setTotalTime(totalMinutes);
  }, [getTopicProgress]);

  // Helper functions to get topic information
  function getAllTopics(roadmapId: string): string[] {
    // This should be replaced with actual topic IDs from your roadmaps
    return ['topic1', 'topic2', 'topic3'];
  }

  function getTopicLevel(roadmapId: string, topicId: string): string {
    // This should be replaced with actual topic level logic
    return 'beginner';
  }

  function getTopicEstimatedTime(roadmapId: string, topicId: string): number {
    // This should be replaced with actual estimated time logic
    return 60; // minutes
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        Learning Analytics
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Roadmap Progress Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Roadmap Progress</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={roadmapProgress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="completed" fill="#0088FE" name="Completed" />
                <Bar dataKey="total" fill="#00C49F" name="Total" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Skill Level Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Skill Level Distribution</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={skillLevels}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  label
                >
                  {skillLevels.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Summary Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2 bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Learning Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-medium text-blue-800">Total Topics</h3>
              <p className="text-3xl font-bold text-blue-600">
                {roadmapProgress.reduce((acc, curr) => acc + curr.total, 0)}
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="text-lg font-medium text-green-800">Completed Topics</h3>
              <p className="text-3xl font-bold text-green-600">
                {roadmapProgress.reduce((acc, curr) => acc + curr.completed, 0)}
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-medium text-purple-800">Study Time</h3>
              <p className="text-3xl font-bold text-purple-600">
                {Math.round(totalTime / 60)} hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Learning Milestones */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8"
      >
        <LearningMilestones />
      </motion.div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { FiAward, FiClock, FiTrendingUp, FiCode, FiBook } from 'react-icons/fi';

interface Achievement {
  id: string;
  type: string;
  name: string;
  description: string;
  earnedAt: string;
  metadata?: any;
}

const achievementIcons: { [key: string]: any } = {
  streak: FiClock,
  completion: FiTrendingUp,
  challenge: FiCode,
  learning: FiBook,
  default: FiAward,
};

export default function AchievementsPage() {
  const { data: session } = useSession();
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    try {
      const response = await fetch('/api/achievements');
      const data = await response.json();
      if (data.achievements) {
        setAchievements(data.achievements);
      }
    } catch (err) {
      setError('Failed to load achievements');
    } finally {
      setLoading(false);
    }
  };

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Please sign in to view your achievements</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const getAchievementStats = () => {
    const stats = {
      total: achievements.length,
      byType: {} as { [key: string]: number },
    };

    achievements.forEach((achievement) => {
      if (!stats.byType[achievement.type]) {
        stats.byType[achievement.type] = 0;
      }
      stats.byType[achievement.type]++;
    });

    return stats;
  };

  const stats = getAchievementStats();

  return (
    <div className="min-h-screen p-8 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-6 flex items-center">
            <FiAward className="mr-2" />
            Your Achievements
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800">Total</h3>
              <p className="text-2xl font-bold text-blue-600">{stats.total}</p>
            </div>
            {Object.entries(stats.byType).map(([type, count]) => (
              <div key={type} className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 capitalize">
                  {type}
                </h3>
                <p className="text-2xl font-bold text-blue-600">{count}</p>
              </div>
            ))}
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-50 text-red-500 rounded">
              {error}
            </div>
          )}

          <div className="grid gap-4">
            {achievements.map((achievement) => {
              const Icon =
                achievementIcons[achievement.type] || achievementIcons.default;

              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {achievement.name}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {achievement.description}
                      </p>
                      <div className="mt-2 text-sm text-gray-500">
                        Earned on{' '}
                        {new Date(achievement.earnedAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {achievements.length === 0 && (
            <div className="text-center py-12">
              <FiAward className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900">
                No achievements yet
              </h3>
              <p className="mt-2 text-gray-500">
                Start learning and completing challenges to earn achievements!
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

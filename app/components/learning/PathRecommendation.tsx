'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Roadmap {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  estimatedHours: number;
  matchScore: number;
}

interface PathRecommendationProps {
  assessmentResults: Record<string, string>;
}

export default function PathRecommendation({ assessmentResults }: PathRecommendationProps) {
  const [recommendations, setRecommendations] = useState<Roadmap[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch('/api/learning/recommendations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ assessment: assessmentResults }),
        });

        if (!response.ok) throw new Error('Failed to fetch recommendations');

        const data = await response.json();
        setRecommendations(data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [assessmentResults]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Recommended Learning Paths</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((roadmap) => (
          <div
            key={roadmap.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{roadmap.title}</h3>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800">
                  {roadmap.difficulty}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{roadmap.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Estimated Time</span>
                  <span className="font-medium">{roadmap.estimatedHours} hours</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Match Score</span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-gray-200 rounded-full mr-2">
                      <div
                        className="h-2 bg-indigo-600 rounded-full"
                        style={{ width: `${roadmap.matchScore}%` }}
                      />
                    </div>
                    <span className="font-medium">{roadmap.matchScore}%</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/roadmap/${roadmap.id}`}
                className="mt-6 block w-full px-4 py-2 text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                Start Learning
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

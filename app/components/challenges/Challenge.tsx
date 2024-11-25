'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '@/app/context/ProgressContext';
import { FiCheck, FiClock, FiCode, FiLock } from 'react-icons/fi';

interface ChallengeProps {
  id: string;
  roadmapId: string;
  topicId: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prerequisites?: string[];
  estimatedTime: string;
  starterCode?: string;
  solution?: string;
  testCases?: {
    input: string;
    expectedOutput: string;
  }[];
  onComplete?: () => void;
}

export default function Challenge({
  id,
  roadmapId,
  topicId,
  title,
  description,
  difficulty,
  prerequisites,
  estimatedTime,
  starterCode,
  solution,
  testCases,
  onComplete
}: ChallengeProps) {
  const [code, setCode] = useState(starterCode || '');
  const [showSolution, setShowSolution] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [testResults, setTestResults] = useState<boolean[]>([]);

  const { updateChallenge } = useProgress();

  const handleComplete = () => {
    const challenge = {
      id,
      title,
      completed: true,
      timestamp: new Date().toISOString()
    };
    updateChallenge(roadmapId, topicId, challenge);
    setCompleted(true);
    onComplete?.();
  };

  const difficultyColor = {
    beginner: 'text-green-600',
    intermediate: 'text-yellow-600',
    advanced: 'text-red-600'
  }[difficulty];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex items-center space-x-4">
          <span className={`${difficultyColor} font-medium`}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </span>
          <span className="flex items-center text-gray-600">
            <FiClock className="mr-1" />
            {estimatedTime}
          </span>
        </div>
      </div>

      <p className="text-gray-700 mb-6">{description}</p>

      {prerequisites && prerequisites.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Prerequisites</h3>
          <ul className="list-disc list-inside space-y-1">
            {prerequisites.map((prereq, index) => (
              <li key={index} className="text-gray-700">
                {prereq}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Your Solution</h3>
          {!completed && (
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="flex items-center text-blue-600 hover:text-blue-700"
            >
              {showSolution ? (
                <>
                  <FiLock className="mr-1" />
                  Hide Solution
                </>
              ) : (
                <>
                  <FiCode className="mr-1" />
                  Show Solution
                </>
              )}
            </button>
          )}
        </div>
        <div className="relative">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 p-4 font-mono text-sm bg-gray-50 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Write your solution here..."
          />
          {showSolution && solution && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-white p-4 rounded-lg border overflow-auto"
            >
              <pre className="font-mono text-sm">{solution}</pre>
            </motion.div>
          )}
        </div>
      </div>

      {testCases && testCases.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Test Cases</h3>
          <div className="space-y-2">
            {testCases.map((test, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  testResults[index] === undefined
                    ? 'bg-gray-50'
                    : testResults[index]
                    ? 'bg-green-50'
                    : 'bg-red-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Input:</p>
                    <pre className="text-sm">{test.input}</pre>
                  </div>
                  <div>
                    <p className="font-medium">Expected Output:</p>
                    <pre className="text-sm">{test.expectedOutput}</pre>
                  </div>
                  {testResults[index] !== undefined && (
                    <div
                      className={`${
                        testResults[index] ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {testResults[index] ? (
                        <FiCheck className="w-6 h-6" />
                      ) : (
                        '✗'
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!completed && (
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => {
              // Here you would typically run the tests
              // For now, we'll just mark it as completed
              handleComplete();
            }}
            className="py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit Solution
          </button>
        </div>
      )}

      {completed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-4 bg-green-50 rounded-lg"
        >
          <p className="text-green-600 font-medium flex items-center">
            <FiCheck className="mr-2" />
            Challenge completed! Great job!
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

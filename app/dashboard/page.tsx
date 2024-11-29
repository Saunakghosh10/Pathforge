'use client';

import { motion } from 'framer-motion';
import ProgressAnalytics from '../components/analytics/ProgressAnalytics';
import Quiz from '../components/quiz/Quiz';
import CodeChallenge from '../components/challenges/CodeChallenge';
import { Challenge } from '@/types/challenge';

// Sample quiz data
const sampleQuiz = {
  quizId: 'test-quiz-1',
  roadmapId: 'frontend',
  topicId: 'react-basics',
  title: 'React Fundamentals',
  questions: [
    {
      id: '1',
      text: 'What is React?',
      options: [
        'A JavaScript library for building user interfaces',
        'A programming language',
        'A database management system',
        'An operating system'
      ],
      correctAnswer: 0,
      explanation: 'React is a JavaScript library developed by Facebook for building user interfaces, particularly single-page applications.'
    },
    {
      id: '2',
      text: 'What is JSX?',
      options: [
        'A JavaScript engine',
        'A syntax extension for JavaScript that allows you to write HTML-like code',
        'A new programming language',
        'A testing framework'
      ],
      correctAnswer: 1,
      explanation: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files.'
    }
  ]
};

// Sample code challenge data
const sampleChallenge: Challenge = {
  id: 'js-array-sum',
  title: 'Array Sum Calculator',
  description: 'Create a function that calculates the sum of all numbers in an array.',
  difficulty: 'easy',
  starterCode: `function arraySum(numbers) {
  // Your code here
}`,
  testCases: [
    {
      input: '[1, 2, 3, 4, 5]',
      expectedOutput: '15'
    },
    {
      input: '[-1, 0, 1]',
      expectedOutput: '0'
    },
    {
      input: '[10, 20, 30]',
      expectedOutput: '60'
    }
  ],
  solution: `function arraySum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}`,
  hints: [
    'Consider using the reduce method',
    'Remember to handle empty arrays',
    'Think about how to handle non-number elements'
  ]
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Dashboard</h1>
          <p className="text-lg text-gray-600">Track your progress and test new features</p>
        </motion.div>

        {/* Progress Analytics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Progress Analytics</h2>
          <ProgressAnalytics />
        </section>

        {/* Interactive Learning */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Quiz Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Quiz</h2>
            <Quiz {...sampleQuiz} />
          </section>

          {/* Code Challenge Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Code Challenge</h2>
            <CodeChallenge
              challenge={sampleChallenge}
              roadmapId="frontend"
              topicId="javascript-basics"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

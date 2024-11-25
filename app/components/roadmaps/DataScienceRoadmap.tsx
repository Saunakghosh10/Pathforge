'use client';

import { useProgress } from '@/app/context/ProgressContext';
import { motion } from 'framer-motion';
import { FiBook, FiCheck, FiClock, FiCode, FiDatabase, FiPieChart } from 'react-icons/fi';
import { SiPython, SiPandas, SiScikitlearn, SiTensorflow } from 'react-icons/si';

const topics = [
  {
    id: 'python-fundamentals',
    title: 'Python Fundamentals',
    description: 'Master Python programming basics essential for data science.',
    icon: SiPython,
    estimatedTime: '2 weeks',
    difficulty: 'beginner',
    resources: [
      {
        title: 'Python for Data Science Handbook',
        url: 'https://jakevdp.github.io/PythonDataScienceHandbook/'
      },
      {
        title: 'Python Basics for Data Science',
        url: 'https://www.edx.org/course/python-basics-for-data-science'
      }
    ],
    quiz: {
      id: 'python-basics-quiz',
      title: 'Python Fundamentals Quiz',
      questions: [
        {
          id: 'q1',
          text: 'Which of the following is a mutable data type in Python?',
          options: ['str', 'tuple', 'list', 'int'],
          correctAnswer: 2,
          explanation: 'Lists are mutable data types in Python, meaning their contents can be modified after creation.'
        }
      ]
    }
  },
  {
    id: 'data-manipulation',
    title: 'Data Manipulation with Pandas',
    description: 'Learn to manipulate and analyze data using Pandas.',
    icon: SiPandas,
    estimatedTime: '3 weeks',
    difficulty: 'intermediate',
    prerequisites: ['python-fundamentals'],
    resources: [
      {
        title: 'Pandas Documentation',
        url: 'https://pandas.pydata.org/docs/'
      },
      {
        title: 'Data Manipulation with Pandas',
        url: 'https://www.datacamp.com/courses/data-manipulation-with-pandas'
      }
    ]
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    description: 'Create compelling visualizations using matplotlib and seaborn.',
    icon: FiPieChart,
    estimatedTime: '2 weeks',
    difficulty: 'intermediate',
    prerequisites: ['data-manipulation'],
    resources: [
      {
        title: 'Matplotlib Documentation',
        url: 'https://matplotlib.org/stable/contents.html'
      },
      {
        title: 'Seaborn Documentation',
        url: 'https://seaborn.pydata.org/'
      }
    ]
  },
  {
    id: 'statistics',
    title: 'Statistics for Data Science',
    description: 'Learn essential statistical concepts and their applications.',
    icon: FiDatabase,
    estimatedTime: '4 weeks',
    difficulty: 'intermediate',
    prerequisites: ['data-manipulation'],
    resources: [
      {
        title: 'Statistics and Probability',
        url: 'https://www.khanacademy.org/math/statistics-probability'
      },
      {
        title: 'Statistical Thinking in Python',
        url: 'https://www.datacamp.com/courses/statistical-thinking-in-python-part-1'
      }
    ]
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning Fundamentals',
    description: 'Master basic machine learning algorithms and concepts.',
    icon: SiScikitlearn,
    estimatedTime: '6 weeks',
    difficulty: 'advanced',
    prerequisites: ['statistics'],
    resources: [
      {
        title: 'Scikit-learn Documentation',
        url: 'https://scikit-learn.org/stable/'
      },
      {
        title: 'Machine Learning Course',
        url: 'https://www.coursera.org/learn/machine-learning'
      }
    ]
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    description: 'Explore neural networks and deep learning frameworks.',
    icon: SiTensorflow,
    estimatedTime: '8 weeks',
    difficulty: 'advanced',
    prerequisites: ['machine-learning'],
    resources: [
      {
        title: 'Deep Learning Specialization',
        url: 'https://www.coursera.org/specializations/deep-learning'
      },
      {
        title: 'TensorFlow Documentation',
        url: 'https://www.tensorflow.org/learn'
      }
    ]
  },
  {
    id: 'data-projects',
    title: 'Data Science Projects',
    description: 'Build a portfolio with real-world data science projects.',
    icon: FiCode,
    estimatedTime: '8 weeks',
    difficulty: 'advanced',
    prerequisites: ['deep-learning', 'data-visualization'],
    resources: [
      {
        title: 'Kaggle Competitions',
        url: 'https://www.kaggle.com/competitions'
      },
      {
        title: 'Real-world Data Science Projects',
        url: 'https://www.datacamp.com/projects'
      }
    ]
  },
  {
    id: 'best-practices',
    title: 'Data Science Best Practices',
    description: 'Learn industry best practices and professional workflows.',
    icon: FiBook,
    estimatedTime: '2 weeks',
    difficulty: 'intermediate',
    prerequisites: ['data-projects'],
    resources: [
      {
        title: 'Data Science Process Alliance',
        url: 'https://www.datascience-pm.com/'
      },
      {
        title: 'MLOps Best Practices',
        url: 'https://ml-ops.org/'
      }
    ]
  }
];

export default function DataScienceRoadmap() {
  const { getTopicProgress, updateTopicProgress } = useProgress();

  const handleTopicClick = (topicId: string) => {
    const currentProgress = getTopicProgress('datascience', topicId);
    if (currentProgress) {
      updateTopicProgress('datascience', topicId, !currentProgress.isCompleted);
    } else {
      updateTopicProgress('datascience', topicId, true);
    }
  };

  const isTopicAccessible = (topic: typeof topics[0]) => {
    if (!topic.prerequisites) return true;
    return topic.prerequisites.every(prereqId => {
      const progress = getTopicProgress('datascience', prereqId);
      return progress?.isCompleted;
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        Data Science Roadmap
      </motion.h1>

      <div className="space-y-6">
        {topics.map((topic, index) => {
          const progress = getTopicProgress('datascience', topic.id);
          const isAccessible = isTopicAccessible(topic);

          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-lg border ${
                progress?.isCompleted
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
                      progress?.isCompleted ? 'bg-green-200' : 'bg-gray-200'
                    }`}
                  >
                    <topic.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                    <p className="text-gray-600 mb-4">{topic.description}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span
                        className={`font-medium ${
                          topic.difficulty === 'beginner'
                            ? 'text-green-600'
                            : topic.difficulty === 'intermediate'
                            ? 'text-yellow-600'
                            : 'text-red-600'
                        }`}
                      >
                        {topic.difficulty.charAt(0).toUpperCase() +
                          topic.difficulty.slice(1)}
                      </span>
                      <span className="flex items-center text-gray-600">
                        <FiClock className="mr-1" />
                        {topic.estimatedTime}
                      </span>
                    </div>
                  </div>
                </div>
                {progress?.isCompleted && (
                  <FiCheck className="w-6 h-6 text-green-600" />
                )}
              </div>

              {topic.prerequisites && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Prerequisites:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {topic.prerequisites.map(prereqId => {
                      const prereqProgress = getTopicProgress('datascience', prereqId);
                      const prereqTopic = topics.find(t => t.id === prereqId);
                      return (
                        <span
                          key={prereqId}
                          className={`text-sm px-2 py-1 rounded ${
                            prereqProgress?.isCompleted
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

              {topic.resources && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">Resources:</p>
                  <div className="space-y-2">
                    {topic.resources.map((resource, idx) => (
                      <a
                        key={idx}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 hover:text-blue-800"
                      >
                        {resource.title}
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

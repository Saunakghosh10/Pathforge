'use client';

import { motion } from 'framer-motion';
import { useProgress } from '@/app/context/ProgressContext';
import {
  FiDatabase,
  FiTrendingUp,
  FiPieChart,
  FiCode,
  FiServer,
  FiGitBranch,
  FiLayers,
  FiZap
} from 'react-icons/fi';
import { RoadmapTopic } from '@/types/roadmap';
import RoadmapNode from './RoadmapNode';

export default function DataAnalystRoadmap() {
  const { getTopicProgress } = useProgress();

  const topics: RoadmapTopic[] = [
    {
      id: 'data-fundamentals',
      title: 'Data Fundamentals',
      description:
        'Learn the basics of data analysis, statistics, and data types.',
      icon: FiDatabase,
      level: 'beginner',
      completed: getTopicProgress('data-analyst', 'data-fundamentals')?.completed || false,
      links: [
        { title: 'Statistics 101', url: 'https://www.khanacademy.org/math/statistics-probability' },
        { title: 'Data Analysis Basics', url: 'https://www.coursera.org/learn/data-analysis-with-python' }
      ]
    },
    {
      id: 'sql',
      title: 'SQL and Databases',
      description:
        'Master SQL queries and database management.',
      icon: FiServer,
      level: 'beginner',
      completed: getTopicProgress('data-analyst', 'sql')?.completed || false,
      links: [
        { title: 'SQL Tutorial', url: 'https://www.w3schools.com/sql/' },
        { title: 'PostgreSQL Fundamentals', url: 'https://www.postgresql.org/docs/current/tutorial.html' }
      ]
    },
    {
      id: 'python-data-analysis',
      title: 'Python for Data Analysis',
      description:
        'Learn Python libraries like Pandas and NumPy.',
      icon: FiCode,
      level: 'intermediate',
      completed: getTopicProgress('data-analyst', 'python-data-analysis')?.completed || false,
      links: [
        { title: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/' },
        { title: 'NumPy Tutorial', url: 'https://numpy.org/doc/stable/user/quickstart.html' }
      ]
    },
    {
      id: 'data-visualization',
      title: 'Data Visualization',
      description:
        'Create effective visualizations using tools like Matplotlib and Tableau.',
      icon: FiPieChart,
      level: 'intermediate',
      completed: getTopicProgress('data-analyst', 'data-visualization')?.completed || false,
      links: [
        { title: 'Matplotlib Guide', url: 'https://matplotlib.org/stable/tutorials/index.html' },
        { title: 'Tableau Training', url: 'https://www.tableau.com/learn/training' }
      ]
    },
    {
      id: 'statistical-analysis',
      title: 'Statistical Analysis',
      description:
        'Advanced statistics and hypothesis testing.',
      icon: FiTrendingUp,
      level: 'advanced',
      completed: getTopicProgress('data-analyst', 'statistical-analysis')?.completed || false,
      links: [
        { title: 'Statistical Learning', url: 'https://www.statlearning.com/' },
        { title: 'Advanced Statistics', url: 'https://www.coursera.org/learn/advanced-statistics-data-science' }
      ]
    },
    {
      id: 'data-cleaning',
      title: 'Data Cleaning and Preprocessing',
      description:
        'Learn data cleaning, transformation, and feature engineering.',
      icon: FiLayers,
      level: 'intermediate',
      completed: getTopicProgress('data-analyst', 'data-cleaning')?.completed || false,
      links: [
        { title: 'Data Cleaning Guide', url: 'https://towardsdatascience.com/data-cleaning-101-python-scripts-for-data-scientists-2f5de115be' },
        { title: 'Feature Engineering', url: 'https://www.kaggle.com/learn/feature-engineering' }
      ]
    },
    {
      id: 'big-data',
      title: 'Big Data Tools',
      description:
        'Work with big data using tools like Spark and Hadoop.',
      icon: FiZap,
      level: 'advanced',
      completed: getTopicProgress('data-analyst', 'big-data')?.completed || false,
      links: [
        { title: 'Apache Spark', url: 'https://spark.apache.org/docs/latest/' },
        { title: 'Hadoop Tutorial', url: 'https://hadoop.apache.org/docs/current/' }
      ]
    },
    {
      id: 'version-control',
      title: 'Version Control and Collaboration',
      description:
        'Learn Git and collaborative data analysis.',
      icon: FiGitBranch,
      level: 'beginner',
      completed: getTopicProgress('data-analyst', 'version-control')?.completed || false,
      links: [
        { title: 'Git Basics', url: 'https://git-scm.com/book/en/v2' },
        { title: 'GitHub for Data Scientists', url: 'https://github.com/topics/data-science' }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold mb-8">Data Analyst Roadmap</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <RoadmapNode
            key={topic.id}
            topic={topic}
            roadmapId="data-analyst"
          />
        ))}
      </div>
    </motion.div>
  );
}

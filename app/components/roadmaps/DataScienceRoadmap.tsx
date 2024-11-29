'use client';

import { motion } from 'framer-motion';
import { useProgress } from '@/app/context/ProgressContext';
import {
  SiPython,
  SiJupyter,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiTableau,
  SiApachespark,
  SiGit
} from 'react-icons/si';
import { RoadmapTopic } from '@/types/roadmap';
import RoadmapNode from './RoadmapNode';

export default function DataScienceRoadmap() {
  const { getTopicProgress } = useProgress();

  const topics: RoadmapTopic[] = [
    {
      id: 'python-basics',
      title: 'Python Fundamentals',
      description:
        'Master Python programming language and essential libraries.',
      icon: SiPython,
      level: 'beginner',
      completed: getTopicProgress('datascience', 'python-basics')?.completed || false,
      links: [
        { title: 'Python Documentation', url: 'https://docs.python.org/3/' },
        { title: 'Python for Data Science', url: 'https://www.coursera.org/learn/python-for-applied-data-science-ai' }
      ]
    },
    {
      id: 'data-analysis',
      title: 'Data Analysis',
      description:
        'Learn data manipulation and analysis with Pandas.',
      icon: SiPandas,
      level: 'beginner',
      completed: getTopicProgress('datascience', 'data-analysis')?.completed || false,
      links: [
        { title: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/' },
        { title: 'Data Analysis with Python', url: 'https://www.freecodecamp.org/learn/data-analysis-with-python/' }
      ]
    },
    {
      id: 'jupyter-notebooks',
      title: 'Jupyter Notebooks',
      description:
        'Master interactive computing and data visualization.',
      icon: SiJupyter,
      level: 'beginner',
      completed: getTopicProgress('datascience', 'jupyter-notebooks')?.completed || false,
      links: [
        { title: 'Jupyter Documentation', url: 'https://jupyter.org/documentation' },
        { title: 'Interactive Computing', url: 'https://jupyter-notebook.readthedocs.io/en/stable/' }
      ]
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      description:
        'Learn ML algorithms and scikit-learn library.',
      icon: SiScikitlearn,
      level: 'intermediate',
      completed: getTopicProgress('datascience', 'machine-learning')?.completed || false,
      links: [
        { title: 'Scikit-learn', url: 'https://scikit-learn.org/stable/' },
        { title: 'ML Course', url: 'https://www.coursera.org/learn/machine-learning' }
      ]
    },
    {
      id: 'deep-learning',
      title: 'Deep Learning',
      description:
        'Master neural networks with TensorFlow.',
      icon: SiTensorflow,
      level: 'advanced',
      completed: getTopicProgress('datascience', 'deep-learning')?.completed || false,
      links: [
        { title: 'TensorFlow', url: 'https://www.tensorflow.org/learn' },
        { title: 'Deep Learning', url: 'https://www.deeplearning.ai/' }
      ]
    },
    {
      id: 'data-visualization',
      title: 'Data Visualization',
      description:
        'Create impactful visualizations with various tools.',
      icon: SiTableau,
      level: 'intermediate',
      completed: getTopicProgress('datascience', 'data-visualization')?.completed || false,
      links: [
        { title: 'Tableau', url: 'https://www.tableau.com/learn' },
        { title: 'Data Viz', url: 'https://www.coursera.org/learn/data-visualization-with-python' }
      ]
    },
    {
      id: 'big-data',
      title: 'Big Data',
      description:
        'Handle large datasets with Apache Spark.',
      icon: SiApachespark,
      level: 'advanced',
      completed: getTopicProgress('datascience', 'big-data')?.completed || false,
      links: [
        { title: 'Apache Spark', url: 'https://spark.apache.org/docs/latest/' },
        { title: 'Big Data Course', url: 'https://www.coursera.org/learn/big-data-introduction' }
      ]
    },
    {
      id: 'version-control',
      title: 'Version Control',
      description:
        'Master Git for code version control.',
      icon: SiGit,
      level: 'beginner',
      completed: getTopicProgress('datascience', 'version-control')?.completed || false,
      links: [
        { title: 'Git Documentation', url: 'https://git-scm.com/doc' },
        { title: 'Git for Data Science', url: 'https://www.atlassian.com/git/tutorials' }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold mb-8">Data Science Roadmap</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <RoadmapNode
            key={topic.id}
            topic={topic}
            roadmapId="datascience"
          />
        ))}
      </div>
    </motion.div>
  );
}

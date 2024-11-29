'use client';

import { motion } from 'framer-motion';
import { useProgress } from '@/app/context/ProgressContext';
import {
  SiPython,
  SiApachespark,
  SiApacheairflow,
  SiApachekafka,
  SiDatabricks,
  SiAmazons3,
  SiSnowflake,
  SiDocker
} from 'react-icons/si';
import { RoadmapTopic } from '@/types/roadmap';
import RoadmapNode from './RoadmapNode';

export default function DataEngineerRoadmap() {
  const { getTopicProgress } = useProgress();

  const topics: RoadmapTopic[] = [
    {
      id: 'programming-fundamentals',
      title: 'Programming Fundamentals',
      description:
        'Master Python and SQL for data engineering.',
      icon: SiPython,
      level: 'beginner',
      completed: getTopicProgress('dataengineer', 'programming-fundamentals')?.completed || false,
      links: [
        { title: 'Python Documentation', url: 'https://docs.python.org/3/' },
        { title: 'SQL Tutorial', url: 'https://www.postgresql.org/docs/current/tutorial.html' }
      ]
    },
    {
      id: 'big-data-processing',
      title: 'Big Data Processing',
      description:
        'Learn Apache Spark and distributed computing.',
      icon: SiApachespark,
      level: 'intermediate',
      completed: getTopicProgress('dataengineer', 'big-data-processing')?.completed || false,
      links: [
        { title: 'Apache Spark', url: 'https://spark.apache.org/docs/latest/' },
        { title: 'PySpark Tutorial', url: 'https://spark.apache.org/docs/latest/api/python/' }
      ]
    },
    {
      id: 'data-pipelines',
      title: 'Data Pipelines',
      description:
        'Build and maintain data pipelines with Apache Airflow.',
      icon: SiApacheairflow,
      level: 'intermediate',
      completed: getTopicProgress('dataengineer', 'data-pipelines')?.completed || false,
      links: [
        { title: 'Apache Airflow', url: 'https://airflow.apache.org/docs/' },
        { title: 'ETL Best Practices', url: 'https://www.startdataengineering.com/post/etl-best-practices/' }
      ]
    },
    {
      id: 'streaming',
      title: 'Stream Processing',
      description:
        'Handle real-time data with Apache Kafka.',
      icon: SiApachekafka,
      level: 'advanced',
      completed: getTopicProgress('dataengineer', 'streaming')?.completed || false,
      links: [
        { title: 'Apache Kafka', url: 'https://kafka.apache.org/documentation/' },
        { title: 'Stream Processing', url: 'https://www.confluent.io/learn/stream-processing/' }
      ]
    },
    {
      id: 'cloud-platforms',
      title: 'Cloud Platforms',
      description:
        'Work with cloud data platforms and services.',
      icon: SiDatabricks,
      level: 'intermediate',
      completed: getTopicProgress('dataengineer', 'cloud-platforms')?.completed || false,
      links: [
        { title: 'Databricks', url: 'https://docs.databricks.com/' },
        { title: 'AWS Data Services', url: 'https://aws.amazon.com/big-data/datalakes-and-analytics/' }
      ]
    },
    {
      id: 'data-storage',
      title: 'Data Storage',
      description:
        'Understand data lakes, warehouses, and storage solutions.',
      icon: SiAmazons3,
      level: 'intermediate',
      completed: getTopicProgress('dataengineer', 'data-storage')?.completed || false,
      links: [
        { title: 'AWS S3', url: 'https://docs.aws.amazon.com/s3/' },
        { title: 'Data Lake Architecture', url: 'https://aws.amazon.com/big-data/datalakes-and-analytics/' }
      ]
    },
    {
      id: 'data-warehousing',
      title: 'Data Warehousing',
      description:
        'Master modern data warehouse solutions.',
      icon: SiSnowflake,
      level: 'advanced',
      completed: getTopicProgress('dataengineer', 'data-warehousing')?.completed || false,
      links: [
        { title: 'Snowflake', url: 'https://docs.snowflake.com/' },
        { title: 'Data Warehouse Design', url: 'https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/' }
      ]
    },
    {
      id: 'containerization',
      title: 'Containerization',
      description:
        'Learn Docker and container orchestration.',
      icon: SiDocker,
      level: 'advanced',
      completed: getTopicProgress('dataengineer', 'containerization')?.completed || false,
      links: [
        { title: 'Docker Documentation', url: 'https://docs.docker.com/' },
        { title: 'Kubernetes Basics', url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/' }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold mb-8">Data Engineer Roadmap</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <RoadmapNode
            key={topic.id}
            topic={topic}
            roadmapId="dataengineer"
          />
        ))}
      </div>
    </motion.div>
  );
}

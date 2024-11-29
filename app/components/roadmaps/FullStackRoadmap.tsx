'use client';

import { motion } from 'framer-motion';
import { useProgress } from '@/app/context/ProgressContext';
import {
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiAmazon,
  SiGit,
  SiNginx,
  SiRedis
} from 'react-icons/si';
import { RoadmapTopic } from '@/types/roadmap';
import RoadmapNode from './RoadmapNode';

export default function FullStackRoadmap() {
  const { getTopicProgress } = useProgress();

  const topics: RoadmapTopic[] = [
    {
      id: 'frontend-fundamentals',
      title: 'Frontend Development',
      description:
        'Master React, TypeScript, and modern web development.',
      icon: SiReact,
      level: 'beginner',
      completed: getTopicProgress('fullstack', 'frontend-fundamentals')?.completed || false,
      links: [
        { title: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
        { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/' }
      ]
    },
    {
      id: 'backend-development',
      title: 'Backend Development',
      description:
        'Build scalable APIs with Node.js and Express.',
      icon: SiNodedotjs,
      level: 'intermediate',
      completed: getTopicProgress('fullstack', 'backend-development')?.completed || false,
      links: [
        { title: 'Node.js Documentation', url: 'https://nodejs.org/docs/latest-v14.x/api/' },
        { title: 'Express Guide', url: 'https://expressjs.com/en/guide/routing.html' }
      ]
    },
    {
      id: 'database',
      title: 'Database Management',
      description:
        'Learn SQL and database design with PostgreSQL.',
      icon: SiPostgresql,
      level: 'intermediate',
      completed: getTopicProgress('fullstack', 'database')?.completed || false,
      links: [
        { title: 'PostgreSQL Tutorial', url: 'https://www.postgresql.org/docs/current/tutorial.html' },
        { title: 'SQL Fundamentals', url: 'https://www.w3schools.com/sql/' }
      ]
    },
    {
      id: 'containerization',
      title: 'Containerization',
      description:
        'Containerize applications with Docker.',
      icon: SiDocker,
      level: 'intermediate',
      completed: getTopicProgress('fullstack', 'containerization')?.completed || false,
      links: [
        { title: 'Docker Documentation', url: 'https://docs.docker.com/' },
        { title: 'Docker Compose', url: 'https://docs.docker.com/compose/' }
      ]
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      description:
        'Deploy and manage applications on AWS.',
      icon: SiAmazon,
      level: 'advanced',
      completed: getTopicProgress('fullstack', 'cloud-services')?.completed || false,
      links: [
        { title: 'AWS Documentation', url: 'https://docs.aws.amazon.com/' },
        { title: 'AWS Free Tier', url: 'https://aws.amazon.com/free/' }
      ]
    },
    {
      id: 'version-control',
      title: 'Version Control',
      description:
        'Master Git and collaborative development.',
      icon: SiGit,
      level: 'beginner',
      completed: getTopicProgress('fullstack', 'version-control')?.completed || false,
      links: [
        { title: 'Git Documentation', url: 'https://git-scm.com/doc' },
        { title: 'GitHub Flow', url: 'https://guides.github.com/introduction/flow/' }
      ]
    },
    {
      id: 'web-servers',
      title: 'Web Servers',
      description:
        'Configure and manage Nginx web server.',
      icon: SiNginx,
      level: 'intermediate',
      completed: getTopicProgress('fullstack', 'web-servers')?.completed || false,
      links: [
        { title: 'Nginx Documentation', url: 'https://nginx.org/en/docs/' },
        { title: 'Nginx Config', url: 'https://www.nginx.com/resources/wiki/start/topics/examples/full/' }
      ]
    },
    {
      id: 'caching',
      title: 'Caching',
      description:
        'Implement caching with Redis.',
      icon: SiRedis,
      level: 'advanced',
      completed: getTopicProgress('fullstack', 'caching')?.completed || false,
      links: [
        { title: 'Redis Documentation', url: 'https://redis.io/documentation' },
        { title: 'Redis Tutorial', url: 'https://try.redis.io/' }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold mb-8">Full Stack Development Roadmap</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <RoadmapNode
            key={topic.id}
            topic={topic}
            roadmapId="fullstack"
          />
        ))}
      </div>
    </motion.div>
  );
}

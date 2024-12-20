'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '@/app/context/ProgressContext';
import { RoadmapTopic } from '@/types/roadmap';
import RoadmapNode from '@/app/components/roadmaps/RoadmapNode';
import BestPracticesSection from '../../components/roadmaps/BestPracticesSection';
import ProjectIdeasSection from '../../components/roadmaps/ProjectIdeasSection';
import { frontendBestPractices } from '../data/bestPractices';
import { frontendProjectIdeas } from '../data/projectIdeas';

interface RoadmapProps {
  params: {
    slug: string;
  };
}

interface RoadmapData {
  id: string;
  title: string;
  description: string;
  topics: RoadmapTopic[];
}

const roadmaps: Record<string, RoadmapData> = {
  frontend: {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Master modern web development with this comprehensive roadmap.',
    topics: [
      // Frontend topics will be added here
    ]
  },
  backend: {
    id: 'backend',
    title: 'Backend Development',
    description: 'Learn server-side programming and API development.',
    topics: [
      // Backend topics will be added here
    ]
  },
  fullstack: {
    id: 'fullstack',
    title: 'Full Stack Development',
    description: 'Become a well-rounded developer with both frontend and backend skills.',
    topics: [
      // Full stack topics will be added here
    ]
  }
};

export default function RoadmapPage({ params }: RoadmapProps) {
  const { slug } = params;
  const roadmap = roadmaps[slug];

  if (!roadmap) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Roadmap Not Found</h1>
        <p className="text-gray-600">The requested roadmap does not exist.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{roadmap.title}</h1>
        <p className="text-gray-600 mb-8">{roadmap.description}</p>

        <div className="space-y-6">
          {roadmap.topics.map((topic) => (
            <RoadmapNode
              key={topic.id}
              topic={topic}
              roadmapId={roadmap.id}
            />
          ))}
        </div>

        <div className="mt-8 space-y-8">
          <BestPracticesSection practices={frontendBestPractices} />
          <ProjectIdeasSection />
        </div>
      </div>
    </motion.div>
  );
}

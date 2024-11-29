'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiExternalLink } from 'react-icons/fi';
import { RoadmapTopic } from '@/types/roadmap';
import { useProgress } from '@/app/context/ProgressContext';
import { IconType } from 'react-icons';

interface RoadmapNodeProps {
  topic: RoadmapTopic;
  roadmapId: string;
}

export default function RoadmapNode({ topic, roadmapId }: RoadmapNodeProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { getTopicProgress, updateTopicProgress } = useProgress();
  const progress = getTopicProgress(roadmapId, topic.id);
  const Icon = topic.icon as IconType;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleProgressToggle = () => {
    updateTopicProgress(roadmapId, topic.id, !progress?.completed);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-lg shadow-md p-6 ${
        progress?.completed ? 'border-l-4 border-green-500' : ''
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {Icon && <Icon size={24} className="text-blue-600" />}
          <h3 className="font-semibold text-lg">{topic.title}</h3>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 text-sm rounded-full ${
            topic.level === 'beginner' ? 'bg-green-100 text-green-800' :
            topic.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {topic.level}
          </span>
          <button
            onClick={handleProgressToggle}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              progress?.completed
                ? 'bg-green-100 text-green-800 hover:bg-green-200'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {progress?.completed ? 'Completed' : 'Mark Complete'}
          </button>
        </div>
      </div>

      <p className="text-gray-600 mb-4">{topic.description}</p>

      {topic.links && topic.links.length > 0 && (
        <div>
          <button
            onClick={handleToggle}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            {isExpanded ? (
              <>
                <FiChevronUp className="mr-1" />
                Hide Resources
              </>
            ) : (
              <>
                <FiChevronDown className="mr-1" />
                Show Resources
              </>
            )}
          </button>

          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-2"
            >
              {topic.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <FiExternalLink className="mr-2" />
                  {link.title}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      )}
    </motion.div>
  );
}

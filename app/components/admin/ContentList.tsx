'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

interface Topic {
  id: string;
  title: string;
  description: string;
  order: number;
}

interface Roadmap {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
  _count: {
    progress: number;
  };
}

interface ContentListProps {
  roadmaps: Roadmap[];
}

export default function ContentList({ roadmaps }: ContentListProps) {
  const [expandedRoadmap, setExpandedRoadmap] = useState<string | null>(null);

  const toggleRoadmap = (id: string) => {
    setExpandedRoadmap(expandedRoadmap === id ? null : id);
  };

  return (
    <div className="overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {roadmaps.map((roadmap) => (
          <li key={roadmap.id}>
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <button
                    onClick={() => toggleRoadmap(roadmap.id)}
                    className="flex items-center text-left"
                  >
                    {expandedRoadmap === roadmap.id ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                    )}
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{roadmap.title}</p>
                      <p className="text-sm text-gray-500">{roadmap.description}</p>
                    </div>
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {roadmap._count.progress} learners
                  </span>
                  <button className="p-1 text-gray-400 hover:text-gray-500">
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button className="p-1 text-red-400 hover:text-red-500">
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {expandedRoadmap === roadmap.id && (
                <div className="mt-4 ml-8">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Topics</h4>
                  <ul className="space-y-2">
                    {roadmap.topics.map((topic) => (
                      <li key={topic.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{topic.title}</p>
                          <p className="text-xs text-gray-500">{topic.description}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-1 text-gray-400 hover:text-gray-500">
                            <PencilIcon className="h-4 w-4" />
                          </button>
                          <button className="p-1 text-red-400 hover:text-red-500">
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </li>
                    ))}
                    <li>
                      <button className="w-full p-2 text-sm text-indigo-600 hover:text-indigo-700 text-left">
                        + Add New Topic
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

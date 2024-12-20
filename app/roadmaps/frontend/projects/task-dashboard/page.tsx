'use client';

import { motion } from 'framer-motion';
import { ClipboardDocumentListIcon, CommandLineIcon, CodeBracketIcon, WindowIcon } from '@heroicons/react/24/outline';
import ProjectLayout from '@/app/components/roadmaps/projects/ProjectLayout';

const features = [
  {
    title: 'Drag and Drop Interface',
    description: 'Implement smooth drag and drop functionality for task management',
    icon: <WindowIcon className="h-6 w-6 text-purple-400" />,
    code: `// Using react-beautiful-dnd
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function TaskBoard() {
  const onDragEnd = (result) => {
    // Handle drag end logic
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {/* Task items */}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}`
  },
  {
    title: 'State Management',
    description: 'Manage application state using modern React patterns',
    icon: <CodeBracketIcon className="h-6 w-6 text-blue-400" />,
    code: `// Task state management with Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    status: 'idle'
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    moveTask: (state, action) => {
      // Handle task reordering
    }
  }
});`
  }
];

const steps = [
  {
    title: 'Project Setup',
    description: 'Initialize your Next.js project with TypeScript and required dependencies',
    command: 'npx create-next-app task-dashboard --typescript --tailwind --eslint'
  },
  {
    title: 'Install Dependencies',
    description: 'Add necessary packages for the project',
    command: 'npm install @reduxjs/toolkit react-beautiful-dnd @heroicons/react framer-motion'
  }
];

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function TaskDashboardPage() {
  return (
    <ProjectLayout
      title="Task Management Dashboard"
      description="Build a Trello-like task management app with drag and drop functionality"
      icon={<ClipboardDocumentListIcon className="h-6 w-6 text-purple-400" />}
      difficulty="Intermediate"
      estimatedTime="2-3 weeks"
      topics={['React', 'DnD', 'State Management', 'REST API']}
    >
      <div className="space-y-12">
        {/* Getting Started */}
        <motion.div variants={cardVariants} className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Getting Started</h2>
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="p-4 rounded-lg bg-[#1a1f2c] border border-gray-800"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 font-medium">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-white">{step.title}</h3>
                    <p className="mt-1 text-sm text-gray-400">{step.description}</p>
                    <div className="mt-3 flex items-center gap-2 p-2 rounded bg-[#161922]">
                      <CommandLineIcon className="h-4 w-4 text-gray-400" />
                      <code className="text-sm text-gray-300">{step.command}</code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div variants={cardVariants} className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Key Features</h2>
          <div className="grid gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-[#1a1f2c] border border-gray-800"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-[#161922]">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-gray-400">
                      {feature.description}
                    </p>
                    <pre className="mt-4 p-4 rounded-lg bg-[#161922] overflow-x-auto">
                      <code className="text-sm text-gray-300">
                        {feature.code}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div variants={cardVariants} className="p-6 rounded-xl bg-[#1a1f2c] border border-gray-800">
          <h2 className="text-xl font-semibold text-white mb-4">
            Additional Resources
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://react-beautiful-dnd.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                React Beautiful DnD Documentation
              </a>
            </li>
            <li>
              <a
                href="https://redux-toolkit.js.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Redux Toolkit Documentation
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </ProjectLayout>
  );
}

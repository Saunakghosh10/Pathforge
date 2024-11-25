'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCheck, FiLock } from 'react-icons/fi';

interface PathStep {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  isLocked: boolean;
}

export default function PathTracker() {
  const [steps, setSteps] = useState<PathStep[]>([
    {
      id: 1,
      title: "HTML & CSS Fundamentals",
      description: "Master the basics of web structure and styling",
      isCompleted: true,
      isLocked: false
    },
    {
      id: 2,
      title: "JavaScript Essentials",
      description: "Learn core JavaScript concepts and DOM manipulation",
      isCompleted: false,
      isLocked: false
    },
    {
      id: 3,
      title: "React Basics",
      description: "Understanding components, props, and state",
      isCompleted: false,
      isLocked: true
    },
    {
      id: 4,
      title: "Advanced React",
      description: "Hooks, context, and advanced patterns",
      isCompleted: false,
      isLocked: true
    }
  ]);

  const toggleComplete = (id: number) => {
    setSteps(steps.map(step => {
      if (step.id === id && !step.isLocked) {
        return { ...step, isCompleted: !step.isCompleted };
      }
      return step;
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-4 rounded-xl border ${
              step.isCompleted
                ? 'bg-primary text-secondary border-primary'
                : step.isLocked
                ? 'bg-gray-light border-gray-medium opacity-50'
                : 'bg-secondary border-gray-medium'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold">{step.title}</h3>
                <p className={step.isCompleted ? 'text-secondary/80' : 'text-accent'}>
                  {step.description}
                </p>
              </div>
              <button
                onClick={() => toggleComplete(step.id)}
                disabled={step.isLocked}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step.isLocked
                    ? 'bg-gray-medium'
                    : step.isCompleted
                    ? 'bg-secondary text-primary'
                    : 'bg-primary text-secondary'
                }`}
              >
                {step.isLocked ? (
                  <FiLock className="w-4 h-4" />
                ) : step.isCompleted ? (
                  <FiCheck className="w-4 h-4" />
                ) : (
                  <span className="w-4 h-4 rounded-full border-2 border-current" />
                )}
              </button>
            </div>
            {index < steps.length - 1 && (
              <div className="w-px h-4 bg-gray-medium mx-auto mt-2" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

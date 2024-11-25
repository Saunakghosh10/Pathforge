'use client';

import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiGlobe, FiMessageSquare, FiUsers, FiZap } from 'react-icons/fi';

const features = [
  {
    icon: <FiCode className="w-8 h-8" />,
    title: "Interactive Code Playground",
    description: "Practice coding in real-time with our built-in IDE and instant feedback system.",
    progress: 75
  },
  {
    icon: <FiUsers className="w-8 h-8" />,
    title: "Community Collaboration",
    description: "Connect with fellow developers, share progress, and work on projects together.",
    progress: 60
  },
  {
    icon: <FiCpu className="w-8 h-8" />,
    title: "AI Learning Assistant",
    description: "Get personalized learning recommendations and instant help with coding challenges.",
    progress: 45
  },
  {
    icon: <FiMessageSquare className="w-8 h-8" />,
    title: "Mentorship Program",
    description: "Connect with experienced developers for guidance and code reviews.",
    progress: 30
  },
  {
    icon: <FiGlobe className="w-8 h-8" />,
    title: "Global Certification",
    description: "Earn industry-recognized certificates upon completing learning paths.",
    progress: 25
  },
  {
    icon: <FiZap className="w-8 h-8" />,
    title: "Skills Assessment",
    description: "Advanced testing system to evaluate and validate your programming skills.",
    progress: 55
  }
];

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-secondary py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Coming Soon to PathForge</h1>
          <p className="text-accent max-w-2xl mx-auto">
            We're working hard to bring you these exciting features. Stay tuned for updates!
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-gray-light p-6 rounded-xl hover:shadow-lg transition-shadow relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-primary/5 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-accent mb-4">{feature.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-accent">Development Progress</span>
                    <span className="font-medium">{feature.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-medium rounded-full h-2">
                    <motion.div
                      className="bg-primary h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${feature.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

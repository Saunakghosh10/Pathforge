'use client';

import { motion } from 'framer-motion';
import { UserCircleIcon, CommandLineIcon, CodeBracketIcon, PaintBrushIcon } from '@heroicons/react/24/outline';
import ProjectLayout from '@/app/components/roadmaps/projects/ProjectLayout';

const features = [
  {
    title: 'Hero Section',
    description: 'Create an eye-catching hero section with animations',
    icon: <PaintBrushIcon className="h-6 w-6 text-pink-400" />,
    code: `// Hero section with Framer Motion
function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex items-center"
    >
      <div className="text-center">
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="text-5xl font-bold"
        >
          Hello, I'm [Your Name]
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Frontend Developer & UI Designer
        </motion.p>
      </div>
    </motion.div>
  );
}`
  },
  {
    title: 'Project Showcase',
    description: 'Display your projects in an interactive grid',
    icon: <CodeBracketIcon className="h-6 w-6 text-purple-400" />,
    code: `interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <motion.div
          key={project.title}
          whileHover={{ y: -5 }}
          className="rounded-lg overflow-hidden"
        >
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 bg-white">
            <h3 className="font-bold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}`
  }
];

const steps = [
  {
    title: 'Project Setup',
    description: 'Create a new Next.js project with TypeScript and Tailwind CSS',
    command: 'npx create-next-app portfolio --typescript --tailwind --eslint'
  },
  {
    title: 'Install Dependencies',
    description: 'Add necessary packages for animations and UI components',
    command: 'npm install framer-motion @heroicons/react @headlessui/react'
  }
];

const sections = [
  {
    title: 'About',
    content: 'Introduce yourself and your background'
  },
  {
    title: 'Skills',
    content: 'Showcase your technical skills and expertise'
  },
  {
    title: 'Projects',
    content: 'Display your best work and achievements'
  },
  {
    title: 'Contact',
    content: 'Provide ways for visitors to reach you'
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

export default function PortfolioPage() {
  return (
    <ProjectLayout
      title="Portfolio Website"
      description="Create a stunning portfolio website to showcase your work"
      icon={<UserCircleIcon className="h-6 w-6 text-pink-400" />}
      difficulty="Beginner"
      estimatedTime="1-2 weeks"
      topics={['HTML', 'CSS', 'JavaScript', 'Responsive Design']}
    >
      <div className="space-y-12">
        {/* Project Structure */}
        <motion.div variants={cardVariants} className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Project Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.map((section) => (
              <div
                key={section.title}
                className="p-4 rounded-lg bg-[#1a1f2c] border border-gray-800"
              >
                <h3 className="text-lg font-medium text-white mb-2">
                  {section.title} Section
                </h3>
                <p className="text-gray-400 text-sm">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

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
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500/20 text-pink-300 font-medium">
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

        {/* Design Tips */}
        <motion.div variants={cardVariants} className="p-6 rounded-xl bg-[#1a1f2c] border border-gray-800">
          <h2 className="text-xl font-semibold text-white mb-4">
            Design Tips
          </h2>
          <ul className="space-y-3 list-disc list-inside text-gray-400">
            <li>Use a consistent color scheme throughout your portfolio</li>
            <li>Implement smooth scroll animations for better user experience</li>
            <li>Ensure your portfolio is responsive across all devices</li>
            <li>Include a clear call-to-action for potential employers</li>
            <li>Optimize images and assets for fast loading times</li>
          </ul>
        </motion.div>
      </div>
    </ProjectLayout>
  );
}

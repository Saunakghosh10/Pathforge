'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCode, FiBox, FiLayout, FiGitBranch, FiPackage, FiDatabase, FiServer, FiGlobe } from 'react-icons/fi';
import { SiJavascript, SiReact, SiTypescript, SiWebpack, SiVite } from 'react-icons/si';

interface TopicLink {
  title: string;
  url: string;
}

interface RoadmapTopic {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  level: 'beginner' | 'intermediate' | 'advanced';
  isCompleted: boolean;
  links: TopicLink[];
  subtopics?: string[];
  estimatedTime?: string;
  prerequisites?: string[];
}

export default function FrontendRoadmap() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [topics, setTopics] = useState<RoadmapTopic[]>([
    {
      id: 'html',
      title: 'HTML',
      description: 'The foundation of web development',
      icon: <FiCode className="w-6 h-6" />,
      level: 'beginner',
      isCompleted: false,
      estimatedTime: '2-3 weeks',
      links: [
        { title: 'MDN HTML Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML' },
        { title: 'W3Schools HTML', url: 'https://www.w3schools.com/html/' },
        { title: 'HTML Best Practices', url: 'https://www.w3schools.com/html/html5_syntax.asp' }
      ],
      subtopics: ['Semantic HTML', 'Forms & Validation', 'Best Practices', 'Accessibility', 'SEO Basics'],
      prerequisites: []
    },
    {
      id: 'css',
      title: 'CSS',
      description: 'Style and layout your web pages',
      icon: <FiLayout className="w-6 h-6" />,
      level: 'beginner',
      isCompleted: false,
      estimatedTime: '4-6 weeks',
      links: [
        { title: 'MDN CSS Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS' },
        { title: 'CSS Tricks', url: 'https://css-tricks.com' },
        { title: 'Modern CSS', url: 'https://moderncss.dev/' }
      ],
      subtopics: ['Flexbox', 'Grid', 'Animations', 'Responsive Design', 'CSS Variables', 'Sass/SCSS'],
      prerequisites: ['html']
    },
    {
      id: 'javascript',
      title: 'JavaScript',
      description: 'Add interactivity to your websites',
      icon: <SiJavascript className="w-6 h-6" />,
      level: 'beginner',
      isCompleted: false,
      estimatedTime: '8-10 weeks',
      links: [
        { title: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { title: 'JavaScript.info', url: 'https://javascript.info' },
        { title: 'Eloquent JavaScript', url: 'https://eloquentjavascript.net/' }
      ],
      subtopics: ['DOM Manipulation', 'ES6+', 'Async Programming', 'APIs', 'Error Handling', 'Modern JS Features'],
      prerequisites: ['html', 'css']
    },
    {
      id: 'git',
      title: 'Git & GitHub',
      description: 'Version control and collaboration',
      icon: <FiGitBranch className="w-6 h-6" />,
      level: 'beginner',
      isCompleted: false,
      estimatedTime: '1-2 weeks',
      links: [
        { title: 'Git Documentation', url: 'https://git-scm.com/doc' },
        { title: 'GitHub Guides', url: 'https://guides.github.com' },
        { title: 'Git Branching', url: 'https://learngitbranching.js.org/' }
      ],
      subtopics: ['Basic Commands', 'Branching', 'Pull Requests', 'Collaboration', 'Git Flow'],
      prerequisites: []
    },
    {
      id: 'react',
      title: 'React',
      description: 'Build modern user interfaces',
      icon: <SiReact className="w-6 h-6" />,
      level: 'intermediate',
      isCompleted: false,
      estimatedTime: '8-10 weeks',
      links: [
        { title: 'React Documentation', url: 'https://react.dev' },
        { title: 'React Patterns', url: 'https://reactpatterns.com' },
        { title: 'React TypeScript Cheatsheet', url: 'https://react-typescript-cheatsheet.netlify.app/' }
      ],
      subtopics: ['Components', 'Hooks', 'State Management', 'Performance', 'Context API', 'Custom Hooks'],
      prerequisites: ['javascript']
    },
    {
      id: 'typescript',
      title: 'TypeScript',
      description: 'Add static typing to JavaScript',
      icon: <SiTypescript className="w-6 h-6" />,
      level: 'intermediate',
      isCompleted: false,
      estimatedTime: '4-6 weeks',
      links: [
        { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/' },
        { title: 'TypeScript Deep Dive', url: 'https://basarat.gitbook.io/typescript/' },
        { title: 'Type Challenges', url: 'https://github.com/type-challenges/type-challenges' }
      ],
      subtopics: ['Types', 'Interfaces', 'Generics', 'Decorators', 'Advanced Types', 'Type Guards'],
      prerequisites: ['javascript']
    },
    {
      id: 'nextjs',
      title: 'Next.js',
      description: 'React framework for production',
      icon: <SiReact className="w-6 h-6" />,
      level: 'intermediate',
      isCompleted: false,
      estimatedTime: '4-6 weeks',
      links: [
        { title: 'Next.js Documentation', url: 'https://nextjs.org/docs' },
        { title: 'Next.js Examples', url: 'https://github.com/vercel/next.js/tree/canary/examples' },
        { title: 'Next.js Blog', url: 'https://nextjs.org/blog' }
      ],
      subtopics: ['App Router', 'Server Components', 'API Routes', 'Deployment', 'SEO', 'Performance'],
      prerequisites: ['react']
    },
    {
      id: 'testing',
      title: 'Testing',
      description: 'Test your frontend applications',
      icon: <FiBox className="w-6 h-6" />,
      level: 'advanced',
      isCompleted: false,
      estimatedTime: '3-4 weeks',
      links: [
        { title: 'Jest Documentation', url: 'https://jestjs.io' },
        { title: 'Testing Library', url: 'https://testing-library.com' },
        { title: 'Cypress', url: 'https://www.cypress.io/' }
      ],
      subtopics: ['Unit Testing', 'Integration Testing', 'E2E Testing', 'TDD', 'Mocking', 'CI Integration'],
      prerequisites: ['react', 'typescript']
    }
  ]);

  const toggleComplete = (id: string) => {
    setTopics(topics.map(topic => {
      if (topic.id === id) {
        return { ...topic, isCompleted: !topic.isCompleted };
      }
      return topic;
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const getLevelColor = (level: RoadmapTopic['level']) => {
    switch (level) {
      case 'beginner':
        return 'border-green-500';
      case 'intermediate':
        return 'border-blue-500';
      case 'advanced':
        return 'border-purple-500';
      default:
        return 'border-gray-medium';
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-12"
      >
        <div className="text-center">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            Frontend Development Path
          </motion.h1>
          <motion.p variants={itemVariants} className="text-accent max-w-2xl mx-auto">
            Master modern frontend development with our comprehensive learning path
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="flex justify-center space-x-4 flex-wrap gap-y-2">
          <span className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
            <span className="text-sm">Beginner</span>
          </span>
          <span className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2" />
            <span className="text-sm">Intermediate</span>
          </span>
          <span className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-purple-500 mr-2" />
            <span className="text-sm">Advanced</span>
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <motion.div
              key={topic.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 rounded-xl border-2 transition-all ${
                getLevelColor(topic.level)
              } ${
                topic.isCompleted
                  ? 'bg-primary text-secondary'
                  : 'bg-secondary hover:shadow-lg'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    topic.isCompleted ? 'bg-secondary text-primary' : 'bg-gray-light'
                  }`}>
                    {topic.icon}
                  </div>
                  <h3 className="text-xl font-bold">{topic.title}</h3>
                </div>
                <button
                  onClick={() => toggleComplete(topic.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    topic.isCompleted
                      ? 'bg-secondary text-primary border-secondary'
                      : 'border-current'
                  }`}
                >
                  {topic.isCompleted && <FiCode className="w-4 h-4" />}
                </button>
              </div>

              <p className={topic.isCompleted ? 'text-secondary/80' : 'text-accent'}>
                {topic.description}
              </p>

              <div className="mt-4 space-y-2">
                <h4 className={`font-medium ${topic.isCompleted ? 'text-secondary' : 'text-primary'}`}>
                  Key Topics:
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {topic.subtopics?.map((subtopic) => (
                    <li
                      key={subtopic}
                      className={`text-sm ${topic.isCompleted ? 'text-secondary/80' : 'text-accent'}`}
                    >
                      • {subtopic}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-current/10">
                <h4 className={`font-medium mb-2 ${topic.isCompleted ? 'text-secondary' : 'text-primary'}`}>
                  Resources:
                </h4>
                <div className="space-y-2">
                  {topic.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-sm ${
                        topic.isCompleted
                          ? 'text-secondary/80 hover:text-secondary'
                          : 'text-accent hover:text-primary'
                      }`}
                    >
                      → {link.title}
                    </a>
                  ))}
                </div>
              </div>

              {topic.estimatedTime && (
                <div className="mt-4 pt-4 border-t border-current/10">
                  <h4 className={`font-medium mb-2 ${topic.isCompleted ? 'text-secondary' : 'text-primary'}`}>
                    Estimated Time:
                  </h4>
                  <p className={`text-sm ${topic.isCompleted ? 'text-secondary/80' : 'text-accent'}`}>
                    {topic.estimatedTime}
                  </p>
                </div>
              )}

              {topic.prerequisites?.length > 0 && (
                <div className="mt-4 pt-4 border-t border-current/10">
                  <h4 className={`font-medium mb-2 ${topic.isCompleted ? 'text-secondary' : 'text-primary'}`}>
                    Prerequisites:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {topic.prerequisites.map((prerequisite) => (
                      <li
                        key={prerequisite}
                        className={`text-sm ${topic.isCompleted ? 'text-secondary/80' : 'text-accent'}`}
                      >
                        • {prerequisite}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

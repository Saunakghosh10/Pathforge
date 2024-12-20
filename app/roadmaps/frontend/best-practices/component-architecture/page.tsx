'use client';

import { motion } from 'framer-motion';
import { CubeTransparentIcon, CodeBracketIcon, ArrowsPointingOutIcon, ArrowsPointingInIcon } from '@heroicons/react/24/outline';
import BestPracticeLayout from '@/app/components/roadmaps/best-practices/BestPracticeLayout';

const practices = [
  {
    title: 'Component Composition',
    description: 'Build complex UIs by composing smaller, reusable components',
    icon: <ArrowsPointingInIcon className="h-6 w-6 text-blue-400" />,
    code: `// ✅ Good: Composable components
const Button = ({ children, ...props }) => (
  <button className="btn" {...props}>{children}</button>
);

const IconButton = ({ icon, ...props }) => (
  <Button {...props}>
    {icon}
    {props.children}
  </Button>
);`
  },
  {
    title: 'Props Interface Design',
    description: 'Design clear and flexible component interfaces',
    icon: <CodeBracketIcon className="h-6 w-6 text-purple-400" />,
    code: `// ✅ Good: Well-defined props interface
interface CardProps {
  title: string;
  description?: string;
  image?: string;
  onClick?: () => void;
  children: React.ReactNode;
}`
  },
  {
    title: 'State Management',
    description: 'Manage component state effectively',
    icon: <ArrowsPointingOutIcon className="h-6 w-6 text-green-400" />,
    code: `// ✅ Good: Controlled state management
const [isOpen, setIsOpen] = useState(false);
const toggleMenu = useCallback(() => {
  setIsOpen(prev => !prev);
}, []);`
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

export default function ComponentArchitecturePage() {
  return (
    <BestPracticeLayout
      title="Component Architecture"
      description="Learn how to structure your components for maximum reusability and maintainability"
      icon={<CubeTransparentIcon className="h-6 w-6 text-blue-400" />}
      difficulty="Intermediate"
      topics={['Component Design', 'Props', 'State Management', 'Custom Hooks']}
    >
      <div className="space-y-12">
        {practices.map((practice, index) => (
          <motion.div
            key={practice.title}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl" />
            <div className="relative p-6 rounded-xl bg-[#1a1f2c]/80 backdrop-blur-sm border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-[#161922]">
                  {practice.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {practice.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {practice.description}
                  </p>
                  <pre className="p-4 rounded-lg bg-[#161922] overflow-x-auto">
                    <code className="text-sm text-gray-300">
                      {practice.code}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          variants={cardVariants}
          className="mt-8 p-6 rounded-xl bg-[#1a1f2c] border border-gray-800"
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            Additional Resources
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://react.dev/learn/thinking-in-react"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Thinking in React - Official React Documentation
              </a>
            </li>
            <li>
              <a
                href="https://kentcdodds.com/blog/compound-components-with-react-hooks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Compound Components with React Hooks
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </BestPracticeLayout>
  );
}

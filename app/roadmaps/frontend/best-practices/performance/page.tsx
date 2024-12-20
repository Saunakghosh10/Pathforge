'use client';

import { motion } from 'framer-motion';
import { BoltIcon, ClockIcon, ArrowPathIcon, ServerIcon } from '@heroicons/react/24/outline';
import BestPracticeLayout from '@/app/components/roadmaps/best-practices/BestPracticeLayout';

const optimizations = [
  {
    title: 'Code Splitting',
    description: 'Split your code into smaller chunks to improve initial load time',
    icon: <ArrowPathIcon className="h-6 w-6 text-yellow-400" />,
    code: `// ✅ Good: Dynamic imports for code splitting
const DashboardChart = dynamic(() => import('./DashboardChart'), {
  loading: () => <ChartSkeleton />,
  ssr: false
});`
  },
  {
    title: 'Memoization',
    description: 'Prevent unnecessary re-renders with React.memo and useMemo',
    icon: <ClockIcon className="h-6 w-6 text-green-400" />,
    code: `// ✅ Good: Memoize expensive calculations
const memoizedValue = useMemo(() => {
  return expensiveCalculation(prop1, prop2);
}, [prop1, prop2]);

// ✅ Good: Memoize components
const MemoizedComponent = memo(({ data }) => {
  return <ExpensiveRender data={data} />;
});`
  },
  {
    title: 'Image Optimization',
    description: 'Optimize images for better loading performance',
    icon: <ServerIcon className="h-6 w-6 text-blue-400" />,
    code: `// ✅ Good: Use Next.js Image component
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  placeholder="blur"
  priority
/>`
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function PerformanceOptimizationPage() {
  return (
    <BestPracticeLayout
      title="Performance Optimization"
      description="Learn techniques to improve your app's performance and user experience"
      icon={<BoltIcon className="h-6 w-6 text-yellow-400" />}
      difficulty="Advanced"
      topics={['Code Splitting', 'Lazy Loading', 'Caching', 'Bundle Size']}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {optimizations.map((opt, index) => (
          <motion.div
            key={opt.title}
            variants={cardVariants}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-green-500/5 rounded-xl" />
            <div className="relative p-6 rounded-xl bg-[#1a1f2c]/80 backdrop-blur-sm border border-gray-800">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-[#161922]">
                  {opt.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {opt.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {opt.description}
                  </p>
                  <pre className="p-4 rounded-lg bg-[#161922] overflow-x-auto">
                    <code className="text-sm text-gray-300">
                      {opt.code}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          variants={cardVariants}
          className="p-6 rounded-xl bg-[#1a1f2c] border border-gray-800"
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            Performance Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'First Contentful Paint', target: '< 1.8s' },
              { label: 'Time to Interactive', target: '< 3.9s' },
              { label: 'Cumulative Layout Shift', target: '< 0.1' }
            ].map((metric) => (
              <div
                key={metric.label}
                className="p-4 rounded-lg bg-[#161922] border border-gray-800"
              >
                <div className="text-sm text-gray-400">{metric.label}</div>
                <div className="mt-1 text-xl font-semibold text-green-400">
                  {metric.target}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </BestPracticeLayout>
  );
}

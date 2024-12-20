'use client';

import { motion } from 'framer-motion';
import { DevicePhoneMobileIcon, ComputerDesktopIcon, DeviceTabletIcon, ViewColumnsIcon } from '@heroicons/react/24/outline';
import BestPracticeLayout from '@/app/components/roadmaps/best-practices/BestPracticeLayout';

const practices = [
  {
    title: 'Mobile-First Approach',
    description: 'Design for mobile devices first, then progressively enhance for larger screens',
    icon: <DevicePhoneMobileIcon className="h-6 w-6 text-blue-400" />,
    code: `/* ✅ Good: Mobile-first media queries */
.container {
  width: 100%;
  padding: 1rem;  /* Mobile default */
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;  /* Tablet and up */
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 3rem;  /* Desktop */
  }
}`
  },
  {
    title: 'Flexbox Layout',
    description: 'Use flexbox for flexible and responsive layouts',
    icon: <ViewColumnsIcon className="h-6 w-6 text-purple-400" />,
    code: `/* ✅ Good: Responsive flex layout */
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px;  /* Grow, shrink, basis */
  min-width: 0;     /* Prevent overflow */
}`
  },
  {
    title: 'Responsive Images',
    description: 'Optimize images for different screen sizes',
    icon: <DeviceTabletIcon className="h-6 w-6 text-green-400" />,
    code: `<!-- ✅ Good: Responsive images -->
<img
  srcset="
    hero-mobile.jpg 300w,
    hero-tablet.jpg 768w,
    hero-desktop.jpg 1280w
  "
  sizes="
    (max-width: 300px) 300px,
    (max-width: 768px) 768px,
    1280px
  "
  src="hero-desktop.jpg"
  alt="Hero image"
/>`
  }
];

const devicePreview = {
  desktop: { icon: ComputerDesktopIcon, width: 'w-full' },
  tablet: { icon: DeviceTabletIcon, width: 'w-2/3' },
  mobile: { icon: DevicePhoneMobileIcon, width: 'w-1/3' }
};

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

export default function ResponsiveDesignPage() {
  return (
    <BestPracticeLayout
      title="Responsive Design"
      description="Create layouts that work beautifully across all devices"
      icon={<DevicePhoneMobileIcon className="h-6 w-6 text-blue-400" />}
      difficulty="Beginner"
      topics={['Media Queries', 'Flexbox', 'Grid', 'Mobile First']}
    >
      <div className="space-y-12">
        {/* Device Preview */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="p-6 rounded-xl bg-[#1a1f2c] border border-gray-800"
        >
          <h3 className="text-xl font-semibold text-white mb-6">
            Responsive Breakpoints
          </h3>
          <div className="flex items-end justify-center gap-4">
            {Object.entries(devicePreview).map(([device, { icon: Icon, width }]) => (
              <div
                key={device}
                className="flex flex-col items-center gap-2"
              >
                <div className={`${width} h-32 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center`}>
                  <Icon className="h-8 w-8 text-gray-400" />
                </div>
                <span className="text-sm text-gray-400 capitalize">{device}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Best Practices */}
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

        {/* Resources */}
        <motion.div
          variants={cardVariants}
          className="p-6 rounded-xl bg-[#1a1f2c] border border-gray-800"
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            Useful Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: 'Chrome DevTools Device Mode',
                description: 'Test responsive layouts directly in your browser'
              },
              {
                name: 'Responsively App',
                description: 'View and debug your app across multiple devices simultaneously'
              }
            ].map((tool) => (
              <div
                key={tool.name}
                className="p-4 rounded-lg bg-[#161922] border border-gray-800"
              >
                <div className="font-medium text-white">{tool.name}</div>
                <div className="mt-1 text-sm text-gray-400">{tool.description}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </BestPracticeLayout>
  );
}

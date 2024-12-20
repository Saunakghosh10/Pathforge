'use client';

import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon, CommandLineIcon, CodeBracketIcon, SignalIcon } from '@heroicons/react/24/outline';
import ProjectLayout from '@/app/components/roadmaps/projects/ProjectLayout';

const features = [
  {
    title: 'Real-time Communication',
    description: 'Implement WebSocket connections for instant messaging',
    icon: <SignalIcon className="h-6 w-6 text-green-400" />,
    code: `// Using Socket.IO for real-time communication
import { io } from 'socket.io-client';

const socket = io('your-server-url');

// Listen for incoming messages
socket.on('message', (message) => {
  console.log('New message:', message);
});

// Send a message
function sendMessage(message) {
  socket.emit('message', {
    text: message,
    timestamp: new Date(),
    userId: currentUser.id
  });
}`
  },
  {
    title: 'Message Components',
    description: 'Create reusable message components with proper styling',
    icon: <CodeBracketIcon className="h-6 w-6 text-blue-400" />,
    code: `interface MessageProps {
  text: string;
  sender: User;
  timestamp: Date;
  isOwn: boolean;
}

function Message({ text, sender, timestamp, isOwn }: MessageProps) {
  return (
    <div className={\`flex \${isOwn ? 'justify-end' : 'justify-start'}\`}>
      <div className={\`
        max-w-[70%] rounded-lg p-3
        \${isOwn ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-900'}
      \`}>
        <p>{text}</p>
        <div className="text-xs opacity-70">
          {format(timestamp, 'HH:mm')}
        </div>
      </div>
    </div>
  );
}`
  }
];

const steps = [
  {
    title: 'Project Setup',
    description: 'Create a new Next.js project with TypeScript and required configurations',
    command: 'npx create-next-app chat-app --typescript --tailwind --eslint'
  },
  {
    title: 'Install Dependencies',
    description: 'Add necessary packages for real-time communication',
    command: 'npm install socket.io-client @heroicons/react framer-motion date-fns'
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

export default function ChatAppPage() {
  return (
    <ProjectLayout
      title="Real-time Chat Application"
      description="Build a modern chat application with real-time messaging capabilities"
      icon={<ChatBubbleLeftRightIcon className="h-6 w-6 text-green-400" />}
      difficulty="Advanced"
      estimatedTime="3-4 weeks"
      topics={['WebSocket', 'Authentication', 'UI Design', 'State Management']}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {/* Project Preview */}
        <motion.div variants={cardVariants} className="relative h-64 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20" />
          <div className="absolute inset-0 backdrop-blur-sm p-6">
            <div className="h-full rounded-lg border border-gray-800 bg-[#1a1f2c]/80 p-4">
              <div className="flex h-full flex-col">
                <div className="border-b border-gray-800 pb-4">
                  <h3 className="text-lg font-medium text-white">Chat Preview</h3>
                </div>
                <div className="flex-1 py-4 space-y-4">
                  <div className="flex justify-start">
                    <div className="max-w-[70%] rounded-lg bg-[#161922] p-3">
                      <p className="text-gray-300">Hey! How's it going?</p>
                      <div className="text-xs text-gray-500">09:41</div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[70%] rounded-lg bg-blue-500 p-3">
                      <p className="text-white">Great! Working on the chat app 😊</p>
                      <div className="text-xs text-blue-200">09:42</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 text-green-300 font-medium">
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

        {/* Learning Resources */}
        <motion.div variants={cardVariants} className="p-6 rounded-xl bg-[#1a1f2c] border border-gray-800">
          <h2 className="text-xl font-semibold text-white mb-4">
            Learning Resources
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://socket.io/docs/v4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Socket.IO Documentation
              </a>
            </li>
            <li>
              <a
                href="https://www.framer.com/motion/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Framer Motion Animation Library
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </ProjectLayout>
  );
}

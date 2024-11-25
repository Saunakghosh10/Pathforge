'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FiArrowRight, FiAward, FiBarChart2, FiCheck, FiCheckCircle, FiCode, FiGitBranch, FiGrid, FiLayers, FiMap, FiMenu, FiMinus, FiShield, FiTerminal, FiX } from 'react-icons/fi';
import { SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import PathTracker from './PathTracker';
import SkillAssessment from './SkillAssessment';
import RoadmapVisualization from './RoadmapVisualization';
import Link from 'next/link';
import Footer from './Footer';

const roadmaps = [
  {
    title: 'Full Stack Development',
    description: 'Master both frontend and backend development',
    icon: <FiCode className="w-8 h-8" />,
    path: '/roadmaps/fullstack'
  },
  {
    title: 'Frontend Development',
    description: 'Master modern web development with HTML, CSS, JavaScript, and popular frameworks.',
    icon: <FiLayers className="w-8 h-8" />,
    path: '/roadmaps/frontend'
  },
  {
    title: 'Backend Development',
    description: 'Build scalable server-side applications and APIs.',
    icon: <FiLayers className="w-8 h-8" />,
    path: '/roadmaps/backend'
  },
  {
    title: 'DevOps & Cloud',
    description: 'Learn deployment, automation, and cloud infrastructure.',
    icon: <FiShield className="w-8 h-8" />,
    path: '/roadmaps/devops'
  },
  {
    title: 'Cloud Computing',
    description: 'Master cloud platforms and infrastructure.',
    icon: <FiShield className="w-8 h-8" />,
    path: '/roadmaps/cloud'
  },
  {
    title: 'Mobile Development',
    description: 'Create native and cross-platform mobile applications.',
    icon: <FiGitBranch className="w-8 h-8" />,
    path: '/roadmaps/mobile'
  },
  {
    title: 'Game Development',
    description: 'Build immersive games with modern engines and tools.',
    icon: <FiGitBranch className="w-8 h-8" />,
    path: '/roadmaps/gamedev'
  },
  {
    title: 'Cybersecurity',
    description: 'Master security principles and protect digital assets.',
    icon: <FiShield className="w-8 h-8" />,
    path: '/roadmaps/cybersecurity'
  },
  {
    title: 'Data Science',
    description: 'Master data analysis, machine learning, and AI.',
    icon: <FiCode className="w-8 h-8" />,
    path: '/roadmaps/datascience'
  }
];

export default function HomeContent() {
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  return (
    <div className="min-h-screen bg-secondary text-primary">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-0 left-0 right-0 bg-black text-white py-1.5 z-50 border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium tracking-wide">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
            >
              🚧
            </motion.span>
            {" "}PathForge is still under development. Some features may be incomplete or change.
          </p>
        </div>
      </motion.div>
      {/* Navigation - Adjusted top padding to account for development notice */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-8 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-md border-b border-gray-medium"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <motion.a 
                href="#"
                className="flex items-center space-x-3 text-xl font-bold group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <motion.div
                    className="w-8 h-8 relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="absolute inset-0 border-2 border-primary rounded-lg transform rotate-45"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [45, 45, 45],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 border-2 border-accent rounded-lg transform -rotate-45"
                      animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [-45, -45, -45],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </div>
                <span>PathForge</span>
              </motion.a>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="ml-2 inline-flex items-center"
              >
                <span className="text-xs font-medium px-1.5 py-0.5 rounded border border-gray-700/50 bg-white-900/10 text-black-600">
                  BETA
                </span>
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <motion.a 
                href="#roadmaps"
                className="text-primary/80 hover:text-primary transition-colors flex items-center space-x-2"
                whileHover={{ y: -2 }}
              >
                <FiMap className="w-5 h-5" />
                <span>Roadmaps</span>
              </motion.a>
              <motion.a
                href="https://github.com/Saunakghosh10/Pathforge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary/80 hover:text-primary transition-colors flex items-center space-x-2"
                whileHover={{ y: -2 }}
              >
                <FiGitBranch className="w-5 h-5" />
                <span>Star</span>
              </motion.a>
              <motion.a 
                href="#coming-soon"
                className="inline-flex items-center space-x-2 text-primary/80 hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                <FiTerminal className="w-5 h-5" />
                <span>Coming Soon</span>
                <div className="px-1.5 py-0.5 bg-primary/10 rounded-full text-[10px] font-medium">NEW</div>
              </motion.a>
              <Link 
                href="/analytics" 
                className="inline-flex items-center space-x-2 px-4 py-2 bg-primary text-secondary rounded-lg hover:bg-accent transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                <FiBarChart2 className="w-5 h-5" />
                <span className="font-medium">Analytics</span>
              </Link>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </motion.button>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full right-0 w-64 mt-2 py-2 bg-secondary rounded-lg shadow-lg border border-gray-medium overflow-hidden"
              >
                <div className="space-y-1">
                  <a
                    href="#roadmaps"
                    className="flex items-center space-x-2 px-4 py-2 text-primary hover:bg-gray-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiMap className="w-5 h-5" />
                    <span>Roadmaps</span>
                  </a>
                  <a
                    href="https://github.com/yourusername/pathforge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 text-primary hover:bg-gray-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiGitBranch className="w-5 h-5" />
                    <span>Star on GitHub</span>
                  </a>
                  <a
                    href="#coming-soon"
                    className="flex items-center space-x-2 px-4 py-2 text-primary hover:bg-gray-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiTerminal className="w-5 h-5" />
                    <span>Coming Soon</span>
                    <div className="px-1.5 py-0.5 bg-primary/10 rounded-full text-[10px] font-medium">NEW</div>
                  </a>
                  <Link
                    href="/analytics"
                    className="flex items-center space-x-2 mx-4 px-4 py-2 bg-primary text-secondary rounded-lg hover:bg-accent transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiBarChart2 className="w-5 h-5" />
                    <span className="font-medium">Analytics</span>
                  </Link>
                </div>
              </motion.div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2"
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Add padding-top to account for fixed navbar */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animate-gradient leading-[1.2]">
              PathForge
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-accent max-w-2xl mx-auto">
              Forge Your Path to Programming Mastery
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="#roadmaps"
                className="px-8 py-4 bg-primary text-secondary rounded-full text-lg font-medium hover:bg-accent transition-colors duration-300"
              >
                Explore Paths
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>
      </motion.section>

      {/* Roadmaps Grid */}
      <motion.section
        ref={featuredRef}
        id="roadmaps"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-16"
          >
            Development Paths
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmaps.map((roadmap, index) => {
              const Component = Link;
              const href = roadmap.path;
              const componentProps = { href };
              
              return (
                <Component key={roadmap.title} {...componentProps}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-secondary p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-medium cursor-pointer"
                  >
                    <div className="mb-4 text-accent">{roadmap.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{roadmap.title}</h3>
                    <p className="text-accent mb-4">{roadmap.description}</p>
                  </motion.div>
                </Component>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-accent max-w-2xl mx-auto">Follow our proven process to master your development journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Choose Your Path",
                description: "Select from our curated roadmaps tailored to your goals",
                icon: <FiMap className="w-8 h-8" />,
                step: "01"
              },
              {
                title: "Track Progress",
                description: "Monitor your learning journey with interactive checkpoints",
                icon: <FiCheckCircle className="w-8 h-8" />,
                step: "02"
              },
              {
                title: "Master Skills",
                description: "Complete projects and gain real-world experience",
                icon: <FiAward className="w-8 h-8" />,
                step: "03"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="relative p-6 bg-gray-light rounded-xl"
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-secondary rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div className="mb-4 text-accent">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-accent">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            variants={itemVariants} 
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">About PathForge</h2>
            <p className="text-accent max-w-2xl mx-auto">
              Empowering developers through structured learning paths and interactive experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Our Mission</h3>
                <p className="text-accent leading-relaxed">
                  PathForge is dedicated to revolutionizing developer education by providing clear, structured learning paths that guide you from beginner to expert. We believe in learning by doing, supported by a community of passionate developers.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">What Sets Us Apart</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <FiCheckCircle className="w-6 h-6 text-primary mt-1" />
                    <span className="text-accent">Curated learning paths designed by industry experts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FiCheckCircle className="w-6 h-6 text-primary mt-1" />
                    <span className="text-accent">Interactive progress tracking with visual feedback</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FiCheckCircle className="w-6 h-6 text-primary mt-1" />
                    <span className="text-accent">Project-based learning with real-world applications</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="p-6 bg-gray-light rounded-xl"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FiAward className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-semibold mb-2">Expert-Led Content</h4>
                  <p className="text-sm text-accent">Curriculum designed by industry professionals</p>
                </motion.div>
                
                <motion.div
                  className="p-6 bg-gray-light rounded-xl"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FiTerminal className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-semibold mb-2">Hands-On Practice</h4>
                  <p className="text-sm text-accent">Learn through practical coding exercises</p>
                </motion.div>
                
                <motion.div
                  className="p-6 bg-gray-light rounded-xl"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FiMap className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-semibold mb-2">Clear Roadmaps</h4>
                  <p className="text-sm text-accent">Structured paths for different specializations</p>
                </motion.div>
                
                <motion.div
                  className="p-6 bg-gray-light rounded-xl"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FiGrid className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-semibold mb-2">Modern Stack</h4>
                  <p className="text-sm text-accent">Stay updated with latest technologies</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <motion.div 
          className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 -translate-x-32"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-y-1/2 translate-x-1/2"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.section>

      {/* Features Comparison */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose PathForge</h2>
            <p className="text-accent max-w-2xl mx-auto">Compare our features with traditional learning methods</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="p-8 bg-secondary rounded-xl border border-gray-medium">
              <h3 className="text-2xl font-bold mb-6">PathForge Learning</h3>
              <ul className="space-y-4">
                {[
                  "Structured learning paths",
                  "Interactive progress tracking",
                  "Real-world projects",
                  "Community support",
                  "Expert-curated content"
                ].map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <FiCheck className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 bg-secondary rounded-xl border border-gray-medium">
              <h3 className="text-2xl font-bold mb-6">Traditional Learning</h3>
              <ul className="space-y-4">
                {[
                  "Unstructured content",
                  "Manual progress tracking",
                  "Theory-focused learning",
                  "Limited support",
                  "Varying content quality"
                ].map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <FiMinus className="w-5 h-5 text-accent" />
                    <span className="text-accent">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Progress Tracking */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Track Your Progress</h2>
            <p className="text-accent max-w-2xl mx-auto">Monitor your learning journey with our interactive tracking system</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-gray-light p-6 rounded-xl">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Frontend Development</span>
                  <span className="text-accent">85%</span>
                </div>
                <div className="w-full bg-gray-medium rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="bg-gray-light p-6 rounded-xl">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Backend Development</span>
                  <span className="text-accent">70%</span>
                </div>
                <div className="w-full bg-gray-medium rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="bg-gray-light p-6 rounded-xl">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">DevOps</span>
                  <span className="text-accent">60%</span>
                </div>
                <div className="w-full bg-gray-medium rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div className="bg-gray-light p-6 rounded-xl text-center">
                <div className="text-4xl font-bold mb-2">24</div>
                <div className="text-accent">Skills Mastered</div>
              </div>
              <div className="bg-gray-light p-6 rounded-xl text-center">
                <div className="text-4xl font-bold mb-2">12</div>
                <div className="text-accent">Projects Built</div>
              </div>
              <div className="bg-gray-light p-6 rounded-xl text-center">
                <div className="text-4xl font-bold mb-2">156</div>
                <div className="text-accent">Hours Learned</div>
              </div>
              <div className="bg-gray-light p-6 rounded-xl text-center">
                <div className="text-4xl font-bold mb-2">89%</div>
                <div className="text-accent">Completion Rate</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Interactive Features Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Interactive Learning Tools</h2>
            <p className="text-accent max-w-2xl mx-auto">Track your progress, assess your skills, and visualize your learning journey</p>
          </motion.div>

          <div className="space-y-20">
            {/* Path Progress Tracker */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Path Progress</h3>
              <PathTracker />
            </div>

            {/* Skill Assessment */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Test Your Knowledge</h3>
              <SkillAssessment />
            </div>

            {/* Interactive Roadmap */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Your Learning Journey</h3>
              <RoadmapVisualization />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-accent max-w-2xl mx-auto">
              Hear from developers who transformed their careers with PathForge
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Frontend Developer",
                company: "Tech Innovators",
                image: "https://i.pravatar.cc/150?img=1",
                quote: "PathForge has revolutionized my learning journey. The roadmaps are incredibly well-structured and the interactive features keep me engaged."
              },
              {
                name: "James Wilson",
                role: "Full Stack Developer",
                company: "StartUp Labs",
                image: "https://i.pravatar.cc/150?img=2",
                quote: "The project-based learning approach gave me real-world experience that helped me land my dream job."
              },
              {
                name: "Maria Garcia",
                role: "DevOps Engineer",
                company: "Cloud Solutions",
                image: "https://i.pravatar.cc/150?img=3",
                quote: "The DevOps roadmap was exactly what I needed to level up my career. Now I'm leading infrastructure teams."
              }
            ].map((testimonial) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                className="bg-secondary p-6 rounded-xl border border-gray-medium"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-accent">{testimonial.role}</div>
                    <div className="text-sm text-accent">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-accent italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex justify-center mt-8"
      >
        <Link 
          href="/analytics" 
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-black text-white rounded-lg hover:from-black hover:to-gray-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-700"
        >
          <FiBarChart2 className="w-5 h-5" />
          <span className="font-medium">View Learning Analytics</span>
        </Link>
      </motion.div>
      <Footer />
    </div>
  );
}
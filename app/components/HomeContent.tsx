'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FiMap, FiCheckCircle, FiAward, FiCode, FiSmartphone, FiCloud, FiDatabase, FiLayers, FiArrowRight, FiTerminal, FiMinus, FiShield, FiX, FiMenu, FiGrid, FiPieChart, FiCheck, FiMonitor, FiServer, FiUsers, FiZap } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si';
import { AcademicCapIcon, CommandLineIcon, MapIcon, CubeIcon } from '@heroicons/react/24/solid';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import PathTracker from './PathTracker';
import SkillAssessment from './SkillAssessment';
import RoadmapVisualization from './RoadmapVisualization';
import Link from 'next/link';
import Footer from './Footer';

const roadmaps = [
  {
    title: 'Frontend Development',
    description: 'Master modern web development with React and Next.js.',
    icon: <FiLayers className="w-8 h-8" />,
    path: '/roadmaps/frontend'
  },
  {
    title: 'Backend Development',
    description: 'Build scalable server-side applications and APIs.',
    icon: <FiDatabase className="w-8 h-8" />,
    path: '/roadmaps/backend'
  },
  {
    title: 'Mobile Development',
    description: 'Create native and cross-platform mobile applications.',
    icon: <FiSmartphone className="w-8 h-8" />,
    path: '/roadmaps/mobile'
  },
  {
    title: 'Full Stack Development',
    description: 'Master both frontend and backend technologies.',
    icon: <FiCode className="w-8 h-8" />,
    path: '/roadmaps/fullstack'
  },
  {
    title: 'DevOps & Cloud',
    description: 'Learn deployment, automation, and cloud infrastructure.',
    icon: <FiCloud className="w-8 h-8" />,
    path: '/roadmaps/devops'
  },
  {
    title: 'Cloud Computing',
    description: 'Master cloud platforms, services, and architecture.',
    icon: <FiServer className="w-8 h-8" />,
    path: '/roadmaps/cloud'
  },
  {
    title: 'Data Science',
    description: 'Master data analysis, machine learning, and AI.',
    icon: <FiGrid className="w-8 h-8" />,
    path: '/roadmaps/datascience'
  },
  {
    title: 'Game Development',
    description: 'Build immersive games with modern engines and tools.',
    icon: <FiMonitor className="w-8 h-8" />,
    path: '/roadmaps/gamedev'
  },
  {
    title: 'Cybersecurity',
    description: 'Master security principles and protect digital assets.',
    icon: <FiShield className="w-8 h-8" />,
    path: '/roadmaps/cybersecurity'
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
      {/* Navigation with fade-in animation */}
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          delay: 0.3,
          duration: 0.5,
          ease: "easeOut"
        }}
        className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-md border-b border-gray-medium"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <motion.a 
                href="#"
                className="flex items-center space-x-3 text-lg md:text-xl font-bold group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <motion.div
                    className="w-7 h-7 md:w-8 md:h-8 relative"
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
                <span className="text-[10px] md:text-xs font-medium px-1.5 py-0.5 rounded border border-gray-700/50 bg-white-900/10 text-black-600">
                  BETA
                </span>
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/roadmaps"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Roadmaps
              </Link>
              <Link
                href="/challenges"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Challenges
              </Link>
              <Link
                href="/community"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Community
              </Link>
              <Link
                href="/coming-soon"
                className="text-sm font-medium hover:text-primary transition-colors group relative"
              >
                Coming Soon
                <span className="absolute -top-1 -right-6 px-1.5 py-0.5 bg-primary/10 rounded-full text-[10px] font-medium group-hover:bg-primary/20 transition-colors">
                  NEW
                </span>
              </Link>
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

            {/* Mobile Navigation Menu */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full right-0 w-[calc(100vw-2rem)] md:w-64 mt-2 py-2 bg-secondary rounded-lg shadow-lg border border-gray-medium overflow-hidden mx-4"
              >
                <div className="space-y-1">
                  <Link
                    href="/roadmaps"
                    className="flex items-center space-x-2 px-4 py-3 text-primary hover:bg-gray-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiMap className="w-5 h-5" />
                    <span>Explore Roadmaps</span>
                  </Link>
                  <Link
                    href="/auth/signin"
                    className="flex items-center space-x-2 px-4 py-3 text-primary hover:bg-gray-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiCheck className="w-5 h-5" />
                    <span>Get Started</span>
                  </Link>
                  <Link
                    href="/challenges"
                    className="flex items-center space-x-2 px-4 py-3 text-primary hover:bg-gray-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiCode className="w-5 h-5" />
                    <span>Challenges</span>
                  </Link>
                  <Link
                    href="/community"
                    className="flex items-center space-x-2 px-4 py-3 text-primary hover:bg-gray-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiUsers className="w-5 h-5" />
                    <span>Community</span>
                  </Link>
                  <Link
                    href="/coming-soon"
                    className="flex items-center space-x-2 px-4 py-3 text-primary hover:bg-gray-medium transition-colors relative"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiZap className="w-5 h-5" />
                    <span>Coming Soon</span>
                    <span className="ml-2 px-1.5 py-0.5 bg-primary/10 rounded-full text-[10px] font-medium">
                      NEW
                    </span>
                  </Link>
                  <a
                    href="https://github.com/Saunakghosh10/pathforge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-3 text-primary hover:bg-gray-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>Star on GitHub</span>
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] pt-20 md:pt-24 flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={itemVariants} className="text-center relative z-20">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animate-gradient leading-[1.2]">
              PathForge
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-accent max-w-2xl mx-auto px-4">
              Forge Your Path to Programming Mastery
            </p>
            <div className="flex items-center justify-center space-x-4 sm:space-x-6 relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href="/roadmaps"
                  className="relative group inline-flex items-center px-8 py-4 bg-primary text-secondary rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:bg-accent transition-all duration-300 ease-out overflow-hidden"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/roadmaps';
                    setIsOpen(false);
                  }}
                >
                  <span className="relative z-10">Explore Roadmaps</span>
                  <FiArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 ease-out relative z-10" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href="/auth/signin"
                  className="relative group inline-flex items-center px-8 py-4 bg-secondary text-primary border-2 border-primary rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:bg-primary hover:text-secondary transition-all duration-300 ease-out overflow-hidden"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/auth/signin';
                    setIsOpen(false);
                  }}
                >
                  <span className="relative z-10">Get Started</span>
                  <FiCheck className="ml-2 w-5 h-5 transform group-hover:scale-110 transition-transform duration-300 ease-out relative z-10" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Abstract background pattern */}
          <div className="absolute inset-0 -z-10 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)] [background-size:32px_32px]"></div>
          </div>
        </div>
        
      </motion.section>

      {/* Roadmaps Grid */}
      <motion.section
        ref={featuredRef}
        id="roadmaps"
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-4"
          >
            Explore Roadmaps
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-accent text-center max-w-2xl mx-auto mb-12"
          >
            Choose from our curated collection of learning paths designed to help you master different areas of software development.
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {roadmaps.map((roadmap, index) => {
              const Component = Link;
              const href = roadmap.path;
              const componentProps = { href };
　
　
              return (
                <Component key={roadmap.title} {...componentProps}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-secondary p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-medium cursor-pointer h-full"
                  >
                    <div className="mb-4 text-accent">
                      {React.cloneElement(roadmap.icon as React.ReactElement, {
                        className: 'w-8 h-8 sm:w-10 sm:h-10'
                      })}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{roadmap.title}</h3>
                    <p className="text-accent text-sm sm:text-base">{roadmap.description}</p>
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
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">How It Works</h2>
            <p className="text-accent leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
              Follow our proven process to master your development journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Choose Your Path",
                description: "Select from our curated roadmaps tailored to your goals",
                icon: <FiMap className="w-6 h-6 sm:w-8 sm:h-8" />,
                step: "01"
              },
              {
                title: "Track Progress",
                description: "Monitor your learning journey with interactive checkpoints",
                icon: <FiCheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
                step: "02"
              },
              {
                title: "Master Skills",
                description: "Complete projects and gain real-world experience",
                icon: <FiAward className="w-6 h-6 sm:w-8 sm:h-8" />,
                step: "03"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="relative p-4 sm:p-6 bg-gray-light rounded-xl"
              >
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 bg-primary text-secondary rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                  {item.step}
                </div>
                <div className="mb-4 text-accent">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-accent text-sm sm:text-base">{item.description}</p>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <motion.div
                  className="p-6 bg-gray-light rounded-xl"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <AcademicCapIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">Expert-Led Content</h4>
                  </div>
                  <p className="text-sm text-accent">Curriculum designed by industry professionals</p>
                </motion.div>

                <motion.div
                  className="p-6 bg-gray-light rounded-xl"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CommandLineIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">Hands-On Practice</h4>
                  </div>
                  <p className="text-sm text-accent">Learn through practical coding exercises</p>
                </motion.div>

                <motion.div
                  className="p-6 bg-gray-light rounded-xl"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">Clear Roadmaps</h4>
                  </div>
                  <p className="text-sm text-accent">Structured paths for different specializations</p>
                </motion.div>

                <motion.div
                  className="p-6 bg-gray-light rounded-xl"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CubeIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">Modern Stack</h4>
                  </div>
                  <p className="text-sm text-accent">Learn the latest technologies and best practices</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 -translate-x-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-y-1/2 translate-x-1/2">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>
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
          <FiPieChart className="w-5 h-5" />
          <span className="font-medium">View Learning Analytics</span>
        </Link>
      </motion.div>
      <Footer />
    </div>
  );
}
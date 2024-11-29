'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiClock, FiCheck } from 'react-icons/fi';
import { SiKalilinux, SiWireshark, SiLinux, SiPython } from 'react-icons/si';
import { GiFirewall } from 'react-icons/gi';
import { MdSecurity, MdVpnLock } from 'react-icons/md';
import { useProgress } from '@/app/context/ProgressContext';
import { IconType } from 'react-icons';

interface TopicLink {
  title: string;
  url: string;
}

interface RoadmapTopic {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  level: 'beginner' | 'intermediate' | 'advanced';
  completed: boolean;
  links: TopicLink[];
  subtopics: string[];
  estimatedTime: string;
  prerequisites: string[];
}

export default function CyberSecurityRoadmap() {
  const { updateTopicProgress, getTopicProgress } = useProgress();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics: RoadmapTopic[] = [
    {
      id: 'security-fundamentals',
      title: 'Security Fundamentals',
      description: 'Learn core security concepts and principles',
      icon: MdSecurity,
      level: 'beginner',
      completed: getTopicProgress('cybersecurity', 'security-fundamentals')?.completed || false,
      links: [
        { title: 'CompTIA Security+ Guide', url: 'https://www.comptia.org/certifications/security' },
        { title: 'Cybersecurity Basics', url: 'https://www.cybrary.it/course/introduction-to-it-and-cybersecurity' }
      ],
      subtopics: ['Security Principles', 'Risk Management', 'Security Controls', 'Compliance', 'Security Architecture'],
      estimatedTime: '6-8 weeks',
      prerequisites: []
    },
    {
      id: 'network-security',
      title: 'Network Security',
      description: 'Master network security and monitoring',
      icon: GiFirewall,
      level: 'intermediate',
      completed: getTopicProgress('cybersecurity', 'network-security')?.completed || false,
      links: [
        { title: 'Wireshark Fundamentals', url: 'https://www.wireshark.org/docs/' },
        { title: 'Network Security Fundamentals', url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/security.html' }
      ],
      subtopics: ['Firewalls', 'IDS/IPS', 'Network Protocols', 'VPNs', 'Network Monitoring'],
      estimatedTime: '8-10 weeks',
      prerequisites: ['security-fundamentals']
    },
    {
      id: 'penetration-testing',
      title: 'Penetration Testing',
      description: 'Learn ethical hacking and vulnerability assessment',
      icon: SiKalilinux,
      level: 'advanced',
      completed: getTopicProgress('cybersecurity', 'penetration-testing')?.completed || false,
      links: [
        { title: 'Kali Linux Documentation', url: 'https://www.kali.org/docs/' },
        { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' }
      ],
      subtopics: ['Vulnerability Assessment', 'Exploitation', 'Web App Security', 'Mobile Security', 'Wireless Security'],
      estimatedTime: '10-12 weeks',
      prerequisites: ['network-security']
    },
    {
      id: 'cryptography',
      title: 'Cryptography',
      description: 'Understand encryption and cryptographic protocols',
      icon: MdVpnLock,
      level: 'intermediate',
      completed: getTopicProgress('cybersecurity', 'cryptography')?.completed || false,
      links: [
        { title: 'Cryptography I - Coursera', url: 'https://www.coursera.org/learn/crypto' },
        { title: 'Applied Cryptography', url: 'https://www.schneier.com/books/applied-cryptography/' }
      ],
      subtopics: ['Symmetric Encryption', 'Asymmetric Encryption', 'Hashing', 'PKI', 'TLS/SSL'],
      estimatedTime: '6-8 weeks',
      prerequisites: ['security-fundamentals']
    },
    {
      id: 'security-operations',
      title: 'Security Operations',
      description: 'Learn SOC operations and incident response',
      icon: SiWireshark,
      level: 'advanced',
      completed: getTopicProgress('cybersecurity', 'security-operations')?.completed || false,
      links: [
        { title: 'SANS Incident Handling', url: 'https://www.sans.org/cyber-security-courses/incident-handling-sec504/' },
        { title: 'Blue Team Handbook', url: 'https://www.amazon.com/Blue-Team-Handbook-condensed-Operations/dp/1726273989' }
      ],
      subtopics: ['Incident Response', 'Threat Hunting', 'SIEM', 'Forensics', 'Malware Analysis'],
      estimatedTime: '8-10 weeks',
      prerequisites: ['network-security', 'cryptography']
    }
  ];

  const handleTopicClick = (topicId: string) => {
    setSelectedTopic(selectedTopic === topicId ? null : topicId);
  };

  const handleCheckboxChange = (topicId: string) => {
    updateTopicProgress('cybersecurity', topicId, !getTopicProgress('cybersecurity', topicId)?.completed);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Cybersecurity Roadmap
      </motion.h1>
      
      <div className="grid grid-cols-1 gap-6 md:gap-8">
        {topics.map((topic, index) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white rounded-lg shadow-lg overflow-hidden ${
              selectedTopic === topic.id ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <div
              className="p-6 cursor-pointer flex items-center justify-between"
              onClick={() => handleTopicClick(topic.id)}
            >
              <div className="flex items-center space-x-4">
                <topic.icon className="w-8 h-8 text-blue-500" />
                <div>
                  <h3 className="text-xl font-semibold">{topic.title}</h3>
                  <p className="text-gray-600">{topic.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <FiClock className="text-gray-400" />
                  <span className="text-sm text-gray-500">{topic.estimatedTime}</span>
                </div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={topic.completed}
                    onChange={() => handleCheckboxChange(topic.id)}
                    className="form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-500">Completed</span>
                </label>
              </div>
            </div>
            
            {selectedTopic === topic.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="px-6 pb-6 space-y-4"
              >
                <div>
                  <h4 className="font-semibold mb-2">Subtopics:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {topic.subtopics.map((subtopic) => (
                      <li key={subtopic} className="text-gray-600">{subtopic}</li>
                    ))}
                  </ul>
                </div>
                
                {topic.prerequisites.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Prerequisites:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {topic.prerequisites.map((prereq) => (
                        <li key={prereq} className="text-gray-600">
                          {topics.find(t => t.id === prereq)?.title}
                          {getTopicProgress('cybersecurity', prereq)?.completed && (
                            <FiCheck className="inline-block ml-2 text-green-500" />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div>
                  <h4 className="font-semibold mb-2">Resources:</h4>
                  <ul className="space-y-2">
                    {topic.links.map((link) => (
                      <li key={link.title}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-600 underline"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

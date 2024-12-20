import type { BestPractice } from './sections';

export const frontendBestPractices: BestPractice[] = [
  {
    title: 'Component Architecture',
    description: 'Learn how to structure your components for maximum reusability',
    iconName: 'CubeTransparentIcon',
    difficulty: 'Intermediate',
    topics: ['Component Design', 'Props', 'State Management', 'Custom Hooks'],
    path: '/roadmaps/frontend/best-practices/component-architecture',
    isNew: true
  },
  {
    title: 'Performance Optimization',
    description: 'Techniques to improve your app performance and loading speed',
    iconName: 'BoltIcon',
    difficulty: 'Advanced',
    topics: ['Code Splitting', 'Lazy Loading', 'Caching', 'Bundle Size'],
    path: '/roadmaps/frontend/best-practices/performance'
  },
  {
    title: 'Responsive Design',
    description: 'Best practices for creating responsive and mobile-first layouts',
    iconName: 'DevicePhoneMobileIcon',
    difficulty: 'Beginner',
    topics: ['Media Queries', 'Flexbox', 'Grid', 'Mobile First'],
    path: '/roadmaps/frontend/best-practices/responsive-design'
  }
];

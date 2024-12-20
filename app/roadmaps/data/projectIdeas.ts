import type { ProjectIdea } from './sections';

export const frontendProjectIdeas: ProjectIdea[] = [
  {
    title: 'Task Management Dashboard',
    description: 'Build a Trello-like task management app with drag and drop',
    iconName: 'ClipboardDocumentListIcon',
    difficulty: 'Intermediate',
    estimatedTime: '2-3 weeks',
    topics: ['React', 'DnD', 'State Management', 'REST API'],
    path: '/roadmaps/frontend/projects/task-dashboard',
    isNew: true
  },
  {
    title: 'Real-time Chat Application',
    description: 'Create a modern chat app with real-time messaging',
    iconName: 'ChatBubbleLeftRightIcon',
    difficulty: 'Advanced',
    estimatedTime: '3-4 weeks',
    topics: ['WebSocket', 'Authentication', 'UI Design', 'State Management'],
    path: '/roadmaps/frontend/projects/chat-app'
  },
  {
    title: 'Portfolio Website',
    description: 'Design and build a personal portfolio website',
    iconName: 'UserCircleIcon',
    difficulty: 'Beginner',
    estimatedTime: '1-2 weeks',
    topics: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    path: '/roadmaps/frontend/projects/portfolio'
  }
];

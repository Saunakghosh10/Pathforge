import { IconName } from '@/types/icons';

export interface BestPractice {
  title: string;
  description: string;
  iconName: IconName;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
  path: string;
  isNew?: boolean;
}

export interface ProjectIdea {
  title: string;
  description: string;
  iconName: IconName;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  topics: string[];
  path: string;
  isNew?: boolean;
}

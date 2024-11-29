export interface ResourceLink {
  title: string;
  url: string;
  type?: 'tutorial' | 'documentation' | 'video' | 'course';
}

export interface RoadmapTopic {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType;
  level: 'beginner' | 'intermediate' | 'advanced';
  completed: boolean;
  links: ResourceLink[];
  subtopics?: RoadmapTopic[];
  estimatedHours?: number;
}

export interface TopicProgress {
  topicId: string;
  completed: boolean;
  completedAt?: string;
  challenges?: {
    id: string;
    completed: boolean;
    completedAt?: string;
  }[];
}

export interface RoadmapProgress {
  roadmapId: string;
  topics: TopicProgress[];
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  type: 'quiz' | 'code' | 'project';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedMinutes: number;
  completed?: boolean;
  completedAt?: string;
}

export interface QuizChallenge extends Challenge {
  type: 'quiz';
  questions: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[];
}

export interface CodeChallenge extends Challenge {
  type: 'code';
  language: string;
  starterCode: string;
  testCases: {
    input: string;
    expectedOutput: string;
  }[];
  solution: string;
}

export interface ProjectChallenge extends Challenge {
  type: 'project';
  requirements: string[];
  resources: ResourceLink[];
  deliverables: string[];
  rubric: {
    criteria: string;
    points: number;
  }[];
}

export interface RoadmapData {
  id: string;
  title: string;
  description: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  timeCommitment: 'LOW' | 'MEDIUM' | 'HIGH';
  estimatedHours: number;
  topics: RoadmapTopic[];
  progress?: RoadmapProgress[];
}

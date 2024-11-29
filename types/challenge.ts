export interface TestCase {
  input: string;
  expectedOutput: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  starterCode: string;
  testCases: TestCase[];
  solution: string;
  hints: string[];
}

export interface QuizChallenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  questions: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[];
}

export interface ProjectChallenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  requirements: string[];
  resources: {
    title: string;
    url: string;
  }[];
  sampleSolution?: string;
  tips: string[];
}

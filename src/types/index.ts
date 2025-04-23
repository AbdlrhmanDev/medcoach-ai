export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'admin';
  createdAt: string;
  updatedAt: string;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  duration: number; // in minutes
  createdAt: string;
  updatedAt: string;
}

export interface Feedback {
  id: string;
  scenarioId: string;
  userId: string;
  communicationScore: number;
  clinicalReasoningScore: number;
  empathyScore: number;
  overallScore: number;
  comments: string;
  createdAt: string;
}

export interface MockExam {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  scenarios: Scenario[];
  createdAt: string;
  updatedAt: string;
}

export interface Progress {
  userId: string;
  completedScenarios: number;
  averageScore: number;
  lastPracticeDate: string;
  strengths: string[];
  areasForImprovement: string[];
} 
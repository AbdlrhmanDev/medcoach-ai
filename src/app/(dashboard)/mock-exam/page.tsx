'use client';

import { motion } from 'framer-motion';
import { ClockIcon, DocumentTextIcon, StarIcon } from '@heroicons/react/24/outline';

const mockExams = [
  {
    id: 1,
    title: 'Full PLAB 2 Mock Exam',
    description: 'Complete mock exam with 16 stations covering various clinical scenarios.',
    duration: 180,
    stations: 16,
    difficulty: 'Hard',
  },
  {
    id: 2,
    title: 'Mini Mock Exam',
    description: 'Short mock exam with 8 stations focusing on common scenarios.',
    duration: 90,
    stations: 8,
    difficulty: 'Medium',
  },
  {
    id: 3,
    title: 'Practice Mock Exam',
    description: 'Beginner-friendly mock exam with 4 stations and extended time limits.',
    duration: 60,
    stations: 4,
    difficulty: 'Easy',
  },
];

const difficultyColors = {
  Easy: 'bg-green-100 text-green-800',
  Medium: 'bg-yellow-100 text-yellow-800',
  Hard: 'bg-red-100 text-red-800',
};

export default function MockExamPage() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900">Mock Exams</h1>
          <p className="mt-2 text-sm text-gray-600">
            Test your skills with our comprehensive mock exams that simulate the real PLAB 2 experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {mockExams.map((exam) => (
            <motion.div
              key={exam.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    difficultyColors[exam.difficulty as keyof typeof difficultyColors]
                  }`}>
                    {exam.difficulty}
                  </span>
                  <span className="inline-flex items-center text-sm text-gray-500">
                    <ClockIcon className="h-5 w-5 mr-1" />
                    {exam.duration} min
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{exam.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{exam.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span className="inline-flex items-center">
                    <DocumentTextIcon className="h-5 w-5 mr-1" />
                    {exam.stations} stations
                  </span>
                  <span className="inline-flex items-center">
                    <StarIcon className="h-5 w-5 mr-1" />
                    4.8/5
                  </span>
                </div>
                <button className="mt-6 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Start Exam
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 
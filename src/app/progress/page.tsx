'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  AcademicCapIcon,
  FireIcon,
} from '@heroicons/react/24/outline';

interface ProgressMetric {
  label: string;
  value: string | number;
  icon: any;
  change?: string;
}

interface CompletedScenario {
  id: string;
  title: string;
  completedAt: string;
  score: number;
  feedback: string;
}

// Add new interface for streak data
interface StreakDay {
  date: string;
  completed: boolean;
  minutes: number;
}

const sampleMetrics: ProgressMetric[] = [
  {
    label: 'Total Scenarios Completed',
    value: 24,
    icon: CheckCircleIcon,
    change: '+8 this week',
  },
  {
    label: 'Average Score',
    value: '87%',
    icon: ChartBarIcon,
    change: '+5% from last week',
  },
  {
    label: 'Total Practice Time',
    value: '12.5 hours',
    icon: ClockIcon,
    change: '+3.2 hours this week',
  },
  {
    label: 'Skills Mastered',
    value: 8,
    icon: AcademicCapIcon,
    change: '+2 this week',
  },
];

const sampleCompletedScenarios: CompletedScenario[] = [
  {
    id: '1',
    title: 'Acute Chest Pain Assessment',
    completedAt: '2024-03-15',
    score: 92,
    feedback: 'Excellent communication skills and thorough assessment.',
  },
  {
    id: '2',
    title: 'Pediatric Respiratory Distress',
    completedAt: '2024-03-14',
    score: 85,
    feedback: 'Good clinical reasoning, could improve on time management.',
  },
  {
    id: '3',
    title: 'Basic Patient History Taking',
    completedAt: '2024-03-13',
    score: 90,
    feedback: 'Very thorough history taking, well-structured approach.',
  },
];

const sampleStreakData: StreakDay[] = [
  { date: '2024-03-15', completed: true, minutes: 45 },
  { date: '2024-03-14', completed: true, minutes: 30 },
  { date: '2024-03-13', completed: true, minutes: 60 },
  { date: '2024-03-12', completed: false, minutes: 0 },
  { date: '2024-03-11', completed: true, minutes: 25 },
  { date: '2024-03-10', completed: true, minutes: 40 },
  { date: '2024-03-09', completed: true, minutes: 35 },
];

export default function ProgressPage() {
  const [timeRange, setTimeRange] = useState('week');

  // Calculate current streak
  const currentStreak = sampleStreakData.reduce((streak, day) => {
    if (day.completed) return streak + 1;
    return 0;
  }, 0);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900"
          >
            Your Progress
          </motion.h1>
          <p className="mt-4 text-lg text-gray-600">
            Track your learning journey and performance metrics
          </p>
        </div>

        {/* Time Range Selector */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm">
            {['week', 'month', 'year'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  timeRange === range
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Learning Streak Section */}
        <div className="mb-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Learning Streak</h3>
                <div className="flex items-center">
                  <FireIcon className="h-8 w-8 text-white mr-2" />
                  <span className="text-4xl font-bold text-white">{currentStreak} days</span>
                </div>
                <p className="text-white/80 mt-2">Keep up the great work!</p>
              </div>
              <div className="flex space-x-2">
                {sampleStreakData.map((day, index) => (
                  <div
                    key={day.date}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      day.completed
                        ? 'bg-white/20 text-white'
                        : 'bg-white/10 text-white/50'
                    }`}
                    title={`${new Date(day.date).toLocaleDateString()}: ${day.minutes} minutes`}
                  >
                    {day.completed ? '✓' : '×'}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {sampleMetrics.map((metric) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <metric.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {metric.label}
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">
                          {metric.value}
                        </div>
                        {metric.change && (
                          <div className="text-sm text-green-600">{metric.change}</div>
                        )}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Completed Scenarios */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium text-gray-900">Recent Completions</h3>
          </div>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              {sampleCompletedScenarios.map((scenario) => (
                <motion.li
                  key={scenario.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 py-4 sm:px-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        {scenario.title}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">{scenario.feedback}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex items-center">
                      <span className="px-2 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800">
                        Score: {scenario.score}%
                      </span>
                      <span className="ml-4 text-sm text-gray-500">
                        {new Date(scenario.completedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 
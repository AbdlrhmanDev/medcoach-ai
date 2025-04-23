'use client';

import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const stats = [
  { name: 'Completed Scenarios', value: '12', icon: AcademicCapIcon },
  { name: 'Average Score', value: '85%', icon: ChartBarIcon },
  { name: 'Practice Hours', value: '24', icon: ClockIcon },
  { name: 'Mock Exams Taken', value: '3', icon: UserGroupIcon },
];

const quickActions = [
  {
    name: 'Start Practice',
    description: 'Begin a new OSCE scenario practice session',
    href: '/scenarios',
    icon: AcademicCapIcon,
  },
  {
    name: 'Take Mock Exam',
    description: 'Test yourself with a full mock examination',
    href: '/mock-exam',
    icon: ClockIcon,
  },
  {
    name: 'View Progress',
    description: 'Check your performance and improvement areas',
    href: '/progress',
    icon: ArrowTrendingUpIcon,
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="mt-2 text-sm text-gray-600">
              Welcome back! Here's an overview of your progress.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.name}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <stat.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                          <dd className="text-2xl font-semibold text-gray-900">{stat.value}</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8"
          >
            <h2 className="text-lg font-medium text-gray-900">Quick actions</h2>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  href={action.href}
                  className="relative block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div>
                    <span className="inline-flex p-3 rounded-lg bg-indigo-50">
                      <action.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">{action.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{action.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Recent activity */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8"
          >
            <h2 className="text-lg font-medium text-gray-900">Recent activity</h2>
            <div className="mt-4 bg-white shadow rounded-lg">
              <div className="p-6">
                <p className="text-sm text-gray-500">Your recent practice sessions and exam attempts will appear here.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
} 
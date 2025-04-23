'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon as SearchIcon, FunnelIcon as FilterIcon } from '@heroicons/react/24/solid';

interface Scenario {
  id: string;
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  description: string;
  tags: string[];
}

const sampleScenarios: Scenario[] = [
  {
    id: '1',
    title: 'Acute Chest Pain Assessment',
    category: 'Emergency Medicine',
    difficulty: 'Intermediate',
    duration: '20 mins',
    description: 'Practice evaluating a patient presenting with acute chest pain and determine the appropriate diagnosis and treatment plan.',
    tags: ['Cardiology', 'Emergency', 'Assessment'],
  },
  {
    id: '2',
    title: 'Pediatric Respiratory Distress',
    category: 'Pediatrics',
    difficulty: 'Advanced',
    duration: '25 mins',
    description: 'Handle a case of severe respiratory distress in a young patient, focusing on quick assessment and intervention.',
    tags: ['Pediatrics', 'Emergency', 'Respiratory'],
  },
  {
    id: '3',
    title: 'Basic Patient History Taking',
    category: 'General Practice',
    difficulty: 'Beginner',
    duration: '15 mins',
    description: 'Learn and practice the fundamentals of taking a comprehensive patient history.',
    tags: ['Communication', 'History Taking', 'Basic Skills'],
  },
  // Add more scenarios as needed
];

const featuredScenarios = sampleScenarios.slice(0, 2); // Get first two scenarios as featured

export default function ScenariosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const filteredScenarios = sampleScenarios.filter(scenario => {
    const matchesSearch = scenario.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scenario.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || scenario.category === selectedCategory;
    const matchesDifficulty = !selectedDifficulty || scenario.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const categories = Array.from(new Set(sampleScenarios.map(s => s.category)));
  const difficulties = Array.from(new Set(sampleScenarios.map(s => s.difficulty)));

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
            Medical Scenarios
          </motion.h1>
          <p className="mt-4 text-lg text-gray-600">
            Practice with our comprehensive collection of medical scenarios
          </p>
        </div>

        {/* Featured Scenarios Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Scenarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredScenarios.map((scenario) => (
              <motion.div
                key={scenario.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xl"
              >
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-sm font-semibold bg-white/20 rounded-full backdrop-blur-sm">
                      {scenario.difficulty}
                    </span>
                    <span className="text-sm font-medium">{scenario.duration}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{scenario.title}</h3>
                  <p className="text-white/90 mb-6">{scenario.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {scenario.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-white/20 rounded-full backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    className="w-full md:w-auto px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200"
                    onClick={() => {/* TODO: Implement scenario start */}}
                  >
                    Start Featured Scenario
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search scenarios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="flex gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            >
              <option value="">All Difficulties</option>
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredScenarios.map((scenario) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full
                    ${scenario.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      scenario.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'}`}>
                    {scenario.difficulty}
                  </span>
                  <span className="text-sm text-gray-500">{scenario.duration}</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{scenario.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{scenario.description}</p>
                <div className="flex flex-wrap gap-2">
                  {scenario.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:px-6">
                <button
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => {/* TODO: Implement scenario start */}}
                >
                  Start Scenario
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 
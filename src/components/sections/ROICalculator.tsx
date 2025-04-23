import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ROICalculator() {
  const [studentsCount, setStudentsCount] = useState(10);
  const [hoursPerWeek, setHoursPerWeek] = useState(5);
  const [preparationMonths, setPreparationMonths] = useState(3);

  // Calculate potential savings
  const calculateSavings = () => {
    const tutorHourlyRate = 50; // Average tutor hourly rate in £
    const traditionalCost = studentsCount * hoursPerWeek * preparationMonths * 4 * tutorHourlyRate;
    const medcoachCost = studentsCount * 99 * preparationMonths; // Using Professional plan price
    const savings = traditionalCost - medcoachCost;
    
    return {
      traditional: traditionalCost,
      medcoach: medcoachCost,
      savings: savings
    };
  };

  const results = calculateSavings();

  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-indigo-600 tracking-wide uppercase">
              ROI Calculator
            </h2>
            <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl leading-tight">
              Calculate Your Potential Savings
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 text-xl leading-8 text-gray-600 font-medium"
          >
            Compare traditional tutoring costs with MedCoach AI and see how much you could save
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <label className="block">
              <span className="text-lg font-semibold text-gray-900 block mb-4">
                Number of Students
              </span>
              <input
                type="range"
                min="1"
                max="50"
                value={studentsCount}
                onChange={(e) => setStudentsCount(Number(e.target.value))}
                className="w-full mt-2"
              />
              <span className="block text-center text-3xl font-bold text-indigo-600 mt-4">
                {studentsCount} students
              </span>
            </label>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <label className="block">
              <span className="text-lg font-semibold text-gray-900 block mb-4">
                Hours per Week
              </span>
              <input
                type="range"
                min="1"
                max="20"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full mt-2"
              />
              <span className="block text-center text-3xl font-bold text-indigo-600 mt-4">
                {hoursPerWeek} hours/week
              </span>
            </label>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <label className="block">
              <span className="text-lg font-semibold text-gray-900 block mb-4">
                Preparation Period
              </span>
              <input
                type="range"
                min="1"
                max="12"
                value={preparationMonths}
                onChange={(e) => setPreparationMonths(Number(e.target.value))}
                className="w-full mt-2"
              />
              <span className="block text-center text-3xl font-bold text-indigo-600 mt-4">
                {preparationMonths} months
              </span>
            </label>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Traditional Tutoring</h3>
            <p className="mt-4 text-4xl font-extrabold text-gray-900">
              £{results.traditional.toLocaleString()}
            </p>
            <p className="mt-2 text-base text-gray-600">Based on average tutor rates</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-indigo-600">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">MedCoach AI</h3>
            <p className="mt-4 text-4xl font-extrabold text-indigo-600">
              £{results.medcoach.toLocaleString()}
            </p>
            <p className="mt-2 text-base text-gray-600">Professional plan</p>
          </div>

          <div className="bg-green-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-green-800 mb-2">Your Savings</h3>
            <p className="mt-4 text-4xl font-extrabold text-green-700">
              £{results.savings.toLocaleString()}
            </p>
            <p className="mt-2 text-base text-green-600">Total estimated savings</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
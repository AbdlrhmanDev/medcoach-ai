import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  SparklesIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const benefits = [
  {
    name: 'Personalized Learning',
    description: 'AI-powered adaptive learning that adjusts to your strengths and weaknesses.',
    icon: SparklesIcon,
  },
  {
    name: 'Expert Guidance',
    description: 'Access to experienced medical professionals and PLAB 2 examiners.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Time Efficiency',
    description: 'Optimize your study time with focused practice and targeted feedback.',
    icon: ClockIcon,
  },
  {
    name: 'Community Support',
    description: 'Connect with fellow candidates and share experiences and insights.',
    icon: UserGroupIcon,
  },
  {
    name: 'Progress Tracking',
    description: 'Detailed analytics and performance metrics to monitor your improvement.',
    icon: ChartBarIcon,
  },
  {
    name: 'Quality Assurance',
    description: 'Regularly updated content aligned with the latest PLAB 2 guidelines.',
    icon: ShieldCheckIcon,
  },
];

const BenefitsSection: FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed in PLAB 2
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive platform combines cutting-edge technology with expert knowledge to provide
            the most effective PLAB 2 preparation experience.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <benefit.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {benefit.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{benefit.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 
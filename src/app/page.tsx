'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  MicrophoneIcon,
  ChartBarIcon,
  AcademicCapIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

// Dynamic imports for sections
const FeaturesGrid = dynamic(() => import('@/components/FeaturesGrid'), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96 rounded-lg" />,
  ssr: false
});

const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96 rounded-lg" />,
  ssr: false
});

const PricingSection = dynamic(() => import('@/components/PricingSection'), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96 rounded-lg" />,
  ssr: false
});

const FAQSection = dynamic(() => import('@/components/FAQSection'), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96 rounded-lg" />,
  ssr: false
});

const StatsSection = dynamic(() => import('@/components/StatsSection'), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96 rounded-lg" />,
  ssr: false
});

const BenefitsSection = dynamic(() => import('@/components/BenefitsSection'), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96 rounded-lg" />,
  ssr: false
});

const features = [
  {
    name: 'Voice Interaction',
    description: 'Practice with AI-powered patient conversations using natural voice interaction.',
    icon: MicrophoneIcon,
  },
  {
    name: 'Real-time Feedback',
    description: 'Get instant feedback on your communication skills and clinical reasoning.',
    icon: ChartBarIcon,
  },
  {
    name: 'OSCE Scenarios',
    description: 'Access a library of realistic OSCE-style scenarios for comprehensive practice.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Mock Exams',
    description: 'Take timed mock exams to simulate the real PLAB 2 experience.',
    icon: ClockIcon,
  },
  {
    name: 'Performance Analytics',
    description: 'Track your progress with detailed analytics and identify areas for improvement.',
    icon: ChartBarIcon,
  },
  {
    name: 'Custom Scenarios',
    description: 'Create and share your own OSCE scenarios with the community.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Study Groups',
    description: 'Connect with other PLAB 2 candidates for collaborative learning.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Resource Library',
    description: 'Access comprehensive study materials, guidelines, and best practices.',
    icon: AcademicCapIcon,
  }
];

export default function HomePage() {
  return (
    <div className="relative isolate">
      {/* Hero Section */}
      <div className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white" />
        <div className="absolute inset-y-0 right-0 -z-10 w-full overflow-hidden bg-gradient-to-br from-indigo-100 to-white">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Your Smart
              <br />
              <span className="text-indigo-600">OSCE Practice Buddy</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Master your PLAB 2 preparation with AI-powered voice interactions,
              realistic scenarios, and personalized feedback.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                href="/signup"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </Link>
              <Link href="/scenarios" className="text-sm font-semibold leading-6 text-gray-900">
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Suspense fallback={<div className="animate-pulse bg-gray-100 h-96 rounded-lg" />}>
        <StatsSection />
      </Suspense>

      {/* Benefits Section */}
      <Suspense fallback={<div className="animate-pulse bg-gray-100 h-96 rounded-lg" />}>
        <BenefitsSection />
      </Suspense>

      {/* Features Section */}
      <Suspense fallback={<div className="animate-pulse bg-gray-100 h-96 rounded-lg" />}>
        <FeaturesGrid features={features} />
      </Suspense>

      {/* Testimonials Section */}
      <Suspense fallback={<div className="animate-pulse bg-gray-100 h-96 rounded-lg" />}>
        <TestimonialsSection />
      </Suspense>

      {/* Pricing Section */}
      <Suspense fallback={<div className="animate-pulse bg-gray-100 h-96 rounded-lg" />}>
        <PricingSection />
      </Suspense>

      {/* FAQ Section */}
      <Suspense fallback={<div className="animate-pulse bg-gray-100 h-96 rounded-lg" />}>
        <FAQSection />
      </Suspense>

      {/* CTA Section */}
      <div className="relative bg-indigo-600">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your PLAB 2 preparation?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-indigo-200">
              Join thousands of successful candidates who have used MedCoach AI to excel in their PLAB 2 exam.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/signup"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started today
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-white">
                Contact us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

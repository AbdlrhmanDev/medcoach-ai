'use client';

import PricingSection from '@/components/sections/PricingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ROICalculator from '@/components/sections/ROICalculator';

const pricingPlans = [
  {
    name: 'Basic',
    price: '£49',
    description: 'Essential PLAB 2 preparation resources for individual study.',
    features: [
      { name: 'Access to basic study materials', included: true },
      { name: 'Practice questions bank', included: true },
      { name: 'Basic performance analytics', included: true },
      { name: 'Community forum access', included: true },
      { name: 'Email support', included: false },
      { name: 'Live mock sessions', included: false },
      { name: 'Personal mentor', included: false },
    ],
    cta: 'Get started',
  },
  {
    name: 'Professional',
    price: '£99',
    description: 'Comprehensive preparation with additional support features.',
    mostPopular: true,
    features: [
      { name: 'Access to all study materials', included: true },
      { name: 'Extended question bank', included: true },
      { name: 'Advanced performance analytics', included: true },
      { name: 'Community forum access', included: true },
      { name: 'Priority email support', included: true },
      { name: '2 Live mock sessions', included: true },
      { name: 'Personal mentor', included: false },
    ],
    cta: 'Start free trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for institutions and large groups.',
    features: [
      { name: 'All Professional features', included: true },
      { name: 'Custom content integration', included: true },
      { name: 'Dedicated support team', included: true },
      { name: 'Progress tracking dashboard', included: true },
      { name: 'Unlimited mock sessions', included: true },
      { name: 'Personal mentor assigned', included: true },
      { name: 'Custom reporting', included: true },
    ],
    cta: 'Contact sales',
  },
];

export default function PricingPage() {
  return (
    <main className="bg-white font-sans antialiased">
      <div className="relative isolate">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
        <div className="relative z-10">
          <div className="text-rendering-optimizeLegibility">
            <PricingSection plans={pricingPlans} />
          </div>

          <div className="text-rendering-optimizeLegibility">
            <ROICalculator />
          </div>

          <div className="text-rendering-optimizeLegibility">
            <TestimonialsSection />
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </main>
  );
} 
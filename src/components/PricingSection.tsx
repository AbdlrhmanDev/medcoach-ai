import { FC } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const tiers = [
  {
    name: 'Basic',
    id: 'tier-basic',
    price: { monthly: '£29' },
    description: 'Essential features for PLAB 2 preparation',
    features: [
      'Access to basic OSCE scenarios',
      'Voice interaction practice',
      'Basic performance analytics',
      'Email support',
    ],
    featured: false,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    price: { monthly: '£49' },
    description: 'Advanced features for comprehensive preparation',
    features: [
      'All Basic features',
      'Unlimited OSCE scenarios',
      'Real-time feedback',
      'Custom scenario creation',
      'Study group access',
      'Priority support',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    price: { monthly: '£99' },
    description: 'Complete solution for medical schools and institutions',
    features: [
      'All Pro features',
      'Custom branding',
      'Admin dashboard',
      'Bulk user management',
      'API access',
      '24/7 dedicated support',
    ],
    featured: false,
  },
];

const PricingSection: FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Choose the plan that best fits your needs
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${
                tier.featured ? 'ring-2 ring-indigo-600' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {tier.name}
                  </h3>
                  {tier.featured && (
                    <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                      Most popular
                    </p>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.price.monthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.featured
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600'
                    : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100 focus-visible:outline-indigo-600'
                }`}
              >
                Get started today
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 
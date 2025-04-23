import { motion } from 'framer-motion';
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid';

interface PricingFeature {
  name: string;
  basic: boolean;
  professional: boolean;
  enterprise: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  cta: string;
  mostPopular?: boolean;
}

interface PricingSectionProps {
  plans: PricingPlan[];
}

// Detailed feature comparison data
const featureComparison = [
  {
    category: 'Study Materials',
    features: [
      { name: 'Basic Study Materials', basic: true, professional: true, enterprise: true },
      { name: 'Advanced Study Materials', basic: false, professional: true, enterprise: true },
      { name: 'Custom Institution Materials', basic: false, professional: false, enterprise: true },
      { name: 'Downloadable Resources', basic: true, professional: true, enterprise: true },
      { name: 'Video Tutorials', basic: false, professional: true, enterprise: true },
      { name: 'Interactive Learning Modules', basic: false, professional: true, enterprise: true },
      { name: 'Clinical Guidelines & Updates', basic: false, professional: true, enterprise: true },
      { name: 'Specialty-Specific Content', basic: false, professional: true, enterprise: true }
    ],
  },
  {
    category: 'Practice Sessions',
    features: [
      { name: 'Basic Scenarios', basic: true, professional: true, enterprise: true },
      { name: 'Advanced Scenarios', basic: false, professional: true, enterprise: true },
      { name: 'Custom Institution Scenarios', basic: false, professional: false, enterprise: true },
      { name: 'Mock Exams', basic: true, professional: true, enterprise: true },
      { name: 'Live Mock Sessions', basic: false, professional: true, enterprise: true },
      { name: 'Personalized Feedback', basic: false, professional: true, enterprise: true },
      { name: 'AI-Powered Practice Cases', basic: false, professional: true, enterprise: true },
      { name: 'Real-time Voice Interaction', basic: false, professional: true, enterprise: true },
      { name: 'Scenario Recording & Playback', basic: false, professional: true, enterprise: true }
    ],
  },
  {
    category: 'Support & Mentoring',
    features: [
      { name: 'Community Forum Access', basic: true, professional: true, enterprise: true },
      { name: 'Email Support', basic: true, professional: true, enterprise: true },
      { name: 'Priority Support', basic: false, professional: true, enterprise: true },
      { name: 'Dedicated Support Team', basic: false, professional: false, enterprise: true },
      { name: '24/7 Chat Support', basic: false, professional: true, enterprise: true },
      { name: 'Personal Success Manager', basic: false, professional: false, enterprise: true },
      { name: 'Expert Clinical Mentoring', basic: false, professional: false, enterprise: true },
      { name: 'Group Training Sessions', basic: false, professional: false, enterprise: true }
    ],
  },
  {
    category: 'Analytics & Reporting',
    features: [
      { name: 'Basic Performance Tracking', basic: true, professional: true, enterprise: true },
      { name: 'Advanced Analytics', basic: false, professional: true, enterprise: true },
      { name: 'Progress Reports', basic: true, professional: true, enterprise: true },
      { name: 'Custom Reports', basic: false, professional: false, enterprise: true },
      { name: 'Institution Dashboard', basic: false, professional: false, enterprise: true },
      { name: 'Performance Insights', basic: false, professional: true, enterprise: true },
      { name: 'Learning Pattern Analysis', basic: false, professional: true, enterprise: true },
      { name: 'Cohort Performance Tracking', basic: false, professional: false, enterprise: true }
    ],
  },
  {
    category: 'Communication Skills',
    features: [
      { name: 'Basic Communication Tips', basic: true, professional: true, enterprise: true },
      { name: 'Advanced Communication Training', basic: false, professional: true, enterprise: true },
      { name: 'Cultural Competency Modules', basic: false, professional: true, enterprise: true },
      { name: 'Patient Interaction Scenarios', basic: true, professional: true, enterprise: true },
      { name: 'Language Proficiency Tools', basic: false, professional: true, enterprise: true },
      { name: 'Accent & Pronunciation Training', basic: false, professional: true, enterprise: true }
    ],
  },
  {
    category: 'Clinical Skills',
    features: [
      { name: 'Basic Clinical Procedures', basic: true, professional: true, enterprise: true },
      { name: 'Advanced Clinical Scenarios', basic: false, professional: true, enterprise: true },
      { name: 'Emergency Medicine Cases', basic: false, professional: true, enterprise: true },
      { name: 'Specialty-Specific Training', basic: false, professional: true, enterprise: true },
      { name: 'Clinical Decision Making', basic: false, professional: true, enterprise: true },
      { name: 'Patient Safety Modules', basic: false, professional: true, enterprise: true }
    ],
  },
  {
    category: 'Additional Features',
    features: [
      { name: 'Mobile App Access', basic: true, professional: true, enterprise: true },
      { name: 'Offline Mode', basic: false, professional: true, enterprise: true },
      { name: 'Group Management Tools', basic: false, professional: false, enterprise: true },
      { name: 'API Access', basic: false, professional: false, enterprise: true },
      { name: 'Custom Branding', basic: false, professional: false, enterprise: true },
      { name: 'Integration Support', basic: false, professional: false, enterprise: true },
      { name: 'Multi-device Sync', basic: false, professional: true, enterprise: true },
      { name: 'Bulk User Management', basic: false, professional: false, enterprise: true }
    ],
  },
  {
    category: 'Exam Preparation Tools',
    features: [
      { name: 'Study Schedule Builder', basic: true, professional: true, enterprise: true },
      { name: 'Progress Timeline', basic: true, professional: true, enterprise: true },
      { name: 'Custom Study Plans', basic: false, professional: true, enterprise: true },
      { name: 'Exam Day Simulator', basic: false, professional: true, enterprise: true },
      { name: 'Performance Predictor', basic: false, professional: true, enterprise: true },
      { name: 'Stress Management Resources', basic: false, professional: true, enterprise: true }
    ],
  }
];

// Update the pricing plans with more detailed features
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
      { name: 'Mobile app access', included: true },
      { name: 'Study schedule builder', included: true },
      { name: 'Basic communication training', included: true }
    ],
    cta: 'Get started',
    highlight: 'Perfect for self-paced learners'
  },
  {
    name: 'Professional',
    price: '£99',
    description: 'Comprehensive preparation with advanced features and support.',
    mostPopular: true,
    features: [
      { name: 'All Basic features', included: true },
      { name: 'Advanced study materials', included: true },
      { name: 'Interactive learning modules', included: true },
      { name: 'Live mock sessions', included: true },
      { name: 'AI-powered practice cases', included: true },
      { name: 'Real-time voice interaction', included: true },
      { name: 'Advanced analytics & insights', included: true }
    ],
    cta: 'Start free trial',
    highlight: 'Most popular choice for PLAB 2 success'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for institutions and large groups.',
    features: [
      { name: 'All Professional features', included: true },
      { name: 'Custom institution materials', included: true },
      { name: 'Dedicated support team', included: true },
      { name: 'Group training sessions', included: true },
      { name: 'Bulk user management', included: true },
      { name: 'Custom branding & integration', included: true },
      { name: 'Advanced reporting suite', included: true }
    ],
    cta: 'Contact sales',
    highlight: 'Ideal for medical institutions'
  }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function FeatureIcon({ included }: { included: boolean }) {
  return included ? (
    <CheckIcon className="h-6 w-6 mx-auto text-green-600" aria-label="Included" />
  ) : (
    <XMarkIcon className="h-6 w-6 mx-auto text-gray-300" aria-label="Not included" />
  );
}

function ComparisonTable() {
  return (
    <div className="mt-24">
      <h3 className="text-2xl font-bold text-center mb-12">Detailed Feature Comparison</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 px-4">Feature</th>
              <th className="text-center py-4 px-4">Basic</th>
              <th className="text-center py-4 px-4">Professional</th>
              <th className="text-center py-4 px-4">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {featureComparison.map((category) => (
              <>
                <tr key={category.category} className="bg-gray-50">
                  <td colSpan={4} className="py-3 px-4 font-semibold">{category.category}</td>
                </tr>
                {category.features.map((feature) => (
                  <tr key={feature.name} className="border-b">
                    <td className="py-3 px-4">{feature.name}</td>
                    <td className="text-center py-3 px-4">
                      {feature.basic ? <CheckIcon className="h-5 w-5 mx-auto text-indigo-600" /> : null}
                    </td>
                    <td className="text-center py-3 px-4">
                      {feature.professional ? <CheckIcon className="h-5 w-5 mx-auto text-indigo-600" /> : null}
                    </td>
                    <td className="text-center py-3 px-4">
                      {feature.enterprise ? <CheckIcon className="h-5 w-5 mx-auto text-indigo-600" /> : null}
                    </td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function PricingSection({ plans }: PricingSectionProps) {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-indigo-600 tracking-wide uppercase">
              Pricing Plans
            </h2>
            <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl leading-tight">
              Choose the right plan for&nbsp;you
            </p>
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-center text-xl leading-8 text-gray-600 font-medium"
        >
          Affordable plans designed to help you succeed in your PLAB 2 journey
        </motion.p>
        
        {/* Feature comparison table */}
        <div className="mt-16 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="py-4 text-left text-lg font-semibold text-gray-900 pl-4">Features</th>
                {['Basic', 'Professional', 'Enterprise'].map((plan) => (
                  <th key={plan} className="px-6 py-4 text-center">
                    <span className="text-lg font-bold text-gray-900">{plan}</span>
                    <p className="mt-1 text-2xl font-extrabold text-indigo-600">
                      {plan === 'Basic' ? '£49' : plan === 'Professional' ? '£99' : 'Custom'}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-base">
              {featureComparison.map((category) => (
                <>
                  <tr key={category.category}>
                    <td colSpan={4} className="py-4 text-lg font-semibold text-gray-900 bg-gray-50 pl-4">
                      {category.category}
                    </td>
                  </tr>
                  {category.features.map((feature) => (
                    <tr key={feature.name} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 text-base text-gray-700 font-medium pl-4">
                        {feature.name}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <FeatureIcon included={feature.basic} />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <FeatureIcon included={feature.professional} />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <FeatureIcon included={feature.enterprise} />
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pricing cards */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan, planIdx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: planIdx * 0.1 }}
              className={classNames(
                plan.mostPopular ? 'lg:z-10 lg:rounded-b-none ring-2 ring-indigo-600' : 'lg:mt-8',
                planIdx === 0 ? 'lg:rounded-r-none' : '',
                planIdx === plans.length - 1 ? 'lg:rounded-l-none' : '',
                'flex flex-col justify-between rounded-3xl bg-white p-8 shadow-lg xl:p-10'
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={plan.name}
                    className={classNames(
                      plan.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                      'text-xl font-bold leading-8'
                    )}
                  >
                    {plan.name}
                  </h3>
                  {plan.mostPopular && (
                    <p className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600">
                      Most popular
                    </p>
                  )}
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">{plan.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-base text-gray-500">/month</span>}
                </p>
                <ul role="list" className="mt-8 space-y-4 text-base leading-6 text-gray-600">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex gap-x-3 items-center">
                      <CheckIcon className="h-6 w-6 flex-none text-green-600" aria-hidden="true" />
                      <span className="font-medium">{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                aria-describedby={plan.name}
                className={classNames(
                  plan.mostPopular
                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                  'mt-8 block rounded-md px-3 py-3 text-center text-base font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200'
                )}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* FAQ section with improved typography */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h3>
          <div className="grid gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold mb-2 text-gray-900">Can I switch plans later?</h4>
              <p className="text-base text-gray-700 leading-relaxed">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold mb-2 text-gray-900">Is there a free trial?</h4>
              <p className="text-base text-gray-700 leading-relaxed">
                Yes, we offer a 7-day free trial on our Professional plan so you can experience all the features before committing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold mb-2 text-gray-900">What payment methods do you accept?</h4>
              <p className="text-base text-gray-700 leading-relaxed">
                We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
import { FC } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { id: 1, name: 'Active Users', value: '10,000+' },
  { id: 2, name: 'Success Rate', value: '95%' },
  { id: 3, name: 'OSCE Scenarios', value: '500+' },
  { id: 4, name: 'Study Hours', value: '1M+' },
];

const StatsSection: FC = () => {
  return (
    <section className="py-24 bg-indigo-600">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by thousands of medical professionals
            </h2>
            <p className="mt-4 text-lg leading-8 text-indigo-200">
              Join our growing community of successful PLAB 2 candidates
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: stat.id * 0.1 }}
                className="flex flex-col bg-white/5 p-8 backdrop-blur-sm"
              >
                <dt className="text-sm font-semibold leading-6 text-indigo-200">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 
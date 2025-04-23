import { FC } from 'react';
import { motion } from 'framer-motion';

interface Feature {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface FeaturesGridProps {
  features: Feature[];
}

const FeaturesGrid: FC<FeaturesGridProps> = ({ features }) => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">Features</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to excel in PLAB 2
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col"
            >
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                {feature.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default FeaturesGrid; 
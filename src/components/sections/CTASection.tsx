import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Ready to ace your PLAB 2?
          <br />
          Get started today.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600"
        >
          Join thousands of medical professionals who have successfully prepared for their PLAB 2 examination with MedCoach AI.
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
            Start Free Trial
          </Link>
          <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
            Contact Sales <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 
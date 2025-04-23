import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'What is MedCoach AI?',
    answer: 'MedCoach AI is an advanced platform designed to help medical graduates prepare for the PLAB 2 exam through AI-powered voice interactions, realistic OSCE scenarios, and personalized feedback.',
  },
  {
    question: 'How does the voice interaction feature work?',
    answer: 'Our voice interaction feature uses advanced AI to simulate patient conversations. You can practice your communication skills by speaking naturally with the AI, which responds like a real patient would.',
  },
  {
    question: 'What types of OSCE scenarios are available?',
    answer: 'We offer a wide range of OSCE scenarios covering all major clinical areas tested in PLAB 2, including history taking, physical examination, communication skills, and clinical reasoning.',
  },
  {
    question: 'How does the real-time feedback work?',
    answer: 'Our AI analyzes your performance in real-time, providing feedback on your communication skills, clinical reasoning, and adherence to OSCE marking criteria. This helps you identify areas for improvement.',
  },
  {
    question: 'Can I practice with other candidates?',
    answer: 'Yes! Our study groups feature allows you to connect with other PLAB 2 candidates, practice together, and share experiences and insights.',
  },
  {
    question: 'What devices are supported?',
    answer: 'MedCoach AI works on any device with a web browser and microphone. We recommend using a laptop or desktop computer for the best experience.',
  },
];

const FAQSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Everything you need to know about MedCoach AI
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <dl className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-start justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDownIcon
                    className={`h-6 w-6 text-gray-500 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 
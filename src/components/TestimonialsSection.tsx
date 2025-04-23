import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    content: "MedCoach AI transformed my PLAB 2 preparation. The voice interaction feature helped me practice patient communication in a realistic way.",
    author: "Dr. Sarah Johnson",
    role: "PLAB 2 Passed",
    image: "/testimonials/sarah.jpg"
  },
  {
    content: "The real-time feedback and analytics helped me identify my weak areas. I improved significantly in just a few weeks.",
    author: "Dr. Michael Chen",
    role: "Medical Graduate",
    image: "/testimonials/michael.jpg"
  },
  {
    content: "The study groups feature allowed me to connect with other candidates. We practiced together and shared valuable insights.",
    author: "Dr. Aisha Patel",
    role: "PLAB 2 Candidate",
    image: "/testimonials/aisha.jpg"
  }
];

const TestimonialsSection: FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Join thousands of successful PLAB 2 candidates who have transformed their preparation with MedCoach AI.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col justify-between bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-12 w-12 mb-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                "{testimonial.content}"
              </blockquote>
              <div className="mt-6">
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-gray-600">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 
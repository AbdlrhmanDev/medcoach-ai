import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    content: "MedCoach AI transformed my PLAB 2 preparation. The realistic scenarios and instant feedback helped me gain confidence.",
    author: "Dr. Sarah Chen",
    role: "PLAB 2 Success Story",
    image: "/testimonials/sarah.jpg"
  },
  {
    content: "As a medical institution, we've seen remarkable improvement in our students' performance using MedCoach AI.",
    author: "Dr. James Wilson",
    role: "Medical Education Director",
    image: "/testimonials/james.jpg"
  },
  {
    content: "The Enterprise plan gave us exactly what we needed to train multiple students simultaneously. Great ROI.",
    author: "Dr. Maria Garcia",
    role: "Training Program Director",
    image: "/testimonials/maria.jpg"
  }
];

export default function TestimonialsSection() {
  return (
    <div className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 tracking-wide uppercase text-indigo-600">
              Testimonials
            </h2>
            <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl leading-tight">
              Trusted by Medical Professionals
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col justify-between bg-white p-8 shadow-lg ring-1 ring-gray-200 rounded-2xl hover:shadow-xl transition-shadow duration-300"
              >
                <blockquote className="text-lg leading-relaxed text-gray-700 font-medium italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="mt-8 flex items-center gap-x-4">
                  <Image
                    className="h-14 w-14 rounded-full bg-gray-50 object-cover ring-2 ring-white"
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={56}
                    height={56}
                  />
                  <div>
                    <div className="text-lg font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-base text-indigo-600 font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
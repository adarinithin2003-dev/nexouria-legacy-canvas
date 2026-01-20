import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Nexouria transformed our digital presence completely. Their attention to detail and design quality is unmatched.",
    author: "Sarah Chen",
    role: "CEO, TechVentures",
  },
  {
    quote: "Professional workflow from start to finish. They delivered ahead of schedule with exceptional quality.",
    author: "Raj Patel",
    role: "Founder, GrowthLabs",
  },
  {
    quote: "The team understood our vision perfectly and created something beyond our expectations.",
    author: "Maria Santos",
    role: "CMO, BrandCo",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-gradient-hero">
            Client Perspectives
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 md:p-8 card-glow h-full flex flex-col"
            >
              <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary/40 mb-4 md:mb-6 flex-shrink-0" />
              <p className="text-sm md:text-base text-foreground/90 mb-4 md:mb-6 leading-relaxed flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="flex-shrink-0">
                <div className="font-semibold text-foreground text-sm md:text-base">{testimonial.author}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

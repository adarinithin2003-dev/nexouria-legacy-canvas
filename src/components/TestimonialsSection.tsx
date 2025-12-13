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
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground tracking-tight">
            Client <span className="text-gradient-accent">Perspectives</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 card-glow"
            >
              <Quote className="w-10 h-10 text-primary/40 mb-6" />
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

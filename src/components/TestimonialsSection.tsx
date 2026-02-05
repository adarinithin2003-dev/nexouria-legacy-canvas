import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const featuredTestimonial = {
  quote: "I gave Nexouria a 3-week deadline. They delivered a stunning, fully functional website in just 4 days. I am absolutely stunned by their speed and quality.",
  author: "Divya",
  role: "Founder, DigiPulse",
  rating: 5,
};

const testimonials = [
  {
    quote: "Nexouria transformed our digital presence completely. Their attention to detail and design quality is unmatched.",
    author: "Sarah Chen",
    role: "CEO, TechVentures",
    rating: 5,
  },
  {
    quote: "Professional workflow from start to finish. They delivered ahead of schedule with exceptional quality.",
    author: "Raj Patel",
    role: "Founder, GrowthLabs",
    rating: 5,
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
            Client Stories
          </h2>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="glass rounded-2xl p-8 md:p-12 card-glow border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
            <Quote className="w-12 h-12 md:w-16 md:h-16 text-primary/30 mb-6" />
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/95 mb-8 leading-relaxed font-medium">
              "{featuredTestimonial.quote}"
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-semibold text-foreground text-lg md:text-xl">{featuredTestimonial.author}</div>
                <div className="text-sm md:text-base text-primary">{featuredTestimonial.role}</div>
              </div>
              <div className="flex gap-1">
                {[...Array(featuredTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 md:p-8 card-glow h-full flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-primary/40" />
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
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

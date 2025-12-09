import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full glass text-xs font-medium tracking-wider text-muted-foreground uppercase mb-6">
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground tracking-tight mb-6">
            Ready to Build Your <span className="text-gradient-accent">Legacy?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Let's discuss how we can transform your digital presence into a competitive advantage.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <motion.a
              href="https://wa.me/916302967060"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-whatsapp text-white font-medium text-base transition-all duration-300 shadow-lg shadow-whatsapp/30"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </motion.a>
            <motion.a
              href="mailto:nexouriadeveloper@gmail.com"
              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--foreground))", color: "hsl(var(--background))" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-foreground/30 text-foreground font-medium text-base transition-all duration-300 hover:border-foreground"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </motion.a>
          </motion.div>

          {/* Direct Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 text-muted-foreground"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm">Direct: +91 6302-967-060</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

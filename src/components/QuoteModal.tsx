import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { openWhatsAppQuote, SERVICE_OPTIONS, BUDGET_OPTIONS } from "@/lib/whatsapp";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal = ({ isOpen, onClose, preselectedService }: QuoteModalProps) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState(preselectedService || "");
  const [budget, setBudget] = useState("");

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !company.trim() || !service || !budget) {
      return;
    }

    openWhatsAppQuote({
      name: name.trim(),
      company: company.trim(),
      service,
      budget,
    });

    // Reset form and close modal
    setName("");
    setCompany("");
    setService("");
    setBudget("");
    onClose();
  };

  const isFormValid = name.trim() && company.trim() && service && budget;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Full screen overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
          />

          {/* Modal - Perfectly centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed left-[50%] top-[50%] z-[100] w-[calc(100%-2rem)] max-w-lg translate-x-[-50%] translate-y-[-50%]"
          >
            <div className="relative bg-black/95 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-xl max-h-[85vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity p-1"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-gradient-hero mb-2">
                  Get Your Quote
                </h2>
                <p className="text-muted-foreground text-sm">
                  Fill in your details and we'll connect on WhatsApp instantly
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white/5 border-white/10 focus:border-primary/50 h-12 rounded-xl"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    Company / Business
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Acme Inc."
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="bg-white/5 border-white/10 focus:border-primary/50 h-12 rounded-xl"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-foreground">
                    Service Needed
                  </label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger className="bg-white/5 border-white/10 focus:border-primary/50 h-12 rounded-xl">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0a0a0a] border-white/10 backdrop-blur-xl">
                      {SERVICE_OPTIONS.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className="hover:bg-white/10 focus:bg-white/10"
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-medium text-foreground">
                    Budget Range
                  </label>
                  <Select value={budget} onValueChange={setBudget}>
                    <SelectTrigger className="bg-white/5 border-white/10 focus:border-primary/50 h-12 rounded-xl">
                      <SelectValue placeholder="Select your budget" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0a0a0a] border-white/10 backdrop-blur-xl">
                      {BUDGET_OPTIONS.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className="hover:bg-white/10 focus:bg-white/10"
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={!isFormValid}
                  className="w-full h-14 mt-6 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#22c35e] hover:to-[#0d7a6d] text-white font-semibold text-base shadow-lg shadow-[#25D366]/30 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start WhatsApp Chat
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

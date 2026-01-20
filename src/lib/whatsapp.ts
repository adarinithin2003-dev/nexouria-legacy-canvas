// Smart Quote WhatsApp Logic
// Constructs and opens WhatsApp URL with pre-filled message

export interface QuoteData {
  name: string;
  company: string;
  service: string;
  budget: string;
}

export const openWhatsAppQuote = (data: QuoteData) => {
  const { name, company, service, budget } = data;
  
  const message = `Hi Nexouria, I am ${name} from ${company}. I am interested in ${service}. My budget is around ${budget}.`;
  const encodedMessage = encodeURIComponent(message);
  
  const whatsappUrl = `https://wa.me/916302967060?text=${encodedMessage}`;
  
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};

export const PHONE_NUMBER = "916302967060";

export const SERVICE_OPTIONS = [
  { value: "Web Development", label: "Web Development" },
  { value: "Digital Marketing", label: "Digital Marketing" },
  { value: "Brand Identity", label: "Brand Identity" },
  { value: "Full Digital Package", label: "Full Digital Package" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "₹25,000 - ₹50,000", label: "₹25,000 - ₹50,000" },
  { value: "₹50,000 - ₹1,00,000", label: "₹50,000 - ₹1,00,000" },
  { value: "₹1,00,000 - ₹2,50,000", label: "₹1,00,000 - ₹2,50,000" },
  { value: "₹2,50,000+", label: "₹2,50,000+" },
] as const;

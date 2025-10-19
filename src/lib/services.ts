import type { Service, Stat } from '$lib/index';
import { LucideLightbulb, LucideLoaderPinwheel, LucideShieldAlert, LucideShieldCheck, LucideShieldQuestionMark} from 'lucide-svelte';

export const services: Service[] = [
  {
    title: "Trademark Registration",
    description: "Secure your brand identity with trademark protection in Nigeria. Register a business name, logo, or slogan to prevent unauthorized use and build brand trust in Nigeria.",
    icon: LucideShieldCheck,
    link: "https://portal.iponigeria.com/"
  },
  {
    title: "Patent Registration",
    description: "Protect your inventions and innovations with a patent in Nigeria. A patent grants you exclusive rights to your technical solutions or new products, ensuring others cannot use or reproduce your ideas without permission. ",
    icon: LucideLightbulb,
    link: "https://portal.iponigeria.com/"
  },
  {
    title: "Industrial Design",
    description: "Safeguard the visual appearance of your product with industrial design registration in Nigeria. Register your design to protect its unique shape, pattern, or look, giving your product a competitive edge in the marketplace. ",
    icon: LucideLoaderPinwheel,
    link: "https://portal.iponigeria.com/"
  },
  {
    title: "Oppositions",
    description: " You can also file a Trademark Opposition against any published mark that conflicts with your registered mark.",
    icon: LucideShieldAlert,
    link: "https://portal.iponigeria.com/opposition"
  }
];

export const features: string[] = [
  "Fast online application process",
  "Secure document submission",
  "Real-time application tracking",
  "Expert support team",
  "Comprehensive IP database search",
  "Digital certificates"
];

export const stats: Stat[] = [
  { value: "50,000+", label: "Trademarks Registered" },
  { value: "10,000+", label: "Patents Filed" },
  { value: "25,000+", label: "Designs Protected" },
  { value: "99%", label: "Client Satisfaction" }
];
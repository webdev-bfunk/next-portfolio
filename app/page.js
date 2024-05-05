import ContactSection from "./_components/contact/ContactSection";
import FaqSection from "./_components/faqs/FaqSection";
import Header from "./_components/header/Header";
import ServicesSection from "./_components/services/ServicesSection";
import SkillsSection from "./_components/skills/SkillsSection";
import TestimonialsSection from "./_components/testimonials/TestimonialSection";


export default function Home() {
  return (
    <main>
      <Header />
      <SkillsSection />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}

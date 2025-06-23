import ContactSection from "../../components/home/ContactSection";
import HeroSection from "../../components/home/HeroSection";
import ServicesSection from "../../components/home/ServicesSection";
import TestimonialSection from "../../components/home/TestimonialSection";
import WhyUsSection from "../../components/home/WhyUsSection";

export default function HomePage() {
  return (
    <div className="min-h-screen mx-auto shadow-lg mb-6 lg:mb-12">
      <HeroSection></HeroSection>
      <ServicesSection></ServicesSection>
      <WhyUsSection></WhyUsSection>
      <TestimonialSection></TestimonialSection>
      <ContactSection></ContactSection>
    </div>
  );
}

import HeroSection from "../../components/home/HeroSection";
import ServicesSection from "../../components/home/ServicesSection";

export default function HomePage() {
  return (
    <div className="min-h-screen mx-auto ">
      <HeroSection></HeroSection>
      <ServicesSection></ServicesSection>
    </div>
  );
}

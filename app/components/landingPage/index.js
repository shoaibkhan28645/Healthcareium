import HeroSection from "./HeroSection";
import PartnershipSection from "./OurPatners";
import SeniorCareTimeline from "./Working";
import ServicesCards from "./cards";
import FAQ from "./FAQ";
import TestimonialSlider from "./testimonial";
export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <ServicesCards />
      <PartnershipSection />
      <SeniorCareTimeline />
      <TestimonialSlider />
      <FAQ />
    </div>
  );
}

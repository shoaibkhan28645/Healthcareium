import React from "react";
import HeroSection from "./HeroSection";
import Reviews from "./Reviews";
import Journey from "./Journey";
import Experts from "./Experts";
import FAQ from "./FAQ";
import CTA from "./CTA";
const page = () => {
  return (
    <div>
      <HeroSection />
      <Reviews />
      <Journey />
      <Experts />
      <CTA/>
      <FAQ/>
    </div>
  );
};

export default page;

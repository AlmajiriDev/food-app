import React from 'react'
import HeroSection from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";
import QuoteSection from "../components/QuoteSection";
import ChefSections from "../components/ChefSections";

function Home() {
  return (
    <div>
        <HeroSection />
        <ImproveSkills />
        <QuoteSection />
        <ChefSections />
    </div>
  )
}

export default Home
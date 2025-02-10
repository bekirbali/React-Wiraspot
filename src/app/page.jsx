"use client";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Benefits from "../components/sections/Benefits";
import HowItWorks from "../components/sections/HowItWorks";
import Pricing from "../components/sections/Pricing";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}

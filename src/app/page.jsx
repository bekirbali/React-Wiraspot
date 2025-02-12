"use client";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Purchase from "../components/sections/Purchase";
import HowToConnect from "../components/sections/HowToConnect";
import Features from "../components/sections/Features";
import Team from "../components/sections/Team";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <Purchase />
      <HowToConnect />
      <Features />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

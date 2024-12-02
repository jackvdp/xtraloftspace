"use client"

import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import AboutSection from "@/components/About";
import ServicesSection from "@/components/Services";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutSection />
      <ServicesSection />
    </>
  );
}

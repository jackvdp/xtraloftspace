"use client"

import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import AboutSection from "@/components/About";
import ServicesSection from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/Footer";
import ContactSection from "@/components/Contact";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <CaseStudies />
      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  );
}

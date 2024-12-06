"use client"

import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import AboutSection from "@/components/About";
import ServicesSection from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/Footer";
import ContactSection from "@/components/Contact";
import PhotoGallery from "@/components/PhotoGallery";
import ScrollIndicator from "@/components/ScrollIndicator";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <NavBar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <CaseStudies />
      <FAQSection />
      <PhotoGallery />
      <ContactSection />
      <Footer />
      <ScrollIndicator />
    </>
  );
}

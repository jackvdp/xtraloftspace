"use client"

import Hero from "../components/Home/Hero";
import Index from "@/components/Navbar";
import AboutSection from "@/components/Home/About";
import ServicesSection from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import FAQSection from "../components/Home/FAQ";
import Footer from "@/components/Footer";
import ContactSection from "@/components/Contact";
import PhotoGallery from "@/components/Home/PhotoGallery";
import ScrollIndicator from "@/components/ScrollIndicator";
import Testimonials from "@/components/Testimonials";
import CustomCursor from "@/components/CustomCursor";
import PageLabel from "@/components/PageLabel";

export default function Home() {
    return (
        <div className="relative">
            <Index/>
            <Hero/>
            <AboutSection/>
            <ServicesSection/>
            <CaseStudies/>
            <Testimonials/>
            <FAQSection/>
            <PhotoGallery/>
            <ContactSection/>
            <Footer/>
            <ScrollIndicator/>
            <CustomCursor/>
            <PageLabel text={'Homepage'}/>
        </div>
    );
}

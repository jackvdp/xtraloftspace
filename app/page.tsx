"use client"

import Hero from "../components/Home/Hero";
import AboutSection from "@/components/Home/About";
import ServicesSection from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import FAQSection from "../components/Home/FAQ";
import Footer from "@/components/Resuables/Footer";
import ContactSection from "@/components/Home/Contact";
import PhotoGallery from "@/components/Home/PhotoGallery";
import ScrollIndicator from "@/components/Resuables/ScrollIndicator";
import Testimonials from "@/components/Testimonials";
import CustomCursor from "@/components/Resuables/CustomCursor";
import PageLabel from "@/components/Resuables/PageLabel";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <div className="relative">
            <Navbar/>
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

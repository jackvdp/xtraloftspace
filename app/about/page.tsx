"use client"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import PageLabel from "@/components/PageLabel";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/About/Hero";
import Owners from "@/components/About/Owners";
import WhyUs from "@/components/About/WhyUs";
import CTA from "@/components/CTA";
import MapSection from "@/components/About/Map";

export default function AboutUsPage() {
    return (
        <div className="flex flex-col">
            <Navbar useDarkText={true}/>
            <Hero/>
            <Owners/>
            <WhyUs/>
            <MapSection/>
            <CTA/>
            <Footer/>
            <ScrollIndicator/>
            <PageLabel text={"About Us"}/>
            <CustomCursor/>
        </div>
    );
}
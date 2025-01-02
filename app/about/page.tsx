"use client"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Resuables/Footer";
import ScrollIndicator from "@/components/Resuables/ScrollIndicator";
import PageLabel from "@/components/Resuables/PageLabel";
import CustomCursor from "@/components/Resuables/CustomCursor";
import Hero from "@/components/About/Hero";
import Owners from "@/components/About/Owners";
import WhyUs from "@/components/About/WhyUs";
import CTA from "@/components/Resuables/CTA";
import MapSection from "@/components/Resuables/Map";

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
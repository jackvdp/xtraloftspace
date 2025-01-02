"use client"

import Navbar from "@/components/Navbar";
import ScrollIndicator from "@/components/Resuables/ScrollIndicator";
import CustomCursor from "@/components/Resuables/CustomCursor";
import PageLabel from "@/components/Resuables/PageLabel";
import ServicesDetails from "@/components/Services/ServicesDetails";
import Footer from "@/components/Resuables/Footer";
import Contact from "@/components/Home/Contact";
import ServicesList from "@/components/Services/ServicesList";
import ServicesHeader from "@/components/Services/ServicesHeader";

export default function Home() {
    return (
        <div>
            <Navbar/>
            <ServicesHeader/>
            <ServicesList/>
            <ServicesDetails/>
            <div className={"w-full bg-zinc-100"}>
                <Contact/>
            </div>
            <ScrollIndicator/>
            <CustomCursor/>
            <PageLabel text={'Services'}/>
            <Footer/>
        </div>
    );
}
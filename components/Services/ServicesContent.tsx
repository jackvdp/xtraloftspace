"use client"

import Navbar from "@/components/Navbar";
import ScrollIndicator from "@/components/Resuables/ScrollIndicator";
import CustomCursor from "@/components/Resuables/CustomCursor";
import PageLabel from "@/components/Resuables/PageLabel";
import ServicesDetails from "@/components/Services/ServicesDetails";
import Footer from "@/components/Resuables/Footer";
import Contact from "@/components/Home/Contact";
import ServicesList from "@/components/Services/ServicesList";
import RevealHeader from "@/components/Resuables/RevealHeader";
import React from "react";

export default function ServicesContent() {
    return (
        <div>
            <Navbar/>
            <RevealHeader mainText={"SERVICES"} subText={"Explore how we can help you"}/>
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
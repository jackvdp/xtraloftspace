"use client"

import Navbar from "@/components/Navbar";
import ScrollIndicator from "@/components/ScrollIndicator";
import CustomCursor from "@/components/CustomCursor";
import PageLabel from "@/components/PageLabel";
import ServicesDetails from "@/components/Services/ServicesDetails";
import Footer from "@/components/Footer";
import ServicesHeader from "@/components/Services/ServicesFullHeader";
import React from "react";
import Contact from "@/components/Contact";
import ServicesList from "@/components/Services/ServicesList";

export default function Home() {
    return (
        <div className="relative">
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
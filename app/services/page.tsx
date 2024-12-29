"use client"

import Navbar from "@/components/Navbar";
import ScrollIndicator from "@/components/ScrollIndicator";
import CustomCursor from "@/components/CustomCursor";
import PageLabel from "@/components/PageLabel";
import ServicesPage from "@/components/Services/ServicesFull";
import Footer from "@/components/Footer";
import ServicesHeader from "@/components/Services/ServicesFullHeader";
import React from "react";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <div className="relative">
            <Navbar/>
            <ServicesHeader/>
            <ServicesPage/>
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
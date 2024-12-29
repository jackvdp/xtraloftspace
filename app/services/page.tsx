"use client"

import Navbar from "@/components/Navbar";
import ScrollIndicator from "@/components/ScrollIndicator";
import CustomCursor from "@/components/CustomCursor";
import PageLabel from "@/components/PageLabel";
import ServicesPage from "@/components/Services/ServicesFull";

export default function Home() {
    return (
        <div className="relative">
            <Navbar/>
            <ServicesPage/>
            <ScrollIndicator/>
            <CustomCursor/>
            <PageLabel text={'Services'}/>
        </div>
    );
}
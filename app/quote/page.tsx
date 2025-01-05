"use client"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Resuables/Footer";
import ScrollIndicator from "@/components/Resuables/ScrollIndicator";
import PageLabel from "@/components/Resuables/PageLabel";
import CustomCursor from "@/components/Resuables/CustomCursor";
import CTA from "@/components/Resuables/CTA";
import QuoteForm from "@/components/Quote";

export default function GetAQuotePage() {
    return (
        <div className="flex flex-col">
            <Navbar useDarkText={true}/>
            <QuoteForm/>
            <CTA/>
            <Footer/>
            <ScrollIndicator/>
            <PageLabel text={"Get-A-Quote"}/>
            <CustomCursor/>
        </div>
    );
}
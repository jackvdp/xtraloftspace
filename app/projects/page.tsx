"use client"

import Navbar from "@/components/Navbar";
import RevealHeader from "@/components/Resuables/RevealHeader";
import ProjectsList from "@/components/Projects/ProjectsList";
import ProjectsDetails from "@/components/Projects/ProjectsDetails";
import CustomCursor from "@/components/Resuables/CustomCursor";
import ScrollIndicator from "@/components/Resuables/ScrollIndicator";
import PageLabel from "@/components/Resuables/PageLabel";
import Footer from "@/components/Resuables/Footer";
import React from "react";
import CTA from "@/components/Resuables/CTA";

export default function Home() {
    return (
        <div>
            <Navbar/>
            <RevealHeader mainText={"PROJECTS"} subText={"We'll let our work do the talking"}/>
            <ProjectsList/>
            <ProjectsDetails/>
            <ScrollIndicator/>
            <CustomCursor/>
            <PageLabel text={'Projects'}/>
            <CTA/>
            <Footer/>
        </div>
    );
}
"use client";

import React from "react";
import {cases} from "@/components/CaseStudies/cases";
import SingleProject from "@/components/Projects/SingleProject";

/**
 * This is pinned behind the RevealHeader for the first 100vh.
 * Then it becomes scrollable.
 */
export default function ProjectsDetails() {
    return (
        <div className="w-full flex flex-col relative overflow-hidden">
            {cases.map((project, index) => (
                <SingleProject key={index} service={project} index={index}/>
            ))}
        </div>
    );
}
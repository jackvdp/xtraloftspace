"use client";

import React, {useRef} from "react";
import {motion, MotionValue, useScroll, useTransform} from "framer-motion";
import ParallaxImage from "@/components/Resuables/parallaxImage";
import {CaseStudy} from "@/components/CaseStudies/cases";
import ServiceText from "./ProjectText";

interface ServiceImageProps {
    scrollYProgress: MotionValue<number>;
    imageSrc: string;
    altText: string;
    reverseLayout: boolean; // new prop
}

function ServiceImage({
                          scrollYProgress,
                          imageSrc,
                          altText,
                          reverseLayout,
                      }: ServiceImageProps) {
    const scale = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0.8, 1, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0]);

    const xRange = reverseLayout ? [100, 0, 0, 100] : [-100, 0, 0, -100];
    const x = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], xRange);

    return (
        <motion.div
            style={{scale, opacity, x}}
            className="w-full h-[40vh] md:h-[60vh] rounded-lg overflow-hidden"
        >
            <ParallaxImage src={imageSrc} alt={altText} className="rounded-2xl"/>
        </motion.div>
    );
}

export default function SingleService({service, index}: { service: CaseStudy; index: number }) {
    const blockRef = useRef<HTMLDivElement | null>(null);
    const {scrollYProgress} = useScroll({
        target: blockRef,
        offset: ["start end", "end start"],
    });

    const reverseLayout = index % 2 === 1;

    return (
        <div ref={blockRef} className="relative min-h-screen flex items-center p-6 lg:p-24">
            <div
                className={`flex flex-col lg:flex-row ${
                    reverseLayout ? "lg:flex-row-reverse" : ""
                } items-center gap-8 w-full`}
            >
                {/* Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <ServiceImage
                        scrollYProgress={scrollYProgress}
                        imageSrc={service.image}
                        altText={service.title}
                        reverseLayout={reverseLayout}
                    />
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2 flex justify-center mt-0 lg:mt-auto">
                    <ServiceText
                        scrollYProgress={scrollYProgress}
                        caseStudy={service}
                        index={index}
                        reverseLayout={reverseLayout}
                    />
                </div>
            </div>
        </div>
    );
}
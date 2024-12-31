"use client";

import React, {useRef} from "react";
import {motion, MotionValue, useScroll, useTransform} from "framer-motion";
import ParallaxImage from "@/components/ui/parallaxImage";
import {services, Service} from "@/components/Services/Service";

//
// 1) ServiceImage component
//
function ServiceImage({
                          scrollYProgress,
                          imageSrc,
                          altText,
                      }: {
    scrollYProgress: MotionValue<number>;
    imageSrc: string;
    altText: string;
}) {
    // Adjust these transforms as you like
    const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.8, 1, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
    const x = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [-100, 0, 0, -100]);

    return (
        <motion.div
            style={{scale, opacity, x}}
            className="w-full max-w-lg h-[60vh] rounded-lg overflow-hidden"
        >
            <ParallaxImage src={imageSrc} alt={altText} className="rounded-2xl"/>
        </motion.div>
    );
}

//
// 2) ServiceText component
//
function ServiceText({
                         scrollYProgress,
                         title,
                         description,
                         index,
                     }: {
    scrollYProgress: MotionValue<number>;
    title: string;
    description: string;
    index: number;
}) {
    const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
    const x = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [100, 0, 0, 100]);
    const titleY = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [20, 0, 0, 20]);
    const descriptionY = useTransform(scrollYProgress, [0, 0.35, 0.75, 1], [30, 0, 0, 30]);

    return (
        <motion.div style={{opacity, x}} className="max-w-lg px-8">
            {/* Giant index number in background */}
            <motion.div
                style={{opacity}}
                className="absolute -top-72 -z-10 text-[40vh] font-bold text-gray-300/30"
            >
                {(index + 1).toString().padStart(2, "0")}
            </motion.div>

            <motion.h2 style={{y: titleY}} className="text-4xl font-bold text-black mb-6">
                {title}
            </motion.h2>

            <motion.p style={{y: descriptionY}} className="text-lg text-black/70">
                {description}
            </motion.p>
        </motion.div>
    );
}

//
// 3) SingleService block component
//    This wraps each image+text pair and manages the scroll tracking
//
function SingleService({service, index}: { service: Service; index: number }) {
    // The ref for the block we want to track scroll over
    const blockRef = useRef<HTMLDivElement | null>(null);

    // This sets up a scroll listener specifically for blockRef
    // "start end" => animate in as soon as top of the block hits bottom of viewport
    // "end start" => animate out once bottom of the block hits top of viewport
    const {scrollYProgress} = useScroll({
        target: blockRef,
        offset: ["start end", "end start"],
    });

    return (
        <div
            ref={blockRef}
            className="relative h-screen flex flex-col md:flex-row items-center justify-center p-16"
        >
            <ServiceImage
                scrollYProgress={scrollYProgress}
                imageSrc={service.image}
                altText={service.title}
            />

            <ServiceText
                scrollYProgress={scrollYProgress}
                title={service.title}
                description={service.fullDescription}
                index={index}
            />
        </div>
    );
}

//
// 4) ServicesDetails main component
//
const ServicesDetails = () => {
    return (
        <div className="w-full flex flex-col">
            {services.map((service, index) => (
                <SingleService key={index} service={service} index={index}/>
            ))}
        </div>
    );
};

export default ServicesDetails;
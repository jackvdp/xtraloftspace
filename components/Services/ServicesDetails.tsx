"use client";

import React, {useRef} from "react";
import {motion, MotionValue, useScroll, useTransform} from "framer-motion";
import ParallaxImage from "@/components/ui/parallaxImage";
import {services, Service} from "@/components/Services/Service";

function ServiceImage({
                          scrollYProgress,
                          imageSrc,
                          altText,
                      }: {
    scrollYProgress: MotionValue<number>;
    imageSrc: string;
    altText: string;
}) {
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
        <motion.div style={{opacity, x}} className="relative max-w-lg h-[60vh] flex flex-col">
            <motion.div
                style={{opacity}}
                className="absolute -z-10 leading-none text-[40vh] font-bold text-gray-300/30"
            >
                {(index + 1).toString().padStart(2, "0")}
            </motion.div>
            <div className="relative mt-auto">
                {/* Giant index number positioned behind title */}


                {/* Title */}
                <motion.h2 style={{y: titleY}} className="relative text-4xl font-bold text-black mb-6">
                    {title}
                </motion.h2>

                {/* Description */}
                <motion.p style={{y: descriptionY}} className="relative text-lg text-black/70">
                    {description}
                </motion.p>
            </div>
        </motion.div>
    );
}

function SingleService({service, index}: { service: Service; index: number }) {
    const blockRef = useRef<HTMLDivElement | null>(null);
    const {scrollYProgress} = useScroll({
        target: blockRef,
        offset: ["start end", "end start"],
    });

    return (
        <div
            ref={blockRef}
            className="relative h-screen flex flex-col md:flex-row items-center justify-center gap-8 p-16"
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
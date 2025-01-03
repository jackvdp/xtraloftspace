"use client";

import React, {useRef} from "react";
import {motion, MotionValue, useScroll, useTransform} from "framer-motion";
import ParallaxImage from "@/components/Resuables/parallaxImage";
import {Service} from "@/components/Services/Service";

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

interface ServiceTextProps {
    scrollYProgress: MotionValue<number>;
    title: string;
    description: string;
    index: number;
    reverseLayout: boolean;
}

function ServiceText({
                         scrollYProgress,
                         title,
                         description,
                         index,
                         reverseLayout,
                     }: ServiceTextProps) {
    const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0]);

    const xRange = reverseLayout ? [-100, 0, 0, -100] : [100, 0, 0, 100];
    const x = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], xRange);
    const titleY = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [20, 0, 0, 20]);
    const descriptionY = useTransform(scrollYProgress, [0, 0.35, 0.75, 1], [30, 0, 0, 30]);

    return (
        <div className="relative w-full">
            <motion.div style={{opacity, x}} className="relative px-4 lg:px-8">
                {/* Large index number behind */}
                <motion.div style={{opacity}} className="absolute right-0 bottom-12 -z-10 hidden lg:block">
          <span
              className="text-[50vh] font-bold text-zinc-100"
          >
            {(index + 1).toString().padStart(2, "0")}
          </span>
                </motion.div>

                {/* Mobile version of the number */}
                <motion.div style={{opacity}} className="lg:hidden absolute -top-16 right-0 -z-10">
          <span
              className="text-[20vh] font-bold"
              style={{
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(0,0,0,0.1)",
              }}
          >
            {(index + 1).toString().padStart(2, "0")}
          </span>
                </motion.div>

                {/* Title */}
                <motion.h2 style={{y: titleY}} className="text-4xl lg:text-6xl font-bold text-black mb-4 lg:mb-8">
                    {title}
                </motion.h2>

                {/* Description */}
                <motion.p style={{y: descriptionY}} className="text-lg lg:text-xl text-black/70">
                    {description}
                </motion.p>
            </motion.div>
        </div>
    );
}

export default function SingleService({service, index}: { service: Service; index: number }) {
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
                        title={service.title}
                        description={service.fullDescription}
                        index={index}
                        reverseLayout={reverseLayout}
                    />
                </div>
            </div>
        </div>
    );
}
import {motion, MotionValue, useTransform} from "framer-motion";
import {cases, CaseStudy} from "@/components/CaseStudies/cases";
import Image from "next/image";
import React from "react";

export default function BackgroundImageGrid({scrollYProgress}: { scrollYProgress: MotionValue<number> }) {
    const splitArray = (arr) => {
        const half = Math.ceil(arr.length / 2);
        return [arr.slice(0, half), arr.slice(half)];
    };
    const [topRow, bottomRow] = splitArray(cases);

    return (
        <div
            className="flex absolute inset-0 flex-col justify-center gap-8 overflow-hidden">
            <motion.div
                className="flex gap-8"
                style={{x: useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])}}
            >
                {topRow.map((service) => (
                    <GridImage service={service} key={`top-dup-${service.title}`}/>
                ))}
                {/* Duplicate for infinite scroll effect */}
                {topRow.map((service) => (
                    <GridImage service={service} key={`top-${service.title}`}/>
                ))}
            </motion.div>

            <motion.div
                className="flex gap-8"
                style={{x: useTransform(scrollYProgress, [0, 1], ['0%', '50%'])}}
            >
                {bottomRow.map((service) => (
                    <GridImage service={service} key={`bottom-${service.title}`}/>
                ))}
                {/* Duplicate for infinite scroll effect */}
                {bottomRow.map((service) => (
                    <GridImage service={service} key={`bottom-dup-${service.title}`}/>
                ))}
            </motion.div>
        </div>
    )
}

function GridImage({service}: { service: CaseStudy }) {
    return (
        <div className="h-48 w-48 md:w-[60vh] md:h-[40vh] flex-shrink-0">
            <Image
                src={service.image}
                alt={service.title}
                width={800}
                height={500}
                quality={75}
                sizes="(max-width: 768px) 192px, 80vw"
                className="w-full h-full object-cover rounded-lg"
                priority
            />
        </div>
    )
}
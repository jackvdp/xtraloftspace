"use client"

import React from 'react';
import ParallaxImage from "@/components/Resuables/parallaxImage";
import {motion} from 'framer-motion';

const QuoteHeader = () => {
    return (
        <div className="w-full relative h-[250px] md:h-[300px]">
            <ParallaxImage
                src="/images/hero/hero3.jpg"
                alt="Quote background"
                priority
                startScale={1}
                endScale={1.15}
            />
            <div className="absolute inset-0 bg-black/30"/>
            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center z-10 text-white"> {/* Content wrapper */}
                <motion.h2
                    initial={{opacity: 0, y: -20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    className="text-4xl font-bold text-center mb-4"
                >
                    Get a{' '}
                    <span className="font-thin">Quote</span>
                </motion.h2>
                <motion.p
                    initial={{opacity: 0, y: -20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{delay: 0.2}}
                    className="text-gray-200 text-center text-lg"
                >
                    Fill in the form below and receive your free quote within 24 hours
                </motion.p>
            </div>
        </div>
    );
};

export default QuoteHeader;
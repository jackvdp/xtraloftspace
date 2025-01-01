import {motion} from "framer-motion";
import React from "react";

export default function Hero() {
    return (
        <section className="container mx-auto px-4 lg:px-8 pb-16 lg:pb-20 pt-24 lg:pt-32">
            <motion.h1
                initial={{opacity: 0, y: -20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.2}}
                transition={{duration: 0.6}}
                className="text-4xl lg:text-6xl font-bold mb-6 text-center"
            >
                About <span className="font-thin">Us</span>
            </motion.h1>

            <motion.p
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.2}}
                transition={{duration: 0.6, delay: 0.2}}
                className="text-center max-w-3xl mx-auto text-lg lg:text-xl text-gray-700"
            >
                We’re a dedicated team serving <strong>North London</strong> and <strong>Hertfordshire</strong>,
                focused on delivering loft conversions and home transformations
                that truly exceed your expectations. As a small, family-run
                business, we bring a personal touch and unwavering commitment
                to every project.
            </motion.p>
        </section>
    )
}
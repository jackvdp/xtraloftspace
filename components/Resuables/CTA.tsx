import {motion} from "framer-motion";
import React from "react";
import {BigCustomButton} from "@/components/Resuables/CustomButtons";

export default function CTA() {
    return (
        <section className="bg-black text-white py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
                <motion.h2
                    initial={{opacity: 0, y: -20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.6}}
                    className="text-3xl lg:text-5xl font-bold mb-6"
                >
                    Transform Your Space with Us
                </motion.h2>
                <motion.p
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.6, delay: 0.2}}
                    className="text-lg lg:text-xl max-w-3xl text-gray-300 mb-8"
                >
                    Ready to bring your vision to life? Let’s work together to create
                    a home you’ll love for years to come.
                </motion.p>
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.6, delay: 0.4}}
                    className="px-8 py-4"
                >
                    <BigCustomButton text="Contact Us" href={"/contact"}/>
                </motion.div>


            </div>
        </section>
    )
}
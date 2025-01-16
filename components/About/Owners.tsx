import {motion} from "framer-motion";
import ParallaxImage from "@/components/Resuables/parallaxImage";
import React from "react";

const OWNER_PROFILES = [
    {
        name: "Jordan Lumsden",
        role: "Co-Founder",
        image: "/images/owners/image002.jpg",
        description: `Jordan brings over a decade of experience in home renovations 
      across North London and Hertfordshire. With a sharp eye for detail and 
      unwavering dedication to each project, he ensures that every transformation 
      exceeds your expectations—both in craftsmanship and client care.`,
    },
    {
        name: "Tom Simpson",
        role: "Co-Founder",
        image: "/images/owners/image003.jpg",
        description: `Tom oversees our projects from concept to completion, 
      bringing expertise across all aspects of home improvements. Known for his 
      friendly, professional approach, he ensures clear communication throughout 
      your project. His number one priority: delivering exceptional results while 
      making the renovation journey smooth and enjoyable.`,
    },
];

export default function Owners() {
    return (
        <section className="container mx-auto px-4 lg:px-8 pb-16 lg:pb-24">
            <div className="flex flex-col gap-16">
                {OWNER_PROFILES.map((owner, index) => {
                    const isReversed = index % 2 !== 0; // alternate layout
                    return (
                        <motion.div
                            key={owner.name}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, amount: 0.2}}
                            transition={{duration: 0.6, delay: 0.1 * index}}
                            className={`flex flex-col lg:flex-row items-center gap-12 ${
                                isReversed ? "lg:flex-row-reverse" : ""
                            }`}
                        >
                            {/* Owner Image */}
                            <div
                                className="relative w-full lg:w-1/3 h-[28rem] md:h-[42rem] rounded-lg overflow-hidden mb-8 lg:mb-0">
                                <ParallaxImage
                                    src={owner.image}
                                    alt={owner.name}
                                    className="object-cover"
                                />
                            </div>

                            {/* Owner Text - adjusted width and spacing */}
                            <div className="w-full lg:w-2/3 flex flex-col justify-center">
                                <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                                    {owner.name}
                                </h2>
                                <h3 className="text-xl lg:text-2xl font-light text-gray-500 mb-8">
                                    {owner.role}
                                </h3>
                                <p className="text-lg lg:text-xl text-gray-700">{owner.description}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    )
}
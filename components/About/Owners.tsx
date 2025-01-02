import {motion} from "framer-motion";
import ParallaxImage from "@/components/Resuables/parallaxImage";
import React from "react";

const OWNER_PROFILES = [
    {
        name: "Jordan",
        role: "Co-Founder & Master Builder",
        image: "/images/profile.jpeg",
        description: `Jordan has spent the last decade developing loft 
      conversions and extensions across North London and Hertfordshire. 
      With a sharp eye for detail and unwavering dedication to each project, 
      he ensures that every conversion exceeds your expectations—both in 
      craftsmanship and client care.`,
    },
    {
        name: "Tom",
        role: "Co-Founder & Project Manager",
        image: "/images/profile2.jpg",
        description: `Tom coordinates every aspect of our builds, from initial 
      planning to the finishing touches. Known for his friendly, professional 
      approach, Tom keeps clients informed every step of the way. 
      His number one priority: making sure the journey is smooth and 
      the results spectacular.`,
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
                            className={`flex flex-col lg:flex-row items-center gap-8 ${
                                isReversed ? "lg:flex-row-reverse" : ""
                            }`}
                        >
                            {/* Owner Image */}
                            <div className="relative w-full lg:w-1/2 h-80 md:h-[32rem] rounded-lg overflow-hidden">
                                <ParallaxImage
                                    src={owner.image}
                                    alt={owner.name}
                                    className="object-cover"
                                />
                            </div>

                            {/* Owner Text */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                                    {owner.name}
                                </h2>
                                <h3 className="text-xl lg:text-2xl font-light text-gray-500 mb-6">
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
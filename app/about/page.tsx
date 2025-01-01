"use client";

import React from "react";
import {motion} from "framer-motion";
import ParallaxImage from "@/components/ui/parallaxImage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import PageLabel from "@/components/PageLabel";
import CustomCursor from "@/components/CustomCursor";

const OWNER_PROFILES = [
    {
        name: "Jordan",
        role: "Co-Founder & Master Builder",
        image: "/images/about1.jpeg",
        description: `Jordan has spent the last decade developing loft 
      conversions and extensions across North London and Hertfordshire. 
      With a sharp eye for detail and unwavering dedication to each project, 
      he ensures that every conversion exceeds your expectations—both in 
      craftsmanship and client care.`,
    },
    {
        name: "Tom",
        role: "Co-Founder & Project Manager",
        image: "/images/about2.jpeg",
        description: `Tom coordinates every aspect of our builds, from initial 
      planning to the finishing touches. Known for his friendly, professional 
      approach, Tom keeps clients informed every step of the way. 
      His number one priority: making sure the journey is smooth and 
      the results spectacular.`,
    },
];

const OUR_OFFERINGS = [
    {
        title: "A dedicated project management service",
        text: `We keep you updated at every stage of your loft conversion—providing 
            clear timescales, progress reports, and complete transparency 
            from start to finish.`,
    },
    {
        title: "Help with planning permissions",
        text: `Should your local council require planning permission, we guide 
            you through the application process and do our best to help you 
            secure a positive outcome.`,
    },
    {
        title: "Design and planning",
        text: `You'll have a solid vision of your completed loft conversion before 
            building even starts. We work closely with you to ensure it 
            reflects your goals and ticks all your boxes.`,
    },
    {
        title: "Quality build",
        text: `Bringing your loft conversion to life is the most exciting stage. 
            We pride ourselves on high-quality craftsmanship, and we do 
            everything we can to minimize disruption to your daily routine 
            throughout the build.`,
    },
    {
        title: "Continuous customer service",
        text: `We’re always here to talk, ensuring you're happy with each stage 
            of the process and thrilled with the final transformation.`,
    },
];

export default function AboutUsPage() {
    return (
        <div className="flex flex-col">
            <Navbar/>
            {/* Hero / Intro Section */}
            <section className="bg-black text-white">
                <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
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
                        className="text-center max-w-3xl mx-auto text-lg lg:text-xl text-gray-300"
                    >
                        We’re a dedicated team serving <strong>North London</strong> and <strong>Hertfordshire</strong>,
                        focused on delivering loft conversions and home transformations
                        that truly exceed your expectations. As a small, family-run
                        business, we bring a personal touch and unwavering commitment
                        to every project.
                    </motion.p>
                </div>
            </section>

            {/* Owners Section */}
            <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
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

            {/* Why Choose Us Section */}
            <section className="bg-gray-50 py-16 lg:py-24">
                <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                    <motion.h2
                        initial={{opacity: 0, y: -20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.2}}
                        transition={{duration: 0.6}}
                        className="text-3xl lg:text-4xl font-bold mb-6"
                    >
                        Why Choose <span className="font-thin">Us?</span>
                    </motion.h2>
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.2}}
                        transition={{duration: 0.6, delay: 0.2}}
                        className="text-lg lg:text-xl text-gray-700 mb-8"
                    >
                        Of course, there’s a lot of choice out there. But here’s why we stand out:
                        We don’t just meet your expectations—we strive to exceed them.
                        We know a loft conversion is a major undertaking in a personal space,
                        so we do everything we can to provide a seamless journey from start to
                        finish, causing minimal disruption to your daily life.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {OUR_OFFERINGS.map((offer, idx) => (
                            <motion.div
                                key={idx}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, amount: 0.2}}
                                transition={{duration: 0.5, delay: 0.1 * idx + 0.3}}
                                className="p-6 bg-white rounded-lg shadow flex flex-col"
                            >
                                <h4 className="text-xl font-semibold mb-2">{offer.title}</h4>
                                <p className="text-gray-700">{offer.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.2}}
                        transition={{duration: 0.6, delay: 0.4}}
                        className="mt-8 text-lg lg:text-xl text-gray-700"
                    >
                        We’re excited you’re considering a loft conversion, and we’d be honored
                        to join you on this journey. If you’d like more information or want to
                        schedule a consultation, feel free to reach out!
                    </motion.p>
                </div>
            </section>

            {/* CTA Section */}
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
                    <motion.a
                        href="/contact"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, amount: 0.2}}
                        transition={{duration: 0.6, delay: 0.4}}
                        className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
                    >
                        Contact Us
                    </motion.a>
                </div>
            </section>
            <Footer/>
            <ScrollIndicator/>
            <PageLabel text={"About Us"}/>
            <CustomCursor/>
        </div>
    );
}
"use client";

import React from "react";
import {motion} from "framer-motion";
import GoogleMapReact from "google-map-react";
import {Card} from "@/components/ui/card";

// Simple marker (you can style or customize as you like)
function Marker({text}: { text: string }) {
    return (
        <div className="text-white bg-black px-2 py-1 rounded-full text-sm shadow-lg">
            {text}
        </div>
    );
}

export default function MapSection() {
    // Center the map roughly between North London & Hertfordshire.
    // Adjust these coordinates/zoom to your preference.
    const defaultCenter = {lat: 51.6, lng: -0.12};
    const defaultZoom = 10;

    return (
        <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Heading / Intro */}
                <motion.h2
                    initial={{opacity: 0, y: -20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.6}}
                    className="text-3xl lg:text-4xl font-bold mb-6"
                >
                    Where We <span className="font-thin">Operate</span>
                </motion.h2>

                <motion.p
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.6, delay: 0.2}}
                    className="text-lg lg:text-xl text-gray-700 mb-8 max-w-3xl"
                >
                    We proudly serve homeowners across <strong>North London</strong> and
                    <strong> Hertfordshire</strong>. Whether you’re seeking a bespoke loft
                    conversion or a full-scale design-build service, our locally based
                    team is ready to transform your space.
                </motion.p>

                {/* Map Container */}
                <motion.div
                    className="w-full h-[400px] lg:h-[600px] overflow-hidden "
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.6, delay: 0.4}}
                >
                    <Card className="w-full h-[400px] lg:h-[600px]">
                        <GoogleMapReact
                            bootstrapURLKeys={{key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}}
                            defaultCenter={defaultCenter}
                            defaultZoom={defaultZoom}
                            // optional: a custom map style or other google-map-react props
                        >
                            {/* Example marker pinned to “North London” area */}
                            <Marker lat={51.58} lng={-0.10} text="North London"/>

                            {/* Example marker pinned to “Hertfordshire” area */}
                            <Marker lat={51.80} lng={-0.24} text="Hertfordshire"/>
                        </GoogleMapReact>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
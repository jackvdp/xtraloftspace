"use client";

import React from "react";
import {motion} from "framer-motion";
import GoogleMapReact from "google-map-react";
import {Card} from "@/components/ui/card";

// Example bounding polygon that (roughly) covers North London & Hertfordshire
// (Replace with more precise lat/lng coordinates for your specific area)
const coverageCoordinates = [
    {lat: 51.7532, lng: -0.4486}, // Hemel Hempstead then going clockwise
    {lat: 51.8032, lng: -0.2087},
    {lat: 51.7678, lng: 0.0878},
    {lat: 51.6205, lng: 0.3072},
    {lat: 51.5403, lng: 0.1482},
    {lat: 51.5081, lng: -0.1248},
    {lat: 51.5571, lng: -0.2860},
    {lat: 51.6458, lng: -0.4520},
];

function getDefaultZoom() {
    if (typeof window === "undefined") return 10.25;
    // fallback if SSR
    return window.innerWidth < 768 ? 9 : 10.25;
    // pick your own zoom levels
}

export default function MapSection({showMapImmediatley}: { showMapImmediatley?: boolean }) {
    // Center the map between North London & Hertfordshire (approx.)
    const defaultCenter = {lat: 51.65, lng: -0.12};

    // Draws a polygon overlay after Google Maps has loaded
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleApiLoaded = ({map, maps}: { map: any; maps: any }) => {
        // Create the polygon
        const coveragePolygon = new maps.Polygon({
            paths: coverageCoordinates,
            strokeColor: "#000000",   // Outline color
            strokeOpacity: 0.7,
            strokeWeight: 2,
            fillColor: "#000000",     // Fill color
            fillOpacity: 0.1,         // Slightly transparent
        });
        coveragePolygon.setMap(map);
    };

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
                    className="w-full h-[400px] lg:h-[600px] overflow-hidden"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: showMapImmediatley ? 0.0 : 0.2}}
                    transition={{duration: 0.6, delay: 0.4}}
                >
                    <Card className="w-full h-[400px] lg:h-[600px] relative">
                        <GoogleMapReact
                            bootstrapURLKeys={{
                                key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
                            }}
                            defaultCenter={defaultCenter}
                            defaultZoom={getDefaultZoom()}
                            yesIWantToUseGoogleMapApiInternals
                            onGoogleApiLoaded={handleApiLoaded}
                        />
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
import {motion} from "framer-motion";
import {Card, CardContent} from "@/components/ui/card";
import ContactForm from "@/components/Resuables/ContactForm";
import React from "react";
import contactInfo from "@/components/Contact/ContactInfo";
import GoogleMapReact from "google-map-react";

export default function Hero() {
    const defaultCenter = {lat: 51.65, lng: -0.12};
    const coverageCoordinates = [
        {lat: 51.7532, lng: -0.4486},
        {lat: 51.8032, lng: -0.2087},
        {lat: 51.7678, lng: 0.0878},
        {lat: 51.6205, lng: 0.3072},
        {lat: 51.5403, lng: 0.1482},
        {lat: 51.5081, lng: -0.1248},
        {lat: 51.5571, lng: -0.2860},
        {lat: 51.6458, lng: -0.4520},
    ];

    const handleApiLoaded = ({map, maps}: { map: any; maps: any }) => {
        const coveragePolygon = new maps.Polygon({
            paths: coverageCoordinates,
            strokeColor: "#FFFFFF",
            strokeOpacity: 0.7,
            strokeWeight: 2,
            fillColor: "#FFFFFF",
            fillOpacity: 0.1,
        });
        coveragePolygon.setMap(map);
    };

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="relative">
            {/* Hero Map Background */}
            <div className="absolute inset-0 h-[35vh] w-full overflow-hidden">
                <div className="h-full w-full">
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
                        }}
                        defaultCenter={defaultCenter}
                        defaultZoom={10.25}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={handleApiLoaded}
                        options={{
                            zoomControl: false,
                            scrollwheel: false,
                            draggable: false
                        }}
                    />
                </div>
                <div className="absolute inset-0 bg-black/70"/>
            </div>

            <div className="container mx-auto pt-24 lg:pt-36 px-4 relative">
                <motion.h1
                    initial={{opacity: 0, y: -20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    className="text-4xl font-bold text-center mb-4 text-white"
                >
                    Get in <span className="font-thin">touch</span>
                </motion.h1>
                <motion.p
                    initial={{opacity: 0, y: -20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{delay: 0.2}}
                    className="text-gray-200 text-center mb-24"
                >
                    We&apos;re here to help turn your vision into reality
                </motion.p>

                {/* Main Content Section */}
                <div className="flex flex-col lg:flex-row gap-12 mb-24 mt-[10vh]">
                    {/* Contact Information Side */}
                    <motion.div
                        className="lg:w-1/3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.2}}
                    >
                        <Card className="h-full bg-black text-white p-8 border-black">
                            <CardContent className="p-0 space-y-12">
                                <motion.div variants={itemVariants}>
                                    <h2 className="text-3xl font-bold mb-6">
                                        Let&apos;s start a
                                        <span className="font-thin block">conversation</span>
                                    </h2>
                                    <p className="text-gray-300 mb-12">
                                        Have a project in mind? We&apos;d love to hear about it. Get in touch with us
                                        and we&apos;ll get back to you as soon as we can.
                                    </p>
                                </motion.div>

                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="group"
                                    >
                                        <div className="text-lg flex items-center gap-4 mb-2">
                                            <div
                                                className="p-2 bg-white/30 rounded-lg group-hover:bg-white/40 transition-colors duration-300">
                                                {info.icon}
                                            </div>
                                            <h3 className="text-lg font-semibold">{info.title}</h3>
                                        </div>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="text-lg text-gray-300 hover:text-white transition-colors duration-300 ml-14 block"
                                            >
                                                {info.content}
                                            </a>
                                        ) : (
                                            <p className="text-lg text-gray-300 ml-14">{info.content}</p>
                                        )}
                                    </motion.div>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact Form Side */}
                    <motion.div
                        className="lg:w-2/3"
                        initial={{opacity: 0, x: 20}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true, amount: 0.2}}
                        transition={{duration: 0.5, delay: 0.3}}
                    >
                        <ContactForm/>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
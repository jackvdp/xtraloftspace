"use client"

import React from 'react';
import {motion} from "framer-motion";
import {Card, CardContent} from "@/components/ui/card";
import ContactForm from "@/components/Resuables/ContactForm";
import contactInfo from "@/components/Contact/ContactInfo";
import {XtraMap} from "@/components/Resuables/Map";

export default function Hero() {
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

    const scrollDownToMap = () => {
        document.getElementById('maps')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    return (
        <div className="relative min-h-screen">
            {/* Hero Map Background */}
            <div className="absolute top-0 left-0 right-0 h-[45vh] lg:h-[50vh] w-full overflow-hidden">
                <div className="w-full h-full relative">
                    <XtraMap
                        data-cursor="See Areas"
                        options={{
                            zoomControl: false,
                            scrollwheel: false,
                            draggable: false,
                            disableDefaultUI: true,
                        }}
                    />
                    <div
                        data-cursor="See Areas"
                        className="absolute inset-0 bg-black/70 cursor-pointer"
                        onClick={scrollDownToMap}
                    />
                </div>
            </div>

            {/* Content Container */}
            <div className="mx-auto relative" data-cursor="See Areas" onClick={scrollDownToMap}>
                {/* Hero Text - Positioned higher up */}
                <div className={"w-full justify-center flex"} data-cursor="See Areas" onClick={scrollDownToMap}>
                    <div
                        className="mx-auto pt-24 lg:pt-32 text-center inline-flex flex-col">
                        <motion.h1
                            initial={{opacity: 0, y: -20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            className="text-4xl lg:text-7xl font-bold mb-4 text-white"
                        >
                            Get in <span className="font-thin">touch</span>
                        </motion.h1>
                        <motion.p
                            initial={{opacity: 0, y: -20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: 0.2}}
                            className="text-gray-200 text-lg max-w-2xl mx-auto mb-12 lg:mb-20"
                        >
                            We&apos;re here to help turn your vision into reality
                        </motion.p>
                    </div>
                </div>

                {/* Cards Section - Positioned to overlap bottom of map */}
                <div className="container mx-auto relative">
                    <div className="px-4 flex flex-col lg:flex-row gap-6 lg:gap-12">
                        {/* Contact Information Card */}
                        <motion.div
                            className="lg:w-1/3"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                        >
                            <Card
                                className="h-full bg-black/95 backdrop-blur-sm text-white p-6 lg:p-8 border-black shadow-xl">
                                <CardContent className="p-0 space-y-8">
                                    <motion.div variants={itemVariants}>
                                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">
                                            Let&apos;s start a
                                            <span className="font-thin block">conversation</span>
                                        </h2>
                                        <p className="text-gray-300 text-sm lg:text-base">
                                            Have a project in mind? We&apos;d love to hear about it. Get in touch with
                                            us
                                            and we&apos;ll get back to you as soon as we can.
                                        </p>
                                    </motion.div>

                                    {contactInfo.map((info, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="group"
                                        >
                                            <div className="text-base lg:text-lg flex items-center gap-4 mb-2">
                                                <div className="p-2 bg-white/30 rounded-lg group-hover:bg-white/40
                                                            transition-colors duration-300">
                                                    {info.icon}
                                                </div>
                                                <h3 className="font-semibold">{info.title}</h3>
                                            </div>
                                            {info.href ? (
                                                <a href={info.href}
                                                   className="text-base lg:text-lg text-gray-300 hover:text-white
                                                          transition-colors duration-300 ml-14 block">
                                                    {info.content}
                                                </a>
                                            ) : (
                                                <p className="text-base lg:text-lg text-gray-300 ml-14">{info.content}</p>
                                            )}
                                        </motion.div>
                                    ))}
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Contact Form Card */}
                        <motion.div
                            className="lg:w-2/3"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: 0.3}}
                        >
                            <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
                                <ContactForm/>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
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

    return (
        <div className="relative">
            {/* Hero Map Background */}
            <div className="absolute inset-0 h-[35vh] w-full overflow-hidden">
                <div className="w-full h-full relative">
                    <XtraMap
                        data-cursor={"See Areas"}
                        options={{
                            zoomControl: false,
                            scrollwheel: false,
                            draggable: false,
                            disableDefaultUI: true,
                        }}
                    />
                </div>
                <div
                    data-cursor={"See Areas"}
                    className="absolute inset-0 bg-black/60 cursor-pointer transition-opacity duration-300 hover:bg-black/50"
                    onClick={() => {
                        document.getElementById('maps')?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }}
                />
            </div>

            <div className="container mx-auto pt-24 lg:pt-36 px-4 relative">
                <motion.h1
                    initial={{opacity: 0, y: -20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    className="text-4xl lg:text-7xl font-bold text-center mb-4 text-white"
                >
                    Get in <span className="font-thin">touch</span>
                </motion.h1>
                <motion.p
                    initial={{opacity: 0, y: -20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{delay: 0.2}}
                    className="text-gray-200 text-center mb-24 text-lg"
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
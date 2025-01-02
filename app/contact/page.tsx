"use client"

import React from 'react';
import {motion} from 'framer-motion';
import ContactForm from "@/components/Resuables/ContactForm";
import MapSection from "@/components/Resuables/Map";
import {Mail, Phone, MapPin} from 'lucide-react';
import {Card, CardContent} from "@/components/ui/card";

const ContactPage = () => {
    const contactInfo = [
        {
            icon: <Phone className="w-6 h-6"/>,
            title: "Phone",
            content: "+44 (0) 20 1234 5678",
            delay: 0.1
        },
        {
            icon: <Mail className="w-6 h-6"/>,
            title: "Email",
            content: "info@xtraloft.com",
            delay: 0.2
        },
        {
            icon: <MapPin className="w-6 h-6"/>,
            title: "Office",
            content: "123 Construction Street, London, SE1 1AA",
            delay: 0.3
        }
    ];

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
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="container mx-auto pt-24 px-4">
                <motion.h1
                    initial={{opacity: 0, y: -20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    className="text-4xl font-bold text-center mb-4"
                >
                    Get in <span className="font-thin">touch</span>
                </motion.h1>
                <motion.p
                    initial={{opacity: 0, y: -20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{delay: 0.2}}
                    className="text-gray-600 text-center mb-24"
                >
                    We&apos;re here to help turn your vision into reality
                </motion.p>

                {/* Main Content Section */}
                <div className="flex flex-col lg:flex-row gap-12 mb-24">
                    {/* Contact Information Side */}
                    <motion.div
                        className="lg:w-1/3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.2}}
                    >
                        <Card className="h-full bg-black text-white p-8">
                            <CardContent className="p-0 space-y-12">
                                <motion.div variants={itemVariants}>
                                    <h2 className="text-3xl font-bold mb-6">
                                        Let&apos;s start a
                                        <span className="font-thin block">conversation</span>
                                    </h2>
                                    <p className="text-gray-300 mb-12">
                                        Have a project in mind? We&apos;d love to hear about it. Get in touch with us
                                        and
                                        we&apos;ll get back to you as soon as we can.
                                    </p>
                                </motion.div>

                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="group"
                                    >
                                        <div className="flex items-center gap-4 mb-2">
                                            <div
                                                className="p-2 bg-white/30 rounded-lg group-hover:bg-white/40 transition-colors duration-300">
                                                {info.icon}
                                            </div>
                                            <h3 className="font-semibold">{info.title}</h3>
                                        </div>
                                        <p className="text-gray-300 ml-14">{info.content}</p>
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

            {/* Map Section */}
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true, amount: 0.2}}
                transition={{duration: 0.5}}
                className="w-full"
            >
                <MapSection/>
            </motion.div>
        </div>
    );
};

export default ContactPage;
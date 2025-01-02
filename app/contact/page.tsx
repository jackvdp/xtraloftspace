"use client"

import React from 'react';
import {motion} from 'framer-motion';
import MapSection from "@/components/Resuables/Map";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Resuables/Footer";
import CustomCursor from "@/components/Resuables/CustomCursor";
import PageLabel from "@/components/Resuables/PageLabel";
import ScrollIndicator from "@/components/Resuables/ScrollIndicator";
import Hero from "@/components/Contact/Hero";

const ContactPage = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <section id={"maps"}>
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.5}}
                    className="w-full"
                >
                    <MapSection showMapImmediately={true}/>
                </motion.div>
            </section>
            <PageLabel text={"Contact Us"}/>
            <CustomCursor/>
            <ScrollIndicator/>
            <Footer/>
        </>
    );
};

export default ContactPage;
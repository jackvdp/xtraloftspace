import React, {useLayoutEffect, useState} from "react";
import {motion} from "framer-motion";
import {services} from "@/components/Services/Service";
import ScrollIndicator from "@/components/ui/ScrollDownIndicator";

const ServicesList = () => {
    // We no longer need useScroll or useTransform for fade-out.
    // We'll just keep the list pinned (sticky) and let it scroll off naturally.

    const [viewportHeight, setViewportHeight] = useState(0);

    useLayoutEffect(() => {
        setViewportHeight(window.innerHeight);

        const updateHeight = () => setViewportHeight(window.innerHeight);
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    return (
        <div className="relative">
            {/**
             * 1) Make this div "sticky top-0" so it stays pinned
             *    until we scroll beyond its parent container’s height.
             */}
            <div className="sticky top-0 z-10">
                <div className="h-screen flex flex-col items-center justify-center relative">
                    {/* Main content container */}
                    <div className="w-full max-w-5xl px-4 md:px-8">
                        {/* Services list */}
                        <div className="flex flex-col justify-between py-6 md:py-12">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{
                                        delay: 0.1 + index * 0.1,
                                        duration: 0.5,
                                    }}
                                    className="py-2 md:py-4 flex items-baseline gap-3 md:gap-6"
                                >
                  <span className="text-xl md:text-3xl font-bold">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                                    <h3 className="text-3xl md:text-6xl font-bold tracking-tight">
                                        {service.title}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    {/* Desktop version */}
                    <div className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2">
                        <ScrollIndicator/>
                    </div>
                    {/* Mobile version - pinned to bottom */}
                    <div className="md:hidden absolute bottom-8 scale-50">
                        <ScrollIndicator/>
                    </div>
                </div>
            </div>

            {/* 2) Spacer for scroll height */}
            {/**
             * This ensures the page can scroll and eventually pushes
             * the sticky element off the top once we scroll far enough.
             */}
            <div style={{height: "150vh"}}/>
        </div>
    );
};

export default ServicesList;
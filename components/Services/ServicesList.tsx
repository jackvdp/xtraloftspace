import React, {useLayoutEffect, useState} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import {services} from '@/components/Services/Service';
import ScrollIndicator from "@/components/ui/ScrollDownIndicator";

const ServicesList = () => {
    const {scrollY} = useScroll();
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        setHeight(window.innerHeight);

        const updateHeight = () => setHeight(window.innerHeight);
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    const opacity = useTransform(
        scrollY,
        [height, height * 1.2],
        [1, 0]
    );

    return (
        <div>
            <motion.div
                style={{opacity}}
                className="fixed inset-0 z-10"
            >
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
                                        delay: 0.1 + (index * 0.1),
                                        duration: 0.5
                                    }}
                                    className="py-2 md:py-4 flex items-baseline gap-3 md:gap-6"
                                >
                                    <span className="text-xl md:text-3xl font-bold">
                                        {(index + 1).toString().padStart(2, '0')}
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
            </motion.div>

            {/* Spacer for scroll height */}
            <div className="h-[175vh]"/>
        </div>
    );
};

export default ServicesList;
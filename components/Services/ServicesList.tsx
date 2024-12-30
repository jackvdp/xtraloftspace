import React, {useEffect, useState} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import {services} from '@/components/Services/Service';
import ScrollIndicator from "@/components/ui/ScrollDownIndicator";

const ServicesList = () => {
    const {scrollY} = useScroll();
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setHeight(window.innerHeight);
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
                <div className="h-screen flex items-center justify-center">
                    <div className="w-full max-w-5xl px-8">
                        <div className="flex items-start gap-8">
                            <div className="flex flex-col justify-between py-12 flex-1">
                                {services.map((service, index) => (
                                    <motion.div
                                        key={service.title}
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{
                                            delay: 0.1 + (index * 0.1),
                                            duration: 0.5
                                        }}
                                        className="py-4 flex items-baseline gap-6"
                                    >
                                        <span className="text-3xl font-bold">
                                            {(index + 1).toString().padStart(2, '0')}
                                        </span>
                                        <h3 className="text-6xl font-bold tracking-tight">
                                            {service.title}
                                        </h3>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Added ScrollIndicator here */}
                            <div className="absolute top-1/2 -translate-y-1/2 right-16">
                                <ScrollIndicator/>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Spacer for scroll height */}
            <div className="h-[175vh]"/>
        </div>
    );
};

export default ServicesList;
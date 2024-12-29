import React from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import {services} from '@/components/Services/Service';

const ServicesList = () => {
    const {scrollY} = useScroll();
    const opacity = useTransform(
        scrollY,
        [window.innerHeight, window.innerHeight * 1.2],
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
                        <div data-cursor="Scroll Down" className="flex flex-col justify-between py-12">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{
                                        delay: 0.1 + (index * 0.1),
                                        duration: 0.5
                                    }}
                                    className="py-4"
                                >
                                    <h3 className="text-6xl font-bold tracking-tight">
                                        {service.title}
                                    </h3>
                                </motion.div>
                            ))}
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
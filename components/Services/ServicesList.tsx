import React from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import {services} from '@/components/Services/Service';
import {ArrowDown, ChevronDown, CircleArrowDown} from 'lucide-react';

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
                        <div className="flex items-start gap-8">
                            <div data-cursor="Scroll Down" className="flex flex-col justify-between py-12 flex-1">
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

const ScrollIndicator = () => {
    const {scrollY} = useScroll();

    const rotation = useTransform(
        scrollY,
        [0, 4000],
        [0, 360]
    );

    const pathId = React.useId();

    return (
        <div className="w-64 h-64 relative">
            <motion.div
                className="w-full h-full"
                style={{rotate: rotation}}
            >
                <svg
                    className="w-full h-full absolute"
                    viewBox="0 0 100 100"
                >
                    <path
                        id={pathId}
                        d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                        stroke="none"
                    />
                    <text
                        className="text-[10px] font-bold fill-current uppercase"
                        dominantBaseline="middle"
                        textAnchor="middle"
                    >
                        <textPath
                            href={`#${pathId}`}
                            startOffset="0%"
                            className="tracking-[0.25em]"
                        >
                            Scroll Down • Scroll Down • Scroll Down • Scroll Down •
                        </textPath>
                    </text>
                </svg>
            </motion.div>

            {/* Center arrow */}
            <div className="absolute inset-0 flex items-center justify-center">
                <ArrowDown className="w-12 h-12"/>
            </div>
        </div>
    );
};
export default ServicesList;
import React, {useRef} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import ParallaxImage from "@/components/ui/parallaxImage";
import {services} from '@/components/Services/Service';

const ServicesPage = () => {
    const containerRef = useRef(null);

    const ServiceText = ({service, index}) => {
        const {scrollYProgress} = useScroll({
            target: containerRef,
            offset: [`${index * 100}vh center`, `${(index + 1) * 100}vh center`]
        });

        const opacity = useTransform(
            scrollYProgress,
            [0, 0.25, 0.75, 1],
            [0, 1, 1, 0]
        );

        return (
            <motion.div
                style={{opacity}}
                className="absolute top-1/2 -translate-y-1/2 px-16"
            >
                <h2 className="text-6xl font-bold text-black mb-8">
                    {service.title}
                </h2>
                <p className="text-xl text-black/70">
                    {service.fullDescription}
                </p>
            </motion.div>
        );
    };

    return (
        <div ref={containerRef} className="bg-white flex">
            <div className="w-1/2">
                {services.map((service, index) => (
                    <div key={index} className="h-screen flex items-center p-24">
                        <div className="w-full h-[60vh] rounded-lg overflow-hidden">
                            <ParallaxImage
                                src={service.image}
                                alt={service.title}
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-1/2 fixed right-0 top-0 h-screen">
                {services.map((service, index) => (
                    <ServiceText key={index} service={service} index={index}/>
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;
import React, {useRef} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import ParallaxImage from "@/components/ui/parallaxImage";
import {services} from '@/components/Services/Service';

interface Service {
    title: string;
    fullDescription: string;
    image: string;
}

const ServicesPage = () => {
    const containerRef = useRef(null);

    function ServiceText({service, index}: { service: Service; index: number }) {
        const {scrollYProgress} = useScroll({
            target: containerRef,
            offset: [`${index * 100}vh center`, `${(index + 1) * 100}vh center`]
        });

        const opacity = useTransform(
            scrollYProgress,
            [0, 0.25, 0.75, 1],
            [0, 1, 1, 0]
        );

        const x = useTransform(
            scrollYProgress,
            [0, 0.25, 0.75, 1],
            [100, 0, 0, 100]
        );

        const titleY = useTransform(
            scrollYProgress,
            [0, 0.25, 0.75, 1],
            [20, 0, 0, 20]
        );

        const descriptionY = useTransform(
            scrollYProgress,
            [0, 0.35, 0.75, 1],
            [30, 0, 0, 30]
        );

        return (
            <motion.div
                style={{opacity, x}}
                className="absolute top-1/2 -translate-y-1/2 px-16"
            >
                <motion.div
                    style={{opacity}}
                    className="absolute -top-96 right-1/4 -z-10"
                >
                <span
                    className="text-[50vh] font-bold"
                    style={{
                        color: 'transparent',
                        WebkitTextStroke: '2px rgba(0,0,0,0.1)',
                    }}
                >
                    {(index + 1).toString().padStart(2, '0')}
                </span>
                </motion.div>
                <motion.h2
                    style={{y: titleY}}
                    className="text-6xl font-bold text-black mb-8"
                >
                    {service.title}
                </motion.h2>
                <motion.p
                    style={{y: descriptionY}}
                    className="text-xl text-black/70"
                >
                    {service.fullDescription}
                </motion.p>
            </motion.div>
        );
    };

    function ServiceImage({service, index}: { service: Service; index: number }) {
        const {scrollYProgress} = useScroll({
            target: containerRef,
            offset: [`${index * 100}vh center`, `${(index + 1) * 100}vh center`]
        });

        const scale = useTransform(
            scrollYProgress,
            [0, 0.25, 0.75, 1],
            [0.8, 1, 1, 0.8]
        );

        const opacity = useTransform(
            scrollYProgress,
            [0, 0.25, 0.75, 1],
            [0, 1, 1, 0]
        );

        const x = useTransform(
            scrollYProgress,
            [0, 0.25, 0.75, 1],
            [-100, 0, 0, -100]
        );

        return (
            <motion.div
                style={{scale, opacity, x}}
                className="w-full h-[60vh] rounded-lg overflow-hidden"
            >
                <ParallaxImage
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl"
                />
            </motion.div>
        );
    };

    return (
        <div ref={containerRef} className="flex mb-72 relative">
            <div className="w-1/2">
                {services.map((service, index) => (
                    <div key={index} className="h-screen flex items-center p-24">
                        <ServiceImage service={service} index={index}/>
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
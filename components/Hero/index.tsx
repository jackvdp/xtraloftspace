import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

interface MousePosition {
    x: number;
    y: number;
}

const Hero: React.FC = () => {
    // const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

    // useEffect(() => {
    //     const handleMouseMove = (e: MouseEvent) => {
    //         console.log((e.clientX / window.innerWidth) * 30);
    //         console.log((e.clientX / window.innerWidth) * 30);
    //         setMousePosition({
    //             x: (e.clientX / window.innerWidth) * 300,
    //             y: (e.clientY / window.innerHeight) * 300,
    //         });
    //     };
    //     window.addEventListener('mousemove', handleMouseMove);
    //     return () => window.removeEventListener('mousemove', handleMouseMove);
    // }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const parallax = document.querySelector(`.${styles.parallaxWrapper}`) as HTMLElement;
            if (parallax) {
                parallax.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative min-h-screen overflow-hidden bg-black"
        >
            {/* Background image with parallax */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                className={styles.parallaxWrapper}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
                <img
                    src="/images/loft.jpeg"
                    alt="Modern loft"
                    className={styles.parallaxImage}
                />
            </motion.div>

            {/* Rest of the component remains the same */}
            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                    transition: 'transform 0.3s ease-out',
                }}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
                style={{
                    transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)`,
                    transition: 'transform 0.3s ease-out',
                }}
            /> */}

            <div className="relative z-20 container mx-auto px-4 h-screen flex items-center">
                <motion.div
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                    className="max-w-2xl space-y-8"
                >
                    <div className="space-y-6">
                        <motion.div variants={fadeInUp} className="flex items-center space-x-2">
                            <Sparkles className="h-6 w-6 text-blue-400" />
                            <span className="text-blue-400 font-medium">Expert Craftmanship</span>
                        </motion.div>
                        <motion.h1
                            variants={fadeInUp}
                            className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 text-transparent bg-clip-text leading-tight"
                        >
                            Transform Your Space
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-xl text-gray-300"
                        >
                            Create stunning living spaces that blend modern aesthetics with functional design. Experience the future of home transformation.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-6"
                    >
                        <Button
                            size="lg"
                            className="group relative bg-blue-500 hover:bg-blue-600 text-white rounded-full text-lg h-16 px-12"
                        >
                            <span className="relative z-10 flex items-center">
                                Let&apos;s Talk!
                                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-white/20 text-white rounded-full bg-white/10 text-lg h-16 px-12"
                        >
                            View Portfolio
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Hero;
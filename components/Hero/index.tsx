import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { useEffect } from 'react';

const Hero = () => {
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

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative min-h-screen overflow-hidden bg-black"
        >
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                className={styles.parallaxWrapper}
            >
                <div className="absolute inset-0 bg-blue-600/60 mix-blend-multiply z-10" />
                <img
                    src="/images/loft.jpeg"
                    alt="Modern loft"
                    className={styles.parallaxImage}
                />
            </motion.div>

            <div className="relative z-20 container mx-auto px-4 h-screen flex items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl space-y-8 lg:space-y-12"
                >
                    <div className="space-y-6 lg:space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center space-x-2"
                        >
                            <Sparkles className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                            <span className="text-white font-bold tracking-widest uppercase text-xs lg:text-sm">Expert Craftmanship</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-bold uppercase text-white leading-none"
                        >
                            Transform
                            <br />
                            Space
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-base sm:text-lg lg:text-xl text-white/80 font-medium tracking-wide"
                        >
                            Create stunning living spaces that blend modern aesthetics with functional design.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                    >
                        <Button
                            size="lg"
                            className="group relative bg-white text-blue-600 rounded-full text-base lg:text-lg font-bold tracking-wide h-12 sm:h-14 lg:h-16 px-8 sm:px-10 lg:px-12"
                        >
                            <span className="relative z-10 flex items-center">
                                Let&apos;s Talk
                                <ArrowRight className="ml-2 h-5 w-5 lg:h-6 lg:w-6 transition-transform group-hover:translate-x-1" />
                            </span>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-white rounded-full bg-transparent text-base lg:text-lg font-bold tracking-wide h-12 sm:h-14 lg:h-16 px-8 sm:px-10 lg:px-12"
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
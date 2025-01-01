"use client"

import React, {useEffect, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

export default function ScrollIndicator() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentProgress = Math.round((window.scrollY / totalScroll) * 100);
            setScrollProgress(currentProgress);
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed bottom-8 right-8 z-50"
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0.5}}
                    transition={{duration: 0.3}}
                >
                    <button
                        onClick={scrollToTop}
                        className="h-12 w-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-100 relative"
                        style={{
                            background: `conic-gradient(black ${scrollProgress}%, transparent ${scrollProgress}%)`,
                        }}
                    >
                        <div className="absolute inset-[2px] rounded-full bg-white flex items-center justify-center">
                            <svg className="w-6 h-6 rotate-90 transform" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </div>
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
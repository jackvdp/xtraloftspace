import React from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import {ChevronDown} from 'lucide-react';

function RevealHeader({mainText, subText}: { mainText: string; subText: string }) {

    const {scrollYProgress} = useScroll();

    const topSlide = useTransform(
        scrollYProgress,
        [0, 0.25],
        ['0%', '-100%']
    );

    const bottomSlide = useTransform(
        scrollYProgress,
        [0, 0.25],
        ['0%', '100%']
    );

    const scrollIndicatorOpacity = useTransform(
        scrollYProgress,
        [0, 0.1],
        [1, 0]
    );

    return (
        <div>
            <div className="fixed inset-0 z-20 pointer-events-none">
                {/* Top component */}
                <motion.div
                    style={{y: topSlide}}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-black" style={{clipPath: 'inset(0 0 50% 0)'}}/>
                    <div
                        className="relative h-full flex items-center justify-center"
                        style={{clipPath: 'inset(0 0 50% 0)'}}
                    >
                        <h1 className="text-[20vw] font-bold text-white tracking-tighter">
                            {mainText}
                        </h1>
                    </div>
                </motion.div>

                {/* Bottom component */}
                <motion.div
                    style={{y: bottomSlide}}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-black" style={{clipPath: 'inset(50% 0 0 0)'}}/>
                    <div
                        className="relative h-full flex flex-col items-center"
                        style={{clipPath: 'inset(50% 0 0 0)'}}
                    >
                        <div className="h-full flex items-center justify-center">
                            <h1 className="text-[20vw] font-bold text-white tracking-tighter">
                                {mainText}
                            </h1>
                        </div>
                        <div className="absolute bottom-0 flex flex-col items-center pb-12">
                            <p className="text-white/70 text-xl mb-12">
                                {subText}
                            </p>
                            <motion.div
                                style={{opacity: scrollIndicatorOpacity}}
                                className="animate-bounce"
                            >
                                <ChevronDown className="w-8 h-8 text-white/50"/>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default RevealHeader;


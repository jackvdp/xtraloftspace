import React from 'react';
import {motion} from 'framer-motion';
import {ChevronDown} from 'lucide-react';

const ScrollIndicator = () => {
    const scrollAnimation = {
        y: [0, 10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <div
            data-cursor="Scroll"
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white cursor-pointer z-30"
            onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>
            <span data-cursor="Scroll" className="text-sm tracking-wider">Scroll Down</span>
            <motion.div
                data-cursor="Scroll"
                animate={scrollAnimation}
            >
                <ChevronDown data-cursor="Scroll" className="w-6 h-6"/>
            </motion.div>
        </div>
    );
};

export default ScrollIndicator;
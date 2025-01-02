import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = () => {
    const [currentWord, setCurrentWord] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const words = ["LOFT", "SPACE", "XTRA"];

    useEffect(() => {
        // LOFT slides (0-0.3s)
        // LOFT pauses (0.3-0.6s)
        const showSpace = setTimeout(() => setCurrentWord(1), 500);

        // SPACE slides (0.6-0.9s)
        // SPACE pauses (0.9-1.2s)
        const showXtra = setTimeout(() => setCurrentWord(2), 1500);

        // XTRA slides (1.2-1.5s)
        // XTRA pauses (1.5-1.8s)
        const hideLoader = setTimeout(() => setIsVisible(false), 3000);

        return () => {
            clearTimeout(showSpace);
            clearTimeout(showXtra);
            clearTimeout(hideLoader);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 bg-blue-600 flex items-center justify-center z-50"
                    exit={{ y: '100%' }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={currentWord}
                            className={`text-white font-black ${currentWord === 2 ? "text-[40vw]" : "text-[20vw]"} absolute`}
                            initial={{ x: currentWord === 1 ? '100%' : '-100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut"
                            }}
                        >
                            {words[currentWord]}
                        </motion.span>
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageLoader;
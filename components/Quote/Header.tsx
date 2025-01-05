import React from 'react';
import {motion} from 'framer-motion';

const QuoteHeader = () => {
    return (
        <div className="w-full bg-black text-white py-24">
            <motion.h2
                initial={{opacity: 0, y: -20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.2}}
                className="text-4xl font-bold text-center mb-4"
            >
                Get a{' '}
                <span className="font-thin">Quote</span>
            </motion.h2>
            <motion.p
                initial={{opacity: 0, y: -20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.2}}
                transition={{delay: 0.2}}
                className="text-gray-200 text-center text-lg"
            >
                Fill in the form below and receive your free quote within 24 hours
            </motion.p>
        </div>
    );
};

export default QuoteHeader;
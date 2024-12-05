import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Desktop from './Desktop';
import Mobile from './Mobile';

const CaseStudies = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="pt-24">
            <h2 className="text-4xl font-bold text-center mb-4">Our {' '}
            <span className="text-blue-600">work</span></h2>
            <p className="text-gray-600 text-center mb-12">Everything you need to know about our loft conversion services</p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                <Mobile currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
                <Desktop currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />

            </motion.div>
        </div>
    );
};

export default CaseStudies;
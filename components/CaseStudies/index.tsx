import React, {useState} from 'react';
import {motion} from 'framer-motion';
import Desktop from './Desktop';
import Mobile from './Mobile';
import {BigCustomButton} from "@/components/Resuables/CustomButtons";

const CaseStudies = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="py-24">
            <div className='container mx-auto px-4'>
                <h2 className="text-4xl font-bold text-center mb-4">Our {' '}
                    <span className="font-thin">work</span></h2>
                <p className="text-gray-600 text-center mb-12">Everything you need to know about our loft conversion
                    services</p>

            </div>
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.2}}
                transition={{duration: 0.8}}
            >
                <Mobile currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
                <Desktop currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>

            </motion.div>
            <motion.div
                className="flex justify-center mt-12"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.2}}
                transition={{duration: 0.5, delay: 0.4}}
            >
                <BigCustomButton text={'View Works'} href={"/projects"} arrowEnabled={true} dark={true}/>
            </motion.div>
        </div>
    );
};

export default CaseStudies;
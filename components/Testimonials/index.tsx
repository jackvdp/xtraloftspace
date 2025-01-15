import React from 'react';
import {motion} from 'framer-motion';
import {BigCustomButton, GoogleReviewButton} from "@/components/Resuables/CustomButtons";
import Carousel from "@/components/Testimonials/Carousel";

function TestimonialsCarousel() {

    return (
        <div className="bg-black pb-24">
            <Carousel/>
            <motion.div
                className="flex flex-col md:flex-row justify-center items-center mt-12 z-50 space-y-4 md:space-y-0 md:space-x-4"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.2}}
                transition={{duration: 0.5, delay: 0.4}}
            >
                <BigCustomButton text={'Learn More'} href="/about" arrowEnabled={true} dark={false}/>
                <GoogleReviewButton/>
            </motion.div>
        </div>
    )
}

export default TestimonialsCarousel;
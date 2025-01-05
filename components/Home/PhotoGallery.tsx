import React from 'react';
import {motion} from 'framer-motion';
import {InstagramButton} from "@/components/Resuables/CustomButtons";
import MosaicGallery from "@/components/Resuables/MosaicGallery";

const PhotoGallery = () => {
    return (
        <div className={"bg-gradient-to-b from-white to-zinc-50"}>
            <MosaicGallery/>
            <motion.div
                className="flex justify-center mt-24 md:mt-36 lg:mt-12 2xl:mt-6"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.2}}
                transition={{duration: 0.5, delay: 0.4}}
            >
                <InstagramButton/>
            </motion.div>
        </div>
    );
};

export default PhotoGallery;
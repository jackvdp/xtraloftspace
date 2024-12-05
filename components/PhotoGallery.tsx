import React from 'react';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';

const PhotoGallery = () => {
    const images = [
        'images/about1.jpeg',
        'images/about2.jpeg',
        'images/casestudy1.avif',
        'images/casestudy2.avif',
        'images/casestudy3.avif',
        'images/casestudy4.avif',
        'images/kitchen.jpg',
        'images/exterior.jpg',
    ];

    const breakpoints = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
        <Masonry
            breakpointCols={breakpoints}
            className="flex w-auto px-4"
            columnClassName="px-2"
        >
            {images.map((image, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`mb-4 relative overflow-hidden rounded-2xl group
            ${index % 3 === 0 ? 'aspect-[3/4]' : index % 3 === 1 ? 'aspect-[4/5]' : 'aspect-[1/1]'}`}
                >
                    <img
                        src={image}
                        alt={`Gallery ${index}`}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
            ))}
        </Masonry>
    );
};

export default PhotoGallery;
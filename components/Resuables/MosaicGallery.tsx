import React, {useEffect, useState} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import Masonry from "react-masonry-css";
import ParallaxImage from "@/components/Resuables/parallaxImage";

export default function MosaicGallery() {

    const [windowWidth, setWindowWidth] = useState(0);
    const {scrollYProgress} = useScroll();
    const yOffset = useTransform(scrollYProgress, [0, 1], [0, 100]);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getImageCount = () => {
        if (windowWidth > 1100) return 8;
        if (windowWidth > 700) return 6;
        if (windowWidth > 500) return 4;
        return 3;
    };

    const images = [
        '/images/mosaic/5.jpg',
        '/images/mosaic/4.jpg',
        '/images/mosaic/2.jpg',
        '/images/mosaic/8.jpg',
        '/images/mosaic/3.jpg',
        '/images/mosaic/1.jpg',
        '/images/mosaic/6.jpg',
        '/images/mosaic/7.jpg',
    ].slice(0, getImageCount());

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
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: index * 0.1}}
                    style={{y: yOffset}}
                    className={`mb-4 relative overflow-hidden rounded-lg group
            ${index % 3 === 0 ? 'aspect-[3/4]' : index % 3 === 1 ? 'aspect-[4/5]' : 'aspect-[1/1]'}`}
                >
                    <ParallaxImage
                        src={image}
                        alt={`Gallery ${index}`}
                        fill
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                </motion.div>
            ))}
        </Masonry>
    );
}
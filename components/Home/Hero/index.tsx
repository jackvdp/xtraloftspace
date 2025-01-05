import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {Swiper as SwiperType} from 'swiper/types';
import 'swiper/css';
import styles from './Hero.module.css';
import ScrollIndicator from './ScrollIndicator';
import {BigCustomButton, OutlineButton} from '@/components/Resuables/CustomButtons';
import BackgroundSlider from "@/components/Home/Hero/BackgroundSlider";

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    const images = [
        '/images/loft.jpeg',
        '/images/kitchen.jpeg',
        '/images/tiling.jpg'
    ];

    const fadeUpAnimation = {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const fadeRightAnimation = {
        initial: {
            opacity: 0,
            x: 50
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const fadeLeftAnimation = {
        initial: {
            opacity: 0,
            x: -50
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <motion.div
            initial={{opacity: 1}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="relative min-h-screen overflow-hidden bg-black"
        >
            <div className="absolute inset-0">
                <BackgroundSlider onSwiper={setSwiper} onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                                  images={images}/>

                <div className='hidden md:block'>
                    <div className={styles.paginationContainer}>
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`${styles.paginationBullet} ${index === activeIndex ? styles.active : ''}`}
                                onClick={() => swiper?.slideTo(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative z-20 container mx-auto px-4 h-screen flex items-center">
                <motion.div
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                    className="max-w-2xl space-y-8"
                >
                    <div className="space-y-6">
                        <motion.h1
                            variants={fadeUpAnimation}
                            className="text-6xl lg:text-9xl font-bold bg-white text-transparent bg-clip-text leading-tight"
                        >
                            Transform Your <span className='font-thin'>Space</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeRightAnimation}
                            className="text-xl text-white"
                        >
                            Create stunning living spaces that blend modern aesthetics with functional design.
                            Experience the future of home transformation.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={fadeLeftAnimation}
                        className="flex flex-col sm:flex-row gap-6"
                    >
                        <BigCustomButton text="Let's Talk" arrowEnabled={true}/>
                        <OutlineButton text={"View Portfolio"}/>
                    </motion.div>
                </motion.div>
            </div>

            <ScrollIndicator/>
        </motion.div>
    );
};

export default Hero;
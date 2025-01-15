import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {Swiper as SwiperType} from 'swiper/types';
import 'swiper/css';
import {BigCustomButton, OutlineButton} from '@/components/Resuables/CustomButtons';
import BackgroundSlider from "@/components/Home/Hero/BackgroundSlider";
import ScrollDownIndicator from "@/components/Resuables/ScrollDownIndicator";
import SwiperProgress from "@/components/Home/Hero/SwiperProgress";

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    const images = [
        '/images/hero/hero2.jpg',
        '/images/hero/hero1.jpg',
        '/images/hero/hero3.jpg'
    ];

    const createFadeAnimation = (direction: 'up' | 'left' | 'right') => {
        const movement = {
            up: {y: 50},
            right: {x: 50},
            left: {x: -50}
        }[direction];

        return {
            initial: {
                opacity: 0,
                ...movement
            },
            animate: {
                opacity: 1,
                ...(direction === 'up' ? {y: 0} : {x: 0}),
                transition: {
                    duration: 0.5,
                    ease: "easeOut"
                }
            }
        };
    };

    const fadeUpAnimation = createFadeAnimation('up');
    const fadeRightAnimation = createFadeAnimation('right');
    const fadeLeftAnimation = createFadeAnimation('left');

    const indicatorAnimation = {
        initial: {
            opacity: 0,
            scale: 0.5
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 1
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

                <SwiperProgress
                    images={images}
                    activeIndex={activeIndex}
                    onClick={(index) => swiper?.slideTo(index)}
                />
            </div>

            <div className="relative z-20 container mx-auto px-4 pt-36 md:pt-0 md:h-screen flex items-center">
                <motion.div
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                    className="max-w-4xl space-y-8"
                >
                    <div className="space-y-6">
                        <motion.h1
                            variants={fadeUpAnimation}
                            className="text-6xl lg:text-8xl font-bold text-white leading-tight"
                        >
                            Building <span className='font-thin'>Dreams</span> <br/><span className='font-thin'>Expanding</span> Homes
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
                        <BigCustomButton text="Let's Talk" href={"/contact"} arrowEnabled={true}/>
                        <OutlineButton text={"View Work"} href={"/projects"}/>
                    </motion.div>

                    <motion.div
                        variants={indicatorAnimation}
                        className="flex md:hidden justify-center scale-75"
                    >
                        <ScrollDownIndicator color={"white"} small={true} speed={1000}/>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                variants={indicatorAnimation}
                initial="initial"
                animate="animate"
                className="z-30 absolute bottom-8 right-8 hidden md:block"
            >
                <ScrollDownIndicator color={"white"} small={true} speed={1000}/>
            </motion.div>
        </motion.div>
    );
};

export default Hero;
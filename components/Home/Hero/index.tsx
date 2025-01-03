import React, {useState} from 'react';
import {Sparkles} from 'lucide-react';
import {motion, useScroll, useTransform} from 'framer-motion';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade} from 'swiper/modules';
import {Swiper as SwiperType} from 'swiper/types';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import styles from './Hero.module.css';
import ScrollIndicator from './ScrollIndicator';
import {BigCustomButton, OutlineButton} from '@/components/Resuables/CustomButtons';

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    const {scrollY} = useScroll();
    const scale = useTransform(scrollY, [0, 1000], [1, 1.5]);

    const images = [
        '/images/loft.jpeg',
        '/images/kitchen.jpeg',
        '/images/tiling.jpg'
    ];

    const revealAnimation = {
        initial: {y: "100%"},
        animate: {
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1]
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
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="slide"
                    speed={1000}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="h-full w-full overflow-hidden"
                    onSwiper={setSwiper}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative h-full w-full overflow-hidden">
                                <motion.div
                                    style={{scale}}
                                    className="relative h-full w-full origin-center"
                                >
                                    <Image
                                        src={image}
                                        alt={`Interior design ${index + 1}`}
                                        className="h-full w-full object-cover"
                                        fill
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/60 z-10"/>
                                </motion.div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

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
                        <div className="overflow-hidden">
                            <motion.div variants={revealAnimation} className="flex items-center space-x-2">
                                <Sparkles className="h-6 w-6 text-white"/>
                                <span className="text-white font-medium">Expert Craftmanship</span>
                            </motion.div>
                        </div>

                        <div className="overflow-hidden">
                            <motion.h1
                                variants={revealAnimation}
                                className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 text-transparent bg-clip-text leading-tight"
                            >
                                Transform Your <span className='font-thin'>Space</span>
                            </motion.h1>
                        </div>

                        <div className="overflow-hidden">
                            <motion.p
                                variants={revealAnimation}
                                className="text-xl text-white"
                            >
                                Create stunning living spaces that blend modern aesthetics with functional design.
                                Experience the future of home transformation.
                            </motion.p>
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <motion.div
                            variants={revealAnimation}
                            className="flex flex-col sm:flex-row gap-6"
                        >
                            <BigCustomButton text="Let's Talk" arrowEnabled={true}/>
                            <OutlineButton text={"View Portfolio"}/>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <ScrollIndicator/>
        </motion.div>
    );
};

export default Hero;
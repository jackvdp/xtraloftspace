import React from 'react';
import {ArrowRight, Sparkles} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {motion, Variants} from 'framer-motion';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';

const Hero = () => {
    const images = [
        '/images/loft.jpeg',
        '/images/kitchen.jpeg',
        '/images/tiling.jpg'
    ];

    const fadeInUp: Variants = {
        initial: {opacity: 0, y: 20},
        animate: {
            opacity: 1,
            transition: {duration: 0.6}
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
            {/* Background slider with overlay */}
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
                    className="h-full w-full"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative h-full w-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/60 z-10"/>
                                <Image
                                    src={image}
                                    alt={`Interior design ${index + 1}`}
                                    className="h-full w-full object-cover"
                                    fill
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="relative z-20 container mx-auto px-4 h-screen flex items-center">
                <motion.div
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                    className="max-w-2xl space-y-8"
                >
                    <div className="space-y-6">
                        <motion.div variants={fadeInUp} className="flex items-center space-x-2">
                            <Sparkles className="h-6 w-6 text-white"/>
                            <span className="text-white font-medium">Expert Craftmanship</span>
                        </motion.div>
                        <motion.h1
                            variants={fadeInUp}
                            className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 text-transparent bg-clip-text leading-tight"
                        >
                            Transform Your <span className='font-thin'>Space</span>
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-xl text-white"
                        >
                            Create stunning living spaces that blend modern aesthetics with functional design.
                            Experience the future of home transformation.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-6"
                    >
                        <Button
                            size="lg"
                            className="group relative bg-white hover:bg-gray-100 text-black rounded-full text-lg h-16 px-12"
                        >
              <span className="relative z-10 flex items-center">
                Let&apos;s Talk
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1"/>
              </span>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-white/50 text-white rounded-full bg-white/30 hover:bg-white/70 text-lg h-16 px-12"
                        >
                            View Portfolio
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Hero;
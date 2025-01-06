import {Swiper, SwiperSlide} from "swiper/react";
import type {Swiper as SwiperType} from 'swiper';
import {motion, useScroll, useTransform} from "framer-motion";
import {Autoplay, EffectFade} from "swiper/modules";
import Image from "next/image";
import React from "react";

interface BackgroundSliderProps {
    onSwiper: (swiper: SwiperType | null) => void;
    onSlideChange: (swiper: SwiperType) => void;
    images: string[];
}

export default function BackgroundSlider({
                                             onSwiper,
                                             onSlideChange,
                                             images
                                         }: BackgroundSliderProps) {
    const {scrollY} = useScroll();
    const scale = useTransform(scrollY, [0, 1000], [1, 1.5]);

    return (
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
            onSwiper={onSwiper}
            onSlideChange={onSlideChange}
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
                                loading={index === 0 ? "eager" : undefined}
                                priority={index === 0}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/60 z-10"/>
                        </motion.div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
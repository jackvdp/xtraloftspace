import {Swiper, SwiperSlide} from "swiper/react";
import {motion, useScroll, useTransform} from "framer-motion";
import {Autoplay, EffectFade} from "swiper/modules";
import Image from "next/image";
import React from "react";

export default function BackgroundSlider(props: {
    onSwiper: (value: (((prevState: (Swiper | null)) => (Swiper | null)) | Swiper | null)) => void,
    onSlideChange: (swiper) => void,
    images: string[],
}) {
    const {scrollY} = useScroll();
    const scale = useTransform(scrollY, [0, 1000], [1, 1.5]);

    return <Swiper
        modules={[Autoplay, EffectFade]}
        effect="slide"
        speed={1000}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full overflow-hidden"
        onSwiper={props.onSwiper}
        onSlideChange={props.onSlideChange}
    >
        {props.images.map((image, index) => (
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
    </Swiper>;
}
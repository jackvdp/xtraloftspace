import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence, useInView} from 'framer-motion';
import {testimonials} from './testimonials';
import {Card, CardContent} from "@/components/ui/card";
import NavigationButton from "@/components/Testimonials/NavigationButton";
import {QuoteIcon} from '@radix-ui/react-icons';
import {BigCustomButton, GoogleReviewButton} from "@/components/Resuables/CustomButtons";
import Stars from "@/components/Testimonials/Stars";
import fetchGoogleReviews from "@/components/Testimonials/getTestimonials";

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: {opacity: 0, y: 20},
    show: {opacity: 1, y: 0}
};

const Carousel = () => {
    const [state, setState] = useState({
        currentIndex: 0,
        progress: 0
    });
    const ref = React.useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-100px"});

    useEffect(() => {
        const timer = setInterval(() => {
            setState(prevState => {
                if (prevState.progress >= 100) {
                    return {
                        currentIndex: (prevState.currentIndex + 1) % testimonials.length,
                        progress: 0
                    };
                }
                return {
                    ...prevState,
                    progress: prevState.progress + 1
                };
            });
        }, 50);

        return () => clearInterval(timer);
    }, []);

    const scrollNext = () => {
        setState(prevState => ({
            currentIndex: (prevState.currentIndex + 1) % testimonials.length,
            progress: 0
        }));
    };

    const scrollPrev = () => {
        setState(prevState => ({
            currentIndex: prevState.currentIndex === 0 ? testimonials.length - 1 : prevState.currentIndex - 1,
            progress: 0
        }));
    };

    return (
        <div ref={ref} className="pt-24 bg-black">
            <motion.div
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="container mx-auto px-4"
            >
                <motion.h2
                    variants={item}
                    className="text-4xl font-bold text-center mb-4 text-white"
                >
                    What our <span className="font-thin">clients say</span>
                </motion.h2>
                <motion.p
                    variants={item}
                    className="text-gray-400 text-center mb-12"
                >
                    Don&apos;t just take it from us, hear it from our clients.
                </motion.p>

                <motion.div
                    variants={item}
                    className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4"
                >
                    <div className="hidden md:block">
                        <NavigationButton action={scrollPrev} reverseArrow={true}/>
                    </div>

                    <Card className="relative flex-1 bg-zinc-900 border-zinc-800">
                        <CardContent className="p-8">
                            <QuoteIcon className="absolute -top-8 left-8 w-16 h-16 text-white"/>

                            <div className="absolute -top-8 right-8">
                                <Stars/>
                            </div>

                            <div className="min-h-48 flex flex-col justify-between">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={state.currentIndex}
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        exit={{opacity: 0, y: -20}}
                                        transition={{duration: 0.5}}
                                        className="text-xl text-white mt-8 mb-8 line-clamp-4"
                                    >
                                        {testimonials[state.currentIndex].quote}
                                    </motion.p>
                                </AnimatePresence>

                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={state.currentIndex}
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        transition={{duration: 0.5}}
                                        className="text-zinc-400 font-medium mb-8"
                                    >
                                        {testimonials[state.currentIndex].author}
                                    </motion.p>
                                </AnimatePresence>
                            </div>

                            <div className="hidden lg:flex gap-2 justify-center">
                                {testimonials.map((_, index) => (
                                    <div key={index} className="h-1 w-16 bg-black rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-white rounded-full transition-all duration-50"
                                            style={{
                                                width: index < state.currentIndex ? '100%' :
                                                    index === state.currentIndex ? `${state.progress}%` : '0%'
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="hidden md:block">
                        <NavigationButton action={scrollNext}/>
                    </div>

                    <div className="flex gap-4 md:hidden">
                        <NavigationButton action={scrollPrev} reverseArrow={true}/>
                        <NavigationButton action={scrollNext}/>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

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
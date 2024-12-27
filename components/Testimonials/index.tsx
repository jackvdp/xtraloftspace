import React, {useState, useEffect} from 'react';
import {testimonials} from './testimonials';
import {Card, CardContent} from "@/components/ui/card";
import NavigationButton from "@/components/Testimonials/NavigationButton";

const TestimonialsCarousel = () => {
    const [state, setState] = useState({
        currentIndex: 0,
        progress: 0
    });

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
        <div className="pt-24">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4">
                    Hear what our <span className="font-thin">clients say</span>
                </h2>
                <p className="text-gray-600 text-center mb-12">
                    Don&apos;t just take it from us, hear it from our clients.
                </p>

                <div className="max-w-4xl mx-auto flex items-center gap-4">
                    <NavigationButton action={scrollPrev} reverseArrow={true}/>

                    <Card className="relative flex-1">
                        <CardContent className="p-8">
                            <span className="absolute -top-8 left-8 text-8xl text-black font-serif">"</span>

                            <div className="min-h-48 flex flex-col justify-between">
                                <p className="text-xl text-gray-700 mt-8 mb-8">
                                    {testimonials[state.currentIndex].quote}
                                </p>
                                <p className="text-gray-500 font-medium mb-8">
                                    {testimonials[state.currentIndex].author}
                                </p>
                            </div>

                            <div className="flex gap-2 justify-center">
                                {testimonials.map((_, index) => (
                                    <div key={index} className="h-1 w-16 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-black rounded-full transition-all duration-50"
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

                    <NavigationButton action={scrollNext}/>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCarousel;
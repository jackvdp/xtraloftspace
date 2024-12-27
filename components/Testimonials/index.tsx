import React, {useState, useEffect} from 'react';
import {testimonials} from './testimonials';
import {Card, CardContent} from "@/components/ui/card";

const TestimonialsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    const scrollNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setProgress(0);
    };

    const scrollPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
        setProgress(0);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    scrollNext();
                    return 0;
                }
                return prevProgress + 0.5;
            });
        }, 50);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="pt-24">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4">
                    Hear what our <span className="font-thin">clients say</span>
                </h2>
                <p className="text-gray-600 text-center mb-12">
                    Don&apos;t just take it from us, hear it from our clients.
                </p>

                <div className="max-w-4xl mx-auto relative">
                    <Card className="relative">
                        <CardContent className="p-8">
                            <div className="absolute -top-8 left-8">
                                <svg width="64" height="64" viewBox="0 0 24 24" className="text-black">
                                    <path
                                        fill="currentColor"
                                        d="M9.583 17.321C8.553 16.227 8 15.1 8 13.936c0-1.374.397-2.681 1.192-3.922.795-1.241 1.81-2.275 3.043-3.101l1.01 1.01c-1.295.728-2.225 1.745-2.79 3.052-.567 1.296-.557 2.539.03 3.73.396.752.995 1.13 1.796 1.13.64 0 1.179-.225 1.616-.676.437-.45.656-.995.656-1.635 0-.63-.219-1.175-.656-1.636-.438-.461-.975-.692-1.616-.692v-1.313c1.207 0 2.217.427 3.032 1.282.815.855 1.222 1.893 1.222 3.116 0 1.207-.415 2.236-1.243 3.085-.83.85-1.832 1.274-3.011 1.274-1.282 0-2.32-.44-3.116-1.323zM1 17.32C-.03 16.227-.542 15.1-.542 13.936c0-1.374.397-2.681 1.192-3.922.795-1.241 1.81-2.275 3.043-3.101l1.01 1.01c-1.295.728-2.225 1.745-2.79 3.052-.567 1.296-.557 2.539.03 3.73.396.752.995 1.13 1.796 1.13.64 0 1.179-.225 1.616-.676.437-.45.656-.995.656-1.635 0-.63-.219-1.175-.656-1.636-.438-.461-.975-.692-1.616-.692V9.883c1.207 0 2.217.427 3.032 1.282.815.855 1.222 1.893 1.222 3.116 0 1.207-.415 2.236-1.243 3.085-.83.85-1.832 1.274-3.011 1.274-1.282 0-2.32-.44-3.116-1.323z"
                                    />
                                </svg>
                            </div>

                            <div className="min-h-48 flex flex-col justify-between">
                                <p className="text-xl text-gray-700 mt-8 mb-8">
                                    {testimonials[currentIndex].quote}
                                </p>
                                <p className="text-gray-500 font-medium mb-8">
                                    {testimonials[currentIndex].author}
                                </p>
                            </div>

                            <div className="h-1 bg-gray-100 rounded-full">
                                <div
                                    className="h-full bg-black rounded-full transition-all duration-50"
                                    style={{width: `${progress}%`}}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={scrollPrev}
                            className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                            </svg>
                        </button>
                        <button
                            onClick={scrollNext}
                            className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCarousel;
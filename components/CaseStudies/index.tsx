import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi
} from "@/components/ui/carousel";
import { cases } from './cases';
import CaseStudyInfo from './CaseStudyInfo';

const CaseStudies = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen pt-24"
        >
            <h2 className="text-4xl font-bold text-center mb-4">Our work</h2>
            <p className="text-gray-600 text-center mb-12">Everything you need to know about our loft conversion services</p>

            {/* Mobile layout */}
            <Mobile currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />

            {/* Desktop layout */}
            <Desktop currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />

        </motion.div>
    );
};

export default CaseStudies;


function Desktop({ currentIndex, setCurrentIndex }: {
    currentIndex: number, setCurrentIndex: (index: number) => void
}) {
    const [api, setApi] = useState<CarouselApi>();

    useEffect(() => {
        if (!api) {
            return;
        }

        api.on("select", () => {
            setCurrentIndex(api.selectedScrollSnap());
        });
    }, [api]);


    return (
        <div className="hidden lg:block pl-12">
            <div className="flex w-full mx-auto">
                <CaseStudyInfo
                    casestudy={cases[currentIndex]}
                    scrollPrev={() => api?.scrollPrev()}
                    scrollNext={() => api?.scrollNext()}
                />
                <div className="flex-grow">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {cases.map((case_study, index) => (
                                <CarouselItem key={index} className="pl-4 basis-[85%]">
                                    <div className="aspect-[4/3] relative">
                                        <img
                                            src={case_study.image}
                                            alt={case_study.title}
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

function Mobile({ currentIndex, setCurrentIndex }: {
    currentIndex: number, setCurrentIndex: (index: number) => void
}) {

    const [api, setApi] = useState<CarouselApi>();

    useEffect(() => {
        if (!api) {
            return;
        }

        api.on("select", () => {
            setCurrentIndex(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <div className="lg:hidden px-4">
            <Carousel
                setApi={setApi}
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full mb-8"
            >
                <CarouselContent>
                    {cases.map((case_study, index) => (
                        <CarouselItem key={index}>
                            <div className="aspect-[4/3] relative">
                                <img
                                    src={case_study.image}
                                    alt={case_study.title}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="px-4">
                <CaseStudyInfo
                    casestudy={cases[currentIndex]}
                    scrollPrev={() => api?.scrollPrev()}
                    scrollNext={() => api?.scrollNext()}
                />
            </div>
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi
} from "@/components/ui/carousel"
import { cases } from './cases';
import CaseStudyInfo from './CaseStudyInfo';

const CaseStudies = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        api.on("select", () => {
            setCurrentIndex(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <div className="min-h-screen pt-24">
            <h2 className="text-4xl font-bold text-center mb-4">Our work</h2>
            <p className="text-gray-600 text-center mb-12">Everything you need to know about our loft conversion services</p>
            <div className="pl-12 flex items-center">
                <div className="flex w-full mx-auto">
                    {/* Left content area - fixed width */}
                    <CaseStudyInfo
                        casestudy={cases[currentIndex]}
                        scrollPrev={() => api?.scrollPrev()}
                        scrollNext={() => api?.scrollNext()}
                    />

                    {/* Right carousel area */}
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
        </div>
    );
};

export default CaseStudies;
import React, { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi
} from "@/components/ui/carousel"

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
        <div className="min-h-screen pl-12 flex items-center">
            <div className="flex w-full mx-auto">
                {/* Left content area - fixed width */}
                <div className="w-[400px] flex-shrink-0 pr-12 my-auto">
                    <div className="space-y-6 mb-12">
                        <div>
                            <p className="text-sm text-gray-600 mb-2">{cases[currentIndex].category}</p>
                            <h2 className="text-4xl font-semibold mb-8">{cases[currentIndex].title}</h2>
                        </div>

                        <div>
                            <h3 className="font-medium mb-1">Location</h3>
                            <p className="text-gray-600">{cases[currentIndex].location}</p>
                        </div>

                        <div>
                            <h3 className="font-medium mb-1">Project Duration</h3>
                            <p className="text-gray-600">{cases[currentIndex].duration}</p>
                        </div>

                        <p className="text-gray-600">{cases[currentIndex].description}</p>
                    </div>

                    <div className="flex space-x-4">
                        <button
                            onClick={() => api?.scrollPrev()}
                            className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => api?.scrollNext()}
                            className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

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
    );
};

export default CaseStudies;

const cases = [
    {
        category: 'Loft Conversion',
        title: 'Victorian Transformation',
        location: 'Hampstead, London',
        duration: '12 weeks',
        description: 'Complete dormer loft conversion with ensuite bathroom. Created a spacious master bedroom with stunning city views while preserving the period features of this Victorian property.',
        image: '/images/casestudy1.avif'
    },
    {
        category: 'Roof Extension',
        title: 'Modern Family Space',
        location: 'Richmond, Surrey',
        duration: '14 weeks',
        description: 'Full-width rear dormer extension providing two additional bedrooms and a home office. Featuring skylights and floor-to-ceiling windows to maximize natural light.',
        image: '/images/casestudy2.avif'
    },
    {
        category: 'Heritage Renovation',
        title: 'Listed Building Success',
        location: 'Bath, Somerset',
        duration: '16 weeks',
        description: 'Sensitive restoration and conversion of a Grade II listed property. Created additional living space while meeting strict conservation requirements and maintaining historical integrity.',
        image: '/images/casestudy3.avif'
    }
];
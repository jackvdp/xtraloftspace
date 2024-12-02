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
                            <h3 className="font-medium mb-1">Homes Available</h3>
                            <p className="text-gray-600">{cases[currentIndex].availability}</p>
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
        category: 'Developments',
        title: 'Peterborough Street',
        location: 'Christchurch Central',
        availability: '4 units',
        description: 'Effortless living in the heart of the city',
        image: '/images/casestudy1.avif'
    },
    {
        category: 'Developments',
        title: 'Riverside Manor',
        location: 'Riverside District',
        availability: '6 units',
        description: 'Modern riverside living with panoramic views',
        image: '/images/casestudy2.avif'
    },
    {
        category: 'Developments',
        title: 'The Oaklands',
        location: 'Merivale',
        availability: '8 units',
        description: 'Luxury townhouses in prestigious location',
        image: '/images/casestudy3.avif'
    }
];
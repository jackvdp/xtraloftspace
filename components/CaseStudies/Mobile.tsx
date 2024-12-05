import { useState, useEffect } from "react";
import { CarouselApi, Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import CaseStudyInfo from "./CaseStudyInfo";
import { cases } from "./cases";

export default function Mobile({ currentIndex, setCurrentIndex }: {
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
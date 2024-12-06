import { useState, useEffect } from "react";
import { CarouselApi, Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import CaseStudyInfo from "./CaseStudyInfo";
import { cases } from "./cases";
import Image from "next/image";

export default function Mobile({
    currentIndex,
    setCurrentIndex
}: {
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
}) {
    const [api, setApi] = useState<CarouselApi>();

    useEffect(() => {
        if (!api) {
            return;
        }
        api.on("select", () => {
            setCurrentIndex(api.selectedScrollSnap());
        });
    }, [api, setCurrentIndex]);

    return (
        <div className="lg:hidden px-0">
            <Carousel
                setApi={setApi}
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full mb-8"
            >
                <CarouselContent className="-ml-0">
                    {cases.map((case_study, index) => (
                        <CarouselItem key={index} className="pl-4 basis-4/5">
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src={case_study.image}
                                    alt={case_study.title}
                                    className="h-full object-cover rounded-2xl"
                                    fill
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
    );
}
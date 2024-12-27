import {useEffect, useState} from "react";
import {CarouselApi, Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel-clip-only-beginning";
import {cases} from "./cases";
import CaseStudyInfo from "./CaseStudyInfo";
import {motion} from "framer-motion"

export default function Desktop({currentIndex, setCurrentIndex}: {
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
        <div className="overflow-hidden">
            <div className="container mx-auto hidden lg:block px-6">
                <div className="flex w-full mx-auto">

                    <CaseStudyInfo
                        casestudy={cases[currentIndex]}
                        scrollPrev={() => api?.scrollPrev()}
                        scrollNext={() => api?.scrollNext()}
                    />

                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true, amount: 0.2}}
                        transition={{duration: 0.8}}
                    >
                        <DesktopCarousel setApi={setApi}/>
                    </motion.div>


                </div>
            </div>
        </div>

    )
}

function DesktopCarousel({setApi}: { setApi: (api: CarouselApi) => void }) {
    return (
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
                            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                                <img
                                    draggable="true"
                                    src={case_study.image}
                                    alt={case_study.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
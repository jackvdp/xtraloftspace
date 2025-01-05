import React from "react";
import {useScroll} from "framer-motion";
import {Service, services} from "@/components/Services/Service";
import ScrollIndicator from "@/components/Resuables/ScrollDownIndicator";
import BackgroundImageGrid from "@/components/Projects/BackgroundImageGrid";

function ServiceTitle(props: { index: number, service: Service }) {
    return <div
        className="py-2 md:py-4 flex items-baseline gap-3 md:gap-6"
    >
        <span className="text-xl md:text-3xl font-bold">
            {(props.index + 1).toString().padStart(2, "0")}
        </span>
        <h3 className="text-3xl md:text-6xl font-bold tracking-tight">
            {props.service.title}
        </h3>
    </div>;
}

const ServicesList = () => {
    const {scrollYProgress} = useScroll();

    return (
        <div className="relative">
            <div className="sticky top-0 z-10">
                <div className="h-screen flex flex-col items-center justify-center relative">
                    <BackgroundImageGrid scrollYProgress={scrollYProgress} reversed/>

                    <div className="w-full max-w-6xl px-4 md:px-8">
                        <div className="flex flex-col justify-between py-6 md:py-12">
                            <div className="bg-white/30 backdrop-blur-md rounded-lg p-4">
                                <div className="flex gap-8 items-center">
                                    <div className="flex-1">
                                        {services.map((service, index) => (
                                            <ServiceTitle
                                                key={service.title}
                                                index={index}
                                                service={service}
                                            />
                                        ))}
                                    </div>

                                    <div className="hidden md:block">
                                        <ScrollIndicator/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:hidden absolute bottom-8 scale-50 bg-white/30 backdrop-blur-md rounded-full p-4">
                        <ScrollIndicator/>
                    </div>
                </div>
            </div>

            <div style={{height: "150vh"}}/>
        </div>
    );
};

export default ServicesList;
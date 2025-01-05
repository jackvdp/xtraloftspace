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

                    <div className="w-full max-w-5xl px-4 md:px-8">
                        <div className="flex flex-col justify-between py-6 md:py-12">
                            {/**
                             * Single blurred container on large screens:
                             * We make it 'relative' so the absolutely-positioned scroll indicator
                             * sits inside the same container & shares the blur backdrop.
                             */}
                            <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 relative">
                                {services.map((service, index) => (
                                    <ServiceTitle
                                        key={service.title}
                                        index={index}
                                        service={service}
                                    />
                                ))}

                                {/*
                  On md+ screens, place the scroll indicator INSIDE this container
                  (and hide the separate one).
                  This means the blur covers both service titles & the scroll indicator.
                */}
                                <div className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 p-4">
                                    <ScrollIndicator/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/**
                     * On small screens, we keep the scroll indicator separate as before.
                     * So this indicator is only visible on md:hidden
                     */}
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
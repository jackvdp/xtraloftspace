import React from "react";
import {useScroll} from "framer-motion";
import ScrollIndicator from "@/components/Resuables/ScrollDownIndicator";
import BackgroundImageGrid from "@/components/Projects/BackgroundImageGrid";

const ServicesList = () => {
    const {scrollYProgress} = useScroll();

    return (
        <div className="relative">
            <div className="sticky top-0 z-10">
                <div className="h-screen flex flex-col items-center justify-center">
                    {/* Background Image Grid */}
                    <BackgroundImageGrid scrollYProgress={scrollYProgress}/>

                    {/* Centered Scroll Indicator with Backdrop */}
                    <div className="scale-50 md:scale-100 relative z-20 bg-white/30 backdrop-blur-md rounded-full p-4">
                        <div className="">
                            <ScrollIndicator/>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{height: "150vh"}}/>
        </div>
    );
};

export default ServicesList;

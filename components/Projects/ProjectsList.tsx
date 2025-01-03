import React from "react";
import {motion} from "framer-motion";
import ScrollIndicator from "@/components/Resuables/ScrollDownIndicator";
import {cases} from "@/components/CaseStudies/cases";

const ServicesList = () => {

    return (
        <div className="relative">
            <div className="sticky top-0 z-10">
                <div className="h-screen flex flex-col items-center justify-center relative">
                    <div className="w-full max-w-5xl px-4 md:px-8">
                        <div className="flex flex-col justify-between py-6 md:py-12">
                            {cases.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{
                                        delay: 0.1 + index * 0.1,
                                        duration: 0.5,
                                    }}
                                    className="py-2 md:py-4 flex items-baseline gap-3 md:gap-6"
                                >
                                  <span className="text-xl md:text-3xl font-bold">
                                    {(index + 1).toString().padStart(2, "0")}
                                  </span>
                                    <h3 className="text-3xl md:text-6xl font-bold tracking-tight">
                                        {service.title}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2">
                        <ScrollIndicator/>
                    </div>
                    <div className="md:hidden absolute bottom-8 scale-50">
                        <ScrollIndicator/>
                    </div>
                </div>
            </div>

            <div style={{height: "150vh"}}/>
        </div>
    );
};

export default ServicesList;
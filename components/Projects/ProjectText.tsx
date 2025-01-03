import React from "react";
import {motion, MotionValue, useTransform} from "framer-motion";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {BigCustomButton} from "@/components/Resuables/CustomButtons";
import Image from "next/image";
import {CaseStudy} from "@/components/CaseStudies/cases";

interface ServiceTextProps {
    scrollYProgress: MotionValue<number>;
    caseStudy: CaseStudy;
    index: number;
    reverseLayout: boolean;
}

function ServiceText({
                         scrollYProgress,
                         caseStudy,
                         index,
                         reverseLayout,
                     }: ServiceTextProps) {
    const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0]);
    const xRange = reverseLayout ? [-100, 0, 0, -100] : [100, 0, 0, 100];
    const x = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], xRange);
    const titleY = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [20, 0, 0, 20]);
    const descriptionY = useTransform(scrollYProgress, [0, 0.35, 0.75, 1], [30, 0, 0, 30]);

    return (
        <div className="relative w-full ml-auto">
            <motion.div style={{opacity, x}} className="relative px-4 lg:px-8">
                <motion.div style={{opacity}} className="absolute right-0 bottom-12 -z-10 hidden lg:block">
                    <span className="text-[50vh] font-bold text-zinc-100">
                        {(index + 1).toString().padStart(2, "0")}
                    </span>
                </motion.div>

                <motion.div style={{opacity}} className="lg:hidden absolute -top-16 right-0 -z-10">
                    <span
                        className="text-[20vh] font-bold"
                        style={{
                            color: "transparent",
                            WebkitTextStroke: "1px rgba(0,0,0,0.1)",
                        }}
                    >
                        {(index + 1).toString().padStart(2, "0")}
                    </span>
                </motion.div>

                <motion.p style={{y: descriptionY}} className="text-md lg:text-xl text-black/70">
                    {caseStudy.category}
                </motion.p>

                <motion.h2 style={{y: titleY}} className="text-4xl lg:text-6xl font-bold text-black mb-4 lg:mb-6">
                    {caseStudy.title}
                </motion.h2>

                <motion.b style={{y: descriptionY}} className="text-lg lg:text-xl text-black/70">
                    Location
                </motion.b>
                <motion.p style={{y: descriptionY}} className="text-lg lg:text-xl text-black/70 mb-4 lg:mb-6">
                    {caseStudy.location}
                </motion.p>

                <motion.b style={{y: descriptionY}} className="text-lg lg:text-xl text-black/70">
                    Duration
                </motion.b>
                <motion.p style={{y: descriptionY}} className="text-lg lg:text-xl text-black/70 mb-4 lg:mb-6">
                    {caseStudy.duration}
                </motion.p>

                <motion.p style={{y: descriptionY}} className="text-lg lg:text-xl text-black/70 mb-4 lg:mb-6">
                    {caseStudy.shortDescription}
                </motion.p>

                <Dialog>
                    <DialogTrigger asChild>
                        <div>
                            <BigCustomButton text={'Read More'} arrowEnabled={true} dark={true}/>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle className="text-3xl font-bold mb-4">{caseStudy.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                            <div className="relative w-full h-96">
                                <Image
                                    src={caseStudy.image}
                                    alt={caseStudy.title}
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                                <div>
                                    <p className="font-bold">Location</p>
                                    <p>{caseStudy.location}</p>
                                </div>
                                <div>
                                    <p className="font-bold">Duration</p>
                                    <p>{caseStudy.duration}</p>
                                </div>
                                <div>
                                    <p className="font-bold">Category</p>
                                    <p>{caseStudy.category}</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">Overview</h3>
                                <p className="text-zinc-700">{caseStudy.fullDescription}</p>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </motion.div>
        </div>
    );
}

export default ServiceText;
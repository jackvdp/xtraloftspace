import React from 'react';
import {motion, useInView} from 'framer-motion';
import {BigCustomButton} from "@/components/Resuables/CustomButtons";
import ParallaxImage from "@/components/Resuables/parallaxImage";
import CountUp from "react-countup";

export default function AboutSection() {
    const statsRef = React.useRef(null);
    const isInView = useInView(statsRef, {
        amount: 0.2,
        once: true
    });

    return (
        <section className="pt-24 overflow-hidden bg-white">
            {/* Header and main content sections remain the same */}
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Building <span className="font-thin">Excellence</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Welcome to Xtra Loft Space — Building Excellence in every project we undertake.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                        className="lg:w-1/2"
                    >
                        <div className="relative aspect-[4/3] w-full h-[250px] lg:h-full">
                            <ParallaxImage
                                src="/images/about3.jpg"
                                alt="Our latest project"
                                fill
                                className="object-cover rounded-lg shadow-xl"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                        className="lg:w-1/2 space-y-6"
                    >
                        <p className="text-gray-600">
                            We are a proud family-run building company serving Hertfordshire, North London, Essex, and
                            the surrounding areas. As a family business, we prioritize trust, integrity, and building
                            lasting relationships with our customers.
                        </p>

                        <p className="text-gray-600">
                            Specializing in loft conversions, extensions, and refurbishments, our expertise spans every
                            aspect of the construction industry. From initial design to final finishes, we ensure a
                            seamless process, collaborating closely with our in-house architects and structural
                            engineers to bring your vision to life.
                        </p>

                        <p className="text-gray-600">
                            Fully insured for your peace of mind, we only use top-quality materials sourced from
                            well-renowned suppliers. Our fast and efficient service is matched by an unwavering
                            commitment to achieving the highest standards in every project.
                        </p>

                        <div className="pt-8 flex justify-center lg:justify-start">
                            <BigCustomButton text="Meet the Team" href={"/about"} arrowEnabled={true} dark={true}/>
                        </div>
                    </motion.div>
                </div>

                {/* Stats section with fixed ref handling */}
                <div
                    ref={statsRef}
                    className="mt-24"
                >
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                        transition={{duration: 0.6}}
                        className="flex flex-col md:flex-row justify-center gap-16 md:gap-32 text-center"
                    >
                        <div>
                            <div className="text-4xl font-bold text-gray-900 mb-2">
                                {isInView && (
                                    <CountUp
                                        start={0}
                                        end={10}
                                        duration={2}
                                        suffix="+"
                                    />
                                )}
                            </div>
                            <p className="text-gray-600">Years Experience</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900 mb-2">
                                {isInView && (
                                    <CountUp
                                        start={0}
                                        end={50}
                                        duration={4}
                                        suffix="+"
                                    />
                                )}
                            </div>
                            <p className="text-gray-600">Projects Completed</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900 mb-2">
                                {isInView && (
                                    <CountUp
                                        start={0}
                                        end={100}
                                        duration={4}
                                        suffix="%"
                                    />
                                )}
                            </div>
                            <p className="text-gray-600">Satisfaction Rate</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
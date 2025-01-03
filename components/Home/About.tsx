import React from 'react';
import {CheckCircle2} from 'lucide-react';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import CountUp from 'react-countup';
import {Card, CardContent} from "@/components/ui/card";
import ParallaxImage from "@/components/Resuables/parallaxImage";
import {BigCustomButton} from "@/components/Resuables/CustomButtons";

export default function AboutSection() {
    const features = [
        'Family-run business with generations of expertise',
        'Specializing in high-end residential projects',
        'Complete design and build services',
        'Expert loft conversions and extensions',
    ];

    const {ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const [hovered, setHovered] = React.useState(false);

    const topImageVariants = {
        initial: {
            zIndex: 30,
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            transition: {duration: 0.3}
        },
        hovered: {
            zIndex: 10,
            x: '-2%',
            y: '2%',
            scale: 0.97,
            rotate: 0,
            transition: {duration: 0.3}
        }
    };

    const bottomImageVariants = {
        initial: {
            zIndex: 10,
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            transition: {duration: 0.3}
        },
        hovered: {
            zIndex: 30,
            x: '2%',
            y: '-2%',
            scale: 1.03,
            rotate: 0,
            transition: {duration: 0.3}
        }
    };

    return (
        <section className="pt-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-center ">
                    <motion.div
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true, amount: 0.2}}
                        transition={{duration: 0.6}}
                        className="lg:w-1/2 relative w-full"
                    >
                        <motion.div
                            className="relative mx-auto lg:w-full aspect-square h-[300px] lg:h-[600px] lg:aspect-auto"
                            onHoverStart={() => setHovered(true)}
                            onHoverEnd={() => setHovered(false)}
                            style={{position: 'relative'}}
                        >
                            {/* Top Image (initially on top) */}
                            <motion.div
                                className="absolute top-0 right-0 w-4/5 h-4/5"
                                variants={bottomImageVariants}
                                animate={hovered ? "hovered" : "initial"}
                            >
                                <ParallaxImage
                                    src="/images/tiling.jpg"
                                    alt="Completed loft project"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </motion.div>

                            {/* Bottom Image (initially behind) */}
                            <motion.div
                                className="absolute bottom-0 left-0 w-4/5 h-4/5"
                                variants={topImageVariants}
                                animate={hovered ? "hovered" : "initial"}
                            >
                                <ParallaxImage
                                    src="/images/exterior.jpg"
                                    alt="Team working on site"
                                    fill
                                    className="object-cover rounded-lg shadow-2xl"
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true, amount: 0.2}}
                        transition={{duration: 0.6}}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Elevate your space with{' '}
                            <span className="font-thin">Xtra Loft</span>
                        </h2>

                        <p className="text-gray-600 text-lg mb-8">
                            We are a family-run business with over three generations of experience in the construction
                            industry.
                            Specializing in delivering high-quality craftsmanship and exceptional attention to detail,
                            we transform homes across London and the South East with our expert loft conversions,
                            extensions, and comprehensive design and build projects.
                        </p>

                        <div className="space-y-4 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-black flex-shrink-0"/>
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div ref={ref as React.LegacyRef<HTMLDivElement>} className="grid grid-cols-2 gap-8 mt-12">

                            <Card>
                                <CardContent className="text-center py-6">
                                    <div className="text-3xl font-bold text-black mb-2">
                                        {inView && (
                                            <CountUp
                                                start={0}
                                                end={25}
                                                duration={4}
                                                suffix="+"
                                            />
                                        )}
                                    </div>
                                    <div className="text-gray-600">Years Experience</div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="text-center py-6">
                                    <div className="text-3xl font-bold text-black mb-2">
                                        {inView && (
                                            <CountUp
                                                start={0}
                                                end={500}
                                                duration={4}
                                                suffix="+"
                                            />
                                        )}
                                    </div>
                                    <div className="text-gray-600">Projects Completed</div>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                </div>
            </div>
            <motion.div
                className="flex justify-center mt-12"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.2}}
                transition={{duration: 0.5, delay: 0.4}}
            >
                <BigCustomButton text={'Meet the Team'} arrowEnabled={true} dark={true}/>
            </motion.div>
        </section>
    );
};
import {motion} from "framer-motion";
import React from "react";
import {Card} from "@/components/ui/card";

const OUR_OFFERINGS = [
    {
        title: "A dedicated project management service",
        text: `We keep you updated at every stage of your loft conversion—providing 
            clear timescales, progress reports, and complete transparency 
            from start to finish.`,
    },
    {
        title: "Help with planning permissions",
        text: `Should your local council require planning permission, we guide 
            you through the application process and do our best to help you 
            secure a positive outcome.`,
    },
    {
        title: "Design and planning",
        text: `You'll have a solid vision of your completed loft conversion before 
            building even starts. We work closely with you to ensure it 
            reflects your goals and ticks all your boxes.`,
    },
    {
        title: "Quality build",
        text: `Bringing your loft conversion to life is the most exciting stage. 
            We pride ourselves on high-quality craftsmanship, and we do 
            everything we can to minimize disruption to your daily routine 
            throughout the build.`,
    },
    {
        title: "Continuous customer service",
        text: `We’re always here to talk, ensuring you're happy with each stage 
            of the process and thrilled with the final transformation.`,
    },
];

export default function WhyUs() {
    return (
        <section className="bg-gray-50 py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                <motion.h2
                    initial={{opacity: 0, y: -20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.6}}
                    className="text-3xl lg:text-4xl font-bold mb-6"
                >
                    Why Choose <span className="font-thin">Us?</span>
                </motion.h2>
                <motion.p
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.6, delay: 0.2}}
                    className="text-lg lg:text-xl text-gray-700 mb-8"
                >
                    Of course, there’s a lot of choice out there. But here’s why we stand out:
                    We don’t just meet your expectations—we strive to exceed them.
                    We know a loft conversion is a major undertaking in a personal space,
                    so we do everything we can to provide a seamless journey from start to
                    finish, causing minimal disruption to your daily life.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {OUR_OFFERINGS.map((offer, idx) => (
                        <motion.div
                            key={idx}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, amount: 0.2}}
                            transition={{duration: 0.5, delay: 0.1 * idx + 0.3}}
                            className="flex flex-col"
                        >
                            <Card className="p-6 h-full">
                                <h4 className="text-xl font-semibold mb-2">{offer.title}</h4>
                                <p className="text-gray-700">{offer.text}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.6, delay: 0.4}}
                    className="mt-8 text-lg lg:text-xl text-gray-700"
                >
                    We’re excited you’re considering a loft conversion, and we’d be honored
                    to join you on this journey. If you’d like more information or want to
                    schedule a consultation, feel free to reach out!
                </motion.p>
            </div>
        </section>
    )
}
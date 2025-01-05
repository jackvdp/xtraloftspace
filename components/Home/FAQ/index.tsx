import React from 'react';
import {motion} from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "@/components/Home/FAQ/faq";

const FAQSection = () => {
    return (
        <section className="pt-24 pb-12">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.5}}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold text-center mb-4">
                        Frequently Asked <span className="font-thin">Questions</span>
                    </h2>
                    <p className="text-gray-600 text-center mb-12">
                        Everything you need to know about our loft conversion services
                    </p>

                    <AnimatedAccordion faqs={faqs}/>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: {opacity: 0, y: 20},
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

const AnimatedAccordion = ({faqs}) => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
        >
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                    >
                        <AccordionItem
                            value={`item-${index}`}
                            className="overflow-hidden text-md"
                        >
                            <AccordionTrigger className="font-bold text-md hover:no-underline">
                                <motion.div
                                    initial={{opacity: 0.8}}
                                    whileHover={{
                                        opacity: 1,
                                        x: 4,
                                        transition: {duration: 0.2}
                                    }}
                                >
                                    {faq.question}
                                </motion.div>
                            </AccordionTrigger>
                            <AccordionContent className="text-md">
                                <motion.div
                                    initial={{opacity: 0, y: 10}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.3}}
                                    className="text-md"
                                >
                                    {faq.answer}
                                </motion.div>
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>
                ))}
            </Accordion>
        </motion.div>
    );
};
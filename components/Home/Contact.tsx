import React from 'react';
import {motion} from 'framer-motion';
import ContactForm from "@/components/Resuables/ContactForm";

const ContactSection = () => {


    const containerVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.6, staggerChildren: 0.1}
        }
    };

    const cardVariants = {
        offscreen: {
            y: 50,
            opacity: 0,
            scale: 0.95,
            rotateX: -10
        },
        onscreen: {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <div className="bg-zinc-50">
            <div className="w-full max-w-4xl mx-auto py-24 px-4 ">
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{once: true, amount: 0.6}}
                    >
                        <motion.div variants={cardVariants} className="text-center space-y-4">
                            <div className="relative inline-block">
                                <h2 className="text-4xl font-bold text-center">Get in {' '}
                                    <span className="font-thin">touch</span>
                                </h2>
                            </div>
                            <p className="text-gray-600 max-w-lg mx-auto text-lg">
                                Have a question or want to work together? Drop us a message and we&apos;ll get back to
                                you
                                as soon as possible.
                            </p>
                        </motion.div>
                    </motion.div>

                    <ContactForm/>
                </motion.div>
            </div>
        </div>

    );
};

export default ContactSection;
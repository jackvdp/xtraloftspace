import React, {useState} from 'react';
import {motion} from 'framer-motion';
import FAQCard from './FAQCard';
import faqs from "@/components/Home/FAQ/faq";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.5}}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked {' '}
                        <span className="font-thin">Questions</span></h2>
                    <p className="text-gray-600 text-center mb-12">Everything you need to know about our loft conversion
                        services</p>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQCard key={index} faq={faq} index={index} openIndex={openIndex}
                                     setOpenIndex={setOpenIndex}/>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "How long does a typical loft conversion take?",
            answer: "A standard loft conversion typically takes 8-12 weeks from start to finish. This timeline can vary based on the complexity of your project, required permissions, and specific customizations."
        },
        {
            question: "Do I need planning permission?",
            answer: "Most loft conversions fall under permitted development rights and don't require planning permission. However, we'll assess your specific case and handle all necessary permissions and regulations."
        },
        {
            question: "What's included in your service?",
            answer: "We provide end-to-end service including initial design consultation, architectural plans, structural calculations, building regulations approval, construction, plumbing, electrics, and final finishing touches."
        },
        {
            question: "How much value will it add to my property?",
            answer: "A professionally done loft conversion typically adds 20-25% to your property's value. The exact increase depends on your location, the quality of the conversion, and local market conditions."
        },
        {
            question: "Can all lofts be converted?",
            answer: "Most lofts can be converted, but factors like head height, pitch angle, and structural integrity need to be assessed. We'll conduct a thorough survey to determine the feasibility of your conversion."
        }
    ];

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600 text-center mb-12">Everything you need to know about our loft conversion services</p>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                                >
                                    <div className="flex justify-between items-center p-6">
                                        <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
                                        <div className="flex-shrink-0 ml-4">
                                            {openIndex === index ? (
                                                <Minus className="w-5 h-5 text-blue-600" />
                                            ) : (
                                                <Plus className="w-5 h-5 text-blue-600" />
                                            )}
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="px-6 pb-6 text-gray-600">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
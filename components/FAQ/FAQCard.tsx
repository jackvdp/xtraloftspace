import {AnimatePresence, motion} from "framer-motion";
import {Minus, Plus} from "lucide-react";
import React from "react";
import {Card} from "@/components/ui/card";

export default function FAQCard({faq, index, openIndex, setOpenIndex}: {
    faq: { question: string, answer: string },
    index: number,
    openIndex: number | null,
    setOpenIndex: (index: number | null) => void
}) {
    return (
        <motion.div
            key={index}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.5, delay: index * 0.1}}
        >
            <Card>
                <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full"
                >
                    <div className="flex justify-between items-center p-6">
                        <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
                        <div className="flex-shrink-0 ml-4 text-left">
                            {openIndex === index ? (
                                <Minus className="w-5 h-5 text-black"/>
                            ) : (
                                <Plus className="w-5 h-5 text-black"/>
                            )}
                        </div>
                    </div>

                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{height: 0, opacity: 0}}
                                animate={{height: "auto", opacity: 1}}
                                exit={{height: 0, opacity: 0}}
                                transition={{duration: 0.3}}
                                className="overflow-hidden"
                            >
                                <p className="px-6 pb-6 text-gray-600 text-left">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </Card>
        </motion.div>
    )
}
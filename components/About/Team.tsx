import React, {useRef} from 'react';
import { Users, Heart, Star, MessageCircle } from 'lucide-react';
import {motion, useInView} from 'framer-motion';

const features = [
    {
        icon: <Users className="w-6 h-6" />,
        title: "Family-Driven Excellence",
        description: "Most of our team members are family, bringing passion and dedication to every project we undertake."
    },
    {
        icon: <Heart className="w-6 h-6" />,
        title: "Core Values",
        description: "We're hardworking, honest, and friendly, consistently delivering exceptional results that exceed expectations."
    },
    {
        icon: <Star className="w-6 h-6" />,
        title: "Professional Standards",
        description: "Our skilled tradespeople bring expertise and attention to detail, ensuring work is completed to the highest standards."
    },
    {
        icon: <MessageCircle className="w-6 h-6" />,
        title: "Open Communication",
        description: "We believe in transparent communication, making us approachable and ensuring a smooth, stress-free experience."
    }
];
export default function TeamSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        amount: 0.2,
        once: true
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div
            ref={ref}
            className="w-full max-w-6xl mx-auto px-4 pb-24 bg-white"
        >
            <div className="space-y-12">
                {/* Header Section */}
                <motion.div
                    className="text-center space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        About Our <span className="font-thin">Team</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600">
                        At Xtra Loft Space, our team is the heart of our business, and we take pride in the people who make our projects successful.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.title}
                            className="p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    {feature.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Section */}
                <motion.div
                    className="mt-12 p-6 bg-gray-50 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <p className="text-gray-600 leading-relaxed">
                        We foster a positive culture built on transparency, respect, and a commitment to maintaining a clean and respectful working environment, especially in our clients&apos; homes. While most of our work is carried out by our core team, the few subcontractors we collaborate with share our values of professionalism, integrity, and quality workmanship.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};
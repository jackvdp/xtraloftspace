'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
    const features = [
        'Family-run business with generations of expertise',
        'Specializing in high-end residential projects',
        'Complete design and build services',
        'Expert loft conversions and extensions',
    ];

    return (
        <section className="pt-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Image Stack */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative h-[600px] w-full">
                            {/* Background image */}
                            <div className="absolute top-0 right-0 w-4/5 h-4/5">
                                <Image
                                    src="/images/tiling.jpg"
                                    alt="Completed loft project"
                                    fill
                                    className="object-cover rounded-2xl"
                                />
                            </div>
                            {/* Foreground image */}
                            <div className="absolute bottom-0 left-0 w-4/5 h-4/5 z-10">
                                <Image
                                    src="/images/exterior.jpg"
                                    alt="Team working on site"
                                    fill
                                    className="object-cover rounded-2xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Welcome to{' '}
                            <span className="text-blue-600">Xtra Loft Space</span>
                        </h2>

                        <p className="text-gray-600 text-lg mb-8">
                            We are a family-run business with over three generations of experience in the construction industry.
                            Specializing in delivering high-quality craftsmanship and exceptional attention to detail,
                            we transform homes across London and the South East with our expert loft conversions,
                            extensions, and comprehensive design and build projects.
                        </p>

                        <div className="space-y-4 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-8 mt-12">
                            <div className="text-center py-6 px-4 bg-white rounded-2xl shadow-md">
                                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                                <div className="text-gray-600">Years Experience</div>
                            </div>
                            <div className="text-center py-6 px-4 bg-white rounded-2xl shadow-md">
                                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                                <div className="text-gray-600">Projects Completed</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
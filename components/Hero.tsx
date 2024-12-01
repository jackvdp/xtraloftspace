'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
    return (
        <div className="relative min-h-screen bg-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-blue-100/25 bg-[size:20px_20px] opacity-20" />

            <div className="relative min-h-screen flex items-center">
                {/* Image Background - Full Height */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-0 right-0 w-full lg:w-1/2 h-screen"
                >
                    <div className="relative h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:via-white/50 z-10" />
                        <img
                            src="/images/loft.jpeg"
                            alt="Modern loft conversion"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Main Content */}
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 relative z-20">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 text-center lg:text-left pt-20 lg:pt-0"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Transform Your
                            <span className="text-blue-600 block mt-2">
                                Living Space
                            </span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
                            Expert loft conversions that add value to your home. We turn unused spaces into beautiful, functional rooms that enhance your lifestyle.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                                Get Started
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50">
                                View Our Projects
                            </Button>
                        </div>

                        {/* Stats moved inside the content section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-12 grid grid-cols-2 gap-8 max-w-lg"
                        >
                            {[
                                { label: 'Years Experience', value: '15+' },
                                { label: 'Happy Clients', value: '2000+' },
                                { label: 'Team Members', value: '50+' },
                                { label: 'Awards Won', value: '25+' }
                            ].map((stat, index) => (
                                <div key={index} className="text-center lg:text-left">
                                    <p className="text-2xl md:text-3xl font-bold text-blue-600">{stat.value}</p>
                                    <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Floating Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="absolute bottom-8 right-8 bg-white rounded-xl shadow-lg p-4 w-48 lg:flex hidden"
                    >
                        <div className="flex items-center gap-3">
                            <Building2 className="h-8 w-8 text-blue-600" />
                            <div>
                                <p className="text-sm text-gray-600">Projects Completed</p>
                                <p className="text-xl font-bold text-gray-900">500+</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
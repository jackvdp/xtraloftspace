import React from 'react';
import { motion } from 'framer-motion';
import { services } from './Service'
import Card from './Card';

const ServicesSection = () => {
  return (
    <div className="container mx-auto pt-24 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-4xl font-bold text-center mb-4"
      >
        What we {' '}
        <span className="text-blue-600">do</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 text-center mb-12"
      >
        We offer a range of services to make your space work for you.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex overflow-x-auto lg:overflow-x-hidden"
      >
        {services.map((service, index) => (
          <Card service={service} index={index} key={service.title} />
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesSection;
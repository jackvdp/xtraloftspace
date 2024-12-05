import React from 'react';
import {motion} from 'framer-motion';

interface Service {
    title: string;
    image: string;
    description: string;
}

const services: Service[] = [
    {
        title: 'Loft Conversions',
        image: '/images/kitchen.jpeg',
        description: 'Transform your unused loft space into a beautiful living area. Our expert team handles everything from planning to completion.'
    },
    {
        title: 'Extensions',
        image: '/images/tiling.jpg',
        description: 'Expand your living space with our bespoke extension solutions. We create seamless additions that enhance your home.'
    },
    {
        title: 'Design/Build',
        image: '/images/kitchen.jpg',
        description: 'From concept to creation, our design and build service offers a complete end-to-end solution for your project.'
    },
    {
        title: 'Roofing',
        image: '/images/roofing.jpg',
        description: 'Expert roofing services for all types of properties. We ensure quality materials and superior craftsmanship.'
    },
    {
        title: 'Exterior Decorating',
        image: '/images/exterior.jpg',
        description: "Enhance your property's curb appeal with our professional exterior decorating services."
    }
];

const ServicesSection = () => {
    return (
      <div className="w-full overflow-hidden pt-24 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          What we do
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-center mb-12"
        >
          We offer a range of services to make your space work for you.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex space-x-2 overflow-x-auto lg:overflow-x-hidden pb-6"
        >
          {services.map((service, index) => (
            <Card service={service} index={index} key={service.title} />
          ))}
        </motion.div>
      </div>
    );
  };
  
  function Card({ service, index }: { service: Service; index: number }) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative group md:max-w-[280px] lg:max-w-none lg:w-1/5 aspect-[1/2] overflow-hidden flex-shrink-0 rounded-lg"
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-all duration-300 group-hover:blur-xl rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 p-4 text-white z-10">
          <h3 className="text-lg font-semibold">{service.title}</h3>
        </div>
        <div className="absolute inset-0 p-6 flex flex-col justify-start text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-md">{service.description}</p>
        </div>
      </motion.div>
    );
  }

export default ServicesSection;
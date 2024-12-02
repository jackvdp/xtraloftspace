import React from 'react';
import AnimatedHeader from './header';

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
        <div className="w-full overflow-hidden py-12 px-6">
            <AnimatedHeader text="What we do" padding='py-8' />
            <div className="flex space-x-2 overflow-x-auto lg:overflow-x-hidden pb-6">
                {services.map((service, index) => (
                    <Card service={service} index={index} />
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;

function Card({ service, index }: { service: Service, index: number }) {
    return (
        <div
            key={index}
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
        </div>
    )
}
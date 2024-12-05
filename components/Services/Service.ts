export interface Service {
    title: string;
    image: string;
    description: string;
} 

export const services: Service[] = [
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
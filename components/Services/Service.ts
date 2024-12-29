export interface Service {
    title: string;
    image: string;
    description: string;
    fullDescription: string;
}

export const services: Service[] = [
    {
        title: 'Loft Conversions',
        image: '/images/kitchen.jpeg',
        description: 'Transform your unused loft space into a beautiful living area. Our expert team handles everything from planning to completion.',
        fullDescription: 'We specialize in transforming loft spaces into beautiful, functional rooms that add value to your home. Our team handles everything from initial design and planning permissions to structural work and finishing touches. We offer various conversion types including Dormer, Hip-to-Gable, and Velux, ensuring optimal use of space and natural light while meeting all building regulations.'
    },
    {
        title: 'Extensions',
        image: '/images/tiling.jpg',
        description: 'Expand your living space with our bespoke extension solutions. We create seamless additions that enhance your home.',
        fullDescription: 'Our extension services cover single and double-storey extensions, wrap-around extensions, and rear extensions. We manage the entire process from planning and design to construction and finishing, ensuring each project perfectly complements your existing property. Our team handles all structural work, utilities, and interior finishing while ensuring full compliance with local planning requirements.'
    },
    {
        title: 'Design/Build',
        image: '/images/kitchen.jpg',
        description: 'From concept to creation, our design and build service offers a complete end-to-end solution for your project.',
        fullDescription: 'Our Design and Build service combines architectural expertise with professional construction under one roof. We provide complete project management from initial 3D design concepts through to final construction. This integrated approach ensures seamless coordination between design and building phases, offering better cost control and efficiency while maintaining the highest quality standards.'
    },
    {
        title: 'Roofing',
        image: '/images/roofing.jpg',
        description: 'Expert roofing services for all types of properties. We ensure quality materials and superior craftsmanship.',
        fullDescription: 'We provide comprehensive roofing solutions including installations, repairs, and replacements for all roof types including slate, tile, and flat roofs. Our services cover everything from leak repairs and chimney work to complete re-roofing projects. We use premium materials and offer extensive guarantees on all our work, ensuring long-lasting protection for your property.'
    },
    {
        title: 'Exterior Decorating',
        image: '/images/exterior.jpg',
        description: "Enhance your property's curb appeal with our professional exterior decorating services.",
        fullDescription: 'Our exterior decorating service provides complete property transformations including masonry painting, rendering, and decorative finishing. We begin with thorough preparation and repairs before applying premium weather-resistant materials. Our service includes color consultation and design advice to ensure your property looks its best while being protected from the elements.'
    }
];
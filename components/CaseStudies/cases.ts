export const cases: CaseStudy[] = [
    {
        category: 'Loft Conversion',
        title: 'Victorian Transformation',
        location: 'Hampstead, London',
        duration: '12 weeks',
        description: 'Complete dormer loft conversion with ensuite bathroom. Created a spacious master bedroom with stunning city views while preserving the period features of this Victorian property.',
        image: '/images/tiling.jpg'
    },
    {
        category: 'Roof Extension',
        title: 'Modern Family Space',
        location: 'Richmond, Surrey',
        duration: '14 weeks',
        description: 'Full-width rear dormer extension providing two additional bedrooms and a home office. Featuring skylights and floor-to-ceiling windows to maximize natural light.',
        image: '/images/kitchen.jpeg'
    },
    {
        category: 'Heritage Renovation',
        title: 'Listed Building Success',
        location: 'Bath, Somerset',
        duration: '16 weeks',
        description: 'Sensitive restoration and conversion of a Grade II listed property. Created additional living space while meeting strict conservation requirements and maintaining historical integrity.',
        image: '/images/kitchen.jpg'
    }
];

export interface CaseStudy {
    category: string;
    title: string;
    location: string;
    duration: string;
    description: string;
    image: string;
}
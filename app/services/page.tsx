import ServicesContent from "@/components/Services/ServicesContent";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Our Services – Xtra Loft Space | Expert Loft Conversions",
    description: "Comprehensive loft conversion services in London including dormer, mansard, hip to gable, and Velux conversions. Professional design, planning, and construction services.",
    keywords: "loft conversion services, dormer conversion, mansard loft, hip to gable, Velux windows, architectural services",
    openGraph: {
        title: "Loft Conversion Services | Xtra Loft Space London",
        description: "Expert loft conversion services in London. Dormer, mansard, hip to gable, and Velux conversions with professional design and planning.",
        type: "website",
        siteName: "Xtra Loft Space",
    },
    twitter: {
        card: "summary_large_image",
        title: "Loft Conversion Services | Xtra Loft Space London",
        description: "Expert loft conversion services in London. Professional design, planning, and construction services.",
    },
    alternates: {
        canonical: "https://xtraloftspace.com/services",
    }
}

export default ServicesContent
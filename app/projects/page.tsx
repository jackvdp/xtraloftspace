import Projects from "@/components/Projects/ProjectsContent";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Our Projects – Xtra Loft Space | Portfolio of Loft Conversions",
    description: "Explore our portfolio of successful loft conversion projects across London. See before and after transformations, innovative designs, and beautiful home extensions.",
    keywords: "loft conversion portfolio, completed projects, home transformations, London loft examples, conversion case studies",
    openGraph: {
        title: "Loft Conversion Portfolio | Xtra Loft Space London",
        description: "Explore our stunning portfolio of loft conversion projects. See real transformations and beautiful home extensions across London.",
        type: "website",
        siteName: "Xtra Loft Space",
    },
    twitter: {
        card: "summary_large_image",
        title: "Loft Conversion Portfolio | Xtra Loft Space London",
        description: "Explore our stunning portfolio of loft conversion projects. See real transformations across London.",
    },
    alternates: {
        canonical: "https://xtraloftspace.com/projects",
    }
}

export default function Project() {
    return (
        <Projects/>
    )
}
import AboutUsPage from "@/components/About/AboutContent";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "About Us – Xtra Loft Space | London's Trusted Conversion Specialists",
    description: "Meet the team behind London's leading loft conversion company. With years of experience and dedication to quality, we transform homes across London with expert craftsmanship and innovation.",
    keywords: "loft conversion company, London builders, home renovation experts, trusted contractors, construction specialists",
    openGraph: {
        title: "About Xtra Loft Space | London's Trusted Conversion Specialists",
        description: "Meet the team behind London's leading loft conversion company. Years of experience transforming homes across London.",
        type: "website",
        siteName: "Xtra Loft Space",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Xtra Loft Space | London's Trusted Conversion Specialists",
        description: "Meet the team behind London's leading loft conversion company. Years of experience transforming homes across London.",
    },
    alternates: {
        canonical: "https://xtraloftspace.com/about",
    }
}

export default function About() {
    return <AboutUsPage/>;
}
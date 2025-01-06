import ContactContent from "@/components/Contact/ContactContent";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Contact Us – Xtra Loft Space",
    description: "Get in touch with Xtra Loft Space for expert loft conversion services in London. Contact us for free quotes, consultations, and to discuss your project needs. Call or email us today.",
    keywords: "loft conversion contact, London loft specialists, free loft consultation, home renovation contact, attic conversion quote",
    openGraph: {
        title: "Contact Xtra Loft Space | London's Loft Conversion Specialists",
        description: "Get in touch with Xtra Loft Space for expert loft conversion services in London. Contact us for free quotes, consultations, and to discuss your project needs.",
        type: "website",
        siteName: "Xtra Loft Space",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Xtra Loft Space | London's Loft Conversion Specialists",
        description: "Get in touch with Xtra Loft Space for expert loft conversion services in London. Contact us for free quotes, consultations, and to discuss your project needs.",
    },
    alternates: {
        canonical: "https://xtraloftspace.com/contact",
    }
}

export default function Contact() {
    return <ContactContent/>
}
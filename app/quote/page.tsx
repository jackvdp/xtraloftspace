import GetAQuotePage from "@/components/Quote/QuoteContent";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Get a Quote – Xtra Loft Space | Free Loft Conversion Estimate",
    description: "Request your free, no-obligation quote for your loft conversion project. Expert assessment, detailed pricing, and professional advice for your home transformation.",
    keywords: "loft conversion quote, free estimate, conversion costs, project pricing, London builder quote",
    openGraph: {
        title: "Get Your Free Loft Conversion Quote | Xtra Loft Space",
        description: "Request your free, no-obligation quote for your loft conversion project. Expert assessment and detailed pricing for your home transformation.",
        type: "website",
        siteName: "Xtra Loft Space",
    },
    twitter: {
        card: "summary_large_image",
        title: "Get Your Free Loft Conversion Quote | Xtra Loft Space",
        description: "Request your free, no-obligation quote for your loft conversion project. Expert assessment and professional advice.",
    },
    alternates: {
        canonical: "https://xtraloftspace.com/quote",
    }
}

export default GetAQuotePage;
import {Mail, MapPin, Phone} from "lucide-react";

interface ContactInfo {
    icon: JSX.Element;
    title: string;
    content: string;
    href?: string;
    delay: number;
}

const contactInfo: ContactInfo[] = [
    {
        icon: <Phone className="w-6 h-6"/>,
        title: "Phone",
        content: "+44 (0) 7885 596 111",
        href: "tel:+447885596111",
        delay: 0.1
    },
    {
        icon: <Mail className="w-6 h-6"/>,
        title: "Email",
        content: "info@xtraloftspace.com",
        href: "mailto:info@xtraloftspace.com",
        delay: 0.2
    },
    {
        icon: <MapPin className="w-6 h-6"/>,
        title: "Office",
        content: "9 Fairways, " +
            "New River Trading Estate, " +
            "Brookfield Farm, " +
            "Cheshunt, " +
            "Hertfordshire, " +
            "EN8 0NJ",
        delay: 0.3
    }
];

export default contactInfo;
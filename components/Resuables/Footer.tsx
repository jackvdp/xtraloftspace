import React from 'react';
import {Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {services} from "@/components/Services/Service";

const Footer = () => {
    return (
        <footer className="bg-black text-white z-50">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <Link href="/public" className="block relative h-12 w-48">
                            <Image
                                src="/images/logo.png"
                                alt="Xtra Loft Space"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </Link>
                        <p className="text-gray-400">
                            Family-run excellence in construction, transforming homes across Hertfordshire, North
                            London, and Essex with master craftsmanship.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/p/Xtra-Loft-Space-100063625208519/?locale=en_GB"
                               target="_blank" className="hover:text-white/80 transition-colors">
                                <Facebook className="h-5 w-5"/>
                            </a>
                            <a href="https://www.instagram.com/xtraloftspace/" target="_blank"
                               className="hover:text-white/80 transition-colors">
                                <Instagram className="h-5 w-5"/>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item === 'Home' ? "/" : item.toLowerCase()}`}
                                        className="text-gray-400 hover:text-white/80 transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Our Services</h3>
                        <ul className="space-y-4">
                            {services.map((service) => (
                                <li key={service}>
                                    <Link
                                        href="/services"
                                        className="text-gray-400 hover:text-white/80 transition-colors"
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="tel:+447585807291"
                                   className="flex items-center text-gray-400 hover:text-white/80 transition-colors">
                                    <Phone className="h-5 w-5 mr-2"/>
                                    +44 (0) 7585 807 291
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@xtraloftspace.com"
                                   className="flex items-center text-gray-400 hover:text-white/80 transition-colors">
                                    <Mail className="h-5 w-5 mr-2"/>
                                    info@xtraloftspace.com
                                </a>
                            </li>
                            <li className="flex items-start text-gray-400">
                                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0"/>
                                123 Construction Street,
                                London, UK SW1A 1AA
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400">
                            © {new Date().getFullYear()} Xtra Loft Space. All rights reserved.
                        </p>
                        <div className="flex">
                            <a target="_blank"
                               href="https://www.vanderpump.tech"
                               rel="noopener noreferrer"
                               className="text-white hover:text-white/80 transition-colors"
                            >
                                Made by Vanderpump Tech
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
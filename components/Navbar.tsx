'use client'

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [atTop, setAtTop] = useState(true);
    const { scrollY } = useScroll();

    // Handle scroll behavior
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();

        // Check if at top
        setAtTop(latest < 50);

        // Only hide/show after scrolling past threshold
        if (latest > 150) {
            setHidden(latest > previous!);
        }
    });

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: '-100%' },
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${atTop ? 'bg-transparent' : 'bg-white/80 backdrop-blur-md shadow-sm'
                }`}
        >
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="relative h-12 w-48 flex items-center">
                        <Image
                            src="/images/logo.png"
                            alt="Xtra Loft Space"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white ml-4">
                            Get Quote
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="lg:hidden overflow-hidden bg-white"
                >
                    <div className="px-4 py-5 space-y-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-gray-600 hover:text-blue-600 transition-colors font-medium py-2"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4">
                            Get Quote
                        </Button>
                    </div>
                </motion.div>
            </div>
        </motion.header>
    );
};

export default NavBar;
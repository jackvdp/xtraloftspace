import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { CustomButton } from './ui/motion-button';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [atTop, setAtTop] = useState(true);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        setAtTop(latest < 50);
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
                    <Link href="/" className={`relative h-12 w-48 flex items-center ${atTop && "brightness-0 invert"}`}>
                        <Image
                            src="/images/logo.png"
                            alt="Xtra Loft Space"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>

                    <div className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`transition-colors font-medium ${atTop
                                        ? 'text-white hover:text-blue-400'
                                        : 'text-gray-700 hover:text-blue-600'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <CustomButton
                            text="Get Quote"
                            link="/contact"
                            // className={atTop ? 'text-white border-white' : ''}
                        />
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden p-2 transition-colors ${atTop
                                ? 'text-white hover:text-blue-200'
                                : 'text-gray-600 hover:text-blue-600'
                            }`}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

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
                        <CustomButton text="Get Quote" link="/contact" />
                    </div>
                </motion.div>
            </div>
        </motion.header>
    );
};

export default NavBar;
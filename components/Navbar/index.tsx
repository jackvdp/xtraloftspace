"use client"

import React, {useState} from 'react';
import {motion, useScroll, useMotionValueEvent} from 'framer-motion';
import {Menu, X} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {CustomButton} from '../Resuables/CustomButtons';
import {usePathname} from 'next/navigation';
import NavbarItem from './NavbarItem';
import MobileNav from "@/components/Navbar/MobileNav";

function Navbar({useDarkText}: { useDarkText?: boolean }) {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [atTop, setAtTop] = useState(true);
    const {scrollY} = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        setAtTop(latest < 50);
        if (latest > 150) {
            setHidden(latest > previous!);
        }
    });
    const pathname = usePathname();

    const navItems = [
        {name: 'Services', href: '/services'},
        {name: 'Projects', href: '/projects'},
        {name: 'About', href: '/about'},
        {name: 'Contact', href: '/contact'},
    ];

    return (
        <motion.header
            variants={{
                visible: {y: 0},
                hidden: {y: '-100%'},
            }}
            animate={hidden ? 'hidden' : 'visible'}
            transition={{duration: 0.35, ease: 'easeInOut'}}
            className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
                isOpen ? 'bg-white' : (atTop ? 'bg-transparent' : 'bg-white/80 backdrop-blur-md shadow-sm')
            }`}
        >
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    <Link href="/"
                          className={`relative h-16 w-64 flex items-center ${atTop && !isOpen && !useDarkText && "brightness-0 invert"}`}>
                        <Image
                            data-cursor={"home"}
                            src="/images/logo.png"
                            alt="Xtra Loft Space"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>

                    <div className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <NavbarItem
                                key={item.name}
                                item={item}
                                atTop={atTop && !useDarkText}
                                pathname={pathname}
                            />
                        ))}
                        <CustomButton
                            text="Get Quote"
                            link="/quote"
                            useBlack={!atTop || useDarkText}
                        />
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden p-2 z-50 transition-colors ${
                            isOpen
                                ? 'text-black hover:text-black/80'
                                : (atTop && !useDarkText ? 'text-white hover:text-white/80' : 'text-gray-600 hover:text-black')
                        }`}
                    >
                        {isOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </nav>

                <MobileNav navItems={navItems} onClick={() => setIsOpen(false)} pathname={pathname} isOpen={isOpen}/>
            </div>
        </motion.header>
    );
}

export default Navbar;
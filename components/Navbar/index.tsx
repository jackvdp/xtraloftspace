import React, {useState} from 'react';
import {motion, useScroll, useMotionValueEvent} from 'framer-motion';
import {Menu, X} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {CustomButton} from '../ui/motion-button';
import {usePathname} from 'next/navigation';
import NavbarItem from './NavbarItem';

const Navbar = () => {
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
                    <Link href="/public"
                          className={`relative h-16 w-64 flex items-center ${atTop && !isOpen && "brightness-0 invert"}`}>
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
                            <NavbarItem
                                key={item.name}
                                item={item}
                                atTop={atTop}
                                pathname={pathname}
                            />
                        ))}
                        <CustomButton
                            text="Get Quote"
                            link="/contact"
                            useBlack={!atTop}
                        />
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden p-2 z-50 transition-colors ${
                            isOpen
                                ? 'text-black hover:text-black/80'
                                : (atTop ? 'text-white hover:text-white/80' : 'text-gray-600 hover:text-black')
                        }`}
                    >
                        {isOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </nav>

                <motion.div
                    initial={false}
                    animate={{
                        opacity: isOpen ? 1 : 0,
                    }}
                    transition={{duration: 0.3, ease: 'easeInOut'}}
                    className={`lg:hidden overflow-hidden fixed inset-0 bg-white ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
                >
                    <div className="absolute top-0 left-0 right-0 px-4">
                        <div className="container mx-auto">
                            <div className="relative h-16 w-64">
                                <Image
                                    src="/images/logo.png"
                                    alt="Xtra Loft Space"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    <div className="h-full flex flex-col items-center justify-center space-y-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-2xl font-bold transition-colors ${
                                    pathname === item.href
                                        ? 'text-black'
                                        : 'text-gray-400 hover:text-black'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <CustomButton text="Get Quote" link="/contact" useBlack={true}/>
                    </div>
                </motion.div>
            </div>
        </motion.header>
    );
};
export default Navbar;
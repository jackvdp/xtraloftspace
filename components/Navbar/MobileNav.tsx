import Image from "next/image";
import {CustomButton} from "@/components/Resuables/CustomButtons";
import Link from "next/link";
import React from "react";
import {motion} from "framer-motion";

export default function MobileNav(props: {
    navItems: ({ name: string; href: string })[],
    onClick: () => void
    pathname: string
    isOpen: boolean
}) {
    return <motion.div
        initial={false}
        animate={{
            opacity: props.isOpen ? 1 : 0,
        }}
        transition={{duration: 0.3, ease: 'easeInOut'}}
        className={`lg:hidden overflow-hidden fixed inset-0 bg-white ${props.isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
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
            <NavItem
                key={"home"}
                item={{name: "Home", href: "/"}}
                onClick={props.onClick}
                pathname={props.pathname}
            />
            {
                props.navItems.map((item) => (
                    <NavItem
                        key={item.name}
                        item={item}
                        onClick={props.onClick}
                        pathname={props.pathname}
                    />
                ))
            }
            <CustomButton text="Get Quote" link="/quote" useBlack={true}/>
        </div>
    </motion.div>;
}

function NavItem(props: { item: { name: string; href: string }, onClick: () => void, pathname: string }) {
    return <Link

        href={props.item.href}
        onClick={props.onClick}
        className={`text-2xl font-bold transition-colors ${
            props.pathname === props.item.href
                ? "text-black"
                : "text-gray-400 hover:text-black"
        }`}
    >
        {props.item.name}
    </Link>;
}
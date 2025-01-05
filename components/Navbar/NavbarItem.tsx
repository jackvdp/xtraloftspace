import Link from "next/link";
import React from "react";

export default function NavbarItem({
                                       item,
                                       atTop,
                                       pathname
                                   }: {
    item: { name: string; href: string },
    atTop: boolean,
    pathname: string
}) {
    const isActive = item.href === pathname;
    const textColor = atTop ? 'text-white' : 'text-gray-700';

    return (
        <Link
            href={item.href}
            className="group relative mx-2 overflow-hidden h-[24px]"
            data-cursorinactive='true'
        >
            <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-[24px]">
                <span className={`font-medium ${textColor} ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                    {item.name}
                </span>
                <span className={`font-medium ${textColor} ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                    {item.name}
                </span>
            </div>
        </Link>
    );
}
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
    return (
        <Link
            href={item.href}
            className="group relative mx-2 overflow-hidden h-[24px]"
            data-cursorinactive='true'
        >
            <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-[24px]">
                <span className={`font-medium ${atTop ? 'text-white' : 'text-gray-700'}`}>
                    {item.name}
                </span>
                <span className={`font-medium ${atTop ? 'text-white' : 'text-gray-700'}`}>
                    {item.name}
                </span>
            </div>
            {pathname === item.href && (
                <span
                    className={`absolute -bottom-1 left-0 h-0.5 w-full ${atTop ? 'bg-white' : 'bg-gray-700'}`}
                />
            )}
        </Link>
    );
}
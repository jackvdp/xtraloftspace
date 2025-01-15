'use client'

import {motion} from 'framer-motion'
import {Button} from '@/components/ui/button'
import {ArrowRight, Instagram} from "lucide-react";
import React from "react";
import Link from "next/link";

const CustomButtons = motion(Button)

export function CustomButton({text, link, useBlack = false}: { text: string, link: string, useBlack?: boolean }) {
    return (
        <CustomButtons
            size="lg"
            className={`group relative overflow-hidden ${useBlack ? `bg-black hover:bg-gray-900` : `bg-white hover:bg-gray-100`} ${useBlack ? `text-white` : `text-black`} px-8 rounded-full h-10`}
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.98}}
            asChild
            data-cursorinactive='true'
        >
            <Link href={link}>
                <div
                    className="flex flex-col transition-transform duration-300 group-hover:-translate-y-5 translate-y-5">
                    <motion.div className="flex items-center h-10">
                        <motion.span className="flex items-center">
                            {text}
                            <motion.div
                                initial={{x: 0}}
                                whileHover={{x: 5}}
                                className="ml-2"
                            />
                        </motion.span>
                    </motion.div>
                    <motion.div className="flex items-center h-10">
                        <motion.span className="flex items-center">
                            {text}
                            <motion.div
                                initial={{x: 0}}
                                whileHover={{x: 5}}
                                className="ml-2"
                            />
                        </motion.span>
                    </motion.div>
                </div>
            </Link>
        </CustomButtons>
    )
}


export function BigCustomButton({text, href, arrowEnabled, dark}: {
    text: string,
    href?: string | undefined,
    arrowEnabled?: boolean,
    dark?: boolean
}) {
    function ButtonContent(props: { text: string, arrowEnabled?: boolean }) {
        return <div
            className="flex flex-col transition-transform duration-300 group-hover:-translate-y-8 translate-y-8">
            <div className="flex items-center h-16">
                {props.text}
                {props.arrowEnabled &&
                    <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1"/>}
            </div>
            <div className="flex items-center h-16">
                {props.text}
                {props.arrowEnabled &&
                    <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1"/>}
            </div>
        </div>;
    }

    return (
        <Button
            size="lg"
            asChild={href !== undefined}
            className={`group relative ${dark ? `bg-black hover:bg-gray-900 text-white` : `bg-white hover:bg-gray-100 text-black`} rounded-full text-lg h-16 px-12 overflow-hidden`}
        >
            {href !== undefined
                ? <Link href={href}><ButtonContent text={text} arrowEnabled={arrowEnabled}/></Link>
                : <ButtonContent text={text} arrowEnabled={arrowEnabled}/>
            }
        </Button>
    );
}

export function OutlineButton({text, href}: { text: string, href: string }) {
    return (
        <Button
            size="lg"
            variant="outline"
            asChild
            className="group relative border-2 border-white/50 text-white rounded-full bg-white/30 hover:bg-white/70 text-lg h-16 px-12 overflow-hidden"
        >
            <Link href={href}>
                <div
                    className="flex flex-col transition-transform duration-300 group-hover:-translate-y-8 translate-y-8">
                    <div className="flex items-center h-16">
                        {text}
                    </div>
                    <div className="flex items-center h-16">
                        {text}
                    </div>
                </div>
            </Link>
        </Button>
    );
}

export function InstagramButton() {
    return (
        <Button
            size="lg"
            className="group relative bg-gradient-to-tr from-purple-600 via-pink-600 to-yellow-500 hover:from-purple-700 hover:via-pink-700 hover:to-yellow-600 text-white rounded-full text-lg h-16 px-12 overflow-hidden"
            asChild
        >
            <a
                data-cursor="Insta" href={"https://www.instagram.com/xtraloftspace/"} target="_blank">
                <div data-cursor="Insta"
                     className="flex flex-col transition-transform duration-300 group-hover:-translate-y-8 translate-y-8">
                    <div data-cursor="Insta" className="flex items-center h-16 space-x-2">
                        <Instagram className="h-6 w-6"/>
                        <span data-cursor="Insta">See More</span>
                    </div>
                    <div data-cursor="Insta" className="flex items-center h-16 space-x-2">
                        <Instagram className="h-6 w-6"/>
                        <span data-cursor="Insta">See More</span>
                    </div>
                </div>
            </a>
        </Button>
    );
}

export function GoogleReviewButton() {
    return (
        <Button
            size="lg"
            className="group relative bg-gradient-to-tr from-blue-600 via-red-500 to-yellow-500 hover:from-blue-700 hover:via-red-600 hover:to-yellow-600 text-white rounded-full text-lg h-16 px-12 overflow-hidden"
            asChild
        >
            <a
                data-cursor="Google"
                href="https://www.google.com/search?q=Xtra+Loft+Space&sca_esv=588968018&sxsrf=AM9HkKls2QEPPdIqICm6wR3EdNZJ3zKW_w%3A1702519391142&source=hp&ei=j-16ZdPuMY2rhbIPq5-w4As&iflsig=AO6bgOgAAAAAZXr5n9G7VOxTn6EMjPSCHGVns0IPCW8j&oq=xtra+&gs_lp=Egdnd3Mtd2l6IgV4dHJhICoCCAAyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESJgIUABYvQVwAHgAkAEAmAGoAaABkQaqAQMwLja4AQPIAQD4AQE&sclient=gws-wiz#lrd=0x4876210a171538d3:0xea1617f6c4e71819,1,,,,"
                target="_blank"
            >
                <div
                    data-cursor="Google"
                    className="flex flex-col transition-transform duration-300 group-hover:-translate-y-8 translate-y-8"
                >
                    <div data-cursor="Google" className="flex items-center h-16 space-x-2">
                        <svg
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
                        </svg>
                        <span data-cursor="Google">Read More</span>
                    </div>
                    <div data-cursor="Google" className="flex items-center h-16 space-x-2">
                        <svg
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
                        </svg>
                        <span data-cursor="Google">Read More</span>
                    </div>
                </div>
            </a>
        </Button>
    );
}
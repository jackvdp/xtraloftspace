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
    function ButtonContent(props: { text: string, arrowEnabled: boolean }) {
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
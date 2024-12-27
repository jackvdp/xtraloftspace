'use client'

import {motion} from 'framer-motion'
import {Button} from '@/components/ui/button'
import {ArrowRight} from "lucide-react";
import React from "react";

const MotionButton = motion(Button)

export function CustomButton({text, link, useBlack = false}: { text: string, link: string, useBlack?: boolean }) {
    return (
        <MotionButton
            size="lg"
            className={`group relative overflow-hidden ${useBlack ? `bg-black hover:bg-gray-900` : `bg-white hover:bg-gray-100`} ${useBlack ? `text-white` : `text-black`} px-8 rounded-full h-10`}
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.98}}
            onClick={() => console.log(link)}
            data-cursorinactive='true'
        >
            <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-5 translate-y-5">
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
        </MotionButton>
    )
}

export function BigCustomButton({text, arrowEnabled}: { text: string, arrowEnabled?: boolean }) {
    return (
        <Button
            size="lg"
            className="group relative bg-white hover:bg-gray-100 text-black rounded-full text-lg h-16 px-12 overflow-hidden"
        >
            <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-8 translate-y-8">
                <div className="flex items-center h-16">
                    {text}
                    {arrowEnabled &&
                        <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1"/>}
                </div>
                <div className="flex items-center h-16">
                    {text}
                    {arrowEnabled &&
                        <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1"/>}
                </div>
            </div>
        </Button>
    );
}

export function OutlineButton({text}: { text: string }) {
    return (
        <Button
            size="lg"
            variant="outline"
            className="group relative border-2 border-white/50 text-white rounded-full bg-white/30 hover:bg-white/70 text-lg h-16 px-12 overflow-hidden"
        >
            <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-8 translate-y-8">
                <div className="flex items-center h-16">
                    {text}
                </div>
                <div className="flex items-center h-16">
                    {text}
                </div>
            </div>
        </Button>
    );
}
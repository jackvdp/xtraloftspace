'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const MotionButton = motion(Button)

export function CustomButton({ text, link, useBlack = false }: { text: string, link: string, useBlack?: boolean }) {
    return (
        <MotionButton
            size="lg"
            className={`${useBlack ? `bg-black hover:bg-gray-900` : `bg-white hover:bg-gray-100`}  ${useBlack ? `text-white` : `text-black`} px-8 rounded-full`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => console.log(link)}
        >
            <motion.span className="flex items-center">
                {text}
                <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="ml-2"
                >
                </motion.div>
            </motion.span>
        </MotionButton>
    )
}
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const MotionButton = motion(Button)

export function CustomButton({ text, link }: { text: string, link: string }) {
    return (
        <MotionButton
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 rounded-full"
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
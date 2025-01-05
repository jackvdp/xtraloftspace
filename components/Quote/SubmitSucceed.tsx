import {motion} from "framer-motion";
import {Card, CardTitle} from "@/components/ui/card";
import React from "react";

export default function SubmitSucceed() {
    return <motion.div
        initial={{opacity: 0, scale: 0.9}}
        animate={{
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }}
        className="min-h-screen bg-gray-50 p-4 flex items-center justify-center"
    >
        <Card className="w-full max-w-2xl text-center p-8 overflow-hidden">
            <motion.div
                initial={{y: 20, opacity: 0}}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        delay: 0.2,
                        duration: 0.5
                    }
                }}
            >
                <CardTitle className="text-2xl mb-4">Thank You!</CardTitle>
                <p className="text-gray-600">Your quote request has been submitted successfully. We&apos;ll be in
                    touch soon!</p>
            </motion.div>
        </Card>
    </motion.div>;
}
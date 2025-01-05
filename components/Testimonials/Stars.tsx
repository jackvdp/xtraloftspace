import {AnimatePresence, motion} from "framer-motion";
import React from "react";

const Stars = () => (
    <AnimatePresence mode="wait">
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -20}}
            transition={{duration: 0.5}}
            className="flex gap-1"
        >
            {[...Array(5)].map((_, i) => (
                <div key={i} className="text-white">★</div>
            ))}
        </motion.div>
    </AnimatePresence>
);

export default Stars;
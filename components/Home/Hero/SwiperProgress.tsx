import React from "react";
import {motion} from "framer-motion";
import styles from "@/components/Home/Hero/Hero.module.css";

const fadeInRight = {
    initial: {opacity: 0, x: 50},
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: 1
        }
    }
};

export default function SwiperProgress(props: {
    images: string[],
    activeIndex: number,
    onClick: (number) => void
}) {
    return (
        <motion.div
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5, ease: "easeOut", delay: 1}}
            className="hidden md:block"
        >
            <div className={styles.paginationContainer}>
                {
                    props.images.map((string, index) => (
                        <div
                            key={index}
                            className={`${styles.paginationBullet} ${index === props.activeIndex ? styles.active : ''}`}
                            onClick={() => props.onClick(index)}
                        />
                    ))
                }
            </div>
        </motion.div>
    );
}
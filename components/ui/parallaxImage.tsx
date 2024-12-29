import React, {useRef} from 'react';
import Image from 'next/image';
import {motion, useScroll, useTransform} from 'framer-motion';

const ParallaxImage = ({
                           src,
                           alt,
                           className = "",
                           startScale = 1,
                           endScale = 1.2,
                           ...props
                       }) => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [startScale, endScale]);

    return (
        <div ref={ref} className={"relative h-full w-full overflow-hidden " + className}>
            <motion.div
                style={{scale}}
                className="relative h-full w-full origin-center"
            >
                <Image
                    src={src}
                    alt={alt}
                    className={`h-full w-full object-cover ${className}`}
                    fill
                    {...props}
                />
            </motion.div>
        </div>
    );
};

export default ParallaxImage;
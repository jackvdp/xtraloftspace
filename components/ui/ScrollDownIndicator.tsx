import {motion, useScroll, useTransform} from "framer-motion";
import React from "react";
import {ArrowDown} from "lucide-react";

const ScrollIndicator = () => {
    const {scrollY} = useScroll();

    const rotation = useTransform(
        scrollY,
        [0, 4000],
        [0, 360]
    );

    const pathId = React.useId();

    return (
        <div className="w-64 h-64 relative">
            <motion.div
                className="w-full h-full"
                style={{rotate: rotation}}
            >
                <svg
                    className="w-full h-full absolute"
                    viewBox="0 0 100 100"
                >
                    <path
                        id={pathId}
                        d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                        stroke="none"
                    />
                    <text
                        className="text-[10px] font-bold fill-current uppercase"
                        dominantBaseline="middle"
                        textAnchor="middle"
                    >
                        <textPath
                            href={`#${pathId}`}
                            startOffset="0%"
                            className="tracking-[0.25em]"
                        >
                            Scroll Down • Scroll Down • Scroll Down • Scroll Down •
                        </textPath>
                    </text>
                </svg>
            </motion.div>

            {/* Center arrow */}
            <div className="absolute inset-0 flex items-center justify-center">
                <ArrowDown className="w-12 h-12"/>
            </div>
        </div>
    );
};

export default ScrollIndicator;
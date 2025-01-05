import {motion} from 'framer-motion';

const PageLabel = ({text}: { text: string }) => {
    const characters = Array.from(text.toUpperCase());

    const container = {
        hidden: {opacity: 0},
        visible: (i = 1) => ({
            opacity: 1,
            transition: {staggerChildren: 0.05, delayChildren: 0.7}
        })
    };

    const child = {
        hidden: {opacity: 0, y: -40},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.5, ease: "easeOut"}
        }
    };

    return (
        <div className="hidden md:block fixed bottom-8 left-16 z-50 mix-blend-difference">
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="text-white text-sm tracking-wider origin-bottom-left -rotate-90 whitespace-nowrap z-9999 flex"
            >
                {characters.map((character, index) => (
                    <motion.span variants={child} key={index}>
                        {character}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
};

export default PageLabel;
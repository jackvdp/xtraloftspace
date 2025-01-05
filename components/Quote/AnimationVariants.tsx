// Enhanced animation variants
const pageVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
    }),
    center: {
        x: 0,
        opacity: 1
    },
    exit: (direction) => ({
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
    })
};

const pageTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30
};

const titleVariants = {
    initial: {y: -20, opacity: 0},
    animate: {y: 0, opacity: 1, transition: {duration: 0.5, ease: "easeOut"}},
    exit: {y: 20, opacity: 0}
};

const progressVariants = {
    initial: {scaleX: 0, originX: 0},
    animate: {
        scaleX: 1,
        transition: {duration: 0.8, ease: "easeOut"}
    }
};

const questionVariants = {
    initial: {y: 20, opacity: 0},
    animate: (index) => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: index * 0.1,
            duration: 0.5,
            ease: "easeOut"
        }
    }),
    exit: {
        y: -20,
        opacity: 0,
        transition: {duration: 0.3}
    }
};

const buttonVariants = {
    initial: {scale: 0.9, opacity: 0},
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        }
    },
    tap: {
        scale: 0.95,
        transition: {
            duration: 0.1
        }
    }
};

export {pageVariants, pageTransition, titleVariants, progressVariants, questionVariants, buttonVariants};
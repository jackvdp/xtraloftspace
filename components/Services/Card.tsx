import {motion} from 'framer-motion';
import {Service} from './Service';
import ParallaxImage from "@/components/ui/parallaxImage";

export default function Card({service, index}: { service: Service; index: number }) {

    return (
        <motion.div
            initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.5, delay: index * 0.1}}
            className="relative group w-2/3 max-w-[280px] lg:max-w-none lg:w-1/5 aspect-[1/2] overflow-hidden flex-shrink-0 border-2 border-white"
            animate="initial"
            whileHover="hover"
        >
            <ParallaxImage
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-all duration-300 group-hover:blur-xl"
                fill
            />
            {/* Permanent gradient for title visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"/>
            {/* Hover overlay */}
            <div
                className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 opacity-0 group-hover:opacity-100"/>
            <div className="absolute bottom-0 left-0 p-4 text-white z-10">
                <h3 className="text-xl font-bold drop-shadow-lg">{service.title}</h3>
            </div>
            <div
                className="absolute inset-0 p-6 flex flex-col justify-start text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-lg">{service.description}</p>
            </div>
            {/* Animated bottom line */}
            {/* <motion.div
                variants={lineVariants}
                className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-200 origin-left"
            /> */}
        </motion.div>
    );
}
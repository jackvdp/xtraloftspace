import {motion} from "framer-motion";
import MapSection from "@/components/Resuables/Map";

export default function ContactMap() {
    return <section id={"maps"}>
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true, amount: 0.2}}
            transition={{duration: 0.5}}
            className="w-full"
        >
            <MapSection showMapImmediately={true}/>
        </motion.div>
    </section>;
}

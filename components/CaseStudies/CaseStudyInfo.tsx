import { CaseStudy } from "./cases";
import { motion } from "framer-motion";

export default function CaseStudyInfo({ casestudy, scrollPrev, scrollNext }: {
    casestudy: CaseStudy; scrollPrev: () => void; scrollNext: () => void
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 flex-shrink-0 pr-12 my-auto h-[32rem] flex flex-col"
        >
            <div className="space-y-6 flex-1 overflow-y-auto">
                <div className="h-32">
                    <p className="text-sm text-gray-600 mb-2">{casestudy.category}</p>
                    <h2 className="text-4xl font-semibold">{casestudy.title}</h2>
                </div>
                <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-gray-600">{casestudy.location}</p>
                </div>
                <div>
                    <h3 className="font-medium mb-1">Project Duration</h3>
                    <p className="text-gray-600">{casestudy.duration}</p>
                </div>
                <div className="overflow-y-auto">
                    <p className="text-gray-600">{casestudy.description}</p>
                </div>
            </div>
            <div className="flex space-x-4 pt-6">
                <button
                    onClick={scrollPrev}
                    className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={scrollNext}
                    className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </motion.div>
    )
}
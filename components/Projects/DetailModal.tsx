import {useRef} from "react";
import {CaseStudy} from "@/components/CaseStudies/cases";
import {DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import Image from "next/image";
import ImageGallery from "@/components/Projects/ImageGallery";

export default function CaseStudyModal({caseStudy}: { caseStudy: CaseStudy }) {
    const galleryRef = useRef<HTMLDivElement | null>(null);

    return (
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
                <DialogTitle className="text-3xl font-bold mb-4">{caseStudy.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
                <div className="relative w-full h-96">
                    <Image
                        data-cursor="Gallery"
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        fill
                        className="object-cover rounded-lg"
                        onClick={() => {
                            if ("scrollIntoView" in galleryRef.current) {
                                galleryRef.current.scrollIntoView({
                                    behavior: "smooth",
                                })
                            }
                        }}
                    />
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                        <p className="font-bold">Location</p>
                        <p>{caseStudy.location}</p>
                    </div>
                    <div>
                        <p className="font-bold">Duration</p>
                        <p>{caseStudy.duration}</p>
                    </div>
                    <div>
                        <p className="font-bold">Category</p>
                        <p>{caseStudy.category}</p>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-xl mb-2">Overview</h3>
                    <p className="text-zinc-700">{caseStudy.fullDescription}</p>
                </div>

                <div ref={galleryRef}>
                    <h3 className="font-bold text-xl mb-4">Gallery</h3>
                    <ImageGallery folder={caseStudy.folder}/>
                </div>
            </div>
        </DialogContent>
    );
}
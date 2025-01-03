import {CaseStudy} from "@/components/CaseStudies/cases";
import {DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import Image from "next/image";
import React, {useState, useEffect} from "react";
import {list} from '@vercel/blob';
import {ChevronLeft, ChevronRight, Expand} from "lucide-react";

// Gallery component to handle the image grid and lightbox
const ImageGallery = ({folder}: { folder: string }) => {
    const [images, setImages] = useState<Array<{ url: string; pathname: string }>>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const {blobs} = await list({prefix: folder, token: process.env.NEXT_PUBLIC_BLOB_READ_WRITE_TOKEN});
                setImages(blobs.map(blob => ({
                    url: blob.url,
                    pathname: blob.pathname
                })));
            } catch (error) {
                console.error('Error fetching images:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [folder]);

    if (loading) {
        return (
            <div className="w-full h-48 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div
                        key={image.pathname}
                        className="relative group h-48 cursor-pointer overflow-hidden rounded-lg"
                        onClick={() => setSelectedImage(image.url)}
                    >
                        <Image
                            src={image.url}
                            alt={`Gallery image ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                            <Expand
                                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
                     onClick={() => setSelectedImage(null)}>
                    <div className="relative max-w-4xl max-h-[90vh] mx-4">
                        <Image
                            src={selectedImage}
                            alt="Selected image"
                            width={1200}
                            height={800}
                            className="object-contain max-h-[90vh]"
                        />
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gray-300"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default function CaseStudyModal({caseStudy}: { caseStudy: CaseStudy }) {
    return (
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
                <DialogTitle className="text-3xl font-bold mb-4">{caseStudy.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
                <div className="relative w-full h-96">
                    <Image
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        fill
                        className="object-cover rounded-lg"
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
                <div>
                    <h3 className="font-bold text-xl mb-4">Gallery</h3>
                    <ImageGallery folder={caseStudy.folder}/>
                </div>
            </div>
        </DialogContent>
    );
}
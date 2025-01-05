import React, {useState, useEffect} from "react";
import Image from "next/image";
import {Expand} from "lucide-react";

interface ImageData {
    url: string;
    pathname: string;
}

const ImageGallery = ({folder}: { folder: string }) => {
    const [images, setImages] = useState<ImageData[]>([]);
    const [loadedImages, setLoadedImages] = useState<number>(0);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/gallery?folder=${encodeURIComponent(folder)}`);
                if (!response.ok) throw new Error('Failed to fetch images');
                const data = await response.json();
                setImages(data.images);
            } catch (error) {
                console.error('Error fetching images:', error);
                setError(error instanceof Error ? error.message : 'Failed to load images');
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [folder]);

    const handleImageLoad = () => {
        setLoadedImages(prev => prev + 1);
    };

    if (loading) {
        return (
            <div className="w-full h-48 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"/>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full h-48 flex items-center justify-center text-red-500">
                {error}
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    index <= loadedImages && (
                        <div
                            key={image.pathname}
                            className="relative group h-48 cursor-pointer overflow-hidden rounded-lg"
                            onClick={() => setSelectedImage(image.url)}
                        >
                            <Image
                                src={image.url}
                                alt={`Gallery image ${index + 1}`}
                                width={300}
                                height={300}
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                                onLoad={handleImageLoad}
                                priority={index === 0}
                            />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                <Expand
                                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                            </div>
                        </div>
                    )
                ))}
            </div>

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
                            priority
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

export default ImageGallery;
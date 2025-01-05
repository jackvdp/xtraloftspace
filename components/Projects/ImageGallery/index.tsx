import React, {useState, useEffect} from "react";
import SingleImage from "./SingleImage";

interface ImageData {
    url: string;
    pathname: string;
}

const ImageGallery = ({folder}: { folder: string }) => {
    const [images, setImages] = useState<ImageData[]>([]);
    const [loadedImages, setLoadedImages] = useState<number>(0);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/gallery?folder=${encodeURIComponent(folder)}`);
                if (!response.ok) throw new Error("Failed to fetch images");
                const data = await response.json();
                setImages(data.images);
            } catch (error) {
                console.error("Error fetching images:", error);
                setError(error instanceof Error ? error.message : "Failed to load images");
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [folder]);

    const handleImageLoad = () => {
        setLoadedImages((prev) => prev + 1);
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
            <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-auto gap-4">
                {images.map((image, index) => {
                    if (index > loadedImages) return null;

                    return (
                        <SingleImage
                            key={image.pathname}
                            image={image}
                            index={index}
                            onLoad={handleImageLoad}
                            expanded={expandedIndex === index}
                            onExpand={() => setExpandedIndex(index)}
                            onCollapse={() => setExpandedIndex(null)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ImageGallery;
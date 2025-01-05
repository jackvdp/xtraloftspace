import React from "react";
import Image from "next/image";
import {Expand} from "lucide-react";

interface ImageData {
    url: string;
    pathname: string;
}

interface SingleImageProps {
    image: ImageData;
    index: number;
    onLoad: () => void;
    expanded: boolean;
    onExpand: () => void;
    onCollapse: () => void;
}

function ExpandButton() {
    return <div
        className="
            absolute
            inset-0
            bg-black
            bg-opacity-0
            group-hover:bg-opacity-30
            transition-opacity
            duration-300
            flex
            items-center
            justify-center
            pointer-events-none
          "
    >
        <Expand className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
    </div>;
}

function SingleImage({
                         image,
                         index,
                         onLoad,
                         expanded,
                         onExpand,
                         onCollapse,
                     }: SingleImageProps) {
    return (
        <div
            data-cursor={expanded ? "close" : "expand"}
            className={`
            relative 
            rounded-lg 
            overflow-hidden 
            transition-all 
            duration-300 
            cursor-pointer
            ${expanded ? "col-span-full bg-white p-4" : "group h-48 bg-gray-100"}
            `}
            style={{
                height: expanded ? "80vh" : "12rem",
            }}
            onClick={() => {
                if (expanded) {
                    onCollapse();
                } else {
                    onExpand();
                }
            }}
        >
            <Image
                data-cursor={expanded ? "close" : "expand"}
                src={image.url}
                alt={`Gallery image ${index + 1}`}
                width={1500}
                height={1000}
                className={`
                transition-transform 
                duration-500 
                w-full 
                h-full
                ${expanded ? "object-contain" : "object-cover group-hover:scale-110"}
                `}
                onLoad={onLoad}
                priority={index === 0}
            />

            {!expanded && (
                <ExpandButton/>
            )}
        </div>
    );
}

export default SingleImage;
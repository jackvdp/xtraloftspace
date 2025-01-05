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
            /*
              - Use "transition-all" to animate changes in size/position.
              - If expanded, let’s occupy all available columns
                and set a taller min-height. We'll also add some styling
                to mimic a dialog: padding, background, box-shadow, etc.
            */
            className={`
        relative 
        rounded-lg 
        overflow-hidden 
        transition-all 
        duration-300 
        cursor-pointer
        ${expanded ? "col-span-full bg-white p-4 shadow-lg" : "group h-48 bg-gray-100"}
      `}
            style={{
                // Smoothly animate height:
                height: expanded ? "80vh" : "12rem",
            }}
            onClick={() => {
                // If it’s already expanded, clicking background collapses
                if (expanded) {
                    onCollapse();
                } else {
                    onExpand();
                }
            }}
        >
            <Image
                src={image.url}
                alt={`Gallery image ${index + 1}`}
                width={300}
                height={300}
                // If expanded, show the entire image (object-contain).
                // If not, just fill the thumbnail area (object-cover).
                className={`
          transition-transform 
          duration-300 
          w-full 
          h-full
          ${expanded ? "object-contain" : "object-cover group-hover:scale-110"}
        `}
                onLoad={onLoad}
                priority={index === 0}
            />

            {!expanded && (
                /* Show the Expand icon on hover (thumbnail mode) */
                <div
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
                </div>
            )}

            {expanded && (
                /* Show a close button if expanded */
                <button
                    className="
            absolute
            top-4
            right-4
            text-gray-600
            hover:text-gray-900
            bg-gray-100
            rounded-full
            p-1
            shadow
            transition-colors
          "
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent the parent click from toggling again
                        onCollapse();
                    }}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
}

export default SingleImage;
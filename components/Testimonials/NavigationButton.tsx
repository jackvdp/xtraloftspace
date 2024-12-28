import React from "react";

export default function NavigationButton({action, reverseArrow}: { action: () => void, reverseArrow?: boolean }) {
    return (
        <button
            onClick={action}
            className="h-12 w-12 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center hover:bg-zinc-700"
        >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d={reverseArrow ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}/>
            </svg>
        </button>
    )
}
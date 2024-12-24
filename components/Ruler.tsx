import {useState, useEffect} from 'react';

export default function Ruler() {
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            setContentHeight(document.documentElement.scrollHeight);
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);

        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return (
        <>
            <div className="absolute right-16 top-0 z-1 h-full" style={{pointerEvents: 'none'}}>
                <div className="relative h-full">
                    {Array.from({length: Math.ceil(contentHeight / 50)}, (_, i) => (i + 1) * 50).map(num => (
                        <div key={num} className="absolute flex items-center" style={{top: `${num}px`}}>
                            <div className="h-px m-1 w-1 bg-gray-300"></div>
                            <span className="text-[10px] text-gray-300 rotate-90">{num}</span>
                        </div>
                    ))}
                    <div className="absolute h-full w-px bg-gray-300"></div>
                </div>
            </div>
            <div className="absolute left-16 top-0 z-1 h-full" style={{pointerEvents: 'none'}}>
                <div className="relative h-full">
                    <div className="absolute right-0 h-full w-px bg-gray-300"></div>
                    {Array.from({length: Math.ceil(contentHeight / 50)}, (_, i) => (i + 1) * 50).map(num => (
                        <div key={num} className="absolute right-0 flex items-center" style={{top: `${num}px`}}>
                            <span className="text-[10px] text-gray-300 -rotate-90">{num}</span>
                            <div className="h-px m-1 w-1 bg-gray-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
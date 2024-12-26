import {useState, useEffect} from 'react';

function VerticalRuler({position, contentHeight}) {
    const isRight = position === 'right';
    const positionClass = isRight ? 'right-12' : 'left-12';
    const rotateClass = isRight ? 'rotate-90' : '-rotate-90';

    const renderMark = (position, size = 'small') => {
        const widthClass = {
            'large': 'w-2',    // Numbered marks (50px intervals)
            'medium': 'w-1.5', // Medium marks (25px intervals)
            'small': 'w-1'     // Small marks (12.5px intervals)
        }[size];

        const isNumbered = size === 'large';

        return (
            <div className={`absolute ${isRight ? 'left-0' : 'right-0'} flex items-center`}
                 style={{top: `${position}px`}}>
                {!isRight && isNumbered && (
                    <span className={`text-[10px] mix-blend-difference opacity-20 text-white ${rotateClass}`}>
                        {position}
                    </span>
                )}
                <div className={`h-px m-1 ${widthClass} mix-blend-difference opacity-25 bg-white`}></div>
                {isRight && isNumbered && (
                    <span className={`text-[10px] mix-blend-difference opacity-20 text-white ${rotateClass}`}>
                        {position}
                    </span>
                )}
            </div>
        );
    };

    const marks = [];
    for (let i = 0; i <= Math.ceil(contentHeight / 50); i++) {
        const position = i * 50;
        marks.push(
            <div key={position}>
                {renderMark(position, 'large')}
                {i < Math.ceil(contentHeight / 50) && (
                    <>
                        {renderMark(position + 25, 'medium')}
                        {renderMark(position + 12.5, 'small')}
                        {renderMark(position + 37.5, 'small')}
                    </>
                )}
            </div>
        );
    }

    return (
        <div className={`absolute ${positionClass} top-0 -z-50 h-full`} style={{pointerEvents: 'none'}}>
            <div className="relative h-full">
                <div
                    className={`absolute ${isRight ? 'left-0' : 'right-0'} h-full w-px mix-blend-difference opacity-20 bg-white`}></div>
                {marks}
            </div>
        </div>
    );
}

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
            <VerticalRuler position="left" contentHeight={contentHeight}/>
            <VerticalRuler position="right" contentHeight={contentHeight}/>
        </>
    );
}
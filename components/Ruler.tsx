import {useState, useEffect} from 'react';

function VerticalRuler({position, contentHeight}) {
    const isRight = position === 'right';
    const positionClass = isRight ? 'right-16' : 'left-16';
    const rotateClass = isRight ? 'rotate-90' : '-rotate-90';

    const renderMark = (position, isNumbered = false) => (
        <div className={`absolute ${isRight ? 'left-0' : 'right-0'} flex items-center`} style={{top: `${position}px`}}>
            {!isRight && isNumbered && (
                <span className={`text-[10px] text-gray-300 ${rotateClass}`}>{position}</span>
            )}
            <div className={`h-px m-1 ${isNumbered ? 'w-2' : 'w-1'} bg-gray-300`}></div>
            {isRight && isNumbered && (
                <span className={`text-[10px] text-gray-300 ${rotateClass}`}>{position}</span>
            )}
        </div>
    );

    const marks = [];
    for (let i = 0; i <= Math.ceil(contentHeight / 50); i++) {
        const position = i * 50;
        marks.push(
            <div key={position}>
                {renderMark(position, true)}
                {i < Math.ceil(contentHeight / 50) && renderMark(position + 25)}
            </div>
        );
    }

    return (
        <div className={`absolute ${positionClass} top-0 z-1 h-full`} style={{pointerEvents: 'none'}}>
            <div className="relative h-full">
                <div className={`absolute ${isRight ? 'left-0' : 'right-0'} h-full w-px bg-gray-300`}></div>
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
import { useEffect, useRef } from 'react';

const AnimatedHeader = ({ text = "Shape your ideas" }) => {
    const textRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const text = textRef.current;
        const line = lineRef.current;

        // Text animation
        text.animate([
            { transform: 'translateY(100%)', opacity: 0 },
            { transform: 'translateY(0)', opacity: 1 }
        ], {
            duration: 800,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            fill: 'forwards'
        });

        // Line animation - delayed to start after text
        setTimeout(() => {
            line.animate([
                { transform: 'scaleX(0)', transformOrigin: 'left' },
                { transform: 'scaleX(1)', transformOrigin: 'left' }
            ], {
                duration: 600,
                easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
                fill: 'forwards'
            });
        }, 400);
    }, []);

    return (
        <div className="p-8">
            <div className="overflow-hidden">
                <h1
                    ref={textRef}
                    className="text-5xl font-light opacity-0"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                    {text}
                </h1>
            </div>
            <div
                ref={lineRef}
                className="h-px bg-black mt-4 transform scale-x-0"
            />
        </div>
    );
};

export default AnimatedHeader;
import { useEffect, useRef } from 'react';

const AnimatedHeader = ({ text = "Shape your ideas", padding = "p-8" }) => {
    const textRef = useRef(null);
    const lineRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const text = textRef.current;
                    const line = lineRef.current;

                    text.animate([
                        { transform: 'translateY(100%)', opacity: 0 },
                        { transform: 'translateY(0)', opacity: 1 }
                    ], {
                        duration: 2000,
                        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
                        fill: 'forwards'
                    });

                    setTimeout(() => {
                        line.animate([
                            { transform: 'scaleX(0)', transformOrigin: 'left' },
                            { transform: 'scaleX(1)', transformOrigin: 'left' }
                        ], {
                            duration: 2000,
                            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
                            fill: 'forwards'
                        });
                    }, 400);

                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className={padding}>
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
                className="h-px bg-black my-8 transform scale-x-0"
            />
        </div>
    );
};

export default AnimatedHeader;
import React, { useState, useEffect } from 'react';

const ScrollIndicator = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / docHeight) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <style>{`
        ::-webkit-scrollbar {
          display: none;
        }
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
            <div className="fixed top-0 right-0 w-1 h-screen z-50">
                <div
                    className="w-full bg-black"
                    style={{
                        height: `${scrollProgress}%`,
                        transition: 'height 0.2s ease-out'
                    }}
                />
            </div>
        </>
    );
};

export default ScrollIndicator;
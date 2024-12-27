import React, {useState, useEffect} from 'react';

const CustomCursor = () => {
    const [pos, setPos] = useState({x: 0, y: 0});
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const onMouseMove = (e) => {
            setPos({x: e.clientX, y: e.clientY});
            const target = e.target;
            const isClickable =
                target.onclick ||
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a' ||
                target.closest('button') ||
                target.closest('a') ||
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.getAttribute('role') === 'button';
            setIsHovering(isClickable);
        };

        document.addEventListener('mousemove', onMouseMove);

        const style = document.createElement('style');
        style.textContent = '* { cursor: none !important; }';
        document.head.appendChild(style);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div style={{
            position: 'fixed',
            left: pos.x,
            top: pos.y,
            transform: `translate(-50%, -50%)`,
            width: isHovering ? '72px' : '24px',
            height: isHovering ? '72px' : '24px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            transition: 'width 0.2s, height 0.2s',
            fontSize: '10px',
            textAlign: 'center',
            lineHeight: 1,
            zIndex: 9999
        }}>
            {isHovering &&
                <span
                    style={{color: 'white', fontWeight: 'bold', display: 'block', width: '100%'}}>CLICK HERE</span>}
        </div>
    );
};

export default CustomCursor;
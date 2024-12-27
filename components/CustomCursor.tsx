import React, {useState, useEffect} from 'react';

const CustomCursor = () => {
    const [pos, setPos] = useState({x: 0, y: 0});
    const [cursorState, setCursorState] = useState({active: false, text: ''});

    useEffect(() => {
        const onMouseMove = (e: DocumentEventMap["mousemove"]) => {
            setPos({x: e.clientX, y: e.clientY});
            const target = e.target as Element;

            const cursorAttr = target.getAttribute('data-cursor');
            if (cursorAttr) {
                setCursorState({active: true, text: cursorAttr.toUpperCase()});
                return;
            }

            const isClickable =
                (target as HTMLElement).onclick ||
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a' ||
                target.closest('button') ||
                target.closest('a') ||
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.getAttribute('role') === 'button';

            if (isClickable) {
                setCursorState({active: true, text: 'CLICK'});
            } else {
                setCursorState({active: false, text: ''});
            }
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
            width: cursorState.active ? '72px' : '24px',
            height: cursorState.active ? '72px' : '24px',
            borderRadius: '50%',
            backgroundColor: 'rgba(200, 200, 200, 0.5)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            transition: 'width 0.3s, height 0.3s',
            textAlign: 'center',
            lineHeight: 1,
            zIndex: 9999
        }}>
            {cursorState.active &&
                <span className="text-md font-bold text-black/60" style={{display: 'block', width: '100%'}}>
                    {cursorState.text}
                </span>
            }
        </div>
    );
};

export default CustomCursor;
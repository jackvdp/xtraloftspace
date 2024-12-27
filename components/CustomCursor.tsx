import React, {useState, useEffect} from 'react';

const CustomCursor = () => {
    const [pos, setPos] = useState({x: 0, y: 0});
    const [isHovering, setIsHovering] = useState({clickable: false, draggable: false});

    useEffect(() => {
        const onMouseMove = (e) => {
            setPos({x: e.clientX, y: e.clientY});
            const target = e.target;
            const isDraggable =
                target.getAttribute('draggable') === 'true' ||
                window.getComputedStyle(target).cursor === 'grab' ||
                window.getComputedStyle(target).cursor === 'move';
            const isClickable =
                target.onclick ||
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a' ||
                target.closest('button') ||
                target.closest('a') ||
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.getAttribute('role') === 'button';
            setIsHovering({clickable: isClickable, draggable: isDraggable});
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
            width: (!isHovering.draggable && !isHovering.clickable) ? '24px' : '72px',
            height: (!isHovering.draggable && !isHovering.clickable) ? '24px' : '72px',
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
            {(isHovering.clickable || isHovering.draggable) &&
                <span className="text-md font-bold text-black/60" style={{display: 'block', width: '100%'}}>
        {isHovering.draggable ? 'DRAG' : 'CLICK'}
    </span>
            }
        </div>
    );
};

export default CustomCursor;
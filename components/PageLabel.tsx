const PageLabel = ({text}: { text: string }) => {
    return (
        <div className="hidden md:block fixed bottom-8 left-16 z-50 mix-blend-difference">
            <div className="text-white text-sm tracking-wider origin-bottom-left -rotate-90 whitespace-nowrap z-9999">
                {text.toUpperCase()}
            </div>
        </div>
    );
};

export default PageLabel;
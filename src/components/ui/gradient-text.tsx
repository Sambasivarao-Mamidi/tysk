import React from 'react';

interface GradientTextProps {
    children?: React.ReactNode;
    className?: string; // Optional custom class name
    colors?: string[]; // Array of color strings for the gradient
    animationSpeed?: number; // Animation speed in seconds
    showBorder?: boolean; // Toggle for the border
}

const GradientText: React.FC<GradientTextProps> = ({
    children,
    className = "",
    colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
    animationSpeed = 8,
    showBorder = false,
}) => {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        backgroundSize: "300% 100%",
        animation: `gradient ${animationSpeed}s linear infinite`,
    };

    return (
        <div className={`relative inline-block ${className}`}>
            {showBorder && (
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        ...gradientStyle,
                        backgroundSize: "300% 100%", // Ensure border gradient also animates if using same style
                        padding: "2px",
                        content: '""',
                        borderRadius: "1.25rem",
                        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        maskComposite: "exclude",
                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                    }}
                />
            )}
            <div
                className="relative z-10 inline-block bg-clip-text text-transparent"
                style={gradientStyle}
            >
                {children}
            </div>
            <style jsx global>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
        </div>
    );
};

export default GradientText;

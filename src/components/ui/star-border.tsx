import React from "react";
import { cn } from "@/lib/utils";

interface StarBorderProps<T extends React.ElementType = "div"> {
    as?: T;
    className?: string;
    color?: string;
    speed?: string;
    children?: React.ReactNode;
}

export function StarBorder<T extends React.ElementType = "div">({
    as,
    className,
    color: initialColor = "cyan",
    speed = "6s",
    children,
    ...props
}: StarBorderProps<T>) {
    const Component = as || "div";
    const defaultColor =
        initialColor === "cyan" ? "cyan" : initialColor === "magenta" ? "magenta" : initialColor;

    return (
        <Component
            className={cn(
                "relative inline-block overflow-hidden rounded-[20px] [background:rgb(11,10,12)]",
                className
            )}
            {...props}
        >
            <div
                className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
                style={{
                    background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
                    animationDuration: speed,
                }}
            ></div>
            <div
                className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
                style={{
                    background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
                    animationDuration: speed,
                }}
            ></div>
            <div className="relative z-1 bg-gradient-to-b from-black to-gray-900 border border-white/10 text-white text-center text-[16px] py-[16px] px-[26px] rounded-[20px]">
                {children}
            </div>

            <style jsx>{`
                @keyframes star-movement-bottom {
                    0% { transform: translate(0, 0); opacity: 1; }
                    100% { transform: translate(-100%, 0); opacity: 0; }
                }
                @keyframes star-movement-top {
                    0% { transform: translate(0, 0); opacity: 1; }
                    100% { transform: translate(100%, 0); opacity: 0; }
                }
                .animate-star-movement-bottom {
                  animation: star-movement-bottom linear infinite alternate;
                }
                .animate-star-movement-top {
                  animation: star-movement-top linear infinite alternate;
                }
            `}</style>
        </Component>
    );
}

export default StarBorder;

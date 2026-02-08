"use client";

import { Vortex } from "@/components/ui/vortex";

interface VortexBackgroundProps {
    children: React.ReactNode;
}

export function VortexBackground({ children }: VortexBackgroundProps) {
    return (
        <div className="relative w-full">
            <Vortex
                backgroundColor="transparent"
                particleCount={200}
                baseHue={200}
                rangeY={800}
                baseSpeed={0.0}
                rangeSpeed={1.0}
                baseRadius={1}
                rangeRadius={1.5}
                containerClassName="fixed inset-0 pointer-events-none"
                className="hidden"
            />

            {/* Deep dark background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/50 to-neutral-950 -z-10" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}

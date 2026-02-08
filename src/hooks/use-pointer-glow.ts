"use client";

import { useEffect, useState } from "react";

interface PointerStatus {
    x: string;
    y: string;
    xp: string;
    yp: string;
}

export function usePointerGlow() {
    useEffect(() => {
        let rafId: number;
        const syncPointer = (e: PointerEvent) => {
            const x = e.clientX.toFixed(2);
            const y = e.clientY.toFixed(2);
            const xp = (e.clientX / window.innerWidth).toFixed(2);
            const yp = (e.clientY / window.innerHeight).toFixed(2);

            // Use requestAnimationFrame to throttle updates to the display refresh rate
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                document.documentElement.style.setProperty("--x", x);
                document.documentElement.style.setProperty("--xp", xp);
                document.documentElement.style.setProperty("--y", y);
                document.documentElement.style.setProperty("--yp", yp);
            });
        };

        document.body.addEventListener("pointermove", syncPointer);
        return () => {
            document.body.removeEventListener("pointermove", syncPointer);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return null;
}

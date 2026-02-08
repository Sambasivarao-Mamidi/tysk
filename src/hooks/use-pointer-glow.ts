"use client";

import { useEffect, useState } from "react";

interface PointerStatus {
    x: string;
    y: string;
    xp: string;
    yp: string;
}

export function usePointerGlow() {
    const [status, setStatus] = useState<PointerStatus | null>(null);

    useEffect(() => {
        const syncPointer = (e: PointerEvent) => {
            const x = e.clientX.toFixed(2);
            const y = e.clientY.toFixed(2);
            const xp = (e.clientX / window.innerWidth).toFixed(2);
            const yp = (e.clientY / window.innerHeight).toFixed(2);

            document.documentElement.style.setProperty("--x", x);
            document.documentElement.style.setProperty("--xp", xp);
            document.documentElement.style.setProperty("--y", y);
            document.documentElement.style.setProperty("--yp", yp);

            setStatus({ x, y, xp, yp });
        };

        document.body.addEventListener("pointermove", syncPointer);
        return () => {
            document.body.removeEventListener("pointermove", syncPointer);
        };
    }, []);

    return status;
}

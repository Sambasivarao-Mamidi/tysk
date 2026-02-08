"use client";

import { useState, useEffect } from "react";

export function useScrollSpy(ids: string[], offset: number = 100) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            let currentId = "";

            for (const id of ids) {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if the element top is above the offset point (meaning we've scrolled into it)
                    // AND the bottom is still below the offset point (meaning we haven't scrolled past it completely)
                    if (rect.top <= offset && rect.bottom >= offset) {
                        currentId = id;
                    }
                }
            }

            // If we are at the very bottom, highlight the last item?
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                if (ids.length > 0) currentId = ids[ids.length - 1];
            }

            setActiveId(currentId);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [ids, offset]);

    return activeId;
}

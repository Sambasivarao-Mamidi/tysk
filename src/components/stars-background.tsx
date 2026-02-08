"use client";

import React, { useEffect, useRef } from "react";

export function StarsBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight * 3; // Cover multiple sections
            initStars();
        };

        class Star {
            x: number;
            y: number;
            size: number;
            opacity: number;
            speed: number;
            twinkleSpeed: number;
            twinklePhase: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.size = Math.random() * 2 + 0.5;
                this.opacity = Math.random() * 0.8 + 0.2;
                this.speed = Math.random() * 0.02 + 0.01;
                this.twinkleSpeed = Math.random() * 0.02 + 0.01;
                this.twinklePhase = Math.random() * Math.PI * 2;
            }

            update(time: number) {
                // Twinkle effect
                this.opacity = 0.3 + Math.sin(time * this.twinkleSpeed + this.twinklePhase) * 0.4;

                // Slow drift upward
                this.y -= this.speed;
                if (this.y < 0) {
                    this.y = canvas!.height;
                    this.x = Math.random() * canvas!.width;
                }
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.fill();
            }
        }

        function initStars() {
            stars = [];
            // Fewer stars on mobile for performance
            const isMobile = window.innerWidth < 768;
            const starCount = isMobile ? 80 : 200;

            for (let i = 0; i < starCount; i++) {
                stars.push(new Star());
            }
        }

        let time = 0;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            time += 1;

            // Draw stars
            stars.forEach((star) => {
                star.update(time);
                star.draw(ctx);
            });

            // Add some colored stars for variety
            ctx.fillStyle = "rgba(0, 217, 255, 0.3)";
            ctx.beginPath();
            ctx.arc(canvas.width * 0.2, canvas.height * 0.3, 2, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = "rgba(139, 92, 246, 0.3)";
            ctx.beginPath();
            ctx.arc(canvas.width * 0.8, canvas.height * 0.5, 2.5, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = "rgba(236, 72, 153, 0.3)";
            ctx.beginPath();
            ctx.arc(canvas.width * 0.5, canvas.height * 0.7, 2, 0, Math.PI * 2);
            ctx.fill();

            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{
                background: "linear-gradient(to bottom, #0a0a0a 0%, #0d0d0d 50%, #0a0a0a 100%)",
                top: "100vh" // Start after hero section
            }}
        />
    );
}

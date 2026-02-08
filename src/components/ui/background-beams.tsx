"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    useEffect(() => {
      if (!mounted) return;
      
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      let animationFrameId: number;
      let particles: Particle[] = [];

      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      class Particle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;
        color: string;

        constructor() {
          this.x = Math.random() * canvas!.width;
          this.y = Math.random() * canvas!.height;
          this.vx = (Math.random() - 0.5) * 0.3;
          this.vy = (Math.random() - 0.5) * 0.3;
          this.size = Math.random() * 2 + 0.5;
          const colors = [
            "rgba(0, 217, 255, 0.6)",
            "rgba(139, 92, 246, 0.6)",
            "rgba(168, 85, 247, 0.5)",
            "rgba(6, 182, 212, 0.5)",
          ];
          this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
          this.x += this.vx;
          this.y += this.vy;

          if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
          if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
        }

        draw(ctx: CanvasRenderingContext2D) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }
      }

      // Create particles - fewer on mobile for performance
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ? 30 : 60;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }

      const drawBeams = () => {
        ctx.fillStyle = "rgba(10, 10, 10, 0.2)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw connection lines (beams)
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = isMobile ? 100 : 150;

            if (distance < maxDistance) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              const gradient = ctx.createLinearGradient(
                particles[i].x,
                particles[i].y,
                particles[j].x,
                particles[j].y
              );
              gradient.addColorStop(0, `rgba(0, 217, 255, ${0.3 * (1 - distance / maxDistance)})`);
              gradient.addColorStop(1, `rgba(139, 92, 246, ${0.3 * (1 - distance / maxDistance)})`);
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }

        // Update and draw particles
        particles.forEach((particle) => {
          particle.update();
          particle.draw(ctx);
        });

        animationFrameId = requestAnimationFrame(drawBeams);
      };

      drawBeams();

      return () => {
        window.removeEventListener("resize", resizeCanvas);
        cancelAnimationFrame(animationFrameId);
      };
    }, [mounted]);

    return (
      <canvas
        ref={canvasRef}
        className={cn(
          "pointer-events-none fixed inset-0 z-0",
          className
        )}
        style={{ background: "transparent" }}
      />
    );
  }
);

BackgroundBeams.displayName = "BackgroundBeams";

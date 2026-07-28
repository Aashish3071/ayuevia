"use client";

import React, { useEffect, useRef } from "react";

export default function WaterRippleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle system
    interface Particle {
      x: number;
      y: number;
      radius: number;
      opacity: number;
      speedY: number;
      speedX: number;
      pulseSpeed: number;
    }

    // Ripple system
    interface Ripple {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      opacity: number;
      lineWidth: number;
    }

    const particles: Particle[] = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      speedY: Math.random() * 0.4 + 0.1,
      speedX: (Math.random() - 0.5) * 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
    }));

    const ripples: Ripple[] = [];

    const addRipple = (x: number, y: number) => {
      ripples.push({
        x,
        y,
        radius: 4,
        maxRadius: Math.random() * 80 + 60,
        opacity: 0.7,
        lineWidth: Math.random() * 2 + 1,
      });
    };

    // Auto spawn random gentle ripples
    const intervalId = setInterval(() => {
      addRipple(Math.random() * width, Math.random() * height);
    }, 2500);

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() < 0.15) {
        addRipple(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render Floating Light Particles
      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.opacity += Math.sin(Date.now() * p.pulseSpeed) * 0.005;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 208, 255, ${Math.max(0.1, Math.min(0.6, p.opacity))})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#25D0FF";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Render Interactive Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 1.2;
        r.opacity -= 0.008;

        if (r.opacity <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 134, 255, ${Math.max(0, r.opacity)})`;
        ctx.lineWidth = r.lineWidth;
        ctx.stroke();

        // Inner subtle echo ring
        if (r.radius > 15) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius - 12, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(37, 208, 255, ${Math.max(0, r.opacity * 0.5)})`;
          ctx.lineWidth = r.lineWidth * 0.6;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}

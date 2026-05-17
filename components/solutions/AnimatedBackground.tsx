"use client";

import { useEffect, useRef } from "react";

interface AnimatedBackgroundProps {
  primaryColor: string;
  secondaryColor?: string;
  intensity?: "subtle" | "medium" | "strong";
  pattern?: "mesh" | "grid" | "flow";
}

export default function AnimatedBackground({
  primaryColor = "emerald",
  secondaryColor,
  intensity = "subtle",
  pattern = "mesh",
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const opacityMap = {
    subtle: 0.03,
    medium: 0.05,
    strong: 0.08,
  };

  const colorMap: Record<string, string> = {
    emerald: "16, 185, 129",
    blue: "59, 130, 246",
    cyan: "6, 182, 212",
    purple: "168, 85, 247",
    pink: "236, 72, 153",
  };

  const primary = colorMap[primaryColor] || colorMap.emerald;
  const secondary = secondaryColor ? colorMap[secondaryColor] : primary;
  const opacity = opacityMap[intensity];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let isVisible = true;
    const nodes: { x: number; y: number; vx: number; vy: number; r: number; phase: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const count = pattern === "flow" ? 20 : 15;
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.5 + 0.5,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const animate = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      const time = Date.now() / 3000;

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0) n.x = canvas.offsetWidth;
        if (n.x > canvas.offsetWidth) n.x = 0;
        if (n.y < 0) n.y = canvas.offsetHeight;
        if (n.y > canvas.offsetHeight) n.y = 0;

        const alpha = opacity * (0.5 + 0.5 * Math.sin(time + n.phase));
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${primary}, ${alpha})`;
        ctx.fill();
      });

      const connectionDist = pattern === "flow" ? 100 : 80;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const alpha = opacity * 0.5 * (1 - dist / connectionDist);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${secondary}, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleVisibility = () => {
      isVisible = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [primary, secondary, opacity, pattern]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
}

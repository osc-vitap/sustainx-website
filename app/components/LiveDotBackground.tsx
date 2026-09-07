"use client";

import { useEffect, useRef } from "react";

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  speed: number;
  alpha: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  color: string;
}

export default function LiveDotBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 170,
    };

    const ripples: Ripple[] = [];

    // Create autonomous floating energy nodes (constellation particles)
    const particleCount = Math.min(28, Math.floor((width * height) / 45000));
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2 + 1.5,
      baseAlpha: Math.random() * 0.4 + 0.3,
      color:
        Math.random() > 0.4
          ? "16, 185, 129" // Emerald
          : Math.random() > 0.5
          ? "249, 115, 22" // Orange
          : "6, 182, 212", // Cyan
    }));

    let lastSpawn = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;

      // Spawn soft ripples on movement
      const now = performance.now();
      if (now - lastSpawn > 180) {
        lastSpawn = now;
        ripples.push({
          x: e.clientX,
          y: e.clientY,
          radius: 5,
          maxRadius: 180,
          speed: 3.5,
          alpha: 0.6,
        });
        if (ripples.length > 8) ripples.shift();
      }
    };

    const handleClick = (e: MouseEvent) => {
      // Big shockwave ripple on click
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 10,
        maxRadius: 360,
        speed: 6,
        alpha: 0.9,
      });
      if (ripples.length > 8) ripples.shift();
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    const SPACING = 30;
    let time = 0;

    const render = () => {
      time += 0.025;

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      // 1. UPDATE & DRAW EXPANDING RIPPLES
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.alpha -= 0.012;

        if (r.alpha <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(16, 185, 129, ${r.alpha * 0.25})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // 2. DRAW WAVE-UNDULATING DOT MATRIX
      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const baseX = i * SPACING;
          const baseY = j * SPACING;

          // Multi-frequency undulating wave equations (fluid topography)
          const wave1 = Math.sin(baseX * 0.007 + baseY * 0.005 + time * 1.1);
          const wave2 = Math.cos(baseX * 0.005 - baseY * 0.008 + time * 0.9);
          const combinedWave = (wave1 + wave2) * 0.5;

          // Subtle physical displacement (wavy motion)
          const posX = baseX + Math.cos(baseY * 0.01 + time) * 3;
          const posY = baseY + combinedWave * 5;

          // Distance to mouse pointer
          const dx = mouse.x - posX;
          const dy = mouse.y - posY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Base dot parameters
          let radius = 1 + combinedWave * 0.4;
          let alpha = 0.07 + (combinedWave + 1) * 0.05;
          let r = 160;
          let g = 210;
          let b = 180;

          // Check if affected by any active shockwave ripples
          for (let k = 0; k < ripples.length; k++) {
            const rip = ripples[k];
            const ripDist = Math.abs(
              Math.sqrt((rip.x - posX) ** 2 + (rip.y - posY) ** 2) - rip.radius
            );
            if (ripDist < 25) {
              const impact = (1 - ripDist / 25) * rip.alpha;
              radius += impact * 1.8;
              alpha = Math.min(0.9, alpha + impact * 0.6);
              r = 52;
              g = 211;
              b = 153;
            }
          }

          // Cursor proximity magnetic warp & luminous bloom
          if (dist < mouse.radius) {
            const factor = 1 - dist / mouse.radius;
            // Slight elastic push
            const angle = Math.atan2(dy, dx);
            const push = factor * 8;
            const finalX = posX - Math.cos(angle) * push;
            const finalY = posY - Math.sin(angle) * push;

            radius = 1.2 + factor * 2.5;
            alpha = Math.min(0.95, alpha + factor * 0.85);

            // Dynamic blend from emerald green to radiant solar amber
            if (factor > 0.6) {
              r = 249;
              g = 115;
              b = 22;
            } else {
              r = 16;
              g = 185;
              b = 129;
            }

            ctx.beginPath();
            ctx.arc(finalX, finalY, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            ctx.fill();
            continue;
          }

          ctx.beginPath();
          ctx.arc(posX, posY, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          ctx.fill();
        }
      }

      // 3. DRAW FLOATING ENERGY NODES & CONSTELLATION BEAMS
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off canvas edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Gentle steer toward mouse if nearby
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 250 && mDist > 30) {
          p.x += (mdx / mDist) * 0.4;
          p.y += (mdy / mDist) * 0.4;

          // Connect energy beam to mouse
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${p.color}, ${(1 - mDist / 250) * 0.25})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.baseAlpha + Math.sin(time + i) * 0.15})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `rgba(${p.color}, 0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cDist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cDist < 120) {
            const lineAlpha = (1 - cDist / 120) * 0.2;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-90"
    />
  );
}

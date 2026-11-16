"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { isChristmasPreview, isChristmasSeason } from "@/utils/season";

const GOLD = "212, 178, 0"; // #d4b200, color de marca HostPro

type Flake = {
  x: number;
  y: number;
  r: number;
  speed: number;
  drift: number;
  phase: number;
  alpha: number;
};

const subscribeNoop = () => () => {};

function getSnowEnabled(): boolean {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const enabled = isChristmasSeason() || isChristmasPreview(window.location.search);
  return enabled && !reducedMotion;
}

/**
 * Nieve dorada navideña: copos suaves que caen sobre la página.
 * - Solo aparece del 1 dic al 6 ene (o con `?navidad=1` para previsualizar).
 * - No bloquea clics (pointer-events: none).
 * - Se desactiva si el usuario prefiere menos animaciones.
 * - Se pausa cuando la pestaña no está visible.
 */
export default function ChristmasSnow() {
  // En el servidor siempre es false; en el navegador se evalúa fecha y preferencias.
  const active = useSyncExternalStore(subscribeNoop, getSnowEnabled, () => false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let flakes: Flake[] = [];
    let frame = 0;

    const makeFlake = (randomY: boolean): Flake => ({
      x: Math.random() * width,
      y: randomY ? Math.random() * height : -10,
      r: 1 + Math.random() * 2.5,
      speed: 0.3 + Math.random() * 0.8,
      drift: 0.3 + Math.random() * 0.7,
      phase: Math.random() * Math.PI * 2,
      alpha: 0.35 + Math.random() * 0.5,
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Menos copos en pantallas pequeñas.
      const count = width < 768 ? 35 : 70;
      flakes = Array.from({ length: count }, () => makeFlake(true));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const f of flakes) {
        f.phase += 0.01;
        f.y += f.speed;
        f.x += Math.sin(f.phase) * f.drift * 0.5;

        if (f.y > height + 10) Object.assign(f, makeFlake(false));
        if (f.x > width + 10) f.x = -10;
        if (f.x < -10) f.x = width + 10;

        const glow = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r * 2);
        glow.addColorStop(0, `rgba(${GOLD}, ${f.alpha})`);
        glow.addColorStop(1, `rgba(${GOLD}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r * 2, 0, Math.PI * 2);
        ctx.fill();
      }
      frame = requestAnimationFrame(draw);
    };

    const handleVisibility = () => {
      cancelAnimationFrame(frame);
      if (!document.hidden) frame = requestAnimationFrame(draw);
    };

    resize();
    frame = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      data-testid="christmas-snow"
      className="pointer-events-none fixed inset-0 z-[105]"
    />
  );
}

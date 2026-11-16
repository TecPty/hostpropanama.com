"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { isChristmasPreview, isChristmasSeason } from "@/utils/season";

const SPRITE_SIZE = 64; // px del copo dibujado una vez y reutilizado

/** Dibuja un copo de nieve de 6 puntas con ramitas, en blanco. */
function createFlakeSprite(dpr: number): HTMLCanvasElement {
  const sprite = document.createElement("canvas");
  const size = SPRITE_SIZE * dpr;
  sprite.width = size;
  sprite.height = size;
  const c = sprite.getContext("2d");
  if (!c) return sprite;

  c.scale(dpr, dpr);
  c.translate(SPRITE_SIZE / 2, SPRITE_SIZE / 2);
  c.strokeStyle = "#ffffff";
  c.lineCap = "round";
  c.lineWidth = 2.6;
  // Sombra suave para que el copo se vea también sobre fondos claros.
  c.shadowColor = "rgba(0, 0, 0, 0.35)";
  c.shadowBlur = 3;

  const arm = SPRITE_SIZE * 0.42;
  for (let i = 0; i < 6; i++) {
    c.save();
    c.rotate((Math.PI / 3) * i);
    c.beginPath();
    c.moveTo(0, 0);
    c.lineTo(0, -arm);
    // Dos pares de ramitas por brazo
    for (const [pos, len] of [
      [0.45, 0.28],
      [0.72, 0.2],
    ]) {
      const y = -arm * pos;
      const l = arm * len;
      c.moveTo(0, y);
      c.lineTo(-l * 0.8, y - l);
      c.moveTo(0, y);
      c.lineTo(l * 0.8, y - l);
    }
    c.stroke();
    c.restore();
  }
  // Centro
  c.beginPath();
  c.arc(0, 0, 2.5, 0, Math.PI * 2);
  c.fillStyle = "#ffffff";
  c.fill();
  return sprite;
}

type Flake = {
  x: number;
  y: number;
  size: number;
  rotation: number;
  spin: number;
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
 * Nieve navideña: copos blancos de 6 puntas que caen girando sobre la página.
 * - Solo aparece en las fechas de `season.ts` (o con `?navidad=1` para previsualizar).
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
    let sprite: HTMLCanvasElement | null = null;

    const makeFlake = (randomY: boolean): Flake => ({
      x: Math.random() * width,
      y: randomY ? Math.random() * height : -10,
      size: 10 + Math.random() * 16,
      rotation: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.02,
      speed: 0.4 + Math.random() * 0.9,
      drift: 0.3 + Math.random() * 0.7,
      phase: Math.random() * Math.PI * 2,
      alpha: 0.6 + Math.random() * 0.4,
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
      sprite = createFlakeSprite(dpr);

      // Menos copos en pantallas pequeñas.
      const count = width < 768 ? 22 : 45;
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

        f.rotation += f.spin;
        if (!sprite) continue;
        ctx.save();
        ctx.globalAlpha = f.alpha;
        ctx.translate(f.x, f.y);
        ctx.rotate(f.rotation);
        ctx.drawImage(sprite, -f.size / 2, -f.size / 2, f.size, f.size);
        ctx.restore();
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

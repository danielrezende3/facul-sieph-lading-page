"use client";

import { useEffect, useRef, useState } from "react";

// Posicoes finais para formar a letra "S" - centralizado e menor
const S_POSITIONS = [
  // Topo do S
  { x: 0.54, y: 0.32 }, { x: 0.50, y: 0.30 }, { x: 0.46, y: 0.30 }, { x: 0.42, y: 0.32 },
  // Descida esquerda
  { x: 0.40, y: 0.36 }, { x: 0.40, y: 0.40 },
  // Meio do S
  { x: 0.42, y: 0.44 }, { x: 0.46, y: 0.47 }, { x: 0.50, y: 0.49 }, { x: 0.54, y: 0.52 },
  // Descida direita
  { x: 0.56, y: 0.56 }, { x: 0.56, y: 0.60 },
  // Base do S
  { x: 0.54, y: 0.64 }, { x: 0.50, y: 0.66 }, { x: 0.46, y: 0.66 }, { x: 0.42, y: 0.64 },
];

interface Cell {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  size: number;
  color: "primary" | "accent";
  delay: number;
  floatOffsetX: number;
  floatOffsetY: number;
  floatSpeed: number;
  isMainCell: boolean;
}

function generateCells(): Cell[] {
  const cells: Cell[] = [];
  
  // Celulas que formam o S
  S_POSITIONS.forEach((pos, index) => {
    cells.push({
      id: index,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      endX: pos.x * 100,
      endY: pos.y * 100,
      size: 8 + Math.random() * 6,
      color: Math.random() > 0.5 ? "primary" : "accent",
      delay: Math.random() * 2,
      floatOffsetX: Math.random() * 30 - 15,
      floatOffsetY: Math.random() * 30 - 15,
      floatSpeed: 1.5 + Math.random() * 2,
      isMainCell: true,
    });
  });

  // Celulas extras de fundo distribuidas por toda a pagina - menos celulas, mais espacadas
  for (let i = 0; i < 25; i++) {
    cells.push({
      id: S_POSITIONS.length + i,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      endX: Math.random() * 100,
      endY: Math.random() * 100,
      size: 4 + Math.random() * 8,
      color: Math.random() > 0.5 ? "primary" : "accent",
      delay: Math.random() * 2,
      floatOffsetX: Math.random() * 40 - 20,
      floatOffsetY: Math.random() * 40 - 20,
      floatSpeed: 1 + Math.random() * 2,
      isMainCell: false,
    });
  }

  return cells;
}

export function FloatingCells() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cells] = useState<Cell[]>(() => generateCells());
  const [time, setTime] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(window.scrollY / scrollHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let animationId: number;
    const animate = () => {
      setTime((t) => t + 0.016);
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Easing function para transicao suave
  const easeInOutCubic = (t: number) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="cellBlur" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" />
          </filter>
          <filter id="cellBlurLight" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" />
          </filter>
          <radialGradient id="primaryGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="oklch(0.55 0.22 300)" stopOpacity="1" />
            <stop offset="70%" stopColor="oklch(0.50 0.20 300)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="oklch(0.45 0.18 300)" stopOpacity="0.5" />
          </radialGradient>
          <radialGradient id="accentGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="oklch(0.78 0.18 340)" stopOpacity="1" />
            <stop offset="70%" stopColor="oklch(0.72 0.16 340)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="oklch(0.65 0.14 340)" stopOpacity="0.5" />
          </radialGradient>
        </defs>

        {cells.map((cell) => {
          // Calcular progresso individual com delay
          const adjustedProgress = Math.max(0, Math.min(1, (scrollProgress * 1.8) - cell.delay * 0.1));
          const easedProgress = easeInOutCubic(adjustedProgress);

          // Posicao interpolada entre inicio e fim
          const baseX = cell.startX + (cell.endX - cell.startX) * easedProgress;
          const baseY = cell.startY + (cell.endY - cell.startY) * easedProgress;

          // Adicionar flutuacao quando nao esta formando o S
          const floatAmount = 1 - easedProgress * 0.8;
          const floatX = Math.sin(time * cell.floatSpeed + cell.delay) * cell.floatOffsetX * floatAmount;
          const floatY = Math.cos(time * cell.floatSpeed + cell.delay * 1.5) * cell.floatOffsetY * floatAmount;

          const x = baseX + floatX * 0.25;
          const y = baseY + floatY * 0.25;

          // Tamanho diminui ao formar o S para celulas principais
          const sizeMultiplier = cell.isMainCell ? (1 - easedProgress * 0.4) : 1;
          const size = (cell.size * sizeMultiplier) / 10;

          // Opacidade base maior, aumenta ainda mais ao formar o S
          const baseOpacity = cell.isMainCell ? 0.35 : 0.25;
          const opacity = baseOpacity + easedProgress * 0.3;

          return (
            <circle
              key={cell.id}
              cx={x}
              cy={y}
              r={size}
              fill={cell.color === "primary" ? "url(#primaryGradient)" : "url(#accentGradient)"}
              filter={cell.isMainCell ? "url(#cellBlurLight)" : "url(#cellBlur)"}
              opacity={opacity}
            />
          );
        })}
      </svg>
    </div>
  );
}

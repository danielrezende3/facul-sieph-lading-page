"use client";

import { useEffect, useRef, useState } from "react";

// Posicoes para formar a letra "S" - coordenadas em porcentagem (0-1)
// O S eh formado por tres partes: curva superior, diagonal, curva inferior
const S_POSITIONS = [
  // === CURVA SUPERIOR (abre para a esquerda) ===
  // Linha externa do topo
  { x: 0.58, y: 0.22 }, { x: 0.54, y: 0.20 }, { x: 0.50, y: 0.19 }, { x: 0.46, y: 0.20 }, { x: 0.42, y: 0.22 },
  // Linha interna do topo
  { x: 0.56, y: 0.25 }, { x: 0.52, y: 0.23 }, { x: 0.48, y: 0.23 }, { x: 0.44, y: 0.25 },
  // Lado esquerdo descendo
  { x: 0.40, y: 0.26 }, { x: 0.38, y: 0.30 }, { x: 0.38, y: 0.34 }, { x: 0.40, y: 0.38 },
  // Preenchimento interno esquerdo
  { x: 0.42, y: 0.28 }, { x: 0.42, y: 0.32 }, { x: 0.44, y: 0.36 },

  // === DIAGONAL DO MEIO ===
  { x: 0.44, y: 0.40 }, { x: 0.46, y: 0.42 }, { x: 0.48, y: 0.44 }, { x: 0.50, y: 0.46 },
  { x: 0.52, y: 0.48 }, { x: 0.54, y: 0.50 }, { x: 0.56, y: 0.52 },
  // Espessura da diagonal
  { x: 0.46, y: 0.44 }, { x: 0.48, y: 0.46 }, { x: 0.50, y: 0.48 }, { x: 0.52, y: 0.50 }, { x: 0.54, y: 0.52 },

  // === CURVA INFERIOR (abre para a direita) ===
  // Lado direito descendo
  { x: 0.58, y: 0.54 }, { x: 0.60, y: 0.58 }, { x: 0.62, y: 0.62 }, { x: 0.62, y: 0.66 }, { x: 0.60, y: 0.70 },
  // Preenchimento interno direito
  { x: 0.58, y: 0.56 }, { x: 0.58, y: 0.60 }, { x: 0.58, y: 0.64 }, { x: 0.56, y: 0.68 },
  // Linha externa da base
  { x: 0.58, y: 0.72 }, { x: 0.54, y: 0.74 }, { x: 0.50, y: 0.75 }, { x: 0.46, y: 0.74 }, { x: 0.42, y: 0.72 },
  // Linha interna da base
  { x: 0.56, y: 0.70 }, { x: 0.52, y: 0.72 }, { x: 0.48, y: 0.72 }, { x: 0.44, y: 0.70 },
];

const S_OFFSET_Y = -0.02;

const clampPercent = (value: number) => {
  return Math.min(95, Math.max(5, value));
};
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
      endY: clampPercent((pos.y + S_OFFSET_Y) * 100),
      size: 12 + Math.random() * 8, // Celulas maiores
      color: Math.random() > 0.5 ? "primary" : "accent",
      delay: Math.random() * 1.5,
      floatOffsetX: Math.random() * 20 - 10,
      floatOffsetY: Math.random() * 20 - 10,
      floatSpeed: 1.5 + Math.random() * 1.5,
      isMainCell: true,
    });
  });

  // Poucas celulas de fundo para nao poluir
  for (let i = 0; i < 8; i++) {
    cells.push({
      id: S_POSITIONS.length + i,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      endX: Math.random() * 100,
      endY: Math.random() * 100,
      size: 6 + Math.random() * 6,
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
        preserveAspectRatio="none"
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
          const settleProgress = Math.min(1, Math.max(0, (easedProgress - 0.2) / 0.8));
          const floatAmount = 1 - settleProgress;
          const floatX = Math.sin(time * cell.floatSpeed + cell.delay) * cell.floatOffsetX * floatAmount;
          const floatY = Math.cos(time * cell.floatSpeed + cell.delay * 1.5) * cell.floatOffsetY * floatAmount;

          const wobbleIntensity = (0.15 + settleProgress * 0.35) * (cell.isMainCell ? 1 : 0.6);
          const wobbleX = Math.sin(time * 0.7 + cell.id * 0.65) * wobbleIntensity;
          const wobbleY = Math.cos(time * 0.8 + cell.id * 0.75) * wobbleIntensity * 0.85;

          const x = baseX + floatX * 0.25 + wobbleX;
          const y = baseY + floatY * 0.25 + wobbleY;

          // Tamanho diminui ao formar o S para celulas principais
          const sizeMultiplier = cell.isMainCell ? (1 - easedProgress * 0.3) : 1;
          const size = (cell.size * sizeMultiplier) / 10;

          // Opacidade - celulas do S bem visiveis
          const baseOpacity = cell.isMainCell ? 0.6 : 0.2;
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

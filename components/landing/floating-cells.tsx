"use client";

import { useEffect, useRef, useState } from "react";

// Posicoes para formar a letra "S" - GORDO e bem preenchido
const S_POSITIONS = [
  // === CURVA SUPERIOR ===
  // Topo - linha 1 (mais externa)
  { x: 0.62, y: 0.2 },
  { x: 0.58, y: 0.18 },
  { x: 0.54, y: 0.17 },
  { x: 0.5, y: 0.17 },
  { x: 0.46, y: 0.18 },
  { x: 0.42, y: 0.2 },
  // Topo - linha 2
  { x: 0.6, y: 0.23 },
  { x: 0.56, y: 0.21 },
  { x: 0.52, y: 0.2 },
  { x: 0.48, y: 0.2 },
  { x: 0.44, y: 0.21 },
  { x: 0.4, y: 0.23 },
  // Topo - linha 3 (mais interna)
  { x: 0.58, y: 0.26 },
  { x: 0.54, y: 0.24 },
  { x: 0.5, y: 0.23 },
  { x: 0.46, y: 0.24 },
  { x: 0.42, y: 0.26 },
  // Lado esquerdo descendo - externo
  { x: 0.38, y: 0.24 },
  { x: 0.36, y: 0.28 },
  { x: 0.35, y: 0.32 },
  { x: 0.35, y: 0.36 },
  { x: 0.36, y: 0.4 },
  // Lado esquerdo descendo - meio
  { x: 0.4, y: 0.26 },
  { x: 0.38, y: 0.3 },
  { x: 0.37, y: 0.34 },
  { x: 0.38, y: 0.38 },
  // Lado esquerdo descendo - interno
  { x: 0.42, y: 0.28 },
  { x: 0.4, y: 0.32 },
  { x: 0.4, y: 0.36 },
  { x: 0.42, y: 0.4 },
  // Preenchimento interno superior
  { x: 0.44, y: 0.3 },
  { x: 0.44, y: 0.34 },
  { x: 0.46, y: 0.32 },

  // === DIAGONAL DO MEIO (bem gorda) ===
  // Linha externa superior
  { x: 0.4, y: 0.42 },
  { x: 0.42, y: 0.44 },
  { x: 0.44, y: 0.46 },
  { x: 0.46, y: 0.48 },
  { x: 0.48, y: 0.5 },
  { x: 0.5, y: 0.52 },
  { x: 0.52, y: 0.54 },
  { x: 0.54, y: 0.56 },
  { x: 0.56, y: 0.58 },
  // Linha do meio
  { x: 0.42, y: 0.45 },
  { x: 0.44, y: 0.47 },
  { x: 0.46, y: 0.49 },
  { x: 0.48, y: 0.51 },
  { x: 0.5, y: 0.53 },
  { x: 0.52, y: 0.55 },
  { x: 0.54, y: 0.57 },
  // Linha externa inferior
  { x: 0.44, y: 0.48 },
  { x: 0.46, y: 0.5 },
  { x: 0.48, y: 0.52 },
  { x: 0.5, y: 0.54 },
  { x: 0.52, y: 0.56 },
  { x: 0.54, y: 0.58 },
  { x: 0.56, y: 0.6 },
  // Preenchimento extra da diagonal
  { x: 0.45, y: 0.46 },
  { x: 0.47, y: 0.48 },
  { x: 0.49, y: 0.5 },
  { x: 0.51, y: 0.52 },
  { x: 0.53, y: 0.54 },

  // === CURVA INFERIOR ===
  // Lado direito descendo - externo
  { x: 0.6, y: 0.56 },
  { x: 0.62, y: 0.6 },
  { x: 0.64, y: 0.64 },
  { x: 0.64, y: 0.68 },
  { x: 0.62, y: 0.72 },
  // Lado direito descendo - meio
  { x: 0.58, y: 0.58 },
  { x: 0.6, y: 0.62 },
  { x: 0.62, y: 0.66 },
  { x: 0.6, y: 0.7 },
  // Lado direito descendo - interno
  { x: 0.56, y: 0.6 },
  { x: 0.58, y: 0.64 },
  { x: 0.58, y: 0.68 },
  { x: 0.56, y: 0.72 },
  // Preenchimento interno inferior
  { x: 0.54, y: 0.66 },
  { x: 0.54, y: 0.7 },
  { x: 0.52, y: 0.68 },
  // Base - linha 1 (mais interna)
  { x: 0.58, y: 0.74 },
  { x: 0.54, y: 0.76 },
  { x: 0.5, y: 0.77 },
  { x: 0.46, y: 0.76 },
  { x: 0.42, y: 0.74 },
  // Base - linha 2
  { x: 0.6, y: 0.77 },
  { x: 0.56, y: 0.79 },
  { x: 0.52, y: 0.8 },
  { x: 0.48, y: 0.8 },
  { x: 0.44, y: 0.79 },
  { x: 0.4, y: 0.77 },
  // Base - linha 3 (mais externa)
  { x: 0.62, y: 0.8 },
  { x: 0.58, y: 0.82 },
  { x: 0.54, y: 0.83 },
  { x: 0.5, y: 0.83 },
  { x: 0.46, y: 0.82 },
  { x: 0.42, y: 0.8 },
  { x: 0.38, y: 0.78 },
];

const S_OFFSET_Y = -0.05;

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
      size: 14 + Math.random() * 10, // Celulas bem grandes
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
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
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
      {cells.map((cell) => {
        // Calcular progresso individual com delay
        const adjustedProgress = Math.max(
          0,
          Math.min(1, scrollProgress * 1.8 - cell.delay * 0.1),
        );
        const easedProgress = easeInOutCubic(adjustedProgress);

        // Posicao interpolada entre inicio e fim
        const baseX = cell.startX + (cell.endX - cell.startX) * easedProgress;
        const baseY = cell.startY + (cell.endY - cell.startY) * easedProgress;

        // Adicionar flutuacao quando nao esta formando o S
        const settleProgress = Math.min(
          1,
          Math.max(0, (easedProgress - 0.2) / 0.8),
        );
        const floatAmount = 1 - settleProgress;
        const floatX =
          Math.sin(time * cell.floatSpeed + cell.delay) *
          cell.floatOffsetX *
          floatAmount;
        const floatY =
          Math.cos(time * cell.floatSpeed + cell.delay * 1.5) *
          cell.floatOffsetY *
          floatAmount;

        const wobbleIntensity =
          (0.15 + settleProgress * 0.35) * (cell.isMainCell ? 1 : 0.6);
        const wobbleX = Math.sin(time * 0.7 + cell.id * 0.65) * wobbleIntensity;
        const wobbleY =
          Math.cos(time * 0.8 + cell.id * 0.75) * wobbleIntensity * 0.85;

        const x = baseX + floatX * 0.25 + wobbleX;
        const y = baseY + floatY * 0.25 + wobbleY;

        // Tamanho em pixels - sempre redondo
        const sizeMultiplier = cell.isMainCell ? 1 - easedProgress * 0.3 : 1;
        const size = cell.size * sizeMultiplier;

        // Opacidade - celulas do S bem visiveis
        const baseOpacity = cell.isMainCell ? 0.6 : 0.2;
        const opacity = baseOpacity + easedProgress * 0.3;

        // Celulas do S usam vmin (proporcao fixa), celulas de fundo usam % (cobrem tela)
        const positionStyle = cell.isMainCell
          ? {
              left: `calc(50vw + ${(x - 50) * 1.2}vmin)`,
              top: `calc(50vh + ${(y - 50) * 1.2}vmin)`,
            }
          : {
              left: `${x}%`,
              top: `${y}%`,
            };

        return (
          <div
            key={cell.id}
            className="absolute rounded-full"
            style={{
              ...positionStyle,
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              background:
                cell.color === "primary"
                  ? "radial-gradient(circle at 30% 30%, oklch(0.55 0.22 300), oklch(0.45 0.18 300))"
                  : "radial-gradient(circle at 30% 30%, oklch(0.78 0.18 340), oklch(0.65 0.14 340))",
              filter: cell.isMainCell ? "blur(6px)" : "blur(10px)",
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      })}
    </div>
  );
}

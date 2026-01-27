"use client";

import { useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Demo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <section id="demo" className="py-24 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Demonstracao
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Conheca o SIEHP em acao
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Assista ao nosso video e descubra como o SIEHP pode transformar o ensino
            de histologia e patologia na sua instituicao.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="relative rounded-3xl overflow-hidden bg-foreground/5 border border-border shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Video wrapper */}
          <div className="relative aspect-video bg-foreground/5">
            {/* Thumbnail/Placeholder with cell pattern */}
            <div className="absolute inset-0 flex items-center justify-center">
              <VideoThumbnail />
            </div>

            {/* Play button overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/10 backdrop-blur-[2px]">
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="group relative flex items-center justify-center"
                >
                  {/* Outer ring animation */}
                  <span className="absolute w-28 h-28 rounded-full bg-primary/20 animate-ping" />
                  <span className="absolute w-24 h-24 rounded-full bg-primary/30" />
                  
                  {/* Play button */}
                  <span className="relative w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </span>
                </button>
              </div>
            )}

            {/* Video element (placeholder - would be replaced with actual video) */}
            {isPlaying && (
              <div className="absolute inset-0 bg-foreground/95 flex items-center justify-center">
                <p className="text-primary-foreground/60 text-sm">
                  Video em reproducao...
                </p>
              </div>
            )}
          </div>

          {/* Video controls */}
          <div className="relative z-10 p-4 bg-card border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:bg-primary/10"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-foreground" />
                  ) : (
                    <Play className="w-5 h-5 text-foreground" />
                  )}
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:bg-primary/10"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-foreground" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-foreground" />
                  )}
                </Button>

                {/* Progress bar */}
                <div className="flex items-center gap-2 ml-2">
                  <span className="text-xs text-muted-foreground font-mono">0:00</span>
                  <div className="w-48 sm:w-64 md:w-80 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-0 bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">3:42</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline text-sm text-muted-foreground">
                  SIEHP - Pitch 2024
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/10"
                >
                  <Maximize2 className="w-5 h-5 text-foreground" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Video highlights */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { time: "0:30", label: "Visao geral da plataforma" },
            { time: "1:15", label: "Atlas virtual em acao" },
            { time: "2:40", label: "Painel institucional" },
          ].map((highlight) => (
            <button
              key={highlight.time}
              type="button"
              className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all text-left"
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Play className="w-4 h-4 text-primary" />
              </span>
              <div>
                <p className="text-xs text-primary font-mono">{highlight.time}</p>
                <p className="text-sm text-foreground">{highlight.label}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoThumbnail() {
  return (
    <svg viewBox="0 0 800 450" className="w-full h-full">
      {/* Background gradient */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.96 0.02 330)" />
          <stop offset="100%" stopColor="oklch(0.92 0.03 310)" />
        </linearGradient>
        <linearGradient id="cellGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.50 0.18 300)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="oklch(0.75 0.15 340)" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      
      <rect width="800" height="450" fill="url(#bgGradient)" />
      
      {/* Decorative cells pattern */}
      <g opacity="0.6">
        {/* Large cells */}
        <circle cx="100" cy="100" r="60" fill="none" stroke="oklch(0.50 0.18 300)" strokeWidth="1.5" opacity="0.4" />
        <circle cx="100" cy="100" r="25" fill="oklch(0.50 0.18 300)" opacity="0.2" />
        
        <circle cx="700" cy="80" r="50" fill="none" stroke="oklch(0.75 0.15 340)" strokeWidth="1.5" opacity="0.4" />
        <circle cx="700" cy="80" r="20" fill="oklch(0.75 0.15 340)" opacity="0.2" />
        
        <circle cx="150" cy="380" r="45" fill="none" stroke="oklch(0.75 0.15 340)" strokeWidth="1.5" opacity="0.4" />
        <circle cx="150" cy="380" r="18" fill="oklch(0.75 0.15 340)" opacity="0.2" />
        
        <circle cx="680" cy="350" r="55" fill="none" stroke="oklch(0.50 0.18 300)" strokeWidth="1.5" opacity="0.4" />
        <circle cx="680" cy="350" r="22" fill="oklch(0.50 0.18 300)" opacity="0.2" />
        
        {/* Medium cells */}
        <circle cx="250" cy="200" r="35" fill="none" stroke="oklch(0.50 0.18 300)" strokeWidth="1" opacity="0.3" />
        <circle cx="550" cy="250" r="40" fill="none" stroke="oklch(0.75 0.15 340)" strokeWidth="1" opacity="0.3" />
        <circle cx="300" cy="350" r="30" fill="none" stroke="oklch(0.50 0.18 300)" strokeWidth="1" opacity="0.3" />
        <circle cx="500" cy="100" r="35" fill="none" stroke="oklch(0.75 0.15 340)" strokeWidth="1" opacity="0.3" />
        
        {/* Small cells */}
        <circle cx="400" cy="180" r="20" fill="none" stroke="oklch(0.50 0.18 300)" strokeWidth="0.5" opacity="0.25" />
        <circle cx="600" cy="180" r="18" fill="none" stroke="oklch(0.75 0.15 340)" strokeWidth="0.5" opacity="0.25" />
        <circle cx="200" cy="280" r="22" fill="none" stroke="oklch(0.50 0.18 300)" strokeWidth="0.5" opacity="0.25" />
        <circle cx="450" cy="380" r="25" fill="none" stroke="oklch(0.75 0.15 340)" strokeWidth="0.5" opacity="0.25" />
      </g>
      
      {/* Center logo area */}
      <g transform="translate(400, 225)">
        <text
          x="0"
          y="-40"
          textAnchor="middle"
          fill="oklch(0.30 0.05 300)"
          fontSize="48"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          SIEHP
        </text>
        <text
          x="0"
          y="10"
          textAnchor="middle"
          fill="oklch(0.50 0.03 300)"
          fontSize="16"
          fontFamily="system-ui, sans-serif"
        >
          Sistema Integrado de Ensino
        </text>
        <text
          x="0"
          y="35"
          textAnchor="middle"
          fill="oklch(0.50 0.03 300)"
          fontSize="16"
          fontFamily="system-ui, sans-serif"
        >
          a Histologia e Patologia
        </text>
      </g>
    </svg>
  );
}

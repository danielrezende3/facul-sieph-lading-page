"use client";

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Plataforma educacional inovadora
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                O futuro do ensino em{" "}
                <span className="text-primary">Histologia</span> e{" "}
                <span className="text-accent">Patologia</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
                Sistema integrado que transforma a experiência de aprendizado com
                atlas virtual de lâminas, cursos interativos e avaliações
                inteligentes para sua instituição.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="gap-2">
                  Solicitar demonstração
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                  <Play className="w-4 h-4" />
                  Ver vídeo
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">
                    Instituições parceiras
                  </p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">10.000+</p>
                  <p className="text-sm text-muted-foreground">
                    Lâminas digitalizadas
                  </p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">98%</p>
                  <p className="text-sm text-muted-foreground">Satisfação</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} direction="right">
            <div className="relative">
              <div className="relative bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
                <div className="aspect-4/3 bg-muted p-6 flex items-center justify-center">
                  <MicroscopeView />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Tecido Epitelial
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Aumento 400x - Coloração H&E
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl border border-border p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-accent">AI</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    Análise assistida
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl border border-border p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-muted-foreground">
                    2.341 alunos online
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function CellPattern() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle
        cx="100"
        cy="100"
        r="40"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <circle cx="100" cy="100" r="15" fill="currentColor" opacity="0.3" />
      <circle cx="80" cy="80" r="8" fill="currentColor" opacity="0.2" />
      <circle cx="130" cy="90" r="6" fill="currentColor" opacity="0.2" />
      <circle cx="110" cy="130" r="10" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

function TissuePattern() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full text-accent">
      <defs>
        <pattern
          id="tissue"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="20" cy="20" r="5" fill="currentColor" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#tissue)" />
    </svg>
  );
}

function MicroscopeSlide() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
      <rect
        x="10"
        y="30"
        width="80"
        height="40"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <rect x="25" y="40" width="50" height="20" rx="10" fill="currentColor" opacity="0.2" />
      <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function MicroscopeView() {
  return (
    <svg viewBox="0 0 300 225" className="w-full h-full">
      {/* Background */}
      <rect width="300" height="225" fill="oklch(0.96 0.02 330)" rx="8" />

      {/* Cells */}
      <g>
        {/* Large cells */}
        <circle
          cx="80"
          cy="80"
          r="35"
          fill="none"
          stroke="oklch(0.50 0.18 300)"
          strokeWidth="2"
        />
        <circle cx="80" cy="80" r="12" fill="oklch(0.50 0.18 300)" opacity="0.4" />

        <circle
          cx="180"
          cy="60"
          r="30"
          fill="none"
          stroke="oklch(0.75 0.15 340)"
          strokeWidth="2"
        />
        <circle cx="180" cy="60" r="10" fill="oklch(0.75 0.15 340)" opacity="0.4" />

        <circle
          cx="240"
          cy="120"
          r="28"
          fill="none"
          stroke="oklch(0.50 0.18 300)"
          strokeWidth="2"
        />
        <circle cx="240" cy="120" r="9" fill="oklch(0.50 0.18 300)" opacity="0.4" />

        <circle
          cx="120"
          cy="150"
          r="32"
          fill="none"
          stroke="oklch(0.75 0.15 340)"
          strokeWidth="2"
        />
        <circle cx="120" cy="150" r="11" fill="oklch(0.75 0.15 340)" opacity="0.4" />

        <circle
          cx="200"
          cy="170"
          r="25"
          fill="none"
          stroke="oklch(0.50 0.18 300)"
          strokeWidth="2"
        />
        <circle cx="200" cy="170" r="8" fill="oklch(0.50 0.18 300)" opacity="0.4" />

        {/* Small organelles */}
        <circle cx="70" cy="70" r="4" fill="oklch(0.60 0.15 320)" opacity="0.6" />
        <circle cx="90" cy="85" r="3" fill="oklch(0.60 0.15 320)" opacity="0.6" />
        <circle cx="175" cy="50" r="3" fill="oklch(0.60 0.15 320)" opacity="0.6" />
        <circle cx="185" cy="70" r="2" fill="oklch(0.60 0.15 320)" opacity="0.6" />
        <circle cx="115" cy="140" r="4" fill="oklch(0.60 0.15 320)" opacity="0.6" />
        <circle cx="125" cy="160" r="3" fill="oklch(0.60 0.15 320)" opacity="0.6" />

        {/* Connecting tissue lines */}
        <path
          d="M115 80 Q140 90 150 60"
          fill="none"
          stroke="oklch(0.50 0.18 300)"
          strokeWidth="1"
          opacity="0.3"
        />
        <path
          d="M152 150 Q170 140 175 170"
          fill="none"
          stroke="oklch(0.75 0.15 340)"
          strokeWidth="1"
          opacity="0.3"
        />
      </g>

      {/* Microscope frame overlay */}
      <circle
        cx="150"
        cy="112.5"
        r="100"
        fill="none"
        stroke="oklch(0.20 0.02 300)"
        strokeWidth="3"
        opacity="0.1"
      />
    </svg>
  );
}

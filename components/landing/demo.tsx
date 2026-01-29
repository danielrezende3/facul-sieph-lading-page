"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Demo() {
  return (
    <section id="demo" className="py-24 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Demonstração
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Conheça o SIEHP em ação
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Assista ao nosso vídeo e descubra como o SIEHP pode transformar o
            ensino de histologia e patologia na sua instituição.
          </p>
        </div>

        {/* Video Player Container */}
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden bg-foreground/5 border border-border shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            {/* Video wrapper */}
            <div className="relative aspect-video bg-foreground/5">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/NpEaa2P7qZI"
                title="SIEHP - Pitch 2024"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

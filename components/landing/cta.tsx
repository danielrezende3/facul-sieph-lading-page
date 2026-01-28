"use client";

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function CTA() {
  return (
    <section
      id="contact"
      className="py-24 bg-transparent relative overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Comece agora
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Pronto para transformar o ensino na sua instituição?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Agende uma demonstração personalizada e descubra como o SIEHP pode
            elevar a qualidade do ensino de histologia e patologia na sua
            instituição.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <a
              href="mailto:contato@siehp.com.br"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              contato@siehp.com.br
            </a>
            <a
              href="tel:+551199999999"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              +55 (11) 9999-9999
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

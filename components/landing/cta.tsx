"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/5" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sm font-medium text-primary uppercase tracking-wider">
          Comece agora
        </span>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
          Pronto para transformar o ensino na sua instituicao?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Agende uma demonstracao personalizada e descubra como o SIEHP pode
          elevar a qualidade do ensino de histologia e patologia na sua
          instituicao.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2">
            Agendar demonstracao
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2 bg-transparent">
            Falar com especialista
          </Button>
        </div>

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
      </div>
    </section>
  );
}

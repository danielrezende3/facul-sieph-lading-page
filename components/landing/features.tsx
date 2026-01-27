"use client";

import { Layers, BookOpen, ClipboardCheck, Microscope, Users } from "lucide-react";

function AtlasVisual() {
  return (
    <div className="relative w-full h-48 mt-4 overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Lamina layers */}
          <div className="absolute -top-2 -left-2 w-32 h-20 bg-accent/20 rounded-lg border border-accent/30 transform -rotate-6" />
          <div className="absolute -top-1 -left-1 w-32 h-20 bg-primary/20 rounded-lg border border-primary/30 transform -rotate-3" />
          <div className="w-32 h-20 bg-card rounded-lg border border-border shadow-lg flex items-center justify-center">
            {/* Cell pattern */}
            <svg viewBox="0 0 100 60" className="w-28 h-16">
              <circle cx="25" cy="20" r="12" fill="none" stroke="currentColor" className="text-primary/40" strokeWidth="1.5" />
              <circle cx="25" cy="20" r="5" fill="currentColor" className="text-primary/60" />
              <circle cx="55" cy="35" r="10" fill="none" stroke="currentColor" className="text-accent/40" strokeWidth="1.5" />
              <circle cx="55" cy="35" r="4" fill="currentColor" className="text-accent/60" />
              <circle cx="75" cy="15" r="8" fill="none" stroke="currentColor" className="text-primary/30" strokeWidth="1.5" />
              <circle cx="75" cy="15" r="3" fill="currentColor" className="text-primary/50" />
              <circle cx="40" cy="45" r="7" fill="none" stroke="currentColor" className="text-accent/30" strokeWidth="1.5" />
              <circle cx="40" cy="45" r="3" fill="currentColor" className="text-accent/50" />
            </svg>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-2 right-2 text-xs font-mono text-muted-foreground/50">400x</div>
      <div className="absolute bottom-2 left-2 flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
      </div>
    </div>
  );
}

function CoursesVisual() {
  return (
    <div className="relative w-full h-32 mt-4 overflow-hidden rounded-xl">
      <div className="flex flex-col gap-2">
        {[
          { progress: 100, label: "Sistema Respiratório" },
          { progress: 75, label: "Sistema Digestivo" },
          { progress: 45, label: "Sistema Nervoso" },
        ].map((course, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all"
                style={{ width: `${course.progress}%` }}
              />
            </div>
            <span className="text-xs text-muted-foreground w-8">{course.progress}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuizVisual() {
  return (
    <div className="relative w-full h-32 mt-4 overflow-hidden rounded-xl">
      <div className="space-y-2">
        <div className="flex items-center gap-2 p-2 rounded-lg bg-primary/10 border border-primary/20">
          <div className="w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          <span className="text-xs text-foreground">Célula epitelial escamosa</span>
        </div>
        <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 border border-border">
          <div className="w-4 h-4 rounded-full border-2 border-muted-foreground/30" />
          <span className="text-xs text-muted-foreground">Célula colunar ciliada</span>
        </div>
        <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 border border-border">
          <div className="w-4 h-4 rounded-full border-2 border-muted-foreground/30" />
          <span className="text-xs text-muted-foreground">Célula caliciforme</span>
        </div>
      </div>
    </div>
  );
}

function MicroscopeVisual() {
  return (
    <div className="relative w-full h-full min-h-[200px] flex items-center justify-center">
      <div className="relative">
        {/* Microscope body */}
        <svg viewBox="0 0 120 140" className="w-32 h-40">
          {/* Base */}
          <ellipse cx="60" cy="130" rx="45" ry="8" fill="currentColor" className="text-foreground/10" />
          {/* Stand */}
          <rect x="55" y="45" width="10" height="85" rx="2" fill="currentColor" className="text-foreground/20" />
          {/* Arm */}
          <path d="M55 45 Q55 20 75 20 L95 20 Q100 20 100 25 L100 55 Q100 60 95 60 L65 60" 
                fill="currentColor" className="text-foreground/20" />
          {/* Eyepiece */}
          <rect x="85" y="5" width="15" height="25" rx="3" fill="currentColor" className="text-primary/60" />
          <rect x="88" y="2" width="9" height="5" rx="1" fill="currentColor" className="text-primary/80" />
          {/* Objective lenses */}
          <circle cx="60" cy="75" r="8" fill="currentColor" className="text-accent/60" />
          <rect x="56" y="75" width="8" height="15" rx="2" fill="currentColor" className="text-accent/60" />
          {/* Stage */}
          <rect x="35" y="90" width="50" height="6" rx="1" fill="currentColor" className="text-foreground/15" />
          {/* Slide */}
          <rect x="45" y="88" width="30" height="4" rx="0.5" fill="currentColor" className="text-primary/30" />
        </svg>
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
      </div>
    </div>
  );
}

function ManagementVisual() {
  return (
    <div className="relative w-full h-full min-h-[200px] p-4">
      {/* Mini dashboard */}
      <div className="grid grid-cols-2 gap-2 h-full">
        <div className="bg-primary/10 rounded-lg p-3 flex flex-col justify-between">
          <span className="text-xs text-muted-foreground">Alunos Ativos</span>
          <span className="text-2xl font-bold text-primary">2.4k</span>
        </div>
        <div className="bg-accent/10 rounded-lg p-3 flex flex-col justify-between">
          <span className="text-xs text-muted-foreground">Conclusão</span>
          <span className="text-2xl font-bold text-accent">87%</span>
        </div>
        <div className="col-span-2 bg-muted/50 rounded-lg p-3">
          <div className="flex justify-between items-end h-full gap-1">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div 
                key={i} 
                className="flex-1 bg-gradient-to-t from-primary/60 to-accent/60 rounded-t"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Recursos
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Tudo o que sua instituição precisa para revolucionar o ensino
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Uma plataforma completa que integra visualização de lâminas, conteúdo
            didático e avaliações em um único ambiente.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
          
          {/* Atlas Virtual - Large card spanning 2 columns */}
          <div className="md:col-span-2 lg:row-span-2 group relative p-6 rounded-3xl border border-border bg-background/70 backdrop-blur-md hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Atlas Virtual de Lâminas</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Acesso a mais de 10.000 lâminas histológicas digitalizadas em alta resolução. 
                Navegue com zoom de até 400x e ferramentas de anotação integradas.
              </p>
              <AtlasVisual />
            </div>
          </div>

          {/* Cursos */}
          <div className="group relative p-6 rounded-3xl border border-border bg-background/70 backdrop-blur-md hover:border-primary/50 hover:shadow-xl transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
              <BookOpen className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">Cursos Estruturados</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Conteúdo pedagógico organizado por sistemas e patologias.
            </p>
            <CoursesVisual />
          </div>

          {/* Quizzes */}
          <div className="group relative p-6 rounded-3xl border border-border bg-background/70 backdrop-blur-md hover:border-primary/50 hover:shadow-xl transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
              <ClipboardCheck className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">Quizzes Adaptativos</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Avaliações que se adaptam ao nível do estudante.
            </p>
            <QuizVisual />
          </div>

          {/* Simulador - Primary colored card */}
          <div className="lg:col-span-1 group relative p-6 rounded-3xl border border-border bg-background/70 text-foreground backdrop-blur-md hover:border-primary/40 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary-foreground/5 rounded-full translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Microscope className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Simulador de Microscópio</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Experiência realista que replica o uso do microscópio óptico.
              </p>
              <div className="flex-1 flex items-center justify-center mt-2">
                <MicroscopeVisual />
              </div>
            </div>
          </div>

          {/* Gestão - Wide card */}
          <div className="md:col-span-2 group relative p-6 rounded-3xl border border-border bg-gradient-to-br from-background/70 to-muted/30 backdrop-blur-md hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-4 h-full">
              <div className="flex flex-col justify-center">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Gestão Institucional</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Painel administrativo completo para acompanhar o progresso dos alunos, 
                  criar turmas e gerar relatórios de desempenho detalhados.
                </p>
              </div>
              <ManagementVisual />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

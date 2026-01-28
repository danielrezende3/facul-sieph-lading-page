"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Code, Lightbulb, Microscope } from "lucide-react";
import Image from "next/image";
import cauan from "@/assets/cauan-santos-silva.jpeg";
import andre from "@/assets/andre-britto.png";
import giovanny from "@/assets/giovanny.jpeg";
import jairo from "@/assets/jairo.jpeg";
import joao from "@/assets/joao-paulo-mendonca.jpeg";
import marlisson from "@/assets/marlisson.jpeg";
import ryller from "@/assets/ryller.jpeg";
import vitor from "@/assets/vitor-manuel.jpeg";
import adicineia from "@/assets/adicineia-aparecida-de-oliveira.png";
import debora from "@/assets/debora.jpg";
import erika from "@/assets/erika-de-abreu-costa-brito.jpg";
import celso from "@/assets/celso-de-barros.jpg";
import carlos from "@/assets/carlos-daniel.jpeg";
import guilherme from "@/assets/guilherme.jpeg";

const teamGroups = [
  {
    title: "Desenvolvedores",
    icon: Code,
    color: "primary",
    members: [
      { name: "Cauan Santos Silva", image: cauan },
      { name: "Carlos Daniel Rezende Euzébio", image: carlos },
      { name: "Guilherme Argolo Queiroz de Freitas", image: guilherme },
      { name: "Jairo de Santana Dantas", image: jairo },
      { name: "Joao Paulo Mendonca Andrade", image: joao },
      { name: "Marlisson dos Anjos Monte", image: marlisson },
      { name: "Marcus Ryller Fonseca Amado dos Santos", image: ryller },
      { name: "Vitor Manoel Santos Moura", image: vitor },
    ],
  },
  {
    title: "Consultoria Técnica",
    icon: Lightbulb,
    color: "accent",
    members: [
      { name: "Andre Britto de Carvalho", image: andre },
      { name: "Adicineia Aparecida de Oliveira", image: adicineia },
      { name: "Giovanny Fernando Lucero Palma", image: giovanny },
      { name: "Debora Maria Coelho Nascimento", image: debora },
    ],
  },
  {
    title: "Especialistas do Domínio",
    icon: Microscope,
    color: "primary",
    members: [
      { name: "Erika de Abreu Costa Brito", image: erika },
      { name: "Celso de Barros", image: celso },
    ],
  },
];

function getInitials(name: string) {
  const parts = name.split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

export function Team() {
  return (
    <section id="team" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Equipe
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Quem faz o SIEHP acontecer
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Conheça a equipe multidisciplinar dedicada a transformar o ensino de
            histologia e patologia no Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamGroups.map((group, index) => (
            <ScrollReveal
              key={group.title}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.1}
              className="relative rounded-2xl border border-border bg-background/70 backdrop-blur-md hover:shadow-xl hover:border-primary/40 transition-all overflow-hidden min-h-80"
              innerClassName="h-full p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    group.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                  }`}
                >
                  <group.icon
                    className={`w-5 h-5 ${
                      group.color === "primary" ? "text-primary" : "text-accent"
                    }`}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {group.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {group.members.length}{" "}
                    {group.members.length === 1 ? "membro" : "membros"}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {group.members.map((member) => (
                  <div
                    key={member.name}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    {member.image ? (
                      <Image
                        src={member.image.src}
                        alt={member.name}
                        width={36}
                        height={36}
                        className="w-9 h-9 rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold ${
                          group.color === "primary"
                            ? "bg-primary/10 text-primary"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        {getInitials(member.name)}
                      </div>
                    )}
                    <span className="text-sm text-foreground">
                      {member.name}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

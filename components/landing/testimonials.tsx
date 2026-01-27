"use client";

import { Code, Lightbulb, Microscope } from "lucide-react";

const teamGroups = [
  {
    title: "Desenvolvedores",
    icon: Code,
    color: "primary",
    members: [
      "Cauan Santos Silva",
      "Carlos Daniel Rezende",
      "Guilherme Argolo",
      "Jairo de Santana Dantas",
      "Joao Paulo Mendonca",
      "Marlisson",
      "Marcus Ryller",
      "Vitor Manoel Santos Moura",
    ],
  },
  {
    title: "Consultoria Tecnica",
    icon: Lightbulb,
    color: "accent",
    members: [
      "Andre",
      "Adicenia",
      "Chubaca",
      "Ipsum lorem",
    ],
  },
  {
    title: "Especialistas do Dominio",
    icon: Microscope,
    color: "primary",
    members: [
      "Erika de Abreu Costa Brito",
      "Celso de Barros",
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
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            As pessoas por tras do SIEHP
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Uma equipe multidisciplinar dedicada a transformar o ensino de
            histologia e patologia no Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamGroups.map((group) => (
            <div
              key={group.title}
              className="relative bg-background rounded-2xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all"
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
                    {group.members.length} {group.members.length === 1 ? "membro" : "membros"}
                  </p>
                </div>
              </div>

              {/* Members */}
              <div className="space-y-3">
                {group.members.map((member) => (
                  <div
                    key={member}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold ${
                        group.color === "primary"
                          ? "bg-primary/10 text-primary"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {getInitials(member)}
                    </div>
                    <span className="text-sm text-foreground">{member}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

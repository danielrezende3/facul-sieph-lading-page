import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIEHP | Sistema Integrado de Ensino à Histologia e Patologia",
  description:
    "Plataforma educacional inovadora para o ensino de histologia e patologia. Atlas virtual de lâminas, cursos interativos e avaliações para instituições de ensino.",
  generator: "v0.app",
  keywords: [
    "histologia",
    "patologia",
    "ensino",
    "medicina",
    "atlas virtual",
    "lâminas histológicas",
    "educação médica",
  ],
  icons: {
    icon: [
      {
        url: "/s-ball.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/s-ball.svg",

        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/s-ball.svg",

        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: 'SIEHP | Sistema Integrado de Ensino à Histologia e Patologia',
  description: 'Plataforma educacional inovadora para o ensino de histologia e patologia. Atlas virtual de lâminas, cursos interativos e avaliações para instituições de ensino.',
  generator: 'v0.app',
  keywords: ['histologia', 'patologia', 'ensino', 'medicina', 'atlas virtual', 'lâminas histológicas', 'educação médica'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

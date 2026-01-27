import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Demo } from "@/components/landing/demo";
import { Team } from "@/components/landing/testimonials";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { FloatingCells } from "@/components/landing/floating-cells";

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      <FloatingCells />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <Demo />
        <Team />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}

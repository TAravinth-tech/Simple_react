import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Templates } from "@/components/landing/Templates";
import { Stats } from "@/components/landing/Stats";
import { Components } from "@/components/landing/Components";
import { TechStack } from "@/components/landing/TechStack";
import { Blog } from "@/components/landing/Blog";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pro Global Solutions — Modern Admin Dashboard Templates & Components" },
      { name: "description", content: "Ship enterprise-grade dashboards in days. 200+ components, 12 templates, built with React, Tailwind, and TypeScript." },
      { property: "og:title", content: "Pro Global Solutions — Modern Admin Dashboard" },
      { property: "og:description", content: "200+ components and 12 production-ready dashboard templates." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Templates />
        <Stats />
        <Components />
        <TechStack />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

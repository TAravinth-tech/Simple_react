import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const templates = [
  { name: "React Admin", tag: "Most popular", hue: 265 },
  { name: "Analytics Suite", tag: "New", hue: 220 },
  { name: "CRM Dashboard", tag: "Featured", hue: 290 },
  { name: "eCommerce Pro", tag: "Best seller", hue: 195 },
  { name: "Finance Hub", tag: "Premium", hue: 145 },
  { name: "Project Manager", tag: "Updated", hue: 30 },
];

function MockPreview({ hue }: { hue: number }) {
  const c = `oklch(0.6 0.2 ${hue})`;
  return (
    <div className="relative h-48 overflow-hidden rounded-xl border border-border bg-surface">
      <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(circle at 30% 20%, ${c}, transparent 60%)` }} />
      <div className="relative p-3">
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
          <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
          <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
        </div>
        <div className="mt-3 flex gap-2">
          <div className="h-20 w-12 rounded-md" style={{ background: c, opacity: 0.15 }} />
          <div className="flex-1 space-y-2">
            <div className="h-3 w-2/3 rounded bg-muted" />
            <div className="grid grid-cols-3 gap-1.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-10 rounded-md bg-card shadow-soft" />
              ))}
            </div>
            <svg viewBox="0 0 100 30" className="h-8 w-full">
              <path d="M0,20 L20,12 L40,18 L60,8 L80,14 L100,4" stroke={c} strokeWidth="1.5" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Templates() {
  return (
    <section id="templates" className="relative bg-surface py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Templates"
          title="12 dashboards. Endless possibilities."
          description="Production-ready templates for every industry. Clone, customize, and ship."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((t, i) => (
            <motion.a
              key={t.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group rounded-2xl border border-border bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              <MockPreview hue={t.hue} />
              <div className="mt-4 flex items-center justify-between px-1">
                <div>
                  <div className="text-base font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.tag}</div>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-all group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

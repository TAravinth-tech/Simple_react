import { motion } from "framer-motion";
import { Zap, Shield, Palette, Code2, Layers, GitBranch, Boxes, LineChart, Lock } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const features = [
  { icon: Zap, title: "Lightning fast", desc: "Optimized bundle with code-splitting and lazy loading out of the box." },
  { icon: Shield, title: "Enterprise security", desc: "SOC 2 compliant components with RBAC and audit logs ready." },
  { icon: Palette, title: "Fully themeable", desc: "Design tokens for light, dark, and unlimited custom themes." },
  { icon: Code2, title: "TypeScript first", desc: "Strict types across every component, hook, and utility." },
  { icon: Layers, title: "200+ components", desc: "Tables, charts, forms, modals — everything you need." },
  { icon: GitBranch, title: "Open source", desc: "MIT licensed. Use it in commercial projects without limits." },
  { icon: Boxes, title: "12 templates", desc: "Production-ready dashboards for SaaS, CRM, eCommerce." },
  { icon: LineChart, title: "Real-time charts", desc: "20+ chart types powered by Recharts with smooth animations." },
  { icon: Lock, title: "Auth ready", desc: "Drop-in auth flows with social logins and 2FA support." },
];

export function Features() {
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why teams choose us"
          title="Crafted for modern product teams"
          description="Every detail engineered for the highest standard. From the design system to the developer experience."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

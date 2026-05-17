import { motion } from "framer-motion";
import { ArrowRight, Github, Sparkles, TrendingUp, Users, DollarSign } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-mesh blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -left-20 top-40 h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 top-60 h-80 w-80 rounded-full bg-primary-glow/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-1.5 text-xs font-medium shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-muted-foreground">v4.0 — Now with AI Insights</span>
          </div>

          <h1 className="font-display text-5xl font-bold tracking-tight md:text-7xl">
            Transforming<span className="text-gradient"> Businesses </span>scalable digital solutions
          </h1>
           

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Ship enterprise-grade dashboards in days, not months. 200+ components, 12 prebuilt templates,
            and pixel-perfect designs your users will love.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              Start building free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-elevated px-6 py-3 text-sm font-semibold shadow-soft transition-all hover:shadow-elevated"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
          </div>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="relative rounded-3xl border border-border bg-surface-elevated p-3 shadow-elevated">
            <div className="rounded-2xl bg-gradient-to-br from-surface to-background p-6">
              {/* Mockup top bar */}
              <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-gradient-primary" />
                  <div>
                    <div className="text-sm font-semibold">Analytics Overview</div>
                    <div className="text-xs text-muted-foreground">Last 30 days</div>
                  </div>
                </div>
                <div className="hidden gap-2 md:flex">
                  {["Today", "Week", "Month"].map((t, i) => (
                    <span key={t} className={`rounded-lg px-3 py-1 text-xs font-medium ${i === 2 ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {[
                  { icon: Users, label: "Active Users", value: "48.2K", change: "+12.4%" },
                  { icon: DollarSign, label: "Revenue", value: "$284k", change: "+8.1%" },
                  { icon: TrendingUp, label: "Conversion", value: "4.8%", change: "+2.3%" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-border bg-card p-4 shadow-soft">
                    <div className="flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                        <s.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-emerald-600">{s.change}</span>
                    </div>
                    <div className="mt-3 text-2xl font-bold">{s.value}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Fake chart */}
              <div className="mt-4 rounded-xl border border-border bg-card p-4 shadow-soft">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-sm font-semibold">Revenue Trend</div>
                  <div className="text-xs text-muted-foreground">+18.2% vs last month</div>
                </div>
                <svg viewBox="0 0 600 140" className="h-32 w-full">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.55 0.22 270)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="oklch(0.55 0.22 270)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,100 C60,80 100,40 160,50 C220,60 260,110 320,90 C380,70 420,30 480,40 C540,50 580,30 600,20 L600,140 L0,140 Z" fill="url(#g1)" />
                  <path d="M0,100 C60,80 100,40 160,50 C220,60 260,110 320,90 C380,70 420,30 480,40 C540,50 580,30 600,20" stroke="oklch(0.55 0.22 270)" strokeWidth="2.5" fill="none" />
                </svg>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-1/3 hidden rounded-2xl border border-border bg-surface-elevated p-4 shadow-elevated md:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Growth</div>
                <div className="text-sm font-bold">+24.8%</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-6 top-1/2 hidden rounded-2xl border border-border bg-surface-elevated p-4 shadow-elevated md:block"
          >
            <div className="text-xs text-muted-foreground">New Users</div>
            <div className="text-lg font-bold">+1,284</div>
            <div className="mt-1 flex gap-0.5">
              {[3, 5, 4, 7, 6, 8, 9].map((h, i) => (
                <div key={i} className="w-1.5 rounded-full bg-gradient-primary" style={{ height: h * 3 }} />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Trusted by */}
        <div className="mt-20 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Trusted by 12,000+ teams worldwide
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-60">
            {["acme", "globex", "initech", "umbrella", "stark", "wayne"].map((n) => (
              <span key={n} className="font-display text-xl font-bold tracking-tight text-muted-foreground">
                {n.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

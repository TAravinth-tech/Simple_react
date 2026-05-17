import { LayoutDashboard, Twitter, Github, Linkedin, Youtube } from "lucide-react";

const cols = [
  { title: "Product", links: ["Features", "Templates", "Components", "Pricing", "Changelog"] },
  { title: "Resources", links: ["Documentation", "Tutorials", "Blog", "Showcase", "Support"] },
  { title: "Company", links: ["About", "Careers", "Press", "Partners", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "Cookies", "License"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <LayoutDashboard className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold"><span className="text-gradient">Pro</span>Global Solutions</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Transforming businesses with scalable digital solutions.
            </p>
            <form className="mt-6 flex max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-xl border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-primary"
              />
              <button className="rounded-xl bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow">
                Subscribe
              </button>
            </form>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold">{c.title}</h4>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">© 2026 NexusUI Labs. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {[Twitter, Github, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

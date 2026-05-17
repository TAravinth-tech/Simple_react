import { motion } from "framer-motion";
import { Table, BarChart3, FileText, CreditCard, KanbanSquare, Calendar, PieChart, Bell } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: Table, title: "Data Tables", desc: "Sortable, filterable, paginated." },
  { icon: BarChart3, title: "Charts", desc: "20+ chart types with animations." },
  { icon: FileText, title: "Forms", desc: "Validated, accessible, themeable." },
  { icon: CreditCard, title: "Cards", desc: "Stat, profile, pricing variants." },
  { icon: KanbanSquare, title: "Kanban", desc: "Drag-and-drop boards." },
  { icon: Calendar, title: "Calendar", desc: "Month, week, day views." },
  { icon: PieChart, title: "Widgets", desc: "Plug-and-play analytics." },
  { icon: Bell, title: "Notifications", desc: "Toasts, banners, badges." },
];

export function Components() {
  return (
    <section id="components" className="bg-surface py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Components"
          title="Every block you'll ever need"
          description="Mix and match 200+ production-ready components built for real product use cases."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i, idx) => (
            <motion.div
              key={i.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                <i.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-semibold">{i.title}</div>
              <div className="text-sm text-muted-foreground">{i.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

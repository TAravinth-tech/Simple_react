import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

import {
  FaFigma,
  FaReact,
} from "react-icons/fa";

import {
  SiTypescript,
} from "react-icons/si";

const posts = [
  {
    title: "Designing Figma",
    date: "Mar 12, 2026",
    category: "Design",
    icon: FaFigma,
    color: "text-pink-500",
    bg: "from-pink-500/10 to-pink-500/5",
  },
  {
    title: "React component library in 2026",
    date: "Mar 04, 2026",
    category: "Engineering",
    icon: FaReact,
    color: "text-cyan-400",
    bg: "from-cyan-500/10 to-cyan-500/5",
  },
  {
    title: "The complete guide to dashboard Typescript",
    date: "Feb 21, 2026",
    category: "Guide",
    icon: SiTypescript,
    color: "text-blue-500",
    bg: "from-blue-500/10 to-blue-500/5",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Latest"
          title="From our blog"
          description="Insights on product, design, and engineering."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => {
            const Icon = p.icon;

            return (
              <motion.a
                key={p.title}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl border border-border bg-card p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                {/* Icon Section */}
                <div
                  className={`flex h-44 items-center justify-center rounded-xl bg-gradient-to-br ${p.bg}`}
                >
                  <Icon
                    className={`text-7xl ${p.color} transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                  />
                </div>

                <div className="p-2 pt-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary">
                      {p.category}
                    </span>

                    <span>{p.date}</span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold leading-snug">
                    {p.title}
                  </h3>

                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read more

                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
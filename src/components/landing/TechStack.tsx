import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

import {
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaLaravel,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const stack = [
  {
    name: "React",
    icon: FaReact,
    color: "text-cyan-400",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-black dark:text-white",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "text-sky-400",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-500",
  },
  {
    name: "Laravel",
    icon: FaLaravel,
    color: "text-red-500",
  },
  {
    name: "Vue",
    icon: FaVuejs,
    color: "text-green-500",
  },
  {
    name: "Angular",
    icon: FaAngular,
    color: "text-red-600",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-600",
  },
];

export function TechStack() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Works with your favorite stack"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {stack.map((tech, i) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex h-28 flex-col items-center justify-center rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated"
              >
                <Icon
                  className={`mb-3 text-4xl ${tech.color} transition-all duration-300 group-hover:scale-125`}
                />

                <span className="font-display text-sm font-semibold text-foreground">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { Download, Github } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-[oklch(0.25_0.1_270)] via-[oklch(0.3_0.15_265)] to-[oklch(0.4_0.2_245)] p-14 shadow-elevated md:p-20"
      >
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-primary-glow/40 blur-3xl" />
        <div className="relative text-center">
          <h2 className="font-display text-4xl font-bold text-white md:text-6xl">
            Ready to ship faster?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Join 12,000+ teams building beautiful dashboards with NexusUI. Free forever for personal use.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[oklch(0.2_0.1_270)] shadow-elevated transition-transform hover:scale-[1.03]"
            >
              <Download className="h-4 w-4" /> Download free
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> Star on GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Cube, Sparkles, Cpu, Rocket } from 'lucide-react';

const features = [
  {
    icon: Cube,
    title: 'Interactive 3D',
    desc: 'Immersive scenes with real-time interaction and smooth performance.',
  },
  {
    icon: Sparkles,
    title: 'Iridescent Aesthetics',
    desc: 'Futuristic gradients and glow effects that feel alive and premium.',
  },
  {
    icon: Cpu,
    title: 'Optimized Pipeline',
    desc: 'Built with modern toolchains and best practices for speed.',
  },
  {
    icon: Rocket,
    title: 'Ready for Launch',
    desc: 'Production-quality UI patterns, responsive and accessible.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-[#0a0a15]">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a15] via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why it stands out</h2>
          <p className="mt-2 text-white/70">A curated stack and visual language designed for modern brands.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/30 to-fuchsia-500/30 ring-1 ring-white/20 text-white shadow">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

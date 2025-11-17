import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/70 via-[#050510]/40 to-[#050510] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            Futuristic 3D Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="mt-4 text-lg sm:text-xl text-white/80"
          >
            A dynamic 3D world with glowing metallic cubes and iridescent spheres. Interactive, responsive, and ready for your brand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="#get-started" className="inline-flex items-center rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-semibold shadow-sm hover:bg-white/90 transition">
              Explore Demo
            </a>
            <a href="#features" className="inline-flex items-center rounded-full bg-white/10 text-white px-6 py-3 text-sm font-semibold ring-1 ring-inset ring-white/20 hover:bg-white/15 transition">
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

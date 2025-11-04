import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const PROFILE_URL = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop';

function useTypewriter(text, speed = 45) {
  const [display, setDisplay] = useState('');
  const letters = useMemo(() => text.split(''), [text]);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setDisplay((prev) => (i < letters.length ? prev + letters[i++] : prev));
      if (i >= letters.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [letters, speed]);

  return display;
}

export default function Hero() {
  const typed = useTypewriter("Hi, I'm Evan.");

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-[#0a0e1a]/60 to-black/80" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-5xl mx-auto px-4 pt-24 pb-16 md:py-32">
          <div className="flex flex-col items-center text-center gap-8">
            <motion.img
              src={PROFILE_URL}
              alt="Cozy reading scene"
              width={150}
              height={150}
              loading="lazy"
              className="h-36 w-36 rounded-full object-cover shadow-2xl ring-2 ring-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />

            <motion.h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#e8e8e8]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {typed}<span className="animate-pulse">▌</span>
            </motion.h1>

            <motion.div
              className="space-y-5 max-w-3xl text-gray-300"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
              }}
            >
              {[
                'Not an influencer. Not a master. Just a quiet builder of digital spaces.',
                'Some people tell stories through big stages and loud platforms. I write, design, and build in silence for those who resonate with reflection more than performance.',
              ].map((p, i) => (
                <motion.p
                  key={i}
                  className="leading-relaxed text-base md:text-lg"
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                >
                  {p}
                </motion.p>
              ))}
            </motion.div>

            <a href="#philosophy" className="group inline-flex items-center gap-2 text-[#f59e42] hover:text-white transition-colors">
              <span className="text-sm tracking-wide">Scroll</span>
              <ArrowDown className="group-hover:translate-y-1 transition-transform" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

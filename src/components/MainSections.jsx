import { motion } from 'framer-motion';
import {
  BookOpen,
  Code2,
  Briefcase,
  PenTool,
  Image as ImageIcon,
  MessageSquare,
  ExternalLink,
  Newspaper,
  MessageCircle,
  Linkedin,
  Mail,
  Youtube,
  Facebook,
  Github,
} from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

export default function MainSections() {
  return (
    <main className="relative bg-gradient-to-b from-[#0a0e1a] to-black">
      {/* Philosophy */}
      <motion.section
        id="philosophy"
        className="max-w-6xl mx-auto px-4 py-24 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="font-serif text-2xl md:text-3xl text-[#e8e8e8] mb-6">I explore things like:</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: BookOpen, text: 'Technology and how it shapes our souls', color: '#4a90e2' },
            { icon: PenTool, text: 'Faith that grows in the dark', color: '#f59e42' },
            { icon: ImageIcon, text: 'Digital design as a form of shelter', color: '#9b87f5' },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              className="group p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40"
            >
              <div className="flex items-center gap-4">
                <div
                  className="h-10 w-10 rounded-full grid place-items-center"
                  style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}
                >
                  <item.icon size={18} color={item.color} />
                </div>
                <p className="text-gray-300">{item.text}</p>
              </div>
              <div className="mt-4 h-[1px] w-full transition-colors" style={{ background: '#ffffff10' }} />
              <p className="mt-4 text-sm text-gray-400">
                Sometimes, I help people create landing pages not because it's trendy, but because I believe even the smallest voice deserves a clear place to stand.
              </p>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-gray-400 max-w-3xl">
          This site is where I keep little pieces of myself. If any of them speak to you, feel free to reach out.
        </p>
      </motion.section>

      {/* Three Sides of Me */}
      <motion.section
        id="three-sides"
        className="max-w-6xl mx-auto px-4 py-24 md:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="font-serif text-3xl md:text-4xl text-[#e8e8e8] mb-10">Three Sides of Me</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'THE WRITER',
              emoji: '✍️',
              sub: 'Thoughts & Reflections',
              desc: 'Slow thoughts, quiet wounds, occasional sparks',
              links: [
                { label: 'Substack', href: 'https://evanmamahit.substack.com' },
                { label: 'Medium', href: 'https://medium.com/@evanmamahit77' },
              ],
              btn: { label: 'Read My Writing', href: 'https://evanmamahit.substack.com' },
              accent: '#4a90e2',
            },
            {
              title: 'THE CODER',
              emoji: '⚡',
              sub: 'Tech & Monitoring',
              desc: 'Building CYRA - Gateway monitoring systems',
              links: [{ label: 'Coming Soon', href: '#' }],
              btn: { label: 'View Dashboard', href: '#' },
              accent: '#f59e42',
            },
            {
              title: 'THE PROFESSIONAL',
              emoji: '💼',
              sub: 'Projects & Experience',
              desc: 'Professional work and portfolio',
              links: [{ label: 'Coming Soon', href: '#' }],
              btn: { label: 'See Portfolio', href: '#' },
              accent: '#9b87f5',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={cardVariants}
              className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ boxShadow: `0 0 0 0 ${card.accent}00` }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xl">{card.emoji} <span className="text-sm tracking-widest text-gray-400">{card.title}</span></p>
                  <h3 className="mt-1 font-semibold text-[#e8e8e8]">{card.sub}</h3>
                </div>
              </div>
              <p className="mt-3 text-gray-300">{card.desc}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {card.links.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-white inline-flex items-center gap-1 group">
                    {l.label}
                    <ExternalLink size={14} className="opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition" />
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href={card.btn.href}
                  className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-black"
                  style={{ background: card.accent }}
                >
                  {card.btn.label}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Latest Writing */}
      <motion.section
        id="writing"
        className="max-w-6xl mx-auto px-4 py-24 md:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="font-serif text-3xl md:text-4xl text-[#e8e8e8] mb-8">Writing / Thoughts</h2>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          <div className="relative p-8 md:p-12 max-w-2xl">
            <span className="inline-block text-xs tracking-wider uppercase text-gray-300/90">Reflection • 5 min read</span>
            <h3 className="mt-3 text-2xl md:text-3xl font-serif text-white">When Life Feels Quiet, But Your Head Is Loud</h3>
            <p className="mt-4 text-gray-200">
              Some seasons of life feel like… silence. Not the peaceful kind, but the type where you're not sure if anyone out there is still listening or if they ever did. You keep showing up. You keep trying. You keep creating, thinking, praying, questioning. But everything echoes back to you. And somehow, the more effort you put in, the quieter the world seems to get...
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-white/10 hover:bg-white/20 text-white transition">
                Read More
              </a>
              <a href="https://evanmamahit.substack.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md px-3 py-2 bg-[#4a90e2] text-black font-medium">
                <Newspaper size={16} /> Read more on Substack
              </a>
              <a href="https://medium.com/@evanmamahit77" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md px-3 py-2 bg-emerald-400 text-black font-medium">
                <BookOpen size={16} /> Read more on Medium
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* What I Build */}
      <motion.section
        id="build"
        className="max-w-6xl mx-auto px-4 py-24 md:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="font-serif text-3xl md:text-4xl text-[#e8e8e8] mb-8">What I Build</h2>
        <p className="text-gray-300 mb-8">I build small, honest things.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: FileTextIcon, title: 'Landing Pages', text: 'For people who have stories, but no idea how to show them' },
            { icon: ImageIcon, title: 'Visuals for Ideas', text: "That deserve more than a dusty folder in someone's Google Drive" },
            { icon: MessageSquare, title: 'Words, Sometimes', text: "When silence doesn't cut it" },
          ].map((it, i) => (
            <motion.div
              key={it.title}
              custom={i}
              variants={cardVariants}
              className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 grid place-items-center rounded-full bg-white/10 border border-white/20">
                  <it.icon size={18} className="text-[#f59e42]" />
                </div>
                <h3 className="text-[#e8e8e8] font-medium">{it.title}</h3>
              </div>
              <p className="mt-3 text-gray-400">{it.text}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-gray-400 max-w-3xl">
          I like things that feel personal—not polished to death, not pretending to be something else. If you need a quiet place on the internet that still feels like you, maybe I can help. No promises, no packages. Just reach out if it feels right.
        </p>
        <div className="mt-6">
          <a href="mailto:evanmamahit77@gmail.com" className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[#f59e42] text-black font-medium">
            Reach Out
          </a>
        </div>
      </motion.section>

      {/* Tools */}
      <motion.section
        id="tools"
        className="max-w-6xl mx-auto px-4 py-24 md:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="font-serif text-3xl md:text-4xl text-[#e8e8e8] mb-4">Writing Tools</h2>
        <p className="text-gray-400 max-w-3xl mb-8">I don't use every tool under the sun—just the ones that feel right in my hands.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: PenTool, title: 'Figma', tip: 'For bringing ideas to life without the mess' },
            { icon: Code2, title: 'Framer', tip: "Simple, elegant landing pages that don't scream 'template'" },
            { icon: MessageSquare, title: 'Notion', tip: 'Where half my brain lives. The rest is in Notes app' },
            { icon: MessageSquare, title: 'ChatGPT', tip: 'A thinking partner who never sleeps (but sometimes hallucinates)' },
            { icon: Code2, title: 'VS Code', tip: 'When I pretend to be a developer (and kinda enjoy it)' },
          ].map((tool, i) => (
            <motion.div
              key={tool.title}
              custom={i}
              variants={cardVariants}
              className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors relative"
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-md grid place-items-center bg-white/10 border border-white/20">
                  <tool.icon size={16} className="text-[#4a90e2]" />
                </div>
                <div>
                  <h4 className="text-[#e8e8e8] font-medium">{tool.title}</h4>
                  <p className="text-sm text-gray-400">{tool.tip}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-gray-400 max-w-3xl">I don't chase trends or try every new app that drops. If a tool helps me make something honest and useful, it stays.</p>
      </motion.section>

      {/* Newsletter */}
      <motion.section
        id="newsletter"
        className="relative px-4 py-24 md:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a] via-[#0a0e1a] to-black" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#e8e8e8]">Join for More Thoughtful</h2>
          <div className="mt-6 space-y-4 text-gray-300">
            <p>Deep dives, not hot takes.</p>
            <p>Every week (or so), I send out a quiet note.</p>
            <p>Sometimes it's a spiritual reflection that wrestles with God and doubt. Sometimes it's a story from work about people, leadership, and learning. Sometimes it's a strange intersection of theology, technology, and how to be human in the middle of it all.</p>
            <p>It's not a sermon. It's not a rant. It's just honest.</p>
            <p>If you're someone who thinks deeply, quietly, maybe differently—you might enjoy this space.</p>
            <p>—Just insights, questions, and curiosity.—</p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="https://evanmamahit.substack.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[#4a90e2] text-black font-medium">
              <Newspaper size={16} /> Subscribe via Substack
            </a>
            <a href="https://whatsapp.com/channel/0029Vb6CB3KE50Uo9rnkYm21" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-emerald-400 text-black font-medium">
              <MessageCircle size={16} /> Join WhatsApp Circle
            </a>
          </div>
        </div>
      </motion.section>

      {/* Notes */}
      <motion.section
        id="notes"
        className="max-w-4xl mx-auto px-4 py-24 md:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="font-serif text-3xl md:text-4xl text-[#e8e8e8] mb-6">Notes</h2>
        <div className="space-y-4 text-gray-300">
          <p>Small entries. Quiet thoughts. Digital traces of a curious soul.</p>
          <p>
            This isn't really a blog. It's more like a corner of the internet where I think out loud.
          </p>
          <p>
            I write when I need to breathe. When things don't make sense. When they suddenly do. Or when I just want to save a moment before it slips away.
          </p>
          <p>
            I don't write for reach, SEO, or virality. I write for remembering. For connecting. For existing a little louder than silence.
          </p>
          <div className="pt-2 flex gap-4">
            <a className="text-[#4a90e2] hover:underline" href="https://evanmamahit.substack.com" target="_blank" rel="noreferrer">Read on Substack</a>
            <a className="text-emerald-400 hover:underline" href="https://medium.com/@evanmamahit77" target="_blank" rel="noreferrer">Read on Medium</a>
          </div>
        </div>
      </motion.section>

      {/* Connect */}
      <motion.section
        id="connect"
        className="max-w-6xl mx-auto px-4 py-24 md:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="font-serif text-3xl md:text-4xl text-[#e8e8e8] mb-8">Let's Connect</h2>
        <p className="text-gray-300 max-w-3xl">
          I'm active on a few different platforms sharing thoughts on LinkedIn, light threads, deeper reflections on YouTube, and more personal glimpses on Facebook. If something here speaks to you, or if you're just curious about what I do, feel free to reach out.
        </p>
        <p className="text-gray-400 mt-4">I'm open to DMs—especially the kind that come from a genuine place, not just another copy-paste pitch.</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            { href: 'https://www.linkedin.com/in/evan-mamahit-6521b2292/', label: 'LinkedIn', icon: Linkedin, color: '#0A66C2' },
            { href: 'https://www.threads.com/@evanrcd_', label: 'Threads', icon: MessageSquare, color: '#fff' },
            { href: 'https://www.youtube.com/@evanmamahit4865', label: 'YouTube', icon: Youtube, color: '#FF0000' },
            { href: 'https://www.facebook.com/evan.mamahit.7/?locale=id_ID', label: 'Facebook', icon: Facebook, color: '#1877F2' },
            { href: 'mailto:evanmamahit77@gmail.com', label: 'Email', icon: Mail, color: '#f59e42' },
            { href: 'https://github.com/evanmamahit77-stack', label: 'GitHub', icon: Github, color: '#FFFFFF' },
          ].map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 hover:-translate-y-1 transition transform"
              custom={i}
              variants={cardVariants}
              style={{ boxShadow: '0 0 0 0 rgba(0,0,0,0)' }}
            >
              <s.icon size={18} style={{ color: s.color }} className="transition-transform group-hover:scale-110" />
              <span className="text-gray-300 text-sm">{s.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </main>
  );
}

function FileTextIcon(props) {
  return <svg viewBox="0 0 24 24" width={props.size || 18} height={props.size || 18} className={props.className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;
}

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#hero', label: 'Writing' },
  { href: '#build', label: 'Build' },
  { href: '#connect', label: 'Connect' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row gap-6 md:gap-8">
      <li><a href="#writing" className="text-sm tracking-wide text-gray-300 hover:text-white transition-colors">Writing</a></li>
      <li><a href="#build" className="text-sm tracking-wide text-gray-300 hover:text-white transition-colors">Build</a></li>
      <li><a href="#connect" className="text-sm tracking-wide text-gray-300 hover:text-white transition-colors">Connect</a></li>
    </ul>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className="backdrop-blur-md bg-white/5 border-b border-white/10"
        style={{ WebkitBackdropFilter: 'blur(10px)' }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <a href="#hero" className="font-serif text-lg tracking-[0.3em] text-white">EVAN</a>
            <nav className="hidden md:block">
              <NavLinks />
            </nav>
            <button
              aria-label="Toggle Menu"
              className="md:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        <div className="h-[1px] w-full bg-transparent relative">
          <div
            className="absolute top-0 left-0 h-[2px] bg-[#f59e42]"
            style={{ width: `${progress}%` }}
          />
        </div>
        {open && (
          <div className="md:hidden px-4 pb-4">
            <NavLinks />
          </div>
        )}
      </div>
    </header>
  );
}

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="inline-flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-lg" />
              <span className="text-white font-semibold tracking-tight">Nebula</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#get-started" className="inline-flex items-center rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-white/90 transition">
                Get Started
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white/90 p-2 rounded-lg hover:bg-white/10">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors py-2">
                    {item.label}
                  </a>
                ))}
                <a href="#get-started" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-white/90 transition">
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

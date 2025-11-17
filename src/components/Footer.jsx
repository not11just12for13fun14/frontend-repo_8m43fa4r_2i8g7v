export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a15]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© 2025 Nebula. All rights reserved.</p>
        <div className="flex items-center gap-6 text-white/70 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

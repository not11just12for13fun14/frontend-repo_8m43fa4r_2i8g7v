import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050510] text-white">
      <div className="fixed inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(56,189,248,0.15),transparent),radial-gradient(900px_500px_at_80%_10%,rgba(232,121,249,0.12),transparent)]" aria-hidden="true" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainSections from './components/MainSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e1a] to-black text-[#e8e8e8]">
      <Navbar />
      <Hero />
      <MainSections />
      <Footer />
    </div>
  );
}

export default App;

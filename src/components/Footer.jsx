export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
        <p className="text-sm">Built with honesty, not perfection.</p>
        <div className="mt-4 text-xs flex items-center justify-center gap-3 flex-wrap">
          <span className="text-gray-500">Read by:</span>
          <a href="https://paulgraham.com/articles.html" target="_blank" rel="noreferrer" className="hover:text-white">Paul Graham's Essays</a>
          <span>•</span>
          <a href="https://perell.com" target="_blank" rel="noreferrer" className="hover:text-white">David Perell</a>
          <span>•</span>
          <a href="https://jonathanmartinwords.com/" target="_blank" rel="noreferrer" className="hover:text-white">Jonathan Martin – The Boy on the Bike</a>
        </div>
        <p className="mt-6 text-xs">© 2025 Evan Mamahit</p>
      </div>
    </footer>
  );
}

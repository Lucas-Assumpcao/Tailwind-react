import { Link } from 'react-router-dom';
import Carrossel from './Carrossel';

function Header() {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="px-8 py-4 flex items-center justify-between">
        <p className="font-extrabold text-xl text-slate-900">🛍️ Logo do futuro</p>

        <nav className="flex gap-8 text-slate-600 font-medium">
          <Link to="/" className="hover:text-cyan-600 transition-all">Home</Link>
          <Link to="/sobre" className="hover:text-cyan-600 transition-all">Comida</Link>
          <Link to="/produto" className="hover:text-cyan-600 transition-all">Bebida</Link>
          <Link to="/contato" className="hover:text-cyan-600 transition-all">Viagem</Link>
        </nav>

        <div className="flex gap-5 text-slate-500 text-lg">
          <span>🔍</span>
          <span>👤</span>
          <span>🛒</span>
        </div>
      </div>

      <div className="px-8 pb-4">
        <Carrossel />
      </div>
    </header>
  );
}

export default Header;
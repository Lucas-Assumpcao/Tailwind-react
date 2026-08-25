import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-slate-900 text-white p-4 flex items-center justify-between">
      <p className="font-extrabold text-xl">Logo do futuro</p>
      <nav className="flex gap-6">
        <Link to="/" className="hover:text-cyan-400 transition-all">
          Home
        </Link>
        <Link to="/sobre" className="hover:text-cyan-400 transition-all">
          Comida
        </Link>
        <Link to="/produto" className="hover:text-cyan-400 transition-all">
          Bebida
        </Link>
        <Link to="/contato" className="hover:text-cyan-400 transition-all">
          Viagem
        </Link>
      </nav>
    </header>
  );
}

export default Header;
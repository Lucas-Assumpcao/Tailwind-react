import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Footer from './componentes/Footer';
import Produto from './Produto';
import Contato from './Contato';
import Header from './componentes/Header';

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/produto" element={<Produto />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
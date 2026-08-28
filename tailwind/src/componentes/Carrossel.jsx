import { useState, useEffect } from 'react';

const imagens = [
  { src: '/comida.jpeg', alt: 'Comida' },
  { src: '/bebida.jpeg', alt: 'Bebida' },
  { src: '/viagem.jpeg', alt: 'Viagem' },
];

function Carrossel() {
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual((atual) => (atual + 1) % imagens.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="relative w-full h-40 overflow-hidden rounded-xl">
      {imagens.map((imagem, index) => (
        <img
          key={imagem.src}
          src={imagem.src}
          alt={imagem.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === indiceAtual ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {imagens.map((_, index) => (
          <button
            key={index}
            onClick={() => setIndiceAtual(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === indiceAtual ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carrossel;
import { useState } from 'react';

const produtos = [
  { id: 1, nome: 'Pacote Praia - 5 dias', preco: 1200 },
  { id: 2, nome: 'Pacote Serra - Fim de Semana', preco: 650 },
  { id: 3, nome: 'Pacote Internacional - 10 dias', preco: 4500 },
];

function Contato() {
  const [carrinho, setCarrinho] = useState(0);

  function adicionarAoCarrinho() {
    setCarrinho(carrinho + 1);
  }

  return (
    <div className="bg-slate-900 min-h-screen p-6 text-white">
      <h1 className="text-3xl font-extrabold mb-2">Viagem</h1>
      <p className="text-slate-300 mb-6">
        Itens no carrinho: <span className="font-bold text-cyan-400">{carrinho}</span>
      </p>

      <div className="grid gap-4 max-w-md">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center justify-between"
          >
            <div>
              <p className="font-bold">{produto.nome}</p>
              <p className="text-slate-300 text-sm">R$ {produto.preco}</p>
            </div>
            <button
              onClick={adicionarAoCarrinho}
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-white font-bold rounded-lg transition-all"
            >
              Adicionar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contato;
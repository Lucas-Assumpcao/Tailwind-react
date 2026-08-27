import { useState } from 'react';

const produtos = [
  { id: 1, nome: 'Suco Natural de Laranja', descricao: 'Laranjas selecionadas, sem adição de açúcar.', preco: 12, emoji: '🍊' },
  { id: 2, nome: 'Café Especial', descricao: 'Grãos torrados na hora, blend exclusivo.', preco: 15, emoji: '☕' },
  { id: 3, nome: 'Vinho Tinto Reserva', descricao: 'Safra premiada, corpo intenso e macio.', preco: 68, emoji: '🍷' },
  { id: 4, nome: 'Chá Gelado Artesanal', descricao: 'Blend de ervas com toque cítrico.', preco: 10, emoji: '🧋' },
];

function Produto() {
  const [carrinho, setCarrinho] = useState(0);

  function adicionarAoCarrinho() {
    setCarrinho(carrinho + 1);
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Bebida</h1>
          <p className="text-slate-500 mt-1">Sucos, cafés e vinhos escolhidos com cuidado.</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-500">
            Itens no carrinho: <span className="font-bold text-slate-900">{carrinho}</span>
          </span>
          <span className="text-sm text-slate-500 border border-slate-300 rounded-lg px-3 py-1.5">
            Sort by: Featured ▾
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {produtos.map((produto) => (
          <div key={produto.id} className="bg-white border border-slate-200 rounded-xl p-4">
            <div className="bg-slate-100 rounded-lg h-32 flex items-center justify-center text-5xl mb-4">
              {produto.emoji}
            </div>
            <p className="font-bold text-slate-900">{produto.nome}</p>
            <p className="text-slate-500 text-xs mt-1 mb-3">{produto.descricao}</p>
            <p className="font-bold text-slate-900 mb-3">R$ {produto.preco}</p>
            <button
              onClick={adicionarAoCarrinho}
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 rounded-lg transition-all"
            >
              Adicionar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produto;
import { useState } from 'react';

const produtos = [
  { id: 1, nome: 'Pacote Praia - 5 dias', descricao: 'Resort all-inclusive à beira-mar.', preco: 1200, emoji: '🏖️' },
  { id: 2, nome: 'Pacote Serra - Fim de Semana', descricao: 'Pousada aconchegante nas montanhas.', preco: 650, emoji: '🏔️' },
  { id: 3, nome: 'Pacote Internacional - 10 dias', descricao: 'Roteiro completo por 3 cidades europeias.', preco: 4500, emoji: '✈️' },
  { id: 4, nome: 'Cruzeiro Marítimo - 7 dias', descricao: 'Navegação com paradas em ilhas paradisíacas.', preco: 3200, emoji: '🚢' },
];

function Contato() {
  const [carrinho, setCarrinho] = useState(0);

  function adicionarAoCarrinho() {
    setCarrinho(carrinho + 1);
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Viagem</h1>
          <p className="text-slate-500 mt-1">Pacotes pra sua próxima aventura.</p>
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

export default Contato;
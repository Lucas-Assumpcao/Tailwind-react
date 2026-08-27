function Home() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto text-center py-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-3">Bem-vindo à loja</h1>
        <p className="text-slate-500 mb-12">
          Encontre o melhor em comida, bebida e viagem, tudo em um só lugar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <p className="text-4xl mb-3">🍕</p>
            <p className="font-bold text-slate-900 mb-1">Comida</p>
            <p className="text-slate-500 text-sm">Pratos selecionados pra todo momento</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <p className="text-4xl mb-3">🍹</p>
            <p className="font-bold text-slate-900 mb-1">Bebida</p>
            <p className="text-slate-500 text-sm">Sucos, cafés e vinhos escolhidos com cuidado</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <p className="text-4xl mb-3">✈️</p>
            <p className="font-bold text-slate-900 mb-1">Viagem</p>
            <p className="text-slate-500 text-sm">Pacotes pra sua próxima aventura</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
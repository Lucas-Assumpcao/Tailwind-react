function Home() {
  return (
    <div className="bg-slate-900 min-h-screen p-6 text-white">
      <h1 className="text-3xl font-extrabold mb-2">Bem-vindo à loja</h1>
      <p className="text-slate-300 mb-8">
        Encontre o melhor em comida, bebida e viagem, tudo em um só lugar.
      </p>

      <div className="grid gap-4 max-w-md">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
          <p className="font-bold text-lg">🍕 Comida</p>
          <p className="text-slate-300 text-sm">Pratos selecionados pra todo momento</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
          <p className="font-bold text-lg">🍹 Bebida</p>
          <p className="text-slate-300 text-sm">Sucos, cafés e vinhos escolhidos com cuidado</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
          <p className="font-bold text-lg">✈️ Viagem</p>
          <p className="text-slate-300 text-sm">Pacotes pra sua próxima aventura</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
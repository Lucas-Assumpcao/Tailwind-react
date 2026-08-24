function App() {
return (
<div className="bg-slate-900 min-h-screen flex items-center justify-center p-4">
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounde
d-2xl text-center max-w-sm">
<h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-grad
ient-to-r from-cyan-400 to-blue-500 mb-2">

Tailwind v4 Rodando! ■
</h1>
<p className="text-slate-300 text-sm mb-4">
Ambiente configurado com sucesso e integrado ao Vite.
</p>
<button className="px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-white font-b
old rounded-lg transition-all">

Sucesso! ■
</button>
</div>
</div>
)
}
export default App;
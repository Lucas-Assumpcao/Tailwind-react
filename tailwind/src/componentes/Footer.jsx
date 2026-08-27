function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-12">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-8 py-8 text-center">
        <div>
          <p className="text-2xl mb-1">🚚</p>
          <p className="text-sm font-semibold text-slate-900">Free Shipping</p>
          <p className="text-xs text-slate-500">On orders over $75</p>
        </div>
        <div>
          <p className="text-2xl mb-1">🛡️</p>
          <p className="text-sm font-semibold text-slate-900">Secure Payments</p>
          <p className="text-xs text-slate-500">100% secure checkout</p>
        </div>
        <div>
          <p className="text-2xl mb-1">🔄</p>
          <p className="text-sm font-semibold text-slate-900">Easy Returns</p>
          <p className="text-xs text-slate-500">30-day return policy</p>
        </div>
        <div>
          <p className="text-2xl mb-1">🎧</p>
          <p className="text-sm font-semibold text-slate-900">Customer Support</p>
          <p className="text-xs text-slate-500">24/7 support</p>
        </div>
      </div>

      <div className="border-t border-slate-200 flex items-center justify-center gap-3 py-4">
        <p className="text-sm text-slate-500">2026 todos os direitos reservados</p>
        <img src="instagram.png" alt="logo" width={20} height={20} />
      </div>
    </footer>
  );
}

export default Footer;
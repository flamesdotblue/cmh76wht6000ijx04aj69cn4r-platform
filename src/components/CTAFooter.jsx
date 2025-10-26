function CTAFooter() {
  return (
    <footer id="get-started" className="bg-neutral-950 border-t border-white/10">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 py-16">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-sky-500/10 p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold">Ready to modernize your property operations?</h3>
              <p className="mt-2 text-white/70">Start a free trial and import units in minutes. No credit card required.</p>
            </div>
            <div className="flex md:justify-end gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition">Start free trial</a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white/10 border border-white/15 text-white px-5 py-3 text-sm font-medium hover:bg-white/20 transition">See features</a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-white/60">
          <div>
            <div className="text-white font-semibold">RentScope</div>
            <p className="mt-2">Property management for modern owners. Secure, reliable, and beautifully simple.</p>
          </div>
          <div>
            <div className="text-white font-semibold">Product</div>
            <ul className="mt-2 space-y-1">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold">Company</div>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} RentScope, Inc. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default CTAFooter;

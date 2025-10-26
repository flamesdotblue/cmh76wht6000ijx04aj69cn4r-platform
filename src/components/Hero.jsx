import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-12 flex items-center min-h-[90vh]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs sm:text-sm backdrop-blur border border-white/10">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            New: Owner portal with automated payouts
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Manage rental properties with clarity and control
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl">
            A modern platform for property owners to track units, tenants, leases, maintenance, and payouts—centralized in one beautiful dashboard.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition"
            >
              Get started
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-md bg-white/10 border border-white/15 text-white px-5 py-3 text-sm font-medium hover:bg-white/20 transition"
            >
              Explore features
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/70 text-sm">
            <div>
              <div className="text-2xl font-semibold text-white">500+</div>
              Units managed
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">99.9%</div>
              Uptime SLA
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">24/7</div>
              Monitoring
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">#1</div>
              Owner satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

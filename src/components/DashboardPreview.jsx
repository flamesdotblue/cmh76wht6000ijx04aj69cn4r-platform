function Stat({ label, value, delta }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 flex items-baseline gap-2">
        <div className="text-2xl font-semibold">{value}</div>
        {delta && (
          <span className={`text-xs ${delta.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>{delta}</span>
        )}
      </div>
    </div>
  );
}

function Bar({ value, label }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-20 text-xs text-white/60">{label}</div>
      <div className="flex-1 h-2 rounded bg-white/10 overflow-hidden">
        <div className="h-full bg-emerald-400/80" style={{ width: `${value}%` }} />
      </div>
      <div className="w-10 text-right text-xs text-white/60">{value}%</div>
    </div>
  );
}

function TableRow({ unit, tenant, status, due }) {
  return (
    <div className="grid grid-cols-4 gap-3 text-sm py-2">
      <div className="text-white/90">{unit}</div>
      <div className="text-white/70">{tenant}</div>
      <div className={`text-xs w-fit px-2 py-0.5 rounded-full border ${status === 'Paid' ? 'border-emerald-500/40 text-emerald-300' : status === 'Late' ? 'border-red-500/40 text-red-300' : 'border-yellow-500/40 text-yellow-300'}`}>{status}</div>
      <div className="text-white/70">{due}</div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <section className="py-20 bg-neutral-950">
      <div className="container mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Owner dashboard</h3>
            <p className="mt-2 text-white/70 max-w-prose">
              Real-time visibility into occupancy, collections, and maintenance across your portfolio. Export reports or schedule them to your inbox.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <Stat label="Occupancy" value="96%" delta="+2%" />
              <Stat label="Collected (M)" value="$128k" delta="+4%" />
              <Stat label="Open tickets" value="12" delta="-3" />
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm text-white/80 font-medium">Collections by property</div>
              <div className="mt-4 space-y-3">
                <Bar label="Tower A" value={92} />
                <Bar label="Tower B" value={84} />
                <Bar label="Lofts" value={77} />
                <Bar label="Townhomes" value={95} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-white/60">Receivables — This Month</div>
                <div className="text-xl font-semibold">$142,380</div>
              </div>
              <button className="text-xs rounded-md bg-white text-black px-3 py-1.5 hover:bg-white/90">Export CSV</button>
            </div>

            <div className="mt-5 border-t border-white/10 pt-4">
              <div className="grid grid-cols-4 gap-3 text-xs text-white/60">
                <div>Unit</div>
                <div>Tenant</div>
                <div>Status</div>
                <div>Due</div>
              </div>
              <div className="mt-2 divide-y divide-white/10">
                <TableRow unit="A-1204" tenant="R. Chen" status="Paid" due="$0" />
                <TableRow unit="A-908" tenant="M. Alvarez" status="Due" due="$2,120" />
                <TableRow unit="B-1602" tenant="K. Patel" status="Late" due="$3,480" />
                <TableRow unit="L-304" tenant="S. Ibrahim" status="Paid" due="$0" />
                <TableRow unit="T-12" tenant="J. Kim" status="Due" due="$1,650" />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                <div className="text-sm text-white/70">Upcoming renewals</div>
                <div className="mt-1 text-2xl font-semibold">7</div>
                <div className="mt-2 text-xs text-white/50">30 days</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                <div className="text-sm text-white/70">Work orders</div>
                <div className="mt-1 text-2xl font-semibold">12</div>
                <div className="mt-2 text-xs text-white/50">4 urgent</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardPreview;

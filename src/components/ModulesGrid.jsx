import { Home, Building, Users, FileText, Wallet, Shield, Settings } from 'lucide-react';

const modules = [
  {
    icon: Building,
    title: 'Portfolio & Units',
    desc: 'Organize properties and units, track occupancy, and visualize performance at a glance.'
  },
  {
    icon: Users,
    title: 'Tenants & CRM',
    desc: 'Manage applicants and tenants, communication logs, and screening status.'
  },
  {
    icon: FileText,
    title: 'Leases & Documents',
    desc: 'eSign leases, store docs, automate renewals and reminders with audit trails.'
  },
  {
    icon: Wallet,
    title: 'Payments & Payouts',
    desc: 'Collect rent online, late fees, and automate owner distributions with insights.'
  },
  {
    icon: Home,
    title: 'Maintenance',
    desc: 'Track work orders, vendor assignments, SLAs, and costs in one queue.'
  },
  {
    icon: Shield,
    title: 'Compliance',
    desc: 'Stay compliant with lease terms, insurance, deposits, and local regulations.'
  },
  {
    icon: Settings,
    title: 'Automation',
    desc: 'Build workflows: rent reminders, renewals, notices, and monthly reporting.'
  }
];

function ModulesGrid() {
  return (
    <section id="features" className="relative py-20 bg-neutral-950">
      <div className="container mx-auto px-6 sm:px-8 md:px-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Everything owners need to operate</h2>
          <p className="mt-3 text-white/70">
            A modular toolkit that scales from a single condo to a large multi-building portfolio.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m) => (
            <div key={m.title} className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-white/10 p-2.5 border border-white/10">
                  <m.icon className="h-5 w-5 text-emerald-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{m.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{m.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ModulesGrid;

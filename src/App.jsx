import Hero from './components/Hero';
import ModulesGrid from './components/ModulesGrid';
import DashboardPreview from './components/DashboardPreview';
import CTAFooter from './components/CTAFooter';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Hero />
      <main className="relative z-10">
        <ModulesGrid />
        <DashboardPreview />
      </main>
      <CTAFooter />
    </div>
  );
}

export default App;

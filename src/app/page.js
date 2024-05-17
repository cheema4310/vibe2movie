import AdComponent from '@/components/adComponent';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="fixed w-full h-24 bottom-0 left-0 overflow-hidden bg-dark">
        {process.env.NODE_ENV === 'production' && <AdComponent />}
      </div>
    </main>
  );
}

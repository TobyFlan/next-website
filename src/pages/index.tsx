import Header from '../components/Header';
import Background from '@/components/Background';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">

      <Background />
      <div className="relative z-10">
        <Header />
        <AboutSection />
      </div>

    </main>
  );
}

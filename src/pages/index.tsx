import Header from '../components/Header';
import Background from '@/components/Background';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Background >
        <Header />
      </Background>

      <Background className="bg-gray-900">
        <AboutSection />
      </Background>
    </main>
  );
}

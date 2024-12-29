import Header from '../components/Header';
import Background from '@/components/Background';

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      <Background />
      <div className="relative z-10">
        <Header />
      </div>
    </main>
  );
}

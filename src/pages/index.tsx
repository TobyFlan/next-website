import Header from '../components/Header';
import Background from '@/components/Background';
import TechSection from '@/components/TechSection';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">

      <Background />
      <div className="relative z-10">
        <Header />
        <TechSection />
        <ProjectsSection />
      </div>

    </main>
  );
}

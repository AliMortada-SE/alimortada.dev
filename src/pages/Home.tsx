import { Hero } from '../components/Hero';
import { About } from '../components/About';

export const Home = () => {
  return (
    <main className="min-h-screen overflow-hidden">
      <Hero />
      <About />
    </main>
  );
};

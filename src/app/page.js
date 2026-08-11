import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import LogoBar from '@/components/sections/LogoBar';
import Problem from '@/components/sections/Problem';
import HowItWorks from '@/components/sections/HowItWorks';
import Features from '@/components/sections/Features';
import Statistics from '@/components/sections/Statistics';
import RoleShowcase from '@/components/sections/RoleShowcase';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoBar />
      <div className="divider" />
      <Problem />
      <HowItWorks />
      <Features />
      <Statistics />
      <RoleShowcase />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}

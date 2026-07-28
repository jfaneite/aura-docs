import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import RoleShowcase from '@/components/RoleShowcase';
import DemoVideo from '@/components/DemoVideo';
import Pricing from '@/components/Pricing';
import SecuritySection from '@/components/SecuritySection';
import DataPolicy from '@/components/DataPolicy';
import Roadmap from '@/components/Roadmap';
import Testimonials from '@/components/Testimonials';
import ContactDemo from '@/components/ContactDemo';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="divider" />
      <ProblemSection />
      <div className="divider" />
      <HowItWorks />
      <div className="divider" />
      <Features />
      <div className="divider" />
      <RoleShowcase />
      <div className="divider" />
      <DemoVideo />
      <div className="divider" />
      <Pricing />
      <div className="divider" />
      <SecuritySection />
      <div className="divider" />
      <DataPolicy />
      <div className="divider" />
      <Roadmap />
      <div className="divider" />
      <Testimonials />
      <div className="divider" />
      <ContactDemo />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

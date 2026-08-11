'use client';

import { useEffect, useRef } from 'react';
import { Shield, Zap, Users, Globe, WifiOff, FileText } from 'lucide-react';

const FEATURES = [
  {
    title: 'Real-Time Scanning',
    desc: 'Instant QR verification with offline caching. Scans take less than 1 second even on poor connections.',
    icon: Zap,
    className: 'md:col-span-2 md:row-span-2',
    visual: (
      <div style={{ position: 'relative', height: '180px', background: 'var(--color-surface-2)', borderRadius: '12px', marginTop: '20px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, var(--color-surface) 100%)', zIndex: 1 }} />
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5 }}>
          <div style={{ width: 120, height: 120, border: '2px dashed var(--color-accent)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pulse-ring 2s infinite' }}>
            <div style={{ width: 100, height: 100, background: 'var(--color-accent-subtle)', borderRadius: '12px' }} />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Offline Mode',
    desc: 'Guards can scan guests even when the internet goes down. Data syncs automatically once back online.',
    icon: WifiOff,
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Unlimited Residents',
    desc: 'Easily manage hundreds of apartments and family members from a single dashboard.',
    icon: Users,
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Role-Based Access',
    desc: 'Granular permissions for Admins, Guards, and Residents to ensure data privacy.',
    icon: Shield,
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Automated Reports',
    desc: 'Export daily or weekly entry logs in PDF/CSV formats for compliance.',
    icon: FileText,
    className: 'md:col-span-2 md:row-span-1',
  },
];

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.bento-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section" id="features">
      <div className="container-tight" style={{ padding: '0 1.5rem' }}>
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <span className="section-label">
            <Globe size={12} strokeWidth={3} />
            Everything you need
          </span>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '16px',
            }}
          >
            Powerful features. <span className="gradient-text-warm">Zero clutter.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
          className="md:grid-cols-3"
        >
          {FEATURES.map((feat, i) => (
            <div
              key={i}
              className={`bento-card card ${feat.className || ''}`}
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ width: 48, height: 48, borderRadius: '12px', background: 'var(--color-surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <feat.icon size={22} color="var(--color-accent)" strokeWidth={2} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', letterSpacing: '-0.01em' }}>
                {feat.title}
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, flex: 1 }}>
                {feat.desc}
              </p>
              {feat.visual && feat.visual}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

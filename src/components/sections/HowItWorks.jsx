'use client';

import { useEffect, useRef } from 'react';
import { Smartphone, QrCode, ScanLine } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    title: 'Set up your residence',
    desc: 'Admins add properties, invite residents, and set up guard accounts in minutes from a central dashboard.',
    icon: Smartphone,
    color: 'var(--color-accent)', // Cyan
  },
  {
    num: '02',
    title: 'Residents generate QR',
    desc: 'Residents pre-authorize visitors or deliveries from their phone, generating a secure, time-limited QR code.',
    icon: QrCode,
    color: '#10b981', // Emerald
  },
  {
    num: '03',
    title: 'Guards scan & log',
    desc: 'Security personnel scan the code. If valid, the gate opens and the entry is permanently logged.',
    icon: ScanLine,
    color: '#3b82f6', // Blue
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.step-card');
            items.forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }, i * 150);
            });
            const line = entry.target.querySelector('.step-line');
            if (line) {
              setTimeout(() => {
                line.style.transform = 'scaleX(1)';
              }, 400);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section" id="how-it-works">
      <div className="container-tight" style={{ padding: '0 1.5rem', textAlign: 'center' }}>
        <div style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '16px',
            }}
          >
            Access control, <span className="gradient-text-warm">simplified.</span>
          </h2>
          <p
            style={{
              fontSize: '17px',
              color: 'var(--color-text-secondary)',
              maxWidth: '540px',
              margin: '0 auto',
            }}
          >
            No complex hardware installations. Aura works with the smartphones your residents and guards already own.
          </p>
        </div>

        {/* Steps container */}
        <div style={{ position: 'relative' }}>
          {/* Connecting line (desktop) */}
          <div
            className="step-line desktop-only"
            style={{
              position: 'absolute',
              top: '40px',
              left: '10%',
              right: '10%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, var(--color-border) 20%, var(--color-border) 80%, transparent)',
              transform: 'scaleX(0)',
              transformOrigin: 'left',
              transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 0,
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {STEPS.map((step, i) => (
              <div
                key={i}
                className="step-card"
                style={{
                  opacity: 0,
                  transform: 'translateY(30px)',
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '24px',
                  padding: '32px 24px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {/* Large step number */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '80px',
                    fontWeight: 900,
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-background)',
                    WebkitTextStroke: '1px var(--color-border)',
                    lineHeight: 1,
                    zIndex: -1,
                    userSelect: 'none',
                  }}
                >
                  {step.num}
                </div>

                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '16px',
                    background: 'var(--color-surface-2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    boxShadow: `0 8px 32px -8px ${step.color}40`,
                    border: `1px solid ${step.color}40`,
                  }}
                >
                  <step.icon size={28} color={step.color} strokeWidth={2} />
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', letterSpacing: '-0.01em' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .desktop-only { display: none !important; }
        }
      `}</style>
    </section>
  );
}

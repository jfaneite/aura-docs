'use client';

import { useEffect, useRef } from 'react';
import { X, AlertTriangle, FileX, Clock, CheckCircle2 } from 'lucide-react';

const PAINS = [
  {
    icon: FileX,
    title: 'Paper logs get lost',
    desc: 'Visitor notebooks are illegible, misfiled, or simply disappear — leaving zero audit trail.',
  },
  {
    icon: AlertTriangle,
    title: 'Guards have no way to verify',
    desc: 'Security staff can\'t confirm if a visitor was actually authorized by the resident in real time.',
  },
  {
    icon: Clock,
    title: 'Management is always in the dark',
    desc: 'Administrators can\'t see who entered, when, or why — until something goes wrong.',
  },
];

export default function Problem() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('[data-fade]');
            items.forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section" id="problem">
      <div className="container-tight" style={{ padding: '0 1.5rem' }}>
        {/* Label */}
        <div data-fade style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease', marginBottom: '20px' }}>
          <span className="section-label">
            <X size={12} strokeWidth={3} />
            The Old Way
          </span>
        </div>

        {/* Headline */}
        <h2
          data-fade
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.6s ease',
            fontSize: 'clamp(32px, 4.5vw, 56px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginBottom: '16px',
            maxWidth: '640px',
          }}
        >
          Paper logs.{' '}
          <span style={{ color: 'var(--color-text-muted)', textDecoration: 'line-through' }}>No accountability.</span>
          <br />
          Zero visibility.
        </h2>

        <p
          data-fade
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.6s ease',
            fontSize: '17px',
            color: 'var(--color-text-secondary)',
            maxWidth: '500px',
            marginBottom: '52px',
            lineHeight: 1.65,
          }}
        >
          Most residential communities still track visitors with a clipboard and a pen. The result? Lost data, security gaps, and frustrated residents.
        </p>

        {/* Pain point cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {PAINS.map((pain, i) => (
            <div
              key={i}
              data-fade
              className="card"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'all 0.6s ease',
                padding: '28px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Red glow top-left */}
              <div
                style={{
                  position: 'absolute',
                  top: -20,
                  left: -20,
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(248, 113, 113, 0.12) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  background: 'rgba(248, 113, 113, 0.1)',
                  border: '1px solid rgba(248, 113, 113, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                }}
              >
                <pain.icon size={20} color="#f87171" strokeWidth={2} />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '10px', letterSpacing: '-0.01em' }}>
                {pain.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                {pain.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bridge line */}
        <div
          data-fade
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.6s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginTop: '48px',
            padding: '20px 24px',
            background: 'rgba(16, 185, 129, 0.05)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: '14px',
          }}
        >
          <CheckCircle2 size={22} color="#10b981" strokeWidth={2} style={{ flexShrink: 0 }} />
          <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            <strong style={{ color: 'var(--color-text-primary)' }}>Aura solves all three</strong> — with a QR-first, mobile-native platform that every role in your community can use from day one.
          </p>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { Zap, ChevronRight, ShieldCheck, Star } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const items = heroRef.current?.querySelectorAll('[data-animate]');
    if (!items) return;
    items.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100 + i * 120);
    });
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '80px',
      }}
    >
      {/* Background orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Dot grid */}
      <div
        className="dot-grid"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      <div
        className="container-tight"
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '0 1.5rem',
        }}
      >
        {/* Eyebrow pill */}
        <div data-animate style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
          <span className="section-label">
            <ShieldCheck size={12} strokeWidth={2.5} />
            QR Access · Real-Time · Zero Paper
          </span>
        </div>

        {/* Headline */}
        <h1
          data-animate
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(44px, 7vw, 88px)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            marginBottom: '28px',
          }}
        >
          The smartest way to{' '}
          <br />
          <span className="gradient-text">control who enters</span>
        </h1>

        {/* Subheadline */}
        <p
          data-animate
          style={{
            fontSize: 'clamp(17px, 2.2vw, 21px)',
            color: 'var(--color-text-secondary)',
            maxWidth: '560px',
            margin: '0 auto 40px',
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          Replace clipboards and paper logs with Aura — instant QR scanning, real-time entry history, and complete visibility for every residential community.
        </p>

        {/* CTA buttons */}
        <div
          data-animate
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}
        >
          <a
            href="#final-cta"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#final-cta')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn btn-primary"
            style={{ textDecoration: 'none', fontSize: '16px', padding: '15px 32px' }}
          >
            <Zap size={17} strokeWidth={2.5} />
            Get Early Access — Free
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn btn-ghost"
            style={{ textDecoration: 'none', fontSize: '16px', padding: '15px 32px' }}
          >
            See How It Works
            <ChevronRight size={16} />
          </a>
        </div>

        {/* Trust signal */}
        <div
          data-animate
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            color: 'var(--color-text-muted)',
            fontSize: '13px',
            marginBottom: '72px',
          }}
        >
          <div style={{ display: 'flex', gap: '2px' }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} fill="#f59e0b" color="#f59e0b" />
            ))}
          </div>
          <span style={{ color: 'var(--color-text-secondary)', fontWeight: 500 }}>Trusted by 200+ residential communities</span>
          <span style={{ margin: '0 4px' }}>·</span>
          <span>No credit card required</span>
        </div>

        {/* Product visual — floating dashboard card */}
        <div
          data-animate
          style={{
            position: 'relative',
            maxWidth: '860px',
            margin: '0 auto',
          }}
        >
          {/* Main dashboard mockup */}
          <div
            className="glass glow-border"
            style={{
              borderRadius: '20px',
              padding: '2px',
              boxShadow: '0 0 80px rgba(99, 102, 241, 0.2), 0 40px 80px rgba(0,0,0,0.6)',
            }}
          >
            <div
              style={{
                background: 'var(--color-surface)',
                borderRadius: '18px',
                overflow: 'hidden',
              }}
            >
              {/* Fake browser bar */}
              <div
                style={{
                  background: 'var(--color-surface-2)',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                <div style={{ display: 'flex', gap: '6px' }}>
                  {['#ef4444', '#f59e0b', '#22c55e'].map((c) => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                  ))}
                </div>
                <div
                  style={{
                    flex: 1,
                    background: 'var(--color-background)',
                    borderRadius: '6px',
                    padding: '4px 12px',
                    fontSize: '12px',
                    color: 'var(--color-text-muted)',
                    fontFamily: 'monospace',
                    maxWidth: '300px',
                    margin: '0 auto',
                  }}
                >
                  auradigitalapp.com/dashboard
                </div>
              </div>

              {/* Dashboard content */}
              <div style={{ padding: '24px', background: 'var(--color-background)' }}>
                {/* Stats row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '20px' }}>
                  {[
                    { label: 'Entries Today', value: '47', color: '#0ea5e9', icon: '↑' },
                    { label: 'Active Residents', value: '183', color: '#10b981', icon: '●' },
                    { label: 'Pending Visitors', value: '12', color: '#3b82f6', icon: '◐' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="card"
                      style={{ padding: '16px', textAlign: 'left' }}
                    >
                      <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        {stat.icon} {stat.label}
                      </div>
                      <div style={{ fontSize: '28px', fontWeight: 800, color: stat.color, fontFamily: 'var(--font-display)', lineHeight: 1 }}>
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Entry log */}
                <div className="card" style={{ padding: '16px' }}>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Recent Entries
                  </div>
                  {[
                    { name: 'Carlos M.', apt: 'Apt 401', time: '2 min ago', status: 'Approved' },
                    { name: 'Visitor: Ana G.', apt: 'Apt 204', time: '8 min ago', status: 'Approved' },
                    { name: 'Delivery: DHL', apt: 'Lobby', time: '15 min ago', status: 'Logged' },
                  ].map((entry, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 0',
                        borderBottom: i < 2 ? '1px solid var(--color-border)' : 'none',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #0ea5e9, #0891b2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          fontWeight: 700,
                          color: '#fff',
                          flexShrink: 0,
                        }}>
                          {entry.name[0]}
                        </div>
                        <div>
                          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-primary)' }}>{entry.name}</div>
                          <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>{entry.apt}</div>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span className="badge badge-success" style={{ fontSize: '10px' }}>{entry.status}</span>
                        <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '2px' }}>{entry.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating stat cards */}
          <div
            className="glass-accent"
            style={{
              position: 'absolute',
              bottom: '-20px',
              left: '-40px',
              padding: '14px 18px',
              borderRadius: '14px',
              boxShadow: 'var(--shadow-card)',
              animation: 'float-1 8s ease-in-out infinite',
              zIndex: 2,
            }}
          >
            <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginBottom: '4px' }}>QR Scanned</div>
            <div style={{ fontSize: '22px', fontWeight: 800, color: '#10b981', fontFamily: 'var(--font-display)' }}>✓ 0.8s</div>
          </div>

          <div
            className="glass-accent"
            style={{
              position: 'absolute',
              top: '60px',
              right: '-40px',
              padding: '14px 18px',
              borderRadius: '14px',
              boxShadow: 'var(--shadow-card)',
              animation: 'float-2 10s ease-in-out infinite',
              zIndex: 2,
            }}
          >
            <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginBottom: '4px' }}>Uptime</div>
            <div style={{ fontSize: '22px', fontWeight: 800, color: '#0ea5e9', fontFamily: 'var(--font-display)' }}>99.9%</div>
          </div>
        </div>
      </div>
    </section>
  );
}

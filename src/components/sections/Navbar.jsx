'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Zap } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: scrolled ? '12px 0' : '20px 0',
          background: scrolled
            ? 'rgba(6, 6, 10, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(30, 30, 46, 0.8)' : '1px solid transparent',
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="container-wide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.5rem' }}>

          {/* Logo */}
          <a
            href="#"
            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <div style={{
              width: 36,
              height: 36,
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #0ea5e9, #0891b2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(14, 165, 233, 0.4)',
              overflow: 'hidden',
              flexShrink: 0,
            }}>
              <img
                src="/images/app_icon_without_background.png"
                alt="Aura"
                style={{ width: 28, height: 28, objectFit: 'contain' }}
              />
            </div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '20px',
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.03em',
            }}>
              Aura
            </span>
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--color-text-secondary)',
                  fontSize: '14px',
                  fontWeight: 500,
                  padding: '8px 16px',
                  borderRadius: '8px',
                  transition: 'color 0.2s, background 0.2s',
                  fontFamily: 'var(--font-sans)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-primary)';
                  e.currentTarget.style.background = 'rgba(14, 165, 233, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                  e.currentTarget.style.background = 'none';
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="#final-cta"
              onClick={(e) => { e.preventDefault(); handleNav('#final-cta'); }}
              className="btn btn-primary btn-sm"
              style={{ textDecoration: 'none' }}
            >
              <Zap size={14} strokeWidth={2.5} />
              Get Early Access
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                display: 'none',
                background: 'none',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                padding: '8px',
                color: 'var(--color-text-primary)',
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="mobile-toggle"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 40,
          background: 'rgba(6, 6, 10, 0.97)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNav(link.href)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text-primary)',
              fontSize: '28px',
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.02em',
              padding: '12px 24px',
              width: '100%',
              textAlign: 'center',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-primary)'; }}
          >
            {link.label}
          </button>
        ))}
        <a
          href="#final-cta"
          onClick={(e) => { e.preventDefault(); handleNav('#final-cta'); }}
          className="btn btn-primary"
          style={{ marginTop: '24px', textDecoration: 'none' }}
        >
          <Zap size={16} strokeWidth={2.5} />
          Get Early Access
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}

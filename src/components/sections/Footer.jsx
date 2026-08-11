'use client';

import { Shield } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--color-border)', padding: '64px 24px 32px' }}>
      <div className="container-wide" style={{ maxWidth: '1100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '64px' }}>
          
          {/* Brand */}
          <div style={{ flex: 2, minWidth: '280px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div 
                style={{
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
                }}
              >
                <Image src="/images/app_icon_without_background.png" alt="Aura Logo" width={40} height={40} style={{ objectFit: 'cover' }} />
              </div>
              <span style={{ fontSize: '20px', fontWeight: 800, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', color: 'var(--color-text-primary)' }}>
                Aura
              </span>
            </div>
            <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '300px' }}>
              The modern standard for residential security. Next-generation access control powered by QR technology.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Product</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Features', 'Security', 'Hardware', 'Pricing'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['About Us', 'Careers', 'Contact Sales', 'Partners'].map(link => (
                <li key={link}>
                  <a href="#" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
                <li key={link}>
                  <a href="#" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider" style={{ marginBottom: '32px' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', justifyContent: 'space-between', color: 'var(--color-text-muted)', fontSize: '13px' }} className="md:flex-row">
          <div>
            &copy; {new Date().getFullYear()} Aura Security Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Shield size={14} /> SOC2 Type II Certified
          </div>
        </div>
      </div>
    </footer>
  );
}

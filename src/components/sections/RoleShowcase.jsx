'use client';

import { useState } from 'react';
import { Shield, UserCheck, Smartphone } from 'lucide-react';

const ROLES = [
  {
    id: 'admin',
    title: 'For Administrators',
    icon: Shield,
    desc: 'Total control over your property. Manage residents, view real-time logs, and generate reports from an intuitive dashboard.',
    features: ['Real-time activity logs', 'Bulk resident import', 'Access role management', 'Automated reporting'],
    color: 'var(--color-accent)', // Cyan
  },
  {
    id: 'resident',
    title: 'For Residents',
    icon: Smartphone,
    desc: 'Invite guests with a tap. Generate temporary QR codes for visitors, deliveries, and services, and get notified upon arrival.',
    features: ['Instant QR generation', 'Recurring passes', 'Entry notifications', 'Panic button integration'],
    color: '#10b981', // Emerald
  },
  {
    id: 'guard',
    title: 'For Security Guards',
    icon: UserCheck,
    desc: 'Lightning-fast scanning designed for high-traffic gates. Offline support ensures the line keeps moving even without internet.',
    features: ['Sub-second scanning', 'Offline mode support', 'Manual entry fallback', 'Incident reporting'],
    color: '#3b82f6', // Blue
  },
];

export default function RoleShowcase() {
  const [activeRole, setActiveRole] = useState(ROLES[0]);

  return (
    <section className="section" id="roles" style={{ background: 'var(--color-surface)' }}>
      <div className="container-tight" style={{ padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '16px',
            }}
          >
            Built for <span className="gradient-text-warm">everyone.</span>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--color-text-secondary)', maxWidth: '540px', margin: '0 auto' }}>
            A unified system that empowers every role in your community with exactly the tools they need.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }} className="md:flex-row">
          
          {/* Navigation / Selection */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {ROLES.map((role) => {
              const isActive = activeRole.id === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRole(role)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px',
                    background: isActive ? 'var(--color-surface-2)' : 'transparent',
                    border: `1px solid ${isActive ? 'var(--color-border)' : 'transparent'}`,
                    borderRadius: '16px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div 
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      background: isActive ? `${role.color}15` : 'var(--color-surface-2)',
                      color: isActive ? role.color : 'var(--color-text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <role.icon size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)', transition: 'color 0.3s ease' }}>
                      {role.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details / Preview */}
          <div style={{ flex: '1.5', background: 'var(--color-background)', border: '1px solid var(--color-border)', borderRadius: '24px', padding: '40px', position: 'relative', overflow: 'hidden' }}>
            {/* Background Glow */}
            <div 
              style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '100%',
                height: '100%',
                background: `radial-gradient(circle, ${activeRole.color}15 0%, transparent 70%)`,
                transition: 'background 0.5s ease',
                pointerEvents: 'none',
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', background: `${activeRole.color}15`, color: activeRole.color, borderRadius: '9999px', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '24px' }}>
                <activeRole.icon size={16} />
                {activeRole.id} View
              </div>

              <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>
                {activeRole.title}
              </h3>
              
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
                {activeRole.desc}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {activeRole.features.map((feature, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: `${activeRole.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: activeRole.color }} />
                    </div>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-primary)' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

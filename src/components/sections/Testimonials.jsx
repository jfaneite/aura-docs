'use client';

import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Aura completely eliminated the morning traffic jams at our main gate. Guards process entries in less than a second now. It's been a game changer for our community.",
    author: "Carlos Mendoza",
    role: "Head of Security, Vista Hermosa",
  },
  {
    quote: "I love being able to send a temporary QR code to my delivery drivers or guests before they even arrive. No more annoying phone calls from the gate asking for permission.",
    author: "Elena Rodriguez",
    role: "Resident",
  },
  {
    quote: "The admin dashboard is incredible. I can see exactly who is in the building at any given time, and the automated reports save me hours of manual paperwork every week.",
    author: "Miguel Santos",
    role: "Property Manager, Torre Central",
  },
];

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container-tight" style={{ padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '16px',
            }}
          >
            Trusted by <span className="gradient-text-warm">communities.</span>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--color-text-secondary)', maxWidth: '540px', margin: '0 auto' }}>
            Don't just take our word for it. Here's what residents, guards, and property managers have to say about Aura.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="card"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} fill="var(--color-accent)" color="var(--color-accent)" />
                ))}
              </div>
              <p style={{ fontSize: '15.5px', color: 'var(--color-text-primary)', lineHeight: 1.6, flex: 1, marginBottom: '24px', fontStyle: 'italic' }}>
                "{t.quote}"
              </p>
              <div>
                <div style={{ fontWeight: 600, fontSize: '15px' }}>{t.author}</div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

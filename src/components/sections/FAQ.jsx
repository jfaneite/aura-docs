'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: 'Do residents need to download an app?',
    answer: 'Yes, Aura provides a native app for iOS and Android where residents can generate QR codes, manage their guests, and view entry history. The app is incredibly lightweight and easy to use.',
  },
  {
    question: 'What happens if the internet goes down at the gate?',
    answer: 'Aura features a robust offline mode for security guards. They can continue scanning generated QR codes even without an internet connection. Once the connection is restored, all offline logs automatically sync to the cloud.',
  },
  {
    question: 'Can we integrate Aura with our existing boom barriers?',
    answer: 'Absolutely. Aura can integrate with most modern gate hardware and boom barriers via our local relay module, allowing the gate to open automatically upon a successful QR scan.',
  },
  {
    question: 'How long does a temporary QR code last?',
    answer: 'Residents can configure the validity of a QR code. It can be set for a specific date and time window, a single use, or even on a recurring schedule for services like dog walkers or cleaners.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" id="faq" style={{ background: 'var(--color-surface)' }}>
      <div className="container-tight" style={{ padding: '0 1.5rem', maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '16px',
            }}
          >
            Frequently asked <span className="gradient-text-warm">questions.</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                style={{ 
                  background: 'var(--color-background)', 
                  border: `1px solid ${isOpen ? 'rgba(14, 165, 233, 0.3)' : 'var(--color-border)'}`, 
                  borderRadius: '16px', 
                  padding: '24px', 
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: isOpen ? '0 4px 20px rgba(0,0,0,0.2)' : 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: isOpen ? 'var(--color-accent)' : 'var(--color-text-primary)', transition: 'color 0.3s ease' }}>
                    {faq.question}
                  </h3>
                  <div style={{ color: isOpen ? 'var(--color-accent)' : 'var(--color-text-muted)' }}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </div>
                
                <div 
                  style={{ 
                    height: isOpen ? 'auto' : 0, 
                    overflow: 'hidden',
                    opacity: isOpen ? 1 : 0,
                    transition: 'all 0.3s ease',
                    marginTop: isOpen ? '16px' : 0,
                  }}
                >
                  <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

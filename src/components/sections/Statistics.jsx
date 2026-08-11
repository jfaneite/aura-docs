'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: '1.2M+', label: 'Entries logged', suffix: '' },
  { value: '99.9', label: 'Uptime', suffix: '%' },
  { value: '0.8', label: 'Scan speed', suffix: 's' },
  { value: '500+', label: 'Residences', suffix: '' },
];

function Counter({ target, duration, suffix = '' }) {
  const [count, setCount] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let startTimestamp = null;
          const isNumeric = !isNaN(parseFloat(target)) && isFinite(target.replace('M', '').replace('+', ''));
          const numericTarget = isNumeric ? parseFloat(target.replace('M', '').replace('+', '')) : 0;
          const isFloat = target.includes('.');

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Easing
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            
            if (isNumeric) {
              const current = numericTarget * easeOutQuart;
              setCount(isFloat ? current.toFixed(1) : Math.floor(current).toString());
            }

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={elementRef}>
      {hasAnimated ? count : '0'}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  return (
    <section className="section" style={{ padding: '4rem 1.5rem', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', background: 'linear-gradient(180deg, var(--color-background) 0%, rgba(14, 165, 233, 0.02) 100%)' }}>
      <div className="container-tight">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            textAlign: 'center'
          }}
        >
          {STATS.map((stat, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div 
                style={{ 
                  fontSize: 'clamp(36px, 5vw, 56px)', 
                  fontWeight: 900, 
                  fontFamily: 'var(--font-display)',
                  color: 'var(--color-text-primary)',
                  letterSpacing: '-0.02em',
                  textShadow: '0 4px 20px rgba(14, 165, 233, 0.2)'
                }}
              >
                <Counter target={stat.value} duration={2000} suffix={stat.suffix} />
              </div>
              <div style={{ fontSize: '15px', color: 'var(--color-text-secondary)', fontWeight: 500, letterSpacing: '0.02em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

const LOGOS = [
  'Torres del Parque',
  'Residencias El Prado',
  'Conjunto Laureles',
  'Portal de Castilla',
  'Villa Campestre',
  'Parques de Medellín',
  'Reserva del Bosque',
  'Ciudad Jardín',
];

export default function LogoBar() {
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <section
      style={{
        padding: '48px 0',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
        overflow: 'hidden',
      }}
    >
      <div
        className="container-tight"
        style={{ padding: '0 1.5rem', textAlign: 'center', marginBottom: '32px' }}
      >
        <p
          style={{
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
          }}
        >
          Trusted by residential communities across Latin America
        </p>
      </div>

      {/* Marquee track */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Left fade */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '120px',
            background: 'linear-gradient(90deg, var(--color-surface), transparent)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
        {/* Right fade */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '120px',
            background: 'linear-gradient(-90deg, var(--color-surface), transparent)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        <div
          className="animate-marquee"
          style={{
            display: 'flex',
            gap: '0',
            width: 'max-content',
          }}
        >
          {doubled.map((name, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '0 40px',
                whiteSpace: 'nowrap',
              }}
            >
              {/* Logo pill */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 20px',
                  background: 'var(--color-surface-2)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '10px',
                  transition: 'border-color 0.2s',
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0ea5e9, #0891b2)',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--color-text-secondary)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

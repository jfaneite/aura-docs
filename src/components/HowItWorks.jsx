const steps = [
  {
    number: '01',
    icon: '👤',
    title: 'Landlord Creates a QR Pass',
    desc: 'Add visitor name, photo, ID, phone, purpose, and expiry. Aura generates a unique encrypted QR code in seconds.',
  },
  {
    number: '02',
    icon: '📲',
    title: 'Visitor Receives the QR',
    desc: 'The QR is shared via WhatsApp, SMS, or email. No app required for visitors — they just present it at the gate.',
  },
  {
    number: '03',
    icon: '✅',
    title: 'Security Scans & Verifies',
    desc: 'The guard opens Aura, scans the QR, and instantly sees visitor details + access status. Entry logged automatically.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section bg-glow" id="how-it-works" aria-label="How Aura works">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">How It Works</p>
          <h2 className="display-lg">Three steps to <span className="text-gradient">frictionless security</span></h2>
          <p className="lead">
            No hardware. No complex setup. Aura works on any smartphone, on iOS and Android.
          </p>
        </div>

        <div className="how-it-works-steps" role="list">
          {steps.map((s, i) => (
            <div key={i} className="step-card" role="listitem">
              <div className="step-number" aria-hidden="true">{s.number}</div>
              <div className="step-icon" aria-hidden="true">{s.icon}</div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Extra callout */}
        <div style={{
          marginTop: '56px', padding: '28px 36px',
          borderRadius: 'var(--radius-lg)',
          background: 'rgba(59,130,246,0.06)',
          border: '1px solid rgba(59,130,246,0.2)',
          display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
          <div>
            <p style={{fontWeight:700, marginBottom:'6px'}}>🔐 Zero trust. Every time.</p>
            <p style={{fontSize:'0.9rem', color:'var(--color-text-muted)'}}>
              Each QR is single-use or time-limited. Expired codes are automatically rejected. No manual intervention required.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary" id="hiw-cta">Book a Live Demo →</a>
        </div>
      </div>
    </section>
  );
}

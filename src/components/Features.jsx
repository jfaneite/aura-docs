const features = [
  {
    icon: '📱',
    title: 'Instant QR Generation',
    desc: 'Create visitor passes with full metadata — name, photo, ID, vehicle info, purpose — in under 30 seconds.',
    color: '#3B82F6',
  },
  {
    icon: '⚡',
    title: 'Real-Time QR Scanning',
    desc: 'Security agents scan any QR code in under 1 second. Works offline. Syncs automatically when reconnected.',
    color: '#06B6D4',
  },
  {
    icon: '🔐',
    title: 'Role-Based Access Control',
    desc: 'SuperUser → Admin → Landlord → Security Agent. Each role sees only what they need. Nothing more.',
    color: '#10B981',
  },
  {
    icon: '📊',
    title: 'Complete Entry Audit Log',
    desc: 'Every scan creates a timestamped log entry with guard name, visitor info, and access decision. Tamper-proof.',
    color: '#8B5CF6',
  },
  {
    icon: '🏢',
    title: 'Multi-Residence Support',
    desc: 'One platform for dozens of residential communities. Full data isolation between residences.',
    color: '#F59E0B',
  },
  {
    icon: '🔔',
    title: 'Instant Push Notifications',
    desc: 'Landlords and admins get real-time alerts when a visitor arrives or when a QR is rejected.',
    color: '#EF4444',
  },
];

export default function Features() {
  return (
    <section className="section features-section" id="features" aria-label="App features">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Features</p>
          <h2 className="display-lg">Everything you need to <span className="text-gradient">control access</span></h2>
          <p className="lead">
            Aura is purpose-built for residential communities. No bloat. No complexity. Just the features that matter.
          </p>
        </div>

        <div className="features-grid" role="list">
          {features.map((f, i) => (
            <div key={i} className="feature-card glass-hover" role="listitem">
              <div className="feature-icon" style={{background:`${f.color}18`, borderColor:`${f.color}30`}}>
                {f.icon}
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

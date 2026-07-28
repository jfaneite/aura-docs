import Image from 'next/image';

const badges = [
  '🔒 AES-256 Encryption',
  '🛡️ TLS 1.2+ in Transit',
  '✅ GDPR Compliant',
  '✅ CCPA Compliant',
  '🔐 Role-Based Access',
  '📜 Audit Logs',
  '☁️ Firebase Powered',
  '🗑️ Right to Delete',
];

const features = [
  {
    icon: '🔑',
    title: 'Firebase Authentication',
    desc: 'Passwords are hashed with PBKDF2-SHA256. Never stored in plain text. Google and Apple Sign-In support via OAuth 2.0.',
  },
  {
    icon: '🏛️',
    title: 'Multi-Tenant Data Isolation',
    desc: "Each residence is a completely isolated tenant. Firestore Security Rules enforce that no user can ever access another residence's data — even if they try.",
  },
  {
    icon: '🔏',
    title: 'AES-256 Encryption at Rest',
    desc: 'All data stored in Firebase is encrypted at rest using AES-256. The same encryption standard used by banks.',
  },
  {
    icon: '📡',
    title: 'TLS 1.2+ Encryption in Transit',
    desc: "All network requests use HTTPS with TLS 1.2 or higher. Man-in-the-middle attacks are impossible.",
  },
  {
    icon: '🔍',
    title: 'Server-Side Security Rules',
    desc: 'Firestore Security Rules run server-side on every request. Even if someone decompiles the app, server rules block unauthorized access.',
  },
  {
    icon: '🗑️',
    title: 'Full Account Deletion',
    desc: 'Users can permanently delete their account and all associated data from within the app. GDPR and Apple App Store compliant.',
  },
];

export default function SecuritySection() {
  return (
    <section className="section bg-glow" id="security" aria-label="Security and compliance">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Security & Compliance</p>
          <h2 className="display-lg">Enterprise-grade security. <span className="text-gradient">Community-friendly price.</span></h2>
          <p className="lead">
            We built Aura with defense-in-depth. Multiple independent security layers protect your data — even if one layer fails.
          </p>
        </div>

        <div className="security-grid">
          <div className="security-visual">
            <Image
              src="/images/security.png"
              alt="Security trust diagram showing AES-256, TLS, GDPR, CCPA, and RBAC layers"
              width={560}
              height={560}
            />
          </div>

          <div>
            <div className="security-badges" style={{marginBottom:'32px'}} role="list" aria-label="Security certifications">
              {badges.map((b, i) => (
                <div key={i} className="security-badge" role="listitem">
                  <span className="icon">{b.split(' ')[0]}</span>
                  {b.split(' ').slice(1).join(' ')}
                </div>
              ))}
            </div>

            <div className="security-features-list">
              {features.map((f, i) => (
                <div key={i} className="security-feature-item">
                  <div className="security-feature-icon" aria-hidden="true">{f.icon}</div>
                  <div className="security-feature-text">
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust callout */}
        <div style={{
          marginTop:'56px', padding:'32px 40px',
          borderRadius:'var(--radius-lg)',
          background:'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(6,182,212,0.06))',
          border:'1px solid rgba(16,185,129,0.2)',
          display:'flex', alignItems:'center', gap:'24px', flexWrap:'wrap',
        }}>
          <div style={{flex:1}}>
            <h3 style={{fontWeight:700, marginBottom:'8px'}}>🏆 Verified Security Architecture</h3>
            <p style={{fontSize:'0.9rem', color:'var(--color-text-muted)', lineHeight:1.7}}>
              "Your data is protected by the same Firebase infrastructure used by companies like Twitter, Duolingo, and The New York Times.
              We add an additional custom security layer — Firestore Rules — that provides role-based multi-tenant isolation."
            </p>
          </div>
          <a href="/privacy-policy" className="btn btn-outline" id="security-privacy-link">Read Privacy Policy →</a>
        </div>
      </div>
    </section>
  );
}

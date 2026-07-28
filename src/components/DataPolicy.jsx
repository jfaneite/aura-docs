const dataCards = [
  {
    icon: '📦',
    title: 'What We Collect',
    text: 'We collect only what is essential for entry management.',
    list: [
      'Name, email, phone number (account setup)',
      'Visitor metadata in QR codes (name, ID, purpose)',
      'Entry logs with timestamps and guard info',
      'Device info for security purposes',
    ],
  },
  {
    icon: '🔒',
    title: 'How It\'s Stored',
    text: 'All data is stored in Firebase (Google Cloud) with full encryption.',
    list: [
      'AES-256 encryption at rest',
      'TLS 1.2+ encryption in transit',
      'Firestore multi-tenant isolation',
      'Data may be on Google servers globally',
    ],
  },
  {
    icon: '🚫',
    title: 'What We Never Do',
    text: 'Your privacy is not a product we sell.',
    list: [
      'We never sell your personal data',
      'We never share data with third parties for ads',
      'We never store passwords in plain text',
      'We never access your camera outside the scanner',
    ],
  },
  {
    icon: '⏳',
    title: 'Data Retention',
    text: 'We keep your data as long as your account is active.',
    list: [
      'Active accounts: data retained while in use',
      'Deleted accounts: fully removed within 30 days',
      'QR entry logs: retained up to 1 year for audit',
      'Legal hold: only if required by law',
    ],
  },
  {
    icon: '🛂',
    title: 'Your Rights',
    text: 'You have full control over your personal data.',
    list: [
      'Right to access: request a copy of your data',
      'Right to correct: update profile info anytime',
      'Right to delete: remove your account in-app',
      'Contact: support@auradigitalapp.com',
    ],
  },
  {
    icon: '🌍',
    title: 'GDPR & CCPA',
    text: 'We comply with major international privacy regulations.',
    list: [
      'EU GDPR: full compliance with all 8 rights',
      'CCPA: California residents fully protected',
      'No data tracking or cross-app profiling',
      'Consent required at account creation',
    ],
  },
];

export default function DataPolicy() {
  return (
    <section className="section data-policy-section" id="data-policy" aria-label="Data policy">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Data Policy</p>
          <h2 className="display-lg">Your data. <span className="text-gradient">Your control.</span></h2>
          <p className="lead">
            We believe transparency is the foundation of trust. Here's exactly what we collect, why, and how we protect it.
          </p>
        </div>

        <div className="data-policy-grid">
          {dataCards.map((card, i) => (
            <div key={i} className="data-card glass-hover">
              <div className="data-card__icon">{card.icon}</div>
              <h3 className="data-card__title">{card.title}</h3>
              <p className="data-card__text">{card.text}</p>
              <ul className="data-card__list" aria-label={`${card.title} details`}>
                {card.list.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="data-policy-cta">
          <div>
            <p style={{fontWeight:700, marginBottom:'4px'}}>📄 Full Privacy Policy Available</p>
            <p>
              Read our complete privacy policy for all legal details, including third-party services (Firebase/Google),
              international data transfers, and how to exercise your rights.
            </p>
          </div>
          <a href="/privacy-policy" className="btn btn-outline" id="data-privacy-full">
            Read Full Policy →
          </a>
        </div>
      </div>
    </section>
  );
}

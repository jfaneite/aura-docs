export const metadata = {
  title: 'Privacy Policy — Aura App by Aura Digital',
  description: 'Full privacy policy for Aura App, the QR entry management app by Aura Digital. Covers data collection, storage, your rights (GDPR, CCPA), and how to contact us.',
};

export default function PrivacyPolicy() {
  return (
    <main style={{paddingTop:'100px', paddingBottom:'80px', minHeight:'100vh'}}>
      <div className="container" style={{maxWidth:'800px'}}>
        <article style={{
          background:'var(--color-surface)',
          border:'1px solid var(--color-border)',
          borderRadius:'var(--radius-xl)',
          padding:'48px',
        }}>
          <a href="/" style={{
            display:'inline-flex', alignItems:'center', gap:'8px',
            color:'var(--color-blue-light)', fontSize:'0.88rem',
            marginBottom:'32px', fontWeight:500,
          }}>
            ← Back to Aura
          </a>

          <h1 style={{
            fontFamily:'var(--font-display)', fontSize:'2.2rem', fontWeight:800,
            lineHeight:1.15, marginBottom:'8px',
          }}>Privacy Policy for Aura App</h1>
          <p style={{color:'var(--color-text-muted)', fontSize:'0.88rem', marginBottom:'8px'}}>
            Developed by: <strong style={{color:'var(--color-text)'}}>Aura Digital</strong> · App: <strong style={{color:'var(--color-text)'}}>Aura App</strong>
          </p>
          <p style={{color:'var(--color-text-muted)', fontSize:'0.88rem', marginBottom:'8px'}}>
            Google Play: <code style={{fontSize:'0.82rem', background:'var(--color-border)', padding:'2px 6px', borderRadius:'4px'}}>com.qrsecurity.qr_security_entry</code>
            {' · '}
            Apple App Store: <code style={{fontSize:'0.82rem', background:'var(--color-border)', padding:'2px 6px', borderRadius:'4px'}}>com.qrsecurity.qrSecurityEntry</code>
          </p>
          <p style={{color:'var(--color-text-muted)', fontSize:'0.88rem', marginBottom:'40px'}}>
            Last Updated: September 2026 · Version 1.3
          </p>

          <div style={{display:'flex', flexDirection:'column', gap:'32px'}} className="privacy-content">

            <PolicySection title="Introduction">
              <p>
                This Privacy Policy describes how <strong>Aura Digital</strong> ("we", "us", or "our"), the developer of the
                {' '}<strong>Aura App</strong> mobile application, collects, uses, and shares your personal information when you
                use our App on Android or iOS.
              </p>
              <p style={{marginTop:'10px'}}>
                <strong>Developer / Legal Entity:</strong> Aura Digital<br/>
                <strong>App Name:</strong> Aura App<br/>
                <strong>Google Play Package ID:</strong>{' '}
                <code style={{fontSize:'0.82rem', background:'var(--color-border)', padding:'1px 5px', borderRadius:'3px'}}>com.qrsecurity.qr_security_entry</code><br/>
                <strong>Apple App Store Bundle ID:</strong>{' '}
                <code style={{fontSize:'0.82rem', background:'var(--color-border)', padding:'1px 5px', borderRadius:'3px'}}>com.qrsecurity.qrSecurityEntry</code><br/>
                <strong>Website:</strong> <a href="https://www.auradigitalapp.com" style={{color:'var(--color-blue-light)'}}>www.auradigitalapp.com</a><br/>
                <strong>Contact:</strong> <a href="mailto:support@auradigitalapp.com" style={{color:'var(--color-blue-light)'}}>support@auradigitalapp.com</a>
              </p>
            </PolicySection>

            <PolicySection title="Information We Collect">
              <h4>Information You Provide</h4>
              <ul>
                <li><strong>Account Information:</strong> Email address, full name, phone number</li>
                <li><strong>Profile Information:</strong> Building name, unit number, role within your residence</li>
                <li><strong>Visitor Information:</strong> When creating QR codes — visitor name, email, phone, ID number, vehicle info</li>
                <li><strong>QR Code Data:</strong> Information embedded in QR codes for entry management</li>
              </ul>
              <h4 style={{marginTop:'16px'}}>Information Collected Automatically</h4>
              <ul>
                <li><strong>Usage Data:</strong> Features you use, time spent</li>
                <li><strong>Device Information:</strong> Device type, OS version, unique identifiers</li>
                <li><strong>Log Data:</strong> IP address, access times, app errors</li>
                <li><strong>Camera Data:</strong> When scanning QR codes — temporary, images not stored</li>
              </ul>
            </PolicySection>

            <PolicySection title="How We Use Your Information">
              <ul>
                <li>Service Provision — maintain our entry management services</li>
                <li>Authentication — verify identity and secure accounts</li>
                <li>QR Code Generation — create and manage visitor access passes</li>
                <li>Entry Validation — scan and validate QR codes for security</li>
                <li>Communication — service-related notifications and updates</li>
                <li>Security — detect and prevent fraud and security incidents</li>
                <li>Legal Compliance — comply with applicable laws</li>
              </ul>
            </PolicySection>

            <PolicySection title="Data Storage and Security">
              <p>We use Firebase (Google Cloud Platform) to store and process your data:</p>
              <ul>
                <li><strong>Firestore Database:</strong> User profiles, QR codes, entry logs</li>
                <li><strong>Firebase Authentication:</strong> Secure authentication management</li>
                <li><strong>AES-256 encryption at rest</strong> and <strong>TLS/SSL in transit</strong></li>
                <li>Firebase servers may be in various regions. Firebase complies with GDPR.</li>
              </ul>
            </PolicySection>

            <PolicySection title="Third-Party Services">
              <h4>Firebase (Google)</h4>
              <p>Purpose: Authentication, database, analytics. Data shared: Email, name, usage data. <a href="https://policies.google.com/privacy" style={{color:'var(--color-blue-light)'}}>Google Privacy Policy</a></p>
              <h4 style={{marginTop:'12px'}}>Google Sign-In</h4>
              <p>Purpose: Authentication. Data shared: Email, name, profile picture.</p>
              <h4 style={{marginTop:'12px'}}>Apple Sign-In</h4>
              <p>Purpose: Authentication. Data shared: Email (or Apple relay), name.</p>
            </PolicySection>

            <PolicySection title="Data Sharing and Disclosure">
              <p><strong>We do NOT sell your personal information.</strong> We may share data only:</p>
              <ul>
                <li>Within your residence — based on role-based permissions</li>
                <li>With Firebase/Google — only for infrastructure purposes</li>
                <li>Legal requirements — court orders, government requests</li>
              </ul>
            </PolicySection>

            <PolicySection title="Your Rights and Choices">
              <ul>
                <li><strong>Access and Update:</strong> View and update profile in app settings</li>
                <li><strong>Data Deletion:</strong> Delete your account and all data in-app. Contact support@auradigitalapp.com</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from promotional emails anytime</li>
              </ul>
            </PolicySection>

            <PolicySection title="Data Retention">
              <ul>
                <li>Active accounts: data retained while account is active</li>
                <li>Deleted accounts: fully removed within 30 days</li>
                <li>QR/entry logs: retained up to 1 year for audit purposes</li>
                <li>Legal hold: retained longer only if required by law</li>
              </ul>
            </PolicySection>

            <PolicySection title="GDPR Compliance (EU Users)" id="gdpr">
              <p>If you are in the EEA, you have rights under GDPR:</p>
              <ul>
                <li>Right to Access — request copies of your data</li>
                <li>Right to Rectification — request correction</li>
                <li>Right to Erasure — request deletion</li>
                <li>Right to Restrict Processing</li>
                <li>Right to Data Portability</li>
                <li>Right to Object</li>
                <li>Right to Withdraw Consent</li>
              </ul>
              <p style={{marginTop:'12px'}}>To exercise these rights: <a href="mailto:support@auradigitalapp.com" style={{color:'var(--color-blue-light)'}}>support@auradigitalapp.com</a></p>
            </PolicySection>

            <PolicySection title="California Privacy Rights (CCPA)" id="ccpa">
              <ul>
                <li>Right to Know what personal information we collect</li>
                <li>Right to Delete — request deletion of your data</li>
                <li>Right to Opt-Out — we do not sell personal information</li>
                <li>Right to Non-Discrimination</li>
              </ul>
            </PolicySection>

            <PolicySection title="Children's Privacy">
              <p>Aura is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us data, contact us at <a href="mailto:support@auradigitalapp.com" style={{color:'var(--color-blue-light)'}}>support@auradigitalapp.com</a> and we will delete it immediately.</p>
            </PolicySection>

            <PolicySection title="Contact Us">
              <p><strong>Developer:</strong> Aura Digital</p>
              <p><strong>App:</strong> Aura App</p>
              <p>
                <strong>Google Play:</strong>{' '}
                <code style={{fontSize:'0.82rem', background:'var(--color-border)', padding:'1px 5px', borderRadius:'3px'}}>com.qrsecurity.qr_security_entry</code>
              </p>
              <p>
                <strong>Apple App Store:</strong>{' '}
                <code style={{fontSize:'0.82rem', background:'var(--color-border)', padding:'1px 5px', borderRadius:'3px'}}>com.qrsecurity.qrSecurityEntry</code>
              </p>
              <p><strong>Email:</strong> <a href="mailto:support@auradigitalapp.com" style={{color:'var(--color-blue-light)'}}>support@auradigitalapp.com</a></p>
              <p><strong>Website:</strong> <a href="https://www.auradigitalapp.com" style={{color:'var(--color-blue-light)'}}>www.auradigitalapp.com</a></p>
              <p><strong>Address:</strong> Caracas, Venezuela</p>
            </PolicySection>
          </div>
        </article>
      </div>

      <style>{`
        .privacy-content p, .privacy-content li { font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.75; margin-bottom: 8px; }
        .privacy-content h4 { font-weight: 700; color: var(--color-text); font-size: 0.95rem; }
        .privacy-content ul { padding-left: 0; display: flex; flex-direction: column; gap: 6px; }
        .privacy-content ul li { padding-left: 16px; position: relative; }
        .privacy-content ul li::before { content: '•'; position: absolute; left: 0; color: var(--color-blue-light); }
        .privacy-content strong { color: var(--color-text); }
      `}</style>
    </main>
  );
}

function PolicySection({ title, children, id }) {
  return (
    <section id={id}>
      <h2 style={{
        fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.15rem',
        marginBottom:'14px', paddingBottom:'10px',
        borderBottom:'1px solid var(--color-border)',
        color:'var(--color-text)',
      }}>{title}</h2>
      {children}
    </section>
  );
}

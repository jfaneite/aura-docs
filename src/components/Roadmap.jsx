import Image from 'next/image';

const roadmapItems = [
  { status: 'done',   label: '✅ Shipped',    title: 'QR Code Generation',         desc: 'Landlords create passes with visitor metadata in seconds.' },
  { status: 'done',   label: '✅ Shipped',    title: 'Real-Time QR Scanner',       desc: 'Instant scan and verify with offline support.' },
  { status: 'done',   label: '✅ Shipped',    title: 'Role-Based Access (RBAC)',   desc: 'SuperUser → Admin → Landlord → Security Agent.' },
  { status: 'done',   label: '✅ Shipped',    title: 'Multi-Residence Support',    desc: 'Full isolation between residential communities.' },
  { status: 'done',   label: '✅ Shipped',    title: 'Entry Audit Logs',          desc: 'Every scan logged with timestamp and guard identity.' },
  { status: 'done',   label: '✅ Shipped',    title: 'Push Notifications',        desc: 'Real-time alerts on entry, exit, and QR rejections.' },
  { status: 'soon',   label: '🔜 Coming Soon','title': 'Analytics Dashboard',     desc: 'Visual reports on entries, peak hours, and patterns.' },
  { status: 'soon',   label: '🔜 Coming Soon','title': 'Visitor Pre-Registration', desc: 'Visitors self-register before arrival via a link.' },
  { status: 'soon',   label: '🔜 Coming Soon','title': 'Biometric Backup',        desc: 'Face ID / fingerprint as secondary verification.' },
  { status: 'future', label: '🚀 Future',     title: 'Open API Access',           desc: 'Integrate Aura with your building management system.' },
  { status: 'future', label: '🚀 Future',     title: 'Smart Lock Integration',    desc: 'Auto-unlock compatible smart locks on QR approval.' },
  { status: 'future', label: '🚀 Future',     title: 'Vehicle Access Control',    desc: 'License plate recognition for parking management.' },
];

export default function Roadmap() {
  return (
    <section className="section" id="roadmap" aria-label="Product roadmap">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Product Roadmap</p>
          <h2 className="display-lg">Built today. <span className="text-gradient">Ready for tomorrow.</span></h2>
          <p className="lead">
            Aura is actively developed. Here's what we've shipped, what's coming next, and our long-term vision for smart building security.
          </p>
        </div>

        <div className="roadmap-image">
          <Image
            src="/images/roadmap.png"
            alt="Aura product roadmap timeline from mobile QR access to smart building integration"
            width={1200}
            height={500}
            style={{objectFit:'cover', height:'auto', borderRadius:'var(--radius-xl)'}}
          />
        </div>

        <div className="roadmap-timeline" role="list">
          {roadmapItems.map((item, i) => (
            <div key={i} className={`roadmap-item roadmap-item--${item.status}`} role="listitem">
              <p className={`roadmap-label roadmap-label--${item.status}`}>{item.label}</p>
              <h3 className="roadmap-item__title">{item.title}</h3>
              <p className="roadmap-item__desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop:'48px', textAlign:'center',
          padding:'32px', borderRadius:'var(--radius-lg)',
          background:'rgba(139,92,246,0.06)',
          border:'1px solid rgba(139,92,246,0.2)',
        }}>
          <p style={{fontWeight:700, marginBottom:'8px', fontSize:'1.1rem'}}>💡 Have a feature request?</p>
          <p style={{fontSize:'0.9rem', color:'var(--color-text-muted)', marginBottom:'20px'}}>
            We build based on what our community needs. Share your ideas and vote on upcoming features.
          </p>
          <a href="mailto:support@auradigitalapp.com" className="btn btn-outline" id="roadmap-feature-request">
            Submit a Feature Request →
          </a>
        </div>
      </div>
    </section>
  );
}

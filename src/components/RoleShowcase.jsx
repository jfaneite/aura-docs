'use client';
import { useState } from 'react';

const roles = [
  {
    id: 'admin',
    label: '🛡️ Admin',
    badge: { text: 'Residence Admin', cls: 'badge-blue' },
    title: 'Full Residence Control',
    description: 'Admins manage every aspect of their residential community — users, settings, and real-time entry data — from a single dashboard.',
    abilities: [
      { icon: '👥', title: 'Manage all users', desc: 'Create landlords and security agents, set permissions, deactivate accounts instantly.' },
      { icon: '📊', title: 'View all entry logs', desc: 'See every QR scan with timestamp, guard name, and visitor info.' },
      { icon: '📧', title: 'Email reports', desc: 'Receive daily or weekly entry summaries directly to your inbox.' },
    ],
    mock: {
      name: 'Carlos Mendez',
      role: 'Residence Admin',
      items: [
        { icon: '👥', text: '12 Active Users', status: 'Active', cls: 'status-active' },
        { icon: '📋', text: '347 Entries this month', status: '', cls: '' },
        { icon: '🔔', text: '2 Pending requests', status: 'Pending', cls: 'status-pending' },
        { icon: '🔐', text: 'Security rules updated', status: 'Active', cls: 'status-active' },
      ]
    }
  },
  {
    id: 'landlord',
    label: '🏠 Landlord',
    badge: { text: 'Landlord', cls: 'badge-purple' },
    title: 'Create QR Visitor Passes',
    description: 'Landlords create smart QR passes for any visitor. Add all the details, set an expiry, and share it. Done.',
    abilities: [
      { icon: '📲', title: 'Generate QR codes', desc: 'Fill in visitor name, photo, ID, phone, purpose, and expiry date.' },
      { icon: '📤', title: 'Share instantly', desc: 'Send the QR via WhatsApp, SMS, or email — visitors need no app.' },
      { icon: '📜', title: 'View your QR history', desc: 'See all passes you created and their scan status.' },
    ],
    mock: {
      name: 'Ana Rodriguez',
      role: 'Landlord · Unit 4B',
      items: [
        { icon: '✅', text: 'Juan García — Entered 10:32am', status: 'Scanned', cls: 'status-active' },
        { icon: '⏳', text: 'Maria López — QR Pending', status: 'Pending', cls: 'status-pending' },
        { icon: '✅', text: 'Delivery — DHL — Entered 2pm', status: 'Scanned', cls: 'status-active' },
        { icon: '➕', text: 'Create new pass', status: '', cls: '' },
      ]
    }
  },
  {
    id: 'guard',
    label: '🔍 Security Agent',
    badge: { text: 'Security Agent', cls: 'badge-green' },
    title: 'Scan & Verify in Seconds',
    description: 'Security agents have one job: scan the QR and let the right people in. Aura makes it instant, reliable, and logged.',
    abilities: [
      { icon: '📷', title: 'One-tap QR scanner', desc: 'Open the app, tap scan. The camera activates instantly.' },
      { icon: '✅', title: 'Instant pass/fail display', desc: 'Green screen = let them in. Red = deny. No guesswork.' },
      { icon: '📋', title: 'Visitor data on screen', desc: 'Name, photo, and reason for visit displayed immediately.' },
    ],
    mock: {
      name: 'Ricardo Torres',
      role: 'Security Agent · Gate 1',
      items: [
        { icon: '📷', text: 'Scanner ready...', status: 'Scanning', cls: 'status-scanning' },
        { icon: '✅', text: 'Last scan: APPROVED', status: 'Active', cls: 'status-active' },
        { icon: '📋', text: '23 scans today', status: '', cls: '' },
        { icon: '🔔', text: 'Alert: 1 rejected QR', status: 'Pending', cls: 'status-pending' },
      ]
    }
  },
  {
    id: 'ceo',
    label: '👑 SuperUser',
    badge: { text: 'CEO / SuperUser', cls: 'badge-gold' },
    title: 'Global System Oversight',
    description: 'The SuperUser (CEO/Owner) sees everything across all residences. Create clients, assign admins, view system-wide analytics.',
    abilities: [
      { icon: '🏢', title: 'Create & manage residences', desc: 'Onboard new residential community clients in minutes.' },
      { icon: '📊', title: 'System-wide analytics', desc: 'Total entries, active users, QR usage across all properties.' },
      { icon: '⚙️', title: 'Platform configuration', desc: 'Set global security rules, billing, and compliance settings.' },
    ],
    mock: {
      name: 'Juan Faneite',
      role: 'CEO · All Residences',
      items: [
        { icon: '🏢', text: '14 Active Residences', status: 'Active', cls: 'status-active' },
        { icon: '👥', text: '287 Total Users', status: '', cls: '' },
        { icon: '📊', text: '50,420 Monthly Scans', status: '', cls: '' },
        { icon: '⚠️', text: 'Porto Alegre needs admin', status: 'Pending', cls: 'status-pending' },
      ]
    }
  },
];

export default function RoleShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const role = roles[activeIdx];

  return (
    <section className="section bg-glow" id="roles" aria-label="User role showcase">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">For Every Role</p>
          <h2 className="display-lg">Built for your <span className="text-gradient">entire team</span></h2>
          <p className="lead">Every member of your community has a tailored experience — exactly the tools they need, nothing they don't.</p>
        </div>

        <div className="role-tabs" role="tablist" aria-label="User roles">
          {roles.map((r, i) => (
            <button
              key={r.id}
              id={`tab-${r.id}`}
              className={`role-tab${activeIdx === i ? ' active' : ''}`}
              role="tab"
              aria-selected={activeIdx === i}
              aria-controls={`panel-${r.id}`}
              onClick={() => setActiveIdx(i)}
            >
              {r.label}
            </button>
          ))}
        </div>

        <div
          className="role-content"
          id={`panel-${role.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${role.id}`}
        >
          <div className="role-info animate-fade-in">
            <span className={`badge ${role.badge.cls} role-badge`}>{role.badge.text}</span>
            <h3 className="role-title">{role.title}</h3>
            <p className="role-description">{role.description}</p>
            <div className="role-abilities">
              {role.abilities.map((a, i) => (
                <div key={i} className="role-ability">
                  <span className="role-ability__icon">{a.icon}</span>
                  <p className="role-ability__text"><strong>{a.title}</strong> — {a.desc}</p>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn btn-primary" id={`role-cta-${role.id}`}>Get Demo for {role.label.split(' ').slice(1).join(' ')} →</a>
          </div>

          <div className="role-mock animate-fade-in">
            <div className="role-mock__header">
              <div className="role-mock__avatar">{role.mock.name[0]}</div>
              <div>
                <div className="role-mock__name">{role.mock.name}</div>
                <div className="role-mock__role-label">{role.mock.role}</div>
              </div>
              <span style={{marginLeft:'auto',fontSize:'0.7rem',color:'var(--color-emerald)'}}>● Online</span>
            </div>
            <div className="role-mock__items">
              {role.mock.items.map((item, i) => (
                <div key={i} className="role-mock__item">
                  <span className="role-mock__item-icon">{item.icon}</span>
                  <span>{item.text}</span>
                  {item.status && (
                    <span className={`role-mock__item-status ${item.cls}`}>{item.status}</span>
                  )}
                </div>
              ))}
            </div>
            <div style={{
              marginTop:'16px', padding:'12px 16px',
              background:'rgba(59,130,246,0.08)', borderRadius:'8px',
              border:'1px solid rgba(59,130,246,0.2)',
              fontSize:'0.8rem', color:'var(--color-text-muted)'
            }}>
              🔒 All data scoped to your residence only
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

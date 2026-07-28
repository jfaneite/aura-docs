'use client';
import { useState } from 'react';

export default function ContactDemo() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', message: '', demo: false, role: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Formspree endpoint — replace with your actual Formspree form ID
    const res = await fetch('https://formspree.io/f/xwkgvqkp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) setSent(true);
  };

  return (
    <section className="section contact-section" id="contact" aria-label="Contact and demo request">
      <div className="container">
        <div className="contact-grid">

          {/* Left: info */}
          <div className="contact-info">
            <p className="eyebrow">Get in Touch</p>
            <h2 className="contact-info-title">
              Ready to secure<br /><span className="text-gradient">your community?</span>
            </h2>
            <p className="contact-info-desc">
              Book a free 30-minute live demo and we'll walk you through Aura with your team's real use case.
              No sales pressure. Just a working demo.
            </p>

            <div className="contact-methods">
              <a href="mailto:support@auradigitalapp.com" className="contact-method" id="contact-email">
                <div className="contact-method__icon">📧</div>
                <div>
                  <p className="contact-method__label">Email</p>
                  <p className="contact-method__value">support@auradigitalapp.com</p>
                </div>
              </a>
              <a href="https://wa.me/15550000000" target="_blank" rel="noopener noreferrer" className="contact-method" id="contact-whatsapp">
                <div className="contact-method__icon">💬</div>
                <div>
                  <p className="contact-method__label">WhatsApp</p>
                  <p className="contact-method__value">Chat with us directly</p>
                </div>
              </a>
              <div className="contact-method">
                <div className="contact-method__icon">📍</div>
                <div>
                  <p className="contact-method__label">Location</p>
                  <p className="contact-method__value">Caracas, Venezuela · Serving globally</p>
                </div>
              </div>
            </div>

            {/* Trust items */}
            <div style={{display:'flex', flexDirection:'column', gap:'10px', marginTop:'8px'}}>
              {[
                '✅ Free 30-min personalized demo',
                '✅ No credit card required to start',
                '✅ Response within 24 hours',
                '✅ Works for 1 or 100 residences',
              ].map((item, i) => (
                <p key={i} style={{fontSize:'0.88rem', color:'var(--color-text-muted)'}}>{item}</p>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="contact-form">
            {sent ? (
              <div style={{textAlign:'center', padding:'40px 0'}}>
                <div style={{fontSize:'3rem', marginBottom:'16px'}}>🎉</div>
                <h3 style={{fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.4rem', marginBottom:'12px'}}>
                  Message received!
                </h3>
                <p style={{color:'var(--color-text-muted)', lineHeight:1.7}}>
                  We'll reach out to <strong>{form.email}</strong> within 24 hours to schedule your demo.
                </p>
              </div>
            ) : (
              <>
                <h3 className="form-title">Request a Demo or Ask a Question</h3>
                <form onSubmit={handleSubmit} id="demo-request-form" noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="form-name">Full Name *</label>
                      <input
                        id="form-name" type="text" className="form-input" required
                        placeholder="Carlos Mendez"
                        value={form.name}
                        onChange={e => setForm(f => ({...f, name: e.target.value}))}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="form-company">Company / Residence</label>
                      <input
                        id="form-company" type="text" className="form-input"
                        placeholder="Porto Alegre Residences"
                        value={form.company}
                        onChange={e => setForm(f => ({...f, company: e.target.value}))}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="form-email">Email *</label>
                      <input
                        id="form-email" type="email" className="form-input" required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={e => setForm(f => ({...f, email: e.target.value}))}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="form-phone">Phone / WhatsApp</label>
                      <input
                        id="form-phone" type="tel" className="form-input"
                        placeholder="+58 412 000 0000"
                        value={form.phone}
                        onChange={e => setForm(f => ({...f, phone: e.target.value}))}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="form-role">Your Role</label>
                    <select
                      id="form-role" className="form-select"
                      value={form.role}
                      onChange={e => setForm(f => ({...f, role: e.target.value}))}
                    >
                      <option value="">Select a role...</option>
                      <option>Residence Administrator</option>
                      <option>Property Manager (Multi-residence)</option>
                      <option>CEO / Owner</option>
                      <option>Landlord / Tenant</option>
                      <option>Security Manager</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="form-message">Message or Questions</label>
                    <textarea
                      id="form-message" className="form-textarea"
                      placeholder="Tell us about your community size, current access challenges, or questions about Aura..."
                      value={form.message}
                      onChange={e => setForm(f => ({...f, message: e.target.value}))}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-checkbox">
                      <input
                        type="checkbox" id="form-demo-check"
                        checked={form.demo}
                        onChange={e => setForm(f => ({...f, demo: e.target.checked}))}
                      />
                      I'd like to book a free live demo (30 min, via Zoom or WhatsApp)
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary" id="form-submit" style={{width:'100%', justifyContent:'center', marginTop:'8px'}}>
                    Send Message →
                  </button>
                  <p style={{fontSize:'0.75rem', color:'var(--color-text-dim)', textAlign:'center', marginTop:'12px'}}>
                    By submitting you agree to our{' '}
                    <a href="/privacy-policy" style={{color:'var(--color-blue-light)'}}>Privacy Policy</a>.
                    No spam, ever.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

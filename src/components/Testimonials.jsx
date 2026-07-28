const testimonials = [
  {
    stars: '⭐⭐⭐⭐⭐',
    text: '"Before Aura, our security guard was using a handwritten notebook. Now every entry is tracked digitally, visitors get their QR in seconds, and I can see everything from my phone. It changed how we operate."',
    name: 'Carlos M.',
    role: 'Residence Administrator — Porto Alegre Residences',
    initial: 'C',
    color: '#3B82F6',
  },
  {
    stars: '⭐⭐⭐⭐⭐',
    text: '"I was skeptical at first, but my security team adapted within a day. The scanner is lightning fast and when there\'s an issue with a QR, the guard knows immediately. No more awkward calls to tenants."',
    name: 'Luisa V.',
    role: 'Property Manager — Vistamar Residences',
    initial: 'L',
    color: '#10B981',
  },
  {
    stars: '⭐⭐⭐⭐⭐',
    text: '"The multi-residence feature is a game changer. I manage 6 buildings and each one is completely separate in Aura. My admins only see their own community. This is exactly what we needed."',
    name: 'Roberto K.',
    role: 'CEO — Grupo Residencial Caribe',
    initial: 'R',
    color: '#8B5CF6',
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-glow" id="testimonials" aria-label="Customer testimonials">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Testimonials</p>
          <h2 className="display-lg">Trusted by <span className="text-gradient">community leaders</span></h2>
          <p className="lead">Real feedback from the admins, managers, and security teams using Aura every day.</p>
        </div>

        <div className="testimonials-grid" role="list">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card" role="listitem">
              <div className="testimonial-stars" aria-label="5 star rating">{t.stars}</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{background:t.color}} aria-hidden="true">
                  {t.initial}
                </div>
                <div>
                  <p className="testimonial-name">{t.name}</p>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA after testimonials */}
        <div style={{textAlign:'center', marginTop:'56px'}}>
          <p style={{color:'var(--color-text-muted)', marginBottom:'20px', fontSize:'0.95rem'}}>
            Join 100+ residential communities already securing their access with Aura
          </p>
          <div style={{display:'flex', gap:'14px', justifyContent:'center', flexWrap:'wrap'}}>
            <a href="#contact" className="btn btn-primary btn-lg" id="testimonials-cta-demo">
              🎯 Book a Free Demo
            </a>
            <a href="#download" className="btn btn-outline btn-lg" id="testimonials-cta-download">
              📲 Download the App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

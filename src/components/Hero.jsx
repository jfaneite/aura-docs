import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero bg-grid" id="home" aria-label="Hero section">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />

      <div className="container" style={{width:'100%'}}>
        {/* Main hero grid */}
        <div className="hero__content animate-fade-up">

          {/* Text side */}
          <div className="hero__text">
            <div className="badge badge-blue">
              <span>🛡️</span> Trusted by 100+ residences
            </div>

            <h1 className="hero__title">
              Secure Entry.<br />
              <em>Powered by QR.</em><br />
              Built for Communities.
            </h1>

            <p className="hero__subtitle">
              Aura replaces clipboards, keys, and paper logs with smart QR-based access control.
              Landlords generate passes, security agents scan in seconds, admins see everything — all from their phone.
            </p>

            <div className="hero__cta">
              <a href="#contact" className="btn btn-primary btn-lg" id="hero-get-demo">
                🎯 Get a Free Demo
              </a>
              <a href="#features" className="btn btn-outline btn-lg" id="hero-see-features">
                See How It Works
              </a>
            </div>

            {/* App store badges */}
            <div id="download" className="hero__stores">
              <a href="#" className="store-badge" id="hero-apple-store" aria-label="Download on App Store">
                <span className="store-icon">🍎</span>
                <div>
                  <div style={{fontSize:'0.65rem',opacity:0.7}}>Download on the</div>
                  <div>App Store</div>
                </div>
              </a>
              <a href="#" className="store-badge" id="hero-google-play" aria-label="Get it on Google Play">
                <span className="store-icon">▶</span>
                <div>
                  <div style={{fontSize:'0.65rem',opacity:0.7}}>Get it on</div>
                  <div>Google Play</div>
                </div>
              </a>
            </div>

            {/* Social proof */}
            <div className="hero__trust">
              <div className="hero__trust-avatars" aria-hidden="true">
                {['A','M','J','C','R'].map((l,i) => (
                  <div key={i} className="hero__trust-avatar" style={{background: ['#3B82F6','#06B6D4','#10B981','#8B5CF6','#F59E0B'][i]}}>
                    {l}
                  </div>
                ))}
              </div>
              <span style={{fontSize:'0.85rem',color:'var(--color-text-muted)'}}>
                ⭐ <strong style={{color:'var(--color-text)'}}>4.9/5</strong> — Loved by security teams
              </span>
            </div>
          </div>

          {/* Image side */}
          <div className="hero__image animate-fade-up delay-2">
            <Image
              src="/images/hero-phones.png"
              alt="Aura app showing QR code generation and scan verification on two phones"
              width={560}
              height={560}
              priority
            />
          </div>
        </div>

        {/* Stats bar */}
        <div className="hero-stats animate-fade-up delay-4" style={{marginTop:'48px'}} role="region" aria-label="Key statistics">
          {[
            { value: '100+', label: 'Residences Protected' },
            { value: '50K+', label: 'QR Scans Per Month' },
            { value: '99.9%', label: 'Uptime Guarantee' },
            { value: '<1s',  label: 'Scan Response Time' },
          ].map((s, i) => (
            <div key={i} className="hero-stat">
              <span className="hero-stat__value">{s.value}</span>
              <span className="hero-stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

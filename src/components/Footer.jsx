import Image from 'next/image';

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Demo Video', href: '#demo' },
  ],
  Security: [
    { label: 'Security Overview', href: '#security' },
    { label: 'Data Policy', href: '#data-policy' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'GDPR Compliance', href: '/privacy-policy#gdpr' },
    { label: 'CCPA Compliance', href: '/privacy-policy#ccpa' },
  ],
  Company: [
    { label: 'Contact Us', href: '#contact' },
    { label: 'Get a Demo', href: '#contact' },
    { label: 'For Residences', href: '#roles' },
    { label: 'For Property Managers', href: '#roles' },
    { label: 'support@auradigitalapp.com', href: 'mailto:support@auradigitalapp.com' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Image src="/images/logo.png" alt="Aura logo" width={32} height={32} style={{borderRadius:6}} />
              <span>Aura</span>
            </div>
            <p className="footer-desc">
              Secure QR entry management for residential communities.
              Replace paper logs and shared keys with smart, role-based digital access.
            </p>
            <div className="footer-stores">
              <a href="#" className="store-badge" id="footer-apple-store" aria-label="Download on App Store">
                <span className="store-icon">🍎</span>
                <div>
                  <div style={{fontSize:'0.6rem', opacity:0.7}}>Download on the</div>
                  <div style={{fontSize:'0.8rem'}}>App Store</div>
                </div>
              </a>
              <a href="#" className="store-badge" id="footer-google-play" aria-label="Get it on Google Play">
                <span className="store-icon">▶</span>
                <div>
                  <div style={{fontSize:'0.6rem', opacity:0.7}}>Get it on</div>
                  <div style={{fontSize:'0.8rem'}}>Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="footer-col">
              <h4>{group}</h4>
              <ul>
                {links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} Aura. All rights reserved. Built with ❤️ in Caracas, Venezuela.
          </p>
          <div className="footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

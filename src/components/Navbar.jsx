'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#problem',  label: 'Problem' },
    { href: '#features', label: 'Features' },
    { href: '#pricing',  label: 'Pricing' },
    { href: '#security', label: 'Security' },
    { href: '#contact',  label: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container">
          <div className="navbar__inner">
            <a href="#" className="navbar__logo" aria-label="Aura home">
              <Image src="/images/logo.png" alt="Aura logo" width={36} height={36} />
              <span>Aura</span>
            </a>
            <div className="navbar__links" role="list">
              {links.map(l => (
                <a key={l.href} href={l.href} role="listitem">{l.label}</a>
              ))}
            </div>
            <div className="navbar__cta">
              <a href="#contact" className="btn btn-outline btn-sm">Get a Demo</a>
              <a href="#download" className="btn btn-primary btn-sm">Download App</a>
            </div>
            <button
              className="navbar__burger"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen(true)}
            >
              <span/><span/><span/>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav */}
      <div className={`mobile-nav${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <button className="mobile-nav__close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>✕</button>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <a href="#contact" className="btn btn-primary btn-lg" onClick={() => setMenuOpen(false)}>Get a Demo</a>
      </div>
    </>
  );
}

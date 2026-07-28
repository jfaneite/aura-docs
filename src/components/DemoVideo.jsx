'use client';
import { useState } from 'react';

export default function DemoVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="section video-section" id="demo" aria-label="Demo video">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">See It In Action</p>
          <h2 className="display-lg">Watch Aura <span className="text-gradient">come alive</span></h2>
          <p className="lead">
            See exactly how a landlord creates a QR pass, a guard scans it at the gate, and the entry gets logged — all in under 60 seconds.
          </p>
        </div>

        <div className="video-wrapper" style={{maxWidth:'900px', margin:'0 auto'}}>
          {playing ? (
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Aura App Demo"
              allow="autoplay; fullscreen"
              style={{width:'100%', height:'100%', border:'none', minHeight:'500px'}}
            />
          ) : (
            <div className="video-placeholder" style={{minHeight:'500px'}}>
              {/* Simulated phone UI backdrop */}
              <div style={{
                position:'absolute', inset:0,
                background:'linear-gradient(135deg, #0F172A 0%, #1E3A5F 40%, #0F172A 100%)',
                display:'flex', alignItems:'center', justifyContent:'center',
                flexDirection:'column', gap:'24px',
              }} aria-hidden="true">
                {/* Fake scan animation */}
                <div style={{
                  width:'200px', height:'200px',
                  border:'3px solid rgba(59,130,246,0.4)',
                  borderRadius:'16px', position:'relative',
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>
                  <div style={{
                    position:'absolute', top:0, left:0, right:0, height:'3px',
                    background:'linear-gradient(90deg, transparent, #3B82F6, transparent)',
                    animation:'fadeUp 1.5s ease-in-out infinite',
                  }}/>
                  <div style={{
                    display:'grid', gridTemplateColumns:'1fr 1fr 1fr',
                    gap:'6px', padding:'24px',
                  }}>
                    {Array(9).fill(0).map((_,i) => (
                      <div key={i} style={{
                        width:'32px', height:'32px',
                        background: i%2===0 ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.07)',
                        borderRadius:'4px',
                      }}/>
                    ))}
                  </div>
                  <div style={{
                    position:'absolute', bottom:'-28px', left:'50%', transform:'translateX(-50%)',
                    fontSize:'0.7rem', color:'rgba(59,130,246,0.8)', fontWeight:600, whiteSpace:'nowrap',
                  }}>Scanning QR Code...</div>
                </div>
              </div>

              {/* Play button overlay */}
              <div style={{position:'relative', zIndex:1, textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', gap:'20px'}}>
                <button
                  className="video-play-btn"
                  id="video-play-btn"
                  aria-label="Play demo video"
                  onClick={() => setPlaying(true)}
                >
                  ▶
                </button>
                <div>
                  <p style={{fontWeight:700, fontSize:'1.1rem'}}>Watch the 90-second demo</p>
                  <p style={{fontSize:'0.85rem', color:'var(--color-text-muted)', marginTop:'4px'}}>No sign-up required</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <p className="video-caption">
          💡 Want a personalized walkthrough for your property?{' '}
          <a href="#contact" style={{color:'var(--color-blue-light)'}}>Book a live demo →</a>
        </p>

        {/* Mini feature highlights below video */}
        <div style={{
          display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'24px', marginTop:'56px',
        }}>
          {[
            { icon:'⚡', title:'Setup in 10 minutes', desc:'From zero to your first QR scan in a single session.' },
            { icon:'📱', title:'No hardware needed', desc:'Works on any iPhone or Android phone you already have.' },
            { icon:'🆓', title:'Free trial, no credit card', desc:'Try Aura with your team before committing to any plan.' },
          ].map((item, i) => (
            <div key={i} style={{
              padding:'28px', borderRadius:'var(--radius-md)',
              background:'var(--color-surface)', border:'1px solid var(--color-border)',
              textAlign:'center',
            }}>
              <div style={{fontSize:'2rem', marginBottom:'12px'}}>{item.icon}</div>
              <h3 style={{fontWeight:700, marginBottom:'8px', fontSize:'1rem'}}>{item.title}</h3>
              <p style={{fontSize:'0.88rem', color:'var(--color-text-muted)'}}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

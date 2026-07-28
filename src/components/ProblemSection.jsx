import Image from 'next/image';

const problems = [
  {
    type: 'bad',
    icon: '📋',
    title: 'Paper visitor logs get lost or forged',
    desc: 'Anyone can write anything. No verification, no audit trail, no accountability.',
  },
  {
    type: 'bad',
    icon: '🔑',
    title: 'Sharing keys creates untracked access',
    desc: "You never know who copied a key or when. Once out, you've lost control.",
  },
  {
    type: 'bad',
    icon: '📞',
    title: 'Phone-based entry is slow and unreliable',
    desc: 'Long queues at the gate. Security guards overwhelmed. Visitors frustrated.',
  },
  {
    type: 'good',
    icon: '✅',
    title: 'Aura: Digital QR passes in seconds',
    desc: 'Landlords generate a QR with visitor details. Guards scan and verify instantly.',
  },
  {
    type: 'good',
    icon: '✅',
    title: 'Complete audit trail for every entry',
    desc: 'Every scan is logged with timestamp, guard name, and visitor data. Always.',
  },
  {
    type: 'good',
    icon: '✅',
    title: 'Multi-residence, role-based management',
    desc: 'Scale to hundreds of communities. Admins see their residence, nothing else.',
  },
];

export default function ProblemSection() {
  return (
    <section className="section problem-section" id="problem" aria-label="Problem and solution">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">The Problem We Solve</p>
          <h2 className="display-lg">Traditional access control is <em style={{fontStyle:'normal',color:'var(--color-red)'}}>broken</em></h2>
          <p className="lead">
            Residential communities lose track of who's entering every day.
            Aura brings military-grade access control to any building — without the enterprise price tag.
          </p>
        </div>

        <div className="problem-grid">
          <div className="problem-cards">
            {problems.map((p, i) => (
              <div key={i} className={`problem-card problem-card--${p.type}`}>
                <span className="problem-card__icon">{p.icon}</span>
                <div>
                  <p className="problem-card__title">{p.title}</p>
                  <p className="problem-card__desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="problem-image">
            <Image
              src="/images/problem.png"
              alt="Contrast between old paper-based security and modern QR digital access"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

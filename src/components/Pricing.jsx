'use client';
import { useState } from 'react';

const MONTHLY = 'monthly';
const ANNUAL  = 'annual';

const plans = [
  {
    tier: 'Starter',
    desc: 'Perfect for small residences testing the waters.',
    price: { monthly: 0, annual: 0 },
    priceSuffix: '/month',
    cta: 'Start for Free',
    ctaStyle: 'btn-outline',
    features: [
      { text: '1 Residence',          included: true  },
      { text: 'Up to 5 users',         included: true  },
      { text: '500 QR scans/month',    included: true  },
      { text: 'Entry logs (30 days)',   included: true  },
      { text: 'iOS + Android apps',    included: true  },
      { text: 'Push notifications',    included: false },
      { text: 'Multi-residence',       included: false },
      { text: 'Priority support',      included: false },
    ],
  },
  {
    tier: 'Professional',
    desc: 'For active residential communities that need power.',
    price: { monthly: 49, annual: 39 },
    priceSuffix: '/month',
    popular: true,
    cta: 'Get Started',
    ctaStyle: 'btn-primary',
    features: [
      { text: '1 Residence',              included: true },
      { text: 'Unlimited users',          included: true },
      { text: 'Unlimited QR scans',       included: true },
      { text: 'Entry logs (1 year)',       included: true },
      { text: 'iOS + Android apps',       included: true },
      { text: 'Push notifications',       included: true },
      { text: 'Email reports',            included: true },
      { text: 'Multi-residence (add-on)', included: false },
    ],
  },
  {
    tier: 'Enterprise',
    desc: 'For property managers running multiple communities.',
    price: { monthly: null, annual: null },
    priceSuffix: '',
    cta: 'Contact Sales',
    ctaStyle: 'btn-outline',
    features: [
      { text: 'Unlimited residences',   included: true },
      { text: 'Unlimited users',        included: true },
      { text: 'Unlimited QR scans',     included: true },
      { text: 'Unlimited entry logs',   included: true },
      { text: 'iOS + Android apps',     included: true },
      { text: 'Push notifications',     included: true },
      { text: 'Dedicated support',      included: true },
      { text: 'Custom SLA & billing',   included: true },
    ],
  },
];

const payments = [
  { icon: '💳', label: 'Visa / Mastercard' },
  { icon: '🅿️', label: 'PayPal' },
  { icon: '🏦', label: 'Bank Transfer' },
  { icon: '💵', label: 'USD / Local currency' },
];

export default function Pricing() {
  const [billing, setBilling] = useState(MONTHLY);

  return (
    <section className="section pricing-section" id="pricing" aria-label="Pricing plans">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Simple Pricing</p>
          <h2 className="display-lg">Transparent plans. <span className="text-gradient">No surprises.</span></h2>
          <p className="lead">Start free. Scale as your community grows. Cancel anytime.</p>
        </div>

        {/* Toggle */}
        <div className="pricing-toggle" role="group" aria-label="Billing period">
          <span style={{color: billing===MONTHLY ? 'var(--color-text)' : undefined}}>Monthly</span>
          <button
            className={`toggle-switch${billing===ANNUAL ? ' on' : ''}`}
            aria-pressed={billing===ANNUAL}
            id="billing-toggle"
            onClick={() => setBilling(b => b===MONTHLY ? ANNUAL : MONTHLY)}
            aria-label="Toggle annual billing"
          />
          <span style={{color: billing===ANNUAL ? 'var(--color-text)' : undefined}}>Annual</span>
          <span className="pricing-save">Save 20%</span>
        </div>

        <div className="pricing-cards">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`pricing-card${plan.popular ? ' pricing-card--popular' : ''}`}
            >
              {plan.popular && <div className="pricing-popular-badge">Most Popular</div>}
              <p className="pricing-tier">{plan.tier}</p>
              <div className="pricing-price">
                {plan.price.monthly === null ? (
                  <span className="pricing-amount">Custom</span>
                ) : plan.price.monthly === 0 ? (
                  <span className="pricing-amount">Free</span>
                ) : (
                  <>
                    <span className="pricing-amount">
                      ${billing === ANNUAL ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="pricing-period">{plan.priceSuffix}</span>
                  </>
                )}
              </div>
              <p className="pricing-desc">{plan.desc}</p>
              <ul className="pricing-features" aria-label={`${plan.tier} features`}>
                {plan.features.map((f, j) => (
                  <li key={j} className={`pricing-feature${f.included ? ' pricing-feature--included' : ''}`}>
                    <span className={f.included ? 'check' : 'cross'}>{f.included ? '✓' : '—'}</span>
                    {f.text}
                  </li>
                ))}
              </ul>
              <a
                href={plan.tier === 'Enterprise' ? '#contact' : '#contact'}
                className={`btn ${plan.ctaStyle}`}
                id={`pricing-cta-${plan.tier.toLowerCase()}`}
                style={{width:'100%', justifyContent:'center'}}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Payment methods */}
        <div className="payment-methods" aria-label="Accepted payment methods">
          <p className="dim" style={{fontSize:'0.85rem'}}>Accepted payment methods</p>
          <div className="payment-icons">
            {payments.map((p, i) => (
              <div key={i} className="payment-icon">
                <span className="icon">{p.icon}</span>
                {p.label}
              </div>
            ))}
          </div>
          <p className="dim" style={{fontSize:'0.8rem'}}>
            All payments are secured and encrypted. 30-day money-back guarantee on paid plans.
          </p>
        </div>
      </div>
    </section>
  );
}

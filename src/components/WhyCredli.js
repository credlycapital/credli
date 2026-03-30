import React, { useEffect, useRef } from 'react';

const whyItems = [
  { icon: '🔐', title: 'Real Asset Backing', desc: 'Every loan is secured against a verified physical asset. Zero unsecured risk.' },
  { icon: '👁️', title: 'Manual Verification', desc: 'Our team physically checks each asset before disbursing any amount. No automated risky approvals.' },
  { icon: '📋', title: 'Transparent Terms', desc: 'Clear interest rates, no processing surprises, no hidden fees. What you see is what you get.' },
  { icon: '💸', title: 'Flexible Loan Amounts', desc: 'Borrow only what you need, based on actual asset value. No over-lending.' },
  { icon: '🔒', title: 'KYC & Secure Transactions', desc: 'All users are KYC-verified. Data is encrypted. Every transaction is fully secured.' },
];

const stats = [
  { num: '₹', em: '0', label: 'Hidden fees. Always zero.' },
  { num: '', em: '24', suffix: 'hr', label: 'Average loan disbursal time' },
  { num: '', em: '100', suffix: '%', label: 'Loans backed by real assets' },
  { num: '', em: 'KYC', label: 'Verified for every borrower' },
];

function WhyItem({ item, last }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
        padding: '1.4rem 1.5rem',
        borderBottom: last ? 'none' : '1px solid rgba(0,0,0,0.08)',
        background: hovered ? '#EFF1F5' : '#fff',
        transition: 'background 0.2s',
      }}
    >
      <div style={{
        width: '36px', height: '36px', flexShrink: 0,
        background: 'rgba(37,211,102,0.08)',
        border: '1px solid rgba(37,211,102,0.15)',
        borderRadius: '8px', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: '15px',
      }}>{item.icon}</div>
      <div>
        <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '3px', color: '#111214' }}>{item.title}</div>
        <p style={{ fontSize: '13px', color: '#5A6070', lineHeight: 1.6 }}>{item.desc}</p>
      </div>
    </div>
  );
}

export default function WhyCredli() {
  const secRef = useRef(null);
  const itemsRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); }),
      { threshold: 0.07 }
    );
    [secRef, itemsRef, statsRef].forEach(r => { if (r.current) obs.observe(r.current); });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="why" style={{ padding: '88px 6%', borderBottom: '1px solid rgba(0,0,0,0.08)', background: '#F7F8FA' }}>
      <div className="reveal" ref={secRef}>
        <div style={labelStyle}>Why Credli</div>
        <h2 style={h2Style}>No Blind Lending.<br />Ever.</h2>
        <p style={subStyle}>Every loan is backed by a real asset — verified by our team before a single rupee is disbursed.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start', marginTop: '3.5rem' }}>
        <div className="reveal" ref={itemsRef} style={{
          border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: '14px', overflow: 'hidden',
        }}>
          {whyItems.map((item, i) => (
            <WhyItem key={i} item={item} last={i === whyItems.length - 1} />
          ))}
        </div>

        <div className="reveal d2" ref={statsRef} style={{
          border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: '14px', overflow: 'hidden',
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              padding: '1.75rem 2rem',
              background: '#fff',
              borderBottom: i < stats.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
            }}>
              <div style={{ fontSize: '44px', fontWeight: 800, letterSpacing: '-2px', lineHeight: 1, marginBottom: '5px', color: '#111214' }}>
                {stat.num}<em style={{ color: '#25D366', fontStyle: 'normal' }}>{stat.em}</em>{stat.suffix || ''}
              </div>
              <div style={{ fontSize: '13px', color: '#5A6070' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const labelStyle = {
  fontSize: '11px', fontWeight: 700, letterSpacing: '2px',
  textTransform: 'uppercase', color: '#25D366', marginBottom: '1rem',
};
const h2Style = {
  fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 800, letterSpacing: '-1.5px',
  lineHeight: 1.15, marginBottom: '0.75rem', color: '#111214',
};
const subStyle = {
  fontSize: '15px', color: '#5A6070', lineHeight: 1.7, maxWidth: '540px',
};

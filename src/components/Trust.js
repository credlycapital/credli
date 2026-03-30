import React, { useEffect, useRef } from 'react';

const cards = [
  { icon: '🛡️', title: 'Full KYC Verification', desc: 'Every borrower goes through complete KYC verification before any loan is processed.' },
  { icon: '🔒', title: 'Encrypted Data', desc: 'Your personal and financial data is encrypted at rest and in transit. Never shared with anyone.' },
  { icon: '✅', title: 'Asset-Backed Only', desc: 'We only lend against verified physical collateral. No automated risky credit decisions.' },
  { icon: '👨‍💼', title: 'Expert Review', desc: 'Trained professionals review and verify every asset before a loan offer is made.' },
];

function TrustCard({ card, last }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '2rem 1.5rem',
        background: hovered ? '#EFF1F5' : '#fff',
        borderRight: last ? 'none' : '1px solid rgba(0,0,0,0.08)',
        transition: 'background 0.2s',
      }}
    >
      <span style={{ fontSize: '26px', marginBottom: '1rem', display: 'block' }}>{card.icon}</span>
      <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '0.5rem', color: '#111214' }}>{card.title}</div>
      <p style={{ fontSize: '13px', color: '#5A6070', lineHeight: 1.65 }}>{card.desc}</p>
    </div>
  );
}

export default function Trust() {
  const secRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); }),
      { threshold: 0.07 }
    );
    if (secRef.current) obs.observe(secRef.current);
    if (gridRef.current) obs.observe(gridRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="trust" style={{ padding: '88px 6%', borderBottom: '1px solid rgba(0,0,0,0.08)', background: '#fff' }}>
      <div className="reveal" ref={secRef}>
        <div style={labelStyle}>Security</div>
        <h2 style={h2Style}>Your Trust is<br />Our Foundation</h2>
        <p style={subStyle}>Every process at Credli is built to protect your assets, your data, and your money.</p>
      </div>
      <div className="reveal" ref={gridRef} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: '14px',
        overflow: 'hidden',
        marginTop: '3.5rem',
      }}>
        {cards.map((card, i) => (
          <TrustCard key={i} card={card} last={i === cards.length - 1} />
        ))}
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

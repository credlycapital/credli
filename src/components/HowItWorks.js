import React, { useEffect, useRef } from 'react';

const steps = [
  {
    n: 'Step 01',
    icon: '📲',
    title: 'Download & Apply',
    desc: 'Get the app and fill a simple loan application in under 5 minutes. No branch visits, no paperwork.',
  },
  {
    n: 'Step 02',
    icon: '📦',
    title: 'Submit Asset Details',
    desc: 'Tell us about the asset you want to pledge and upload required photos securely in-app.',
  },
  {
    n: 'Step 03',
    icon: '🔍',
    title: 'Team Verification',
    desc: 'Our expert team manually reviews and verifies your asset for a fair, transparent loan offer.',
  },
  {
    n: 'Step 04',
    icon: '💸',
    title: 'Cash in Account',
    desc: 'Loan amount is disbursed directly to your bank account. Same day, zero delays.',
  },
];

export default function HowItWorks() {
  const secRef = useRef(null);
  const stepsRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); }),
      { threshold: 0.07 }
    );
    if (secRef.current) obs.observe(secRef.current);
    if (stepsRef.current) obs.observe(stepsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="how" style={{ padding: '88px 6%', borderBottom: '1px solid rgba(0,0,0,0.08)', background: '#F7F8FA' }}>
      <div className="reveal" ref={secRef}>
        <div style={labelStyle}>Process</div>
        <h2 style={h2Style}>How Credli Works</h2>
        <p style={subStyle}>From application to cash — done in under 24 hours.</p>
      </div>
      <div className="reveal" ref={stepsRef} style={stepsGrid}>
        {steps.map((step, i) => (
          <StepCard key={i} step={step} last={i === steps.length - 1} />
        ))}
      </div>
    </section>
  );
}

function StepCard({ step, last }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '2rem 1.75rem',
        background: hovered ? '#EFF1F5' : '#fff',
        borderRight: last ? 'none' : '1px solid rgba(0,0,0,0.08)',
        transition: 'background 0.2s',
      }}
    >
      <div style={{ fontSize: '10px', fontWeight: 700, color: '#9AA0AD', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '1.25rem' }}>{step.n}</div>
      <span style={{ fontSize: '28px', marginBottom: '1rem', display: 'block' }}>{step.icon}</span>
      <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '0.5rem', color: '#111214' }}>{step.title}</div>
      <p style={{ fontSize: '13px', color: '#5A6070', lineHeight: 1.65 }}>{step.desc}</p>
    </div>
  );
}

const stepsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  border: '1px solid rgba(0,0,0,0.08)',
  borderRadius: '14px',
  overflow: 'hidden',
  marginTop: '3.5rem',
};

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

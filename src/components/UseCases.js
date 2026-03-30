import React, { useEffect, useRef } from 'react';

const uses = [
  { icon: '🚨', title: 'Medical Emergency', desc: 'Urgent hospital bills or treatment costs — get cash within 24 hours by pledging an asset you own.' },
  { icon: '🏪', title: 'Business Cash Flow', desc: 'Inventory, payroll, or working capital needs — unlock funds quickly without financial risk.' },
  { icon: '🎓', title: 'Education & Big Expenses', desc: 'Fees, weddings, or renovations — leverage the value of assets you already have to plan smart.' },
];

function UseCard({ use, last }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '2.5rem 2rem',
        background: hovered ? '#EFF1F5' : '#fff',
        borderRight: last ? 'none' : '1px solid rgba(0,0,0,0.08)',
        transition: 'background 0.2s',
      }}
    >
      <span style={{ fontSize: '30px', marginBottom: '1.25rem', display: 'block' }}>{use.icon}</span>
      <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '0.65rem', color: '#111214' }}>{use.title}</div>
      <p style={{ fontSize: '13px', color: '#5A6070', lineHeight: 1.65 }}>{use.desc}</p>
    </div>
  );
}

export default function UseCases() {
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
    <section style={{ padding: '88px 6%', borderBottom: '1px solid rgba(0,0,0,0.08)', background: '#F7F8FA' }}>
      <div className="reveal" ref={secRef}>
        <div style={labelStyle}>Use Cases</div>
        <h2 style={h2Style}>Money When<br />You Need It Most</h2>
        <p style={subStyle}>Real situations, real solutions — backed by what you already own.</p>
      </div>
      <div className="reveal" ref={gridRef} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: '14px',
        overflow: 'hidden',
        marginTop: '3.5rem',
      }}>
        {uses.map((use, i) => (
          <UseCard key={i} use={use} last={i === uses.length - 1} />
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

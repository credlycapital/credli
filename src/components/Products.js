import React, { useEffect, useRef } from 'react';

const products = [
  { icon: '💰', name: 'Gold Loan', desc: 'Instant cash against gold jewellery or coins. Fast disbursal, fair valuation, low interest rates.' },
  { icon: '🏠', name: 'Loan on Mortgage', desc: 'Unlock funds against your property with flexible repayment and competitive rates.' },
  { icon: '📱', name: 'Device Loan', desc: 'Pledge your smartphone or laptop for emergency cash. Quick verification, fast approval.' },
  { icon: '🏍️', name: 'Vehicle Loan', desc: 'Use your bike or scooter as collateral for a fast, fair secured loan.' },
  { icon: '📦', name: 'Other Assets', desc: 'Electronics, equipment, or other valuables — talk to our team for a custom evaluation.' },
  { icon: '🏡', name: 'Home Loan', desc: 'Larger loan amounts backed by your home. Expert-guided process and transparent terms.', comingSoon: true },
];

function ProductCard({ product, isLast, colEnd }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '2rem 1.75rem',
        background: hovered ? '#EFF1F5' : '#F7F8FA',
        borderRight: colEnd ? 'none' : '1px solid rgba(0,0,0,0.08)',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        transition: 'background 0.2s',
      }}
    >
      <span style={{ fontSize: '28px', marginBottom: '1rem', display: 'block' }}>{product.icon}</span>
      <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '0.5rem', color: '#111214' }}>{product.name}</div>
      <p style={{ fontSize: '13px', color: '#5A6070', lineHeight: 1.6 }}>{product.desc}</p>
      {product.comingSoon && (
        <span style={{
          display: 'inline-block', marginTop: '0.75rem',
          fontSize: '10px', fontWeight: 700,
          color: '#e0a700', background: 'rgba(224,167,0,0.1)',
          border: '1px solid rgba(224,167,0,0.25)',
          padding: '3px 9px', borderRadius: '4px',
          letterSpacing: '0.5px', textTransform: 'uppercase',
        }}>Coming Soon</span>
      )}
    </div>
  );
}

export default function Products() {
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
    <section id="products" style={{ padding: '88px 6%', borderBottom: '1px solid rgba(0,0,0,0.08)', background: '#fff' }}>
      <div className="reveal" ref={secRef}>
        <div style={labelStyle}>Products</div>
        <h2 style={h2Style}>What You Can Pledge</h2>
        <p style={subStyle}>We lend against real, verified assets you already own. No unsecured risk — ever.</p>
      </div>
      <div className="reveal" ref={gridRef} style={grid}>
        {products.map((p, i) => (
          <ProductCard
            key={i}
            product={p}
            colEnd={(i + 1) % 3 === 0}
          />
        ))}
      </div>
    </section>
  );
}

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
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

import React, { useEffect, useRef } from 'react';

const s = {
  hero: {
    padding: '120px 6% 80px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    minHeight: '92vh',
    borderBottom: '1px solid rgba(0,0,0,0.08)',
  },
  eyebrow: {
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#25D366',
    display: 'block',
    marginBottom: '1.25rem',
  },
  h1: {
    fontSize: 'clamp(38px, 4.5vw, 64px)',
    fontWeight: 800,
    lineHeight: 1.08,
    letterSpacing: '-2px',
    marginBottom: '1.25rem',
    color: '#111214',
  },
  h1Span: { color: '#25D366' },
  sub: {
    fontSize: '16px',
    color: '#5A6070',
    maxWidth: '440px',
    lineHeight: 1.75,
    marginBottom: '2.25rem',
    fontWeight: 400,
  },
  actions: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: '3rem',
  },
  btnDl: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: '#25D366',
    color: '#061a0d',
    fontSize: '14px',
    fontWeight: 700,
    padding: '13px 26px',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'opacity 0.2s',
  },
  btnGhost: {
    display: 'inline-flex',
    alignItems: 'center',
    color: '#5A6070',
    fontSize: '14px',
    fontWeight: 500,
    textDecoration: 'none',
    padding: '13px 4px',
    transition: 'color 0.2s',
  },
  stats: {
    display: 'flex',
    gap: '2.5rem',
  },
  statVal: {
    fontSize: '26px',
    fontWeight: 800,
    letterSpacing: '-0.5px',
    color: '#111214',
  },
  statEm: { color: '#25D366', fontStyle: 'normal' },
  statKey: { fontSize: '12px', color: '#9AA0AD', marginTop: '2px' },
  heroRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  appCard: {
    background: '#F7F8FA',
    border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: '18px',
    padding: '24px',
    width: '330px',
    boxShadow: '0 4px 32px rgba(0,0,0,0.06)',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '18px',
  },
  cardLabel: {
    fontSize: '11px',
    fontWeight: 700,
    color: '#9AA0AD',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  statusDot: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '11px',
    color: '#25D366',
    fontWeight: 600,
  },
  statusDotCircle: {
    width: '6px',
    height: '6px',
    background: '#25D366',
    borderRadius: '50%',
    display: 'inline-block',
  },
  loanBlock: {
    background: '#fff',
    border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: '10px',
    padding: '18px',
    marginBottom: '12px',
  },
  lbLabel: {
    fontSize: '10px',
    color: '#9AA0AD',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '5px',
    fontWeight: 600,
  },
  lbAmount: {
    fontSize: '34px',
    fontWeight: 800,
    letterSpacing: '-1px',
    color: '#111214',
  },
  lbSub: { fontSize: '12px', color: '#5A6070', marginTop: '4px' },
  lbBarTrack: {
    background: 'rgba(0,0,0,0.07)',
    borderRadius: '3px',
    height: '3px',
    marginTop: '12px',
  },
  lbBarFill: {
    background: '#25D366',
    height: '3px',
    borderRadius: '3px',
    width: '68%',
  },
  infoRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '8px',
    marginBottom: '12px',
  },
  infoCell: {
    background: '#fff',
    border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: '8px',
    padding: '12px',
  },
  icLabel: {
    fontSize: '10px',
    color: '#9AA0AD',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '4px',
    fontWeight: 600,
  },
  icVal: { fontSize: '15px', fontWeight: 700, color: '#111214' },
  assetRow: { display: 'flex', gap: '6px', marginBottom: '14px' },
  assetChip: {
    flex: 1,
    background: '#fff',
    border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: '8px',
    padding: '9px 4px',
    textAlign: 'center',
    fontSize: '8px',
    fontWeight: 700,
    color: '#5A6070',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    cursor: 'pointer',
  },
  assetChipSel: {
    borderColor: '#25D366',
    color: '#25D366',
    background: 'rgba(37,211,102,0.06)',
  },
  assetIcon: { fontSize: '17px', display: 'block', marginBottom: '4px' },
  applyBtn: {
    width: '100%',
    background: '#25D366',
    color: '#061a0d',
    border: 'none',
    borderRadius: '8px',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '13px',
    fontWeight: 700,
    padding: '12px',
    cursor: 'pointer',
    textAlign: 'center',
  },
};

export default function Hero() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (leftRef.current) leftRef.current.classList.add('on');
      if (rightRef.current) rightRef.current.classList.add('on');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={s.hero}>
      <div className="reveal d1" ref={leftRef}>
        <span style={s.eyebrow}>India's Secured Lending Platform</span>
        <h1 style={s.h1}>
          Unlock Cash From<br /><span style={s.h1Span}>What You Own.</span>
        </h1>
        <p style={s.sub}>
          Instant secured loans against gold, phones, laptops &amp; bikes. No hidden fees, no unsecured risk — just fast, fair lending.
        </p>
        <div style={s.actions}>
          <a href="#download" style={s.btnDl}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.32.07 2.23.74 3.01.75.98-.17 1.91-.91 3.05-.96 1.31.05 2.3.62 2.97 1.58-2.74 1.68-2.35 5.38.43 6.49-.67 1.55-1.45 3.02-2.46 4.02zM12.03 7.25c-.16-2.75 2.35-4.99 4.94-5.25.28 2.93-2.43 5.19-4.94 5.25z"/>
            </svg>
            Download App
          </a>
          <a href="#how" style={s.btnGhost}
            onMouseEnter={e => e.target.style.color = '#111214'}
            onMouseLeave={e => e.target.style.color = '#5A6070'}>
            See how it works →
          </a>
        </div>
        <div style={s.stats}>
          <div>
            <div style={s.statVal}>24<em style={s.statEm}>hr</em></div>
            <div style={s.statKey}>Loan disbursal</div>
          </div>
          <div>
            <div style={s.statVal}>100<em style={s.statEm}>%</em></div>
            <div style={s.statKey}>Asset-backed</div>
          </div>
          <div>
            <div style={s.statVal}>₹<em style={s.statEm}>0</em></div>
            <div style={s.statKey}>Hidden fees</div>
          </div>
        </div>
      </div>

      <div style={s.heroRight}>
        <div className="reveal d2" ref={rightRef}>
          <div style={s.appCard}>
            <div style={s.cardTop}>
              <span style={s.cardLabel}>Your Loan</span>
              <span style={s.statusDot}>
                <span style={s.statusDotCircle}></span>Active
              </span>
            </div>
            <div style={s.loanBlock}>
              <div style={s.lbLabel}>Loan Amount</div>
              <div style={s.lbAmount}>₹45,000</div>
              <div style={s.lbSub}>Gold Loan · Approved</div>
              <div style={s.lbBarTrack}><div style={s.lbBarFill}></div></div>
            </div>
            <div style={s.infoRow}>
              <div style={s.infoCell}>
                <div style={s.icLabel}>Interest</div>
                <div style={s.icVal}>12% p.a.</div>
              </div>
              <div style={s.infoCell}>
                <div style={s.icLabel}>Tenure</div>
                <div style={s.icVal}>6 months</div>
              </div>
            </div>
            <div style={s.assetRow}>
              {[
                { icon: '💰', label: 'Gold', sel: true },
                { icon: '📱', label: 'Phone', sel: false },
                { icon: '💻', label: 'Laptop', sel: false },
                { icon: '🏍️', label: 'Bike', sel: false },
              ].map(a => (
                <div key={a.label} style={{ ...s.assetChip, ...(a.sel ? s.assetChipSel : {}) }}>
                  <span style={s.assetIcon}>{a.icon}</span>
                  {a.label}
                </div>
              ))}
            </div>
            <button style={s.applyBtn}>Apply for a Loan →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

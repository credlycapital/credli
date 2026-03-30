import React, { useEffect, useRef } from 'react';

const badges = [
  { val: '24', em: 'hr', key: 'Loan disbursal' },
  { val: '₹', em: '0', key: 'Hidden fees' },
  { val: '100', em: '%', key: 'Asset-backed' },
  { val: '', em: 'KYC', key: 'Verified & secure' },
];

export default function Download() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); }),
      { threshold: 0.07 }
    );
    if (leftRef.current) obs.observe(leftRef.current);
    if (rightRef.current) obs.observe(rightRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="download" style={{
      padding: '88px 6%',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'center',
      background: '#fff',
    }}>
      <div className="reveal" ref={leftRef}>
        <div style={labelStyle}>Download</div>
        <h2 style={{
          fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 800,
          letterSpacing: '-1.5px', lineHeight: 1.15, marginBottom: '1rem', color: '#111214',
        }}>Download Credli.<br />Get Cash Today.</h2>
        <p style={{ fontSize: '15px', color: '#5A6070', lineHeight: 1.75, maxWidth: '420px', marginBottom: '2rem' }}>
          Join thousands of Indians who unlock instant cash from assets they already own — safely, transparently, and on their own terms.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: '#111214', color: '#fff',
            fontSize: '14px', fontWeight: 700,
            padding: '13px 24px', borderRadius: '8px',
            textDecoration: 'none', transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.32.07 2.23.74 3.01.75.98-.17 1.91-.91 3.05-.96 1.31.05 2.3.62 2.97 1.58-2.74 1.68-2.35 5.38.43 6.49-.67 1.55-1.45 3.02-2.46 4.02zM12.03 7.25c-.16-2.75 2.35-4.99 4.94-5.25.28 2.93-2.43 5.19-4.94 5.25z"/>
            </svg>
            Google Play Store
          </a>
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'transparent', color: '#5A6070',
            fontSize: '14px', fontWeight: 500,
            padding: '13px 20px', borderRadius: '8px',
            border: '1px solid rgba(0,0,0,0.12)', textDecoration: 'none', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = '#111214'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.25)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#5A6070'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)'; }}>
            ⬇ Download APK
          </a>
        </div>
        <p style={{ fontSize: '12px', color: '#9AA0AD', marginTop: '1.25rem' }}>
          Android only · Free to download · No hidden charges
        </p>
      </div>

      <div className="reveal d2" ref={rightRef}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {badges.map((b, i) => (
            <div key={i} style={{
              background: '#F7F8FA',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: '12px', padding: '1.5rem',
            }}>
              <div style={{ fontSize: '30px', fontWeight: 800, letterSpacing: '-1px', marginBottom: '4px', color: '#111214' }}>
                {b.val}<em style={{ color: '#25D366', fontStyle: 'normal' }}>{b.em}</em>
              </div>
              <div style={{ fontSize: '12px', color: '#5A6070' }}>{b.key}</div>
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

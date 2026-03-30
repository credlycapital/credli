import React, { useState, useEffect, useRef } from 'react';

const faqs = [
  { q: 'What is Credli?', a: 'Credli is a secured lending platform that provides instant loans against physical assets like gold, phones, laptops, and bikes. We are not an unsecured loan app — every loan is backed by a real, verified asset.' },
  { q: 'What assets can I pledge for a loan?', a: 'You can currently pledge gold jewellery, mobile phones, laptops, and bikes or scooters. We also offer mortgage loans against property. Home loans are coming soon.' },
  { q: 'How long does it take to get the loan?', a: 'Once your asset is verified by our team, the loan amount is typically disbursed to your bank account within 24 hours. The application itself takes under 5 minutes on the app.' },
  { q: 'Is Credli safe? How is my data protected?', a: 'Yes. All users are KYC-verified, your data is encrypted at rest and in transit, and we never share your information with third parties. Every loan requires manual verification — no automated risky approvals.' },
  { q: 'Are there any hidden charges or fees?', a: 'No. Credli operates on complete transparency. The interest rate and all applicable charges are shown clearly before you accept any loan offer. Zero hidden fees — always.' },
  { q: 'Is the app available on iOS?', a: 'Currently Credli is available only on Android via Google Play Store or direct APK download. iOS support is on our roadmap.' },
];

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '1.25rem 1.75rem',
          background: open ? '#EFF1F5' : '#F7F8FA',
          border: 'none', cursor: 'pointer',
          color: '#111214', fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '14px', fontWeight: 600, textAlign: 'left', transition: 'background 0.2s',
        }}
        onMouseEnter={e => { if (!open) e.currentTarget.style.background = '#EFF1F5'; }}
        onMouseLeave={e => { if (!open) e.currentTarget.style.background = '#F7F8FA'; }}
      >
        {faq.q}
        <span style={{
          fontSize: '20px', color: '#9AA0AD',
          transition: 'transform 0.25s', flexShrink: 0, marginLeft: '1rem',
          display: 'inline-block',
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
        }}>+</span>
      </button>
      {open && (
        <div style={{
          padding: '0 1.75rem 1.25rem',
          fontSize: '13px', color: '#5A6070',
          lineHeight: 1.75, background: '#F7F8FA',
        }}>
          {faq.a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const secRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); }),
      { threshold: 0.07 }
    );
    if (secRef.current) obs.observe(secRef.current);
    if (listRef.current) obs.observe(listRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="faq" style={{ padding: '88px 6%', borderBottom: '1px solid rgba(0,0,0,0.08)', background: '#F7F8FA' }}>
      <div className="reveal" ref={secRef}>
        <div style={labelStyle}>FAQs</div>
        <h2 style={h2Style}>Common Questions</h2>
        <p style={subStyle}>Everything you need to know about Credli.</p>
      </div>
      <div className="reveal" ref={listRef} style={{
        marginTop: '3rem',
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: '14px',
        overflow: 'hidden',
      }}>
        {faqs.map((faq, i) => (
          <FaqItem key={i} faq={faq} />
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

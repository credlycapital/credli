import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: '#F7F8FA',
      borderTop: '1px solid rgba(0,0,0,0.08)',
      padding: '3rem 6% 2rem',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        paddingBottom: '2rem', borderBottom: '1px solid rgba(0,0,0,0.08)',
        gap: '2rem', flexWrap: 'wrap',
      }}>
        <div>
          <a href="#" style={{
            fontSize: '22px', fontWeight: 800, color: '#111214',
            textDecoration: 'none', letterSpacing: '-0.5px',
            display: 'block', marginBottom: '0.75rem',
          }}>
            Cred<em style={{ color: '#25D366', fontStyle: 'normal' }}>li</em>
          </a>
          <p style={{ fontSize: '13px', color: '#9AA0AD', maxWidth: '250px', lineHeight: 1.7 }}>
            India's secured lending platform. Unlock instant cash from assets you already own.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
          {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service', 'Grievance Policy'].map(link => (
            <a key={link} href="#" style={{
              fontSize: '13px', color: '#9AA0AD', textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = '#5A6070'}
              onMouseLeave={e => e.target.style.color = '#9AA0AD'}
            >{link}</a>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.6rem' }}>
          {[
            { label: 'in', title: 'LinkedIn' },
            { label: 'ig', title: 'Instagram' },
            { label: '𝕏', title: 'X' },
            { label: '▶', title: 'YouTube' },
          ].map(s => (
            <a key={s.title} href="#" title={s.title} style={{
              width: '32px', height: '32px',
              background: '#fff',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#9AA0AD', fontSize: '12px', textDecoration: 'none',
              fontWeight: 700, transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = '#111214'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#9AA0AD'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; }}
            >{s.label}</a>
          ))}
        </div>
      </div>

      <div style={{
        paddingTop: '1.5rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '0.5rem',
        fontSize: '12px', color: '#9AA0AD',
      }}>
        <span>© 2026 Credli Financial Services Pvt. Ltd. All rights reserved.</span>
        <span>Made with ❤️ in India</span>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: 'rgba(255,255,255,0.96)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(0,0,0,0.08)',
    height: '62px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 6%',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: '21px',
    fontWeight: 800,
    color: '#111214',
    textDecoration: 'none',
    letterSpacing: '-0.5px',
  },
  logoEm: {
    color: '#25D366',
    fontStyle: 'normal',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
  },
  navLink: {
    fontSize: '13.5px',
    fontWeight: 500,
    color: '#5A6070',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  navDl: {
    background: '#25D366',
    color: '#061a0d',
    fontSize: '13px',
    fontWeight: 700,
    padding: '8px 20px',
    borderRadius: '6px',
    textDecoration: 'none',
    transition: 'opacity 0.2s',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      ...styles.nav,
      boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.06)' : 'none',
    }}>
      <a href="#" style={styles.logo}>
        Cred<em style={styles.logoEm}>li</em>
      </a>
      <ul style={styles.navLinks}>
        <li><a href="#how" style={styles.navLink}
          onMouseEnter={e => e.target.style.color = '#111214'}
          onMouseLeave={e => e.target.style.color = '#5A6070'}>How it Works</a></li>
        <li><a href="#products" style={styles.navLink}
          onMouseEnter={e => e.target.style.color = '#111214'}
          onMouseLeave={e => e.target.style.color = '#5A6070'}>Products</a></li>
        <li><a href="#why" style={styles.navLink}
          onMouseEnter={e => e.target.style.color = '#111214'}
          onMouseLeave={e => e.target.style.color = '#5A6070'}>Why Credli</a></li>
        <li><a href="#trust" style={styles.navLink}
          onMouseEnter={e => e.target.style.color = '#111214'}
          onMouseLeave={e => e.target.style.color = '#5A6070'}>Security</a></li>
        <li><a href="#faq" style={styles.navLink}
          onMouseEnter={e => e.target.style.color = '#111214'}
          onMouseLeave={e => e.target.style.color = '#5A6070'}>FAQs</a></li>
      </ul>
      <a href="#download" style={styles.navDl}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.32.07 2.23.74 3.01.75.98-.17 1.91-.91 3.05-.96 1.31.05 2.3.62 2.97 1.58-2.74 1.68-2.35 5.38.43 6.49-.67 1.55-1.45 3.02-2.46 4.02zM12.03 7.25c-.16-2.75 2.35-4.99 4.94-5.25.28 2.93-2.43 5.19-4.94 5.25z"/>
        </svg>
        Download App
      </a>
    </nav>
  );
}
